import {take, put, call, fork} from 'redux-saga/effects';
// take: wait for invocation. put: function self invoke. call: make async request with params
import { request, success, failure } from 'src/features/user/userSlice';
import ApiHelper from 'src/helpers/ApiHelper';



function callGetRequest(url, data, headers={}) {
    return ApiHelper.get(url, data, headers);
}

function callPostRequest(url, data, headers={}) {
    return ApiHelper.post(url, data, headers);
}

function* watchRequest() {
    while (true) {
      const {payload} = yield take(request); //Saga middleware listens for the command "request" anywhere inside the app
  
      try {
        let response;
  
        response = yield call(callPostRequest, payload.url, payload.data); //Saga spits out response after running "request"
        yield put(success(response.data));
      } catch (ex) {
        yield put(failure(ex));
      }
    }
  }
  
export default function* root() {
  yield fork(watchRequest);
}