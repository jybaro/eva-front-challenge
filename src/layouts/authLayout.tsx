import { Space, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

export default function AuthLayout(opts: any) {
  const { children } = opts;
  return (
    <>
      <Layout>
        <Header>
          <Space size="middle">
            <Link to="/">Logout</Link>
          </Space>
        </Header>
        <Content style={{ padding: '0 50px' }}>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}
