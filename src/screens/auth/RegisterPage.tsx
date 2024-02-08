import RegisterForm from "@/components/forms/auth/RegisterForm";
import AuthLayout from "@/components/layout/auth";
import { Link } from "react-router-dom";

type RegisterPageProps = {

}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create Account</h2>
        <RegisterForm />
        <p className="text-xs text-center text-gray-500 mt-6">
          Already have an account <Link to="/sign-in" className="text-blue-500 hover:text-blue-800">Login</Link>.
        </p>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;