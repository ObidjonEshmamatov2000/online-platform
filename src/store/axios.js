import axios from "axios";

axios.defaults.baseURL = "https://localhost:8000/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
