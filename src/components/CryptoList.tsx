import { Table, Button } from 'antd';

export default function CryptoList(opts: any) {
  const { cryptos, viewDetails } = opts;
  // key: crypto,
  // price: RAW[crypto]['USD']['PRICE'],
  // market_cap: RAW[crypto]['USD'].MKTCAP,
  // circulatingSupply: RAW[crypto]['USD'].SUPPLY,
  // name: RAW[crypto]['USD']['FROMSYMBOL'],

  // : MouseEventHandler<HTMLElement>

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'market_cap',
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Circulating supply',
      dataIndex: 'circulatingSupply',
      key: 'circulatingSupply',
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <Button onClick={() => viewDetails(record)}>Details</Button>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={cryptos} columns={columns} />
    </>
  );
}
