import {create} from 'apisauce';
import {
  PokeApi,
  ERROR_NETWORK_NOT_AVAILABLE,
  ERROR_WRONG_CREDENTIALS,
} from 'src/config/WebService';
import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

initializeSslPinning({
  'pokeapi.co': {
    includeSubdomains: true,
    publicKeyHashes: [
      'eVr/eyROosdTqxrORu3/RD5wbJcsquAF6L2Qj4Q2cRw=',
      '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
    ],
  },
});

const api = create({
  baseURL: PokeApi,
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
});

class ApiHelper {
  get = async (url, data, headers) => {
    try {
      const response = await api.get(url, data, {headers: headers});
      console.log(response);
      return new Promise((resolve, reject) => {
        this.handlePromise(resolve, reject, response);
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  post = async (url, data, headers) => {
    try {
      const response = await api.post(url, data);

      return new Promise((resolve, reject) => {
        this.handlePromise(resolve, reject, response);
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else if (response.error.code === 'NETWORK_ERROR') {
        reject(ERROR_NETWORK_NOT_AVAILABLE);
      } else {
        reject();
      }
    } else {
      resolve(response.data);
    }
  };
}

export default new ApiHelper();
