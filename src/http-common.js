import axios from "axios";

export default axios.create({
  baseURL: "https://fibackend.ujed.mx/",
  headers: {
    "Content-type": "application/json"
  }
})