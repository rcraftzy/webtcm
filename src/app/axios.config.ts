import axios from 'axios';
import { environment } from 'src/environments/environment.development';

const instance = axios.create({
  baseURL: environment.baseUrl,
});

export default instance;
