import axios from 'axios';
import { connectUser, LOGIN__USER } from '../actions/users';

const axiosInstance = axios.create({
  baseURL: 'http://107.22.144.90/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const signinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN__USER: {
      const { email, password } = action.data;

      axiosInstance.post('/login', {
        email,
        password,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(connectUser(response.data.authozization));
        }).catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default signinMiddleware;