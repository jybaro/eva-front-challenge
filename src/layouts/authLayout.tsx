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
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

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
