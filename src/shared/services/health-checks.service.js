import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:3000/"
})
export class HealthChecksService {

    getAll() {
        return http.get('health-checks?_expand=treadmill')
    };
    getAllExceptHPZero() {
        return http.get('http://localhost:3000/api/v1/health-checks?hp_ne=0')
    };
}