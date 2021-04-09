import axios from 'axios';

class AxiosService {
    constructor(props) {
        const instance = axios.create(); //tao 1 instance cua axios
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }
    handleSuccess(response){    // goi api thanh cong
        return response;
    }
    handleError(error){     // goi api that bai
        return Promise.reject(error);
    }
    get(url){
        return this.instance.get(url);
    }
}

export default new AxiosService();

//Khi import AxiosService, new se tao ra 1 instance thuoc class AxiosService => chay constructor
// => tao bien instance, vaf gan vao this.instance; trong pham vi class co the truy cap duoc
