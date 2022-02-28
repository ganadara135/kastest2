import React, { useEffect, useState } from 'react';
import { Layout, Menu, Spin, Col, Row } from 'antd';
import Icon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LoadingOutlined,
  DownOutlined,
  BarsOutlined,
  BankOutlined,
  AccountBookOutlined
} from '@ant-design/icons';
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";

import { getItem } from "../services/local-storage";

import AccountList from '../containers/AccountList';
import AccountInfo from '../containers/AccountInfo';
import ValueTransfer from '../containers/ValueTransfer';
// import Contact from '../containers/Contact';

import logoSvg from './klaytn.svg';

const { Header, Sider, Content, Footer } = Layout;

export default function Auth() {

  const [user] = useState(JSON.parse(getItem('user')));
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace('/auth/login');
    }
  }, [user, history]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const renderLayout = () => {
    return <Layout>
      <Header>
        <Row  align="middle" justify="space-between" gutter={[16,10]}>        
          <Col span={2} offset={1}  xl={{ span: 2, offset: 2 }}>
            <img src={logoSvg} alt="klaytn Logo" width={50} style={{border:"2px solid white"}}/>
          </Col>
          <Col span={2} offset={10}  xl={{ span: 2, offset: 12 }}>          
            <Row type="flex" align="middle" justify="center">
              <Icon component={UserOutlined} style={{border:"2px solid white"}} height={100}/>
            </Row>
          </Col>
        </Row >        
      </Header>
      
      <Layout className="site-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='side-menu'>Wallet Service <Icon component={DownOutlined} /> </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<BarsOutlined />}>
              <Link to="/main/AccountList">계정목록조회</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              <Link to="/main/AccountInfo">계정정보조회</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AccountBookOutlined />}>
              <Link to="/main/ValueTransfer">KLAY 전송</Link>
            </Menu.Item>            
          </Menu>
        </Sider>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/main/AccountList" component={AccountList} />
            <Route path="/main/AccountInfo" component={AccountInfo} />
            <Route path="/main/ValueTransfer" component={ValueTransfer} />            
            <Redirect to="/main/" />
          </Switch>
        </Content>
        
      </Layout>
      <Footer />
    </Layout>
  }
  const renderLoading = () => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  }
  return (
    <div className="main-container">
      {
        user
          ? renderLayout()
          : renderLoading()
      }

    </div>
  );

}