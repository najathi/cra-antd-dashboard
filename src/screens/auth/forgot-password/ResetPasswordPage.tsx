import ResetPasswordForm from '@/components/forms/auth/forgot-password/ResetPasswordForm';
import AuthLayout from '@/components/layout/auth';

type ResetPasswordPageProps = {

}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Set New Password</h2>
        <ResetPasswordForm />
      </div>
    </AuthLayout>
  );
}

export default ResetPasswordPage;