import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000"
});

export const search = async (url,setData) => {
    const answer = await api.get(url);
    console.log("request: ", answer)
    setData(answer.data);
}