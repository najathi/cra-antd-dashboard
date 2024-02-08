import { RouterDomProps } from "@/types/router-dom";

import LoginPage from "@/screens/auth/LoginPage";

import DashboardPage from '@/screens/DashboardPage';
import RegisterPage from "@/screens/auth/RegisterPage";

const routes: RouterDomProps[] = [
  { path: '/sign-in', component: LoginPage },
  { path: '/register', component: RegisterPage },

  { path: '/', component: DashboardPage }
];

export default routes;