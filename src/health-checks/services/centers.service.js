import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:3000/"
})
export class CentersService {

    getAll() {
        return http.get('centers')
    }
    getCenterById(id){
        return http.get('centers/'+id)
    };

}