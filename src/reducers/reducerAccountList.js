import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import { call, delay, put, takeEvery, takeLatest, take } from 'redux-saga/effects'

import * as kasApi from '../api/KasApi'


//////////////////////////
//  States & Variables
const initialState = [{
    key : -1,
    address : '',
    chainId : '',
    createdAt : '',
    keyId : '',
    krn : '',
    publicKey : '',
}];

///////////////////////////
// Action Types
const FETCHLIST = 'LIST/FETCH';
const FETCHLIST_SUCCESS = 'LIST/FETCH_SUCCESS';
const FETCHLIST_ERROR = 'LIST/FETCH_ERROR';

////////////////////
// Action Creators
export const fetchAccountListAction = () => ({type : FETCHLIST });
// export const fetchAccountList = createAction(FETCHLIST, data => data);
// export async function fetchAccountList() {
//     const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
//     const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
//     const chainId = process.env.REACT_APP_CHAIN_ID;
//     const caver = new CaverExtKAS()
    
//     caver.initKASAPI(chainId, accessKeyId, secretAccessKey)
//     const query = {
//         size: 10,   
//       }
//       const result = await caver.kas.wallet.getAccountList(query)
//       console.log("async call dispatch : ");
//       console.log(result);
//     return {
//         type : FETCHLIST,
//     }
// }
// export function generateWalletSucces(seed, password) {
//     return {
//       type: GENERATE_WALLET_SUCCESS,
//       seed,
//       password,
//     };
//   }

/////////////////////////////////
// Saga 구현
function* fetchAccountList(action) {
    yield delay(100);
    // yield put(fetchAccountListAction());    // put 는 dispatch 호출해줌
    console.log("action : ", action)
       

    try {
        const returnVal = yield call(kasApi.getAccountListApi)
        
        yield put({
            type : FETCHLIST_SUCCESS,
            payload : returnVal
        })
    } catch (e) {
        yield put ({
            type : FETCHLIST_ERROR,
            error : true,
            payload : e
        })
    }
}


export function* fetchAccountListSaga() {
    // yield takeLatest(FETCHLIST, fetchAccountListSaga);
    yield takeLatest(FETCHLIST, fetchAccountList);
}

///////////////////////
// Reducer
// const reducerAccountList = handleActions( 
//     // console.log(" call reducerAccountList HandleActions "),
// {    
//     [FETCHLIST] : (state, action ) =>
//     produce(state, draft => {
//         draft.data = "aaaaa";
//     }),
//     // [FETCHLIST] : (state, {payload : data}) =>
//     // produce(state, draft => {
//     //     draft.data = "aaaaa";
//     // }),
// }, initialState,);

const reducerAccountList = (state = initialState, action ) => {
    console.log("in reducerAccountList")
    console.log(state)
    console.log('action.type : ', action.type)
    console.log('action.payload : ', action.payload)
    

    switch (action.type) {
        case FETCHLIST:
            return state;
        case FETCHLIST_SUCCESS:
            const tempArr = new Array();
            action.payload.forEach( (cur, idx) => {
                tempArr.push({
                    key : idx,
                    address : cur.address,
                    chainId : cur.chainId,
                    createdAt : cur.createdAt,
                    keyId : cur.keyId,
                    krn : cur.krn,
                    publicKey : cur.publicKey
                }) 
            })            
            return tempArr;

        case FETCHLIST_ERROR:
            return state;
        default:
            return state;
    }
}

export default reducerAccountList;