import axios from "axios";

axios.defaults.baseURL = "https://instantes-drf-api.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;