import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';
import { Toaster } from 'react-hot-toast';
import Testing from './pages/testing';
import RegisterPage from './pages/client/register';
import HomePage from './pages/homePage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ResponsiveTesting from './pages/test';

function App() {
  

  return (
    <GoogleOAuthProvider clientId='417277747155-j4dtt1bb9il76gejjfoec68icrafp156.apps.googleusercontent.com'>
        <BrowserRouter>
        <Toaster position="top-right"/>
          <Routes path="/*">
            <Route path="/admin/*" element = {<AdminPage/>}/>
            <Route path="/login" element = {<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/r" element={<ResponsiveTesting/>}/>
            <Route path="/*" element = {<HomePage/>}/>
            <Route path="/testing" element = {<Testing/>}/>
          </Routes>
        </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App
