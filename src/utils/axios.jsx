import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjZhNTY5NGI0MTlmZWQ4YzEzNDMxMWE0ZmJiMjhiNiIsInN1YiI6IjY1ZGFkZmU0OWI2ZTQ3MDE2M2ZmY2EyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tntdPpcwHlyp4KfEccQ90ig_b03pDDnEg_gJVZvjkq0'
      }
})

export default instance;