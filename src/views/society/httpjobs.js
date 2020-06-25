import axios from 'axios'

export default axios.create({
    baseURL : "http://localhost:5000/jobs/",
    headers : {
        "Content-type" : "application/json"
    }
})