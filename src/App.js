import React, { useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <div className="App">
          <div className="content">
            <Header />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />

              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blog/:id" element={<Blogs />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
