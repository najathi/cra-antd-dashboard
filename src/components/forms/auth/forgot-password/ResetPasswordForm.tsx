import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type ResetPasswordFormProps = {

}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match!');
      // You should display an error message to the user here
      return;
    }
    // Handle the password reset logic here
    console.log('Password has been reset successfully!');

    navigate('/sign-in');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          New Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter new password"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
          Confirm New Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm new password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;