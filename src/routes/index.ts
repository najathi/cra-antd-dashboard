import { RouterDomProps } from "@/types/router-dom";

import LoginPage from "@/screens/auth/LoginPage";
import RegisterPage from "@/screens/auth/RegisterPage";
import ForgotPasswordPage from "@/screens/auth/forgot-password/ForgotPasswordPage";
import ResetPasswordPage from "@/screens/auth/forgot-password/ResetPasswordPage";

import DashboardPage from '@/screens/DashboardPage';

const routes: RouterDomProps[] = [
  { path: '/sign-in', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/forgot-password', component: ForgotPasswordPage },
  { path: '/reset-password', component: ResetPasswordPage },

  { path: '/', component: DashboardPage }
];

export default routes;