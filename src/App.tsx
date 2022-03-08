import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Details from './pages/details';

import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
