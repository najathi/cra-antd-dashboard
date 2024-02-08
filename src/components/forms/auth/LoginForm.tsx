import { Link, useNavigate } from 'react-router-dom';

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Your Password?</Link>
      </div>
      <div className="mb-6">
        <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
          Log In
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        <button className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline" type="button">or</button>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>
      <div className="mt-6">
        <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded border border-gray-300 shadow-sm hover:shadow-lg w-full" type="button">
          Log in with Google
        </button>
      </div>
    </form>
  );
}

export default LoginForm;