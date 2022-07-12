import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

class AuthService {

    login(email, password) {
        return axios
            .post(API_URL + "signin", {
            email,
            password
            },{withCredentials:true})
            .then(response => {
                console.log(response)
                return response.data;
            });
        }

}

export default new AuthService();