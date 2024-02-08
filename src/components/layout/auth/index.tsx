import { Link } from 'react-router-dom';

import { __APP_NAME__ } from '@/lib/constants';

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className='bg-black h-16 flex items-center justify-center text-2xl text-white font-bold'>
        <Link to='/'><h2>{__APP_NAME__}</h2></Link>
      </div>
      <div className="bg-gray-300 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;