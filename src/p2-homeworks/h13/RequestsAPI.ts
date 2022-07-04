import axios from "axios";

const instanse = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

export const api = {
    create: (value: boolean) => {
       return instanse.post(`auth/test`, {success: value})
            .then((data) => data)
    }
}