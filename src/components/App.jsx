import { lazy, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import AppBar from "./AppBar/AppBar";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { Suspense } from "react";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "../redux/operations";

import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]) 

  return (
    <div>
      <AppBar/>
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo='/' component={<RegisterPage/>} />}/>
    </Routes>
    <Footer/>
    </div>
  );
};
