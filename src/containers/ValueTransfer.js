import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Typography, Table } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CaverExtKAS from "caver-js-ext-kas"

const columns_table = [
  {
    title: 'from',
    dataIndex: 'from',
    key: 'from',    
    width: 100,
    ellipsis: true,
  },
  {
    title: 'to',
    dataIndex: 'to',
    key: 'to',    
    ellipsis: true,
    width: 100,
  },
  {
    title: 'gas',
    dataIndex: 'gas',
    key: 'gas',    
    ellipsis: true,
    width: 100,
  },
  {
    title: 'gasPrice',
    dataIndex: 'gasPrice',
    key: 'gasPrice',    
    ellipsis: true,
    width: 100,
  },
  {
    title: 'nonce',
    dataIndex: 'nonce',
    key: 'nonce',    
    width: 10,
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',    
    ellipsis: true,
    width: 100,
  },
  {
    title: 'transactionHash',
    dataIndex: 'transactionHash',
    key: 'transactionHash', 
    ellipsis: true,
    width: 100,
  },
];

export default function ValueTransfer() {

  const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
  const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const caver = new CaverExtKAS()

  const history = useHistory();

  const [dataTable, setDataTable] = useState([]);
  const [tempData, setTempData] = useState({
    from:'',
    to:'',
    value:'',
    gas:'',
    gasPrice: '',
    nonce: '',
    transactionHash:'',
    });

  const onFinish = async (values) => {
    console.log(values)
    caver.initKASAPI(chainId, accessKeyId, secretAccessKey)

    const tx = {
      from : values.fromAddress,
      to : values.toAddress,
      value : values.klayValue,
      submit : true
    }
    
    console.log('tx : ', tx)

    const result = await caver.kas.wallet.requestValueTransfer(tx);

    console.log('result : ', result)

    // setTimeout(() => {
    //   history.push('/main/AccountInfo');
    // }, 1000)
    setTempData({
      from: result.from,
      to: result.to,
      value: result.value,
      gas: result.gas,
      gasPrice: result.gasPrice,
      nonce: result.nonce,
      transactionHash: result.transactionHash,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (          
      <div className="Transfer">
        KLAY 전송  <br />
        <Typography.Text> 계정정보조회 메뉴에서 KLAY 가 있는 주소를 사용하세요!! </Typography.Text>
      <Row align="middle" className="transfer-form">

        <Col span={9} offset={1}>
          <Form
            name="klay_transfer"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Typography.Text> From </Typography.Text>
            <Form.Item
              name="fromAddress"
              rules={[
                {
                  required: true,
                  message: '전송자의 주소를 넣어주세요',
                },
              ]}
            >
              <Input  placeholder="전송자 주소" />
            </Form.Item>
            <Typography.Text> To </Typography.Text>
            <Form.Item
              name="toAddress"
              rules={[
                {
                  required: true,
                  message: '전송받을자의 주소를 넣어주세요',
                },
              ]}
            >               
              <Input                           
                placeholder="전송받을 주소"
              />
            </Form.Item>
            <Typography.Text> 전송금액 </Typography.Text>
            <Form.Item
              name="klayValue"
              rules={[
                {
                  required: true,
                  message: '전송할 금액을 넣어주세요!',
                },
              ]}
            >               
              <Input                               
                placeholder="KLAY 금액"
              />
            </Form.Item>

            

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                전송
              </Button>             
            </Form.Item>
          </Form>
        </Col>
        <Col span={9} offset={1}>
          <Typography.Text mark>  출력부분 </Typography.Text> <br/>
          <Typography.Text> From : {tempData.from} </Typography.Text><br/>
          <Typography.Text> To : {tempData.to} </Typography.Text><br/>
          <Typography.Text> Value : {tempData.value} </Typography.Text><br/>
          <Typography.Text> gas : {tempData.gas} </Typography.Text><br/>
          <Typography.Text> gasPrice : {tempData.gasPrice} </Typography.Text><br/>
          <Typography.Text> Nonce : {tempData.nonce} </Typography.Text><br/>
          <Typography.Text> transactionHash : {tempData.transactionHash} </Typography.Text>
        </Col>
      </Row>    
    </div>
  )
}
