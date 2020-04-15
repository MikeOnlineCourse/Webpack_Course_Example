// import thunk from 'redux-thunk';
import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM, TEST_ASYNC } from '../constants';
  
export const openLoginForm = () => ({
    type: OPEN_LOGIN_FORM,
});

export const closeLoginForm = () => ({
    type: CLOSE_LOGIN_FORM,
});

export const asyncTest = data => ({
    type: TEST_ASYNC,
    payload: data
})

export const asyncTestAsync = data =>{
    return dispatch => {
        setTimeout(()=>{
            console.log('get data:', data);
            dispatch(asyncTest(data));
        },1500);
    }
};