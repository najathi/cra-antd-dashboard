import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

type DynamicBreadcrumbProps = {}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumb className='py-4 px-0'>
      <Breadcrumb.Item key="home">
        <Link to="/"><HomeOutlined /></Link>
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={to} {...(last ? {} : { href: to })}>
            {last ? (
              <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
            ) : (
              <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default DynamicBreadcrumb;