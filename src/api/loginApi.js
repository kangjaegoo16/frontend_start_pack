import axios from "axios";

export default function login (url, data) {
    return axios.post(url,data);
}