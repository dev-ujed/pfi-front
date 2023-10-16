import axios from "axios";

export default axios.create({
  baseURL: "http://fibackend.ujed.mx/",
  headers: {
    "Content-type": "application/json"
  }
})