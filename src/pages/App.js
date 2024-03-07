import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import AuthPage from './AuthPage';
import Footer from "../components/Footer.js"
import Navbar from '../components/Navbar';
import MainPage from './MainPage';

const App = () => {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Container className="theApp">
        <Row>
          {user ? (
            <>
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
            </>
          ) : (
            <AuthPage setUser={setUser} />
          )}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
