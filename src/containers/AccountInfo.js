import React, { useEffect, useState } from 'react'
import CaverExtKAS from "caver-js-ext-kas"
import { Table } from 'antd'


const columns_table = [
  {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
    render: text => <a>{text}</a>,
    ellipsis: true,
    width: 200,
  },
  {
    title: 'balance',
    dataIndex: 'balance',
    key: 'balance',
    render: text => <a>{text}</a>,
    // ellipsis: true,
    width: 50,
  },
];

export default function AccountInfo() {
  const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
  const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const caver = new CaverExtKAS()
  let tempVarArr2 = new Array();
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    tempFunc();
  },[]);

  // useEffect(() => {
  //   setDataTable(tempVarArr2);
  // },[tempVarArr2])

  async function tempFunc() {
    
    caver.initKASAPI(chainId, accessKeyId, secretAccessKey)

    const query = {
      size: 10,    
    }
    const result = await caver.kas.wallet.getAccountList(query)
    let tempVarArr = new Array();
    

    result.items.forEach( (el, i) => {
      tempVarArr.push({
        key : i,
        address : el.address,        
      })      
    })

    
  //   let chk = tempVarArr.reduce( async (acc, cur, idx) => {

  //     console.log((idx) + " : " + cur.address)
  //     const balanceVal = await caver.rpc.klay.getAccount(cur.address);
  //     // console.log(balanceVal.account.balance)
  //     // return balacneVal;
  //     tempVarArr2.push({
  //       key : idx,
  //       address : cur.address,
  //       balance : (balanceVal !== null && balanceVal.account.balance != null) ? balanceVal.account.balance : '0',
  //     })
  //     return balanceVal;
  //   }, 0).then( returnVal => { 
  //     console.log("promiseVal : ", returnVal);
  //     setDataTable(tempVarArr2);  
  //  })

    let promiseReturn = tempVarArr.forEach( async (el, idx) => {
      // console.log('idx : ', idx, '/ length : ', tempVarArr.length-1)
      const balanceVal = await caver.rpc.klay.getAccount(el.address);
      tempVarArr2.push({
        key : idx,
        address : el.address,
        balance : (balanceVal !== null && balanceVal.account.balance != null) ? balanceVal.account.balance : '0',
      });
      
      if(tempVarArr.length == tempVarArr2.length){  // 비동기 호출에 따른 처리
        setDataTable(tempVarArr2)        
      }      
    })

  }

  return (
    <div>
      계정정보조회
      <Table columns={columns_table} dataSource={dataTable} />
    </div>
  )
}
