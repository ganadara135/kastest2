import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import reducerAccountList from './reducerAccountList';
import { fetchAccountListSaga } from './reducerAccountList';

const rootReducer = combineReducers({
    reducerAccountList,
});

export function* rootSaga() {
    yield all([fetchAccountListSaga()]); // all 은 배열 안의 사가를 동시에 실행
    //  yield [fetchAccountListSaga()];
}
export default rootReducer;