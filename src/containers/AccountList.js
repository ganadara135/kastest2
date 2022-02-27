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
    width: 100,
  },
  {
    title: 'chainId',
    dataIndex: 'chainId',
    key: 'chainId',
    width: 50,
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 80,
  },
  {
    title: 'keyId',
    dataIndex: 'keyId',
    key: 'keyId',
    ellipsis: true,
    width: 100,
  },
  {
    title: 'krn',
    dataIndex: 'krn',
    key: 'krn',
    ellipsis: true,
    width: 100,
  },
  {
    title: 'publicKey',
    dataIndex: 'publicKey',
    key: 'publicKey',
    ellipsis: true,
    width: 100,
  },
];

export default function AccountList() {
  
  const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
  const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const caver = new CaverExtKAS()

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    tempFunc();
  },[]);

  async function tempFunc() {  
    
    caver.initKASAPI(chainId, accessKeyId, secretAccessKey)
    //const blockNumber = await caver.rpc.klay.getBlockNumber()
    //console.log("blockNumber : " + blockNumber)

    const query = {
      size: 10,
      //fromTimestamp: 1501970769,
      //toTimestamp: 1601970769,
      //cursor:
        //  'eyJBZGRyZXNzIjoia3JuOjEwMDE6d2FsbGV0OjhlNzZkMDAzLWQ2ZGQtNDI3OC04ZDA1LTUxNzJkOGYwMTBjYTphY2NvdW50LXBvb2w6ZGVmYXVsdDoweDUzM0ZjQzMyMWE4ODgxQzllNEEzNUIzMUJhZWI4MEI1MWE3RDI2OEQiLCJUeXBlIjoiQUNDIiwiY3JlYXRlZF9hdCI6MTYwMTk3MDc2OSwicnBuIjoia3JuOjEwMDE6d2FsbGV0OjhlNzZkMDAzLWQ2ZGQtNDI3OC04ZDA1LTUxNzJkOGYwMTBjYTphY2NvdW50LXBvb2w6ZGVmYXVsdCJ9',
    }
    const result = await caver.kas.wallet.getAccountList(query)
    console.log("계정목록 : ");
    console.log(result);
    console.log(result.items.length);

    // if(result.items.length >= 1){
      
    // }
    let tempVarArr = new Array();

    result.items.forEach( (el, i) => {
      tempVarArr.push({
        key : i,
        address : el.address,
        chainId : el.chainId,
        createdAt : el.createdAt,
        keyId : el.keyId,
        krn : el.krn,
        publicKey : el.publicKey
      }) 
    })

    setDataTable(tempVarArr);    
  };

  return (
    <div>
      계정목록조회      
      <Table columns={columns_table} dataSource={dataTable} />
    </div>
  )
}
