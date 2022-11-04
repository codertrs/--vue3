import axios from 'axios';
import {
  BASE_URL,
  TIMEOUT
} from './config';

class RSRequest {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT) {
    this.instance = axios.create({
      baseURL,
      timeout
    });
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  get(config) {
    return this.request({
      methods: "get",
      ...config
    });
  }

  post(config) {
    return this.request({
      method: "post",
      ...config
    })
  }
}

export default new RSRequest();