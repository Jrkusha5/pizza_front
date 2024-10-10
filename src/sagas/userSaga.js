// src/redux/userSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  loginRequest,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAILURE,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_FAILURE,
  CUSTOMER_LOGIN_REQUEST,
  FetchRestaurantSuccess,
  FetchRestaurantFailure,
  FetchRestaurantRequest
  
 } from "../redux/userSlice";

// admin create
function* registerUser(action) {
  try {
    const response = yield call(
      axios.post,
      "https://pizza-back-ay58.onrender.com/user/register",
      action.payload
    );
    console.log("response:",response.data)
    yield put(registerSuccess(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(registerFailure(errorMessage));
  }
}

// login admin
function* loginUser(action) {
  try {
    const response = yield call(
      axios.post,
      "https://pizza-back-ay58.onrender.com/user/login",
      action.payload
    );
    // console.log("response:",response.data)
    yield put(loginSuccess(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(loginFailure(errorMessage));
  }
}

// create customer
function* createCustomer(action) {
  try {
    const response = yield call(
      axios.post,
      "https://pizza-back-ay58.onrender.com/user/create-customer",
      action.payload
    );
    // console.log("response:",response.data)
    yield put(CUSTOMER_CREATE_SUCCESS(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(CUSTOMER_CREATE_FAILURE(errorMessage));
  }
}

// login cstomer
function* loginCustomer(action) {
  try {
    const response = yield call(
      axios.post,
      "https://pizza-back-ay58.onrender.com/user/login-user",
      action.payload
    );
    yield put(CUSTOMER_LOGIN_SUCCESS(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(CUSTOMER_LOGIN_FAILURE(errorMessage));
  }
}


// get restaurants
function* fetchRestaurantSaga() {
  try {
     const response = yield call(axios.get, "https://pizza-back-ay58.onrender.com/user/admin");
    const data = response.data; 
    yield put(FetchRestaurantSuccess(data));
    //  console.log("results:", result.payload);
  } catch (error) {
    yield put(FetchRestaurantFailure(error.message));
  }
}

export function* watchFetchRestaurant() {
  yield takeLatest(FetchRestaurantRequest.type, fetchRestaurantSaga);
}

// login CUSTOMER
export function* loginCustomerSaga() {
  yield takeLatest(CUSTOMER_LOGIN_REQUEST.type, loginCustomer);
}

// login admin
export function* customerSaga() {
  yield takeLatest(CUSTOMER_CREATE_REQUEST.type, createCustomer);
}

// login admin
export function* userSaga() {
  yield takeLatest(loginRequest.type, loginUser);
}

// register admin
export function* registerAdminSaga() {
  yield takeLatest(registerRequest.type, registerUser);
}
