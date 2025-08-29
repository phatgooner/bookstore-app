import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadingScreen from './components/Layouts/LoadingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Error from './pages/Error';
import ScrollToTop from './components/Tools/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingScreen />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Library />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);