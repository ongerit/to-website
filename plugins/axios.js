import axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || '192.168.0.114'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
