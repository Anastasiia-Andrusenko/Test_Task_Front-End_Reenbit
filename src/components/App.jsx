import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import AppBar from "./AppBar/AppBar";
import Footer from "./Footer/Footer";


const HomePage = lazy(() => import('../pages/Home/Home'));


export const App = () => {
  return (
    <div>
      <AppBar/>
    <Routes>
        <Route index element={<HomePage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
};
