import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading';
import './App.css';
import { useEffect } from 'react';
import usePrice from './hooks/PricesHook';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Details from './pages/details';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
