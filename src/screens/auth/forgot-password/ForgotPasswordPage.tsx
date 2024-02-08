import { useState } from 'react';

import ForgotPasswordForm from '@/components/forms/auth/forgot-password/ForgotPasswordForm';
import AuthLayout from '@/components/layout/auth'

type ForgotPasswordPageProps = {

}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  const [isConfirmed] = useState(false)

  return (
    <AuthLayout>
      {!isConfirmed ?
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Forgot Password</h2>
          <ForgotPasswordForm />
        </div>
        :
        <ConfirmForgotPassword />
      }
    </AuthLayout>
  );
}

const ConfirmForgotPassword: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Reset Your Password</h2>
      <p className="text-gray-600 text-center">
        If there is an account associated with the email provided, you will receive an email with a link to reset your password shortly.
      </p>
    </div>
  );
}

export default ForgotPasswordPage;