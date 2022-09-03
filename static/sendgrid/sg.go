// using SendGrid's Go Library
// https://github.com/sendgrid/sendgrid-go
package main
import (
	"fmt"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
	"log"
	"net/http"
	"os"
)
	// Run Functions here
func send_grid_information(
	apiKey string,
	sgEmail string,
	user_email string,
	user_last_name string,
	user_first_name string,
	user_message string) {
	from := mail.NewEmail( user_email, sgEmail)
	subject := "Email from thomasongeri.com"
	to := mail.NewEmail("To me", "ongerit@gmail.com")
	plainTextContent := "Thank you for your message!"
	htmlContent := "<strong>Thank you for your message!</strong>"

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


func add_users_contact_to_sendgrid(apiKey string, user_email string , user_first_name string, user_last_name string){
	host := "https://api.sendgrid.com"
	body := fmt.Sprintf(`{
		"contacts": [
		{
		"email": "%s",
		"first_name": "%s" ,
		"last_name": "%s" 
		}
		]
		}`,user_email,user_first_name,user_last_name )

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
		fmt.Fprintf(w, "Post from website! r.PostFrom = %v\n", r.PostForm)

		// global keys
		apiKey := os.Getenv("SENDGRID_API_KEY")
		sgEmail := "tom@thomasongeri.com"
		// value from post request
		user_email := r.FormValue("email")
		user_first_name := r.FormValue("fname")
		user_last_name := r.FormValue("lname")
		user_message := r.FormValue("message")

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

	fmt.Printf("Starting server for testing HTTP POST http://localhost:8080...\n")
	if err := http.ListenAndServe(":90", nil); err != nil {
		log.Fatal(err)
	}

}
