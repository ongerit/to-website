// using SendGrid's Go Library
// https://github.com/sendgrid/sendgrid-go
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"encoding/json"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// Run Functions here
func send_grid_information(
	apiKey string,
	sgEmail string,
	user_email string,
	user_last_name string,
	user_first_name string,
	user_message string) {
	from := mail.NewEmail(user_email, sgEmail)
	subject := fmt.Sprintf("Email from %s |  thomasongeri.com", user_email)
	to := mail.NewEmail("To me", "ongerit@gmail.com")
	plainTextContent := user_message
	htmlContent := fmt.Sprintf("<strong>%s</strong>", user_message)

	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(apiKey)

	response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}
}

func add_users_contact_to_sendgrid(apiKey string, user_email string, user_first_name string, user_last_name string) {
	host := "https://api.sendgrid.com"
	body := fmt.Sprintf(`{
		"contacts": [
		{
		"email": "%s",
		"first_name": "%s" ,
		"last_name": "%s" 
		}
		]
		}`, user_email, user_first_name, user_last_name)

	fmt.Println(body)
	request := sendgrid.GetRequest(apiKey, "/v3/marketing/contacts", host)
	request.Method = "PUT"
	request.Body = []byte(body)
	response, err := sendgrid.API(request)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}

}

// TODO: Finish the additional adds
// func send_email_with_template(apiKey, user_email, user_last_name, user_first_name, sgEmail){
// }
// func send_transactional_email(apiKey, sgEmail, user_email, user_last_name, user_first_name, user_message){
// }

func sendgridApi(w http.ResponseWriter, r *http.Request) {

	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Referrer-Policy", "no-referrer")

	if r.URL.Path != "/" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	switch r.Method {
	case "POST":
		// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
		if err := r.ParseForm(); err != nil {
			fmt.Fprintf(w, "ParseForm() err: %v", err)
			return
		}

		if r.Header.Get("Content-Type") != "application/json" {
			http.Error(w, "Content-Type header is not application/json", http.StatusBadRequest)
			return
		}

		// Parse the JSON payload
		var data struct {
			Email    string `json:"email"`
			FName    string `json:"fname"`
			LName    string `json:"lname"`
			Message  string `json:"message"`
		}

		if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
			http.Error(w, "Failed to parse JSON payload", http.StatusBadRequest)
			return
		}
				
		// global keys
		apiKey := os.Getenv("SENDGRID_API_KEY")
		sgEmail := "tom@thomasongeri.com"
		
		fmt.Fprintf(w, "Post from website! r.PostFrom = %v\n", data)

		// value from post request
		user_email := data.Email
		user_first_name := data.FName
		user_last_name := data.LName
		user_message := data.Message

		fmt.Fprintf(w, "Email = %s\n", user_email)
		fmt.Fprintf(w, "FName = %s\n", user_first_name)
		fmt.Fprintf(w, "LName = %s\n", user_last_name)
		fmt.Fprintf(w, "Message = %s\n", user_message)

		send_grid_information(apiKey, sgEmail, user_email, user_last_name, user_first_name, user_message)
		add_users_contact_to_sendgrid(apiKey, user_email, user_first_name, user_last_name)
		//  send_email_with_template(apiKey, user_email, user_last_name, user_first_name, sgEmail)
		//  send_transactional_email(apiKey, sgEmail, user_email, user_last_name, user_first_name, user_message)

	default:
		fmt.Fprintf(w, "Sorry, only GET and POST methods are supported.")
	}
}

func main() {
	http.HandleFunc("/", sendgridApi)

	fmt.Printf("Starting server for testing HTTP POST http://localhost:9090...\n")
	if err := http.ListenAndServe(":9090", nil); err != nil {
		log.Fatal(err)
	}

}
