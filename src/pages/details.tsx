import { Descriptions, Badge, Button } from 'antd';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import getPrices from '../services/getPrices';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location: any = useLocation();
  let crypto = null;
  if (location.state) {
    crypto = location.state.crypto;
  } else {
  }
  const handleBack = () => {
    navigate('/dashboard', { replace: true });
  };
  return (
    <>
      <Button type="primary" onClick={handleBack}>
        {' '}
        Back
      </Button>
      <Descriptions title="Crypto info" layout="vertical" bordered>
        <Descriptions.Item label="Name">{id}</Descriptions.Item>
        <Descriptions.Item label="Price USD">{crypto.price}</Descriptions.Item>
        <Descriptions.Item label="Price EUR">
          {crypto.priceEUR}
        </Descriptions.Item>
        <Descriptions.Item label="Price JPY">
          {crypto.priceJPY}
        </Descriptions.Item>
        <Descriptions.Item label="Price BTC">
          {crypto.priceBTC}
        </Descriptions.Item>
        <Descriptions.Item label="Price ETH">
          {crypto.priceETH}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
