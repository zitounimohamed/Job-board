import http from './httpjobs'

class JobsService {
    findByTitle(title){
        return http.get(`alljobs?title=${title}`);

    }
}
export default new JobsService