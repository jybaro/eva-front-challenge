import Loading from './../components/Loading';
import usePrice from './../hooks/PricesHook';
import 'antd/dist/antd.css';
import CryptoList from './../components/CryptoList';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/authLayout';

const Dashboard = () => {
  const navigate = useNavigate();

  const { loading, cryptos } = usePrice();

  const viewDetails = (crypto: any) => {
    // message.info(`${crypto.name} - ${crypto.price}`);
    navigate('/details/' + crypto.key, { replace: true, state: { crypto } });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AuthLayout>
          <CryptoList cryptos={cryptos} viewDetails={viewDetails} />
        </AuthLayout>
      )}
    </>
  );
};

export default Dashboard;
