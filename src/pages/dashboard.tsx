import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './../components/Loading';
import { useEffect } from 'react';
import usePrice from './../hooks/PricesHook';
import 'antd/dist/antd.css';
import CryptoList from './../components/CryptoList';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/authLayout';

import {
  Table,
  Button,
  Space,
  Input,
  Select,
  DatePicker,
  message,
  Layout,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const Dashboard = () => {
  const navigate = useNavigate();

  const { loading, cryptos } = usePrice();

  if (loading) {
    return <Loading />;
  }
  // key: crypto,
  // price: RAW[crypto]['USD']['PRICE'],
  // market_cap: RAW[crypto]['USD'].MKTCAP,
  // circulatingSupply: RAW[crypto]['USD'].SUPPLY,
  // name: RAW[crypto]['USD']['FROMSYMBOL'],

  // : MouseEventHandler<HTMLElement>

  const viewDetails = (crypto: any) => {
    // message.info(`${crypto.name} - ${crypto.price}`);
    navigate('/details/' + crypto.key, { replace: true, state: { crypto } });
  };

  return (
    <>
      <AuthLayout>
        <CryptoList cryptos={cryptos} viewDetails={viewDetails} />
      </AuthLayout>
    </>
  );
};

export default Dashboard;
