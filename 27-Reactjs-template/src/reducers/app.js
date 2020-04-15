import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM, TEST_ASYNC } from '../constants';

const initialState = {
    isOpenLoginForm: false,         /** 是否開啟登入視窗 */
    AsyncData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LOGIN_FORM:
            return {
                ...state,
                isOpenLoginForm: true,
            }
        case CLOSE_LOGIN_FORM:
            return {
                ...state,
                isOpenLoginForm: false,
            }
        case TEST_ASYNC:
            return {
                ...state,
                AsyncData: {...action.payload},
            }
        default:
            return state 
    }
  }