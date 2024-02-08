import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

type HeaderCmpProps = {

}

const HeaderCmp: React.FC<HeaderCmpProps> = () => {
  const navigate = useNavigate();

  return (
    <Header
      className='flex items-center justify-between'
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={[
          {
            label: 'Site 1',
            key: 's1-1',
            children: [
              {
                label: 'Order',
                key: 's1-2',
              },
              {
                label: 'Order 2',
                key: 's1-3',
              },
            ],
          },
          {
            label: 'Site 2',
            key: 's1-4',
          },
          {
            label: 'Site 3',
            key: '5',
          },
        ]}
        className='min-w-0 flex-1'
      />

      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          {
            label: <><UserOutlined /> Profile</>,
            key: 's2-1',
            children: [
              {
                label: 'Settings',
                key: 's2-2',
              },
              {
                label: 'My Account',
                key: 's2-3',
              },
              {
                label: 'Logout',
                key: 's2-4',
                onClick: () => {
                  navigate('/sign-in');
                }
              },
            ]
          },
        ]}
      />
    </Header>
  );
}

export default HeaderCmp;