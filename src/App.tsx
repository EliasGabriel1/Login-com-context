import React, { useState } from 'react';
import { AuthProvider } from './context/AuthProvider';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from './components/Profile';
import { Login } from './components/Login';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App