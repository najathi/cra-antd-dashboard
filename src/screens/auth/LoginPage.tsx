import { Link } from 'react-router-dom';

import LoginForm from '@/components/forms/auth/LoginForm';
import AuthLayout from '@/components/layout/auth';
import { __APP_NAME__ } from '@/lib/constants';

type LoginPageProps = {

}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Log In</h2>
        <LoginForm />
        <p className="text-xs text-center text-gray-500 mt-6">
          By logging in, you agree to accept our <Link to="#" className="text-blue-500 hover:text-blue-800">Privacy Notice</Link>.
          This site is protected by reCAPTCHA and the Google <Link to="#" className="text-blue-500 hover:text-blue-800">Privacy Policy</Link> and <Link to="#" className="text-blue-500 hover:text-blue-800">Terms of Service</Link> apply.
        </p>
        <p className="text-xs text-center text-gray-500 mt-4">
          New to {__APP_NAME__}? <Link to="/register" className="text-blue-500 hover:text-blue-800">Get started</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;