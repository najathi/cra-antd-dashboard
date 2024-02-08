import { Layout, theme } from 'antd';

import DynamicBreadcrumb from '@/components/Breadcrumb/DynamicBreadcrumb';
import SideBar from './SideBar';
import HeaderCmp from './Header';
import FooterCmp from './Footer';

type DashboardLayoutProps = {
  children: React.ReactNode
};

const { Content } = Layout;

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <HeaderCmp />
        <Content className='m-4'>
          <DynamicBreadcrumb />
          <div
            style={{
              padding: 24,
              minHeight: 200,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <FooterCmp />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;