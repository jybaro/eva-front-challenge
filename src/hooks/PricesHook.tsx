import { useEffect, useState } from 'react';
import getPrices from '../services/getPrices';

export default function PricesHook() {
  const [price, setPrice] = useState({
    loading: true,
    cryptos: [],
  });

  useEffect(() => {
    let mounted = true;
    getPrices().then((items) => {
      if (mounted) {
        mounted = false;

        const newValue: any = {
          loading: false,
          cryptos: items,
        };
        setPrice(newValue);
      }
    });
    // return () => (mounted = false);
  }, []);

  return price;
}
