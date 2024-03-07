import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const AuthPage = ({ setUser }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div>
        {showSignUp ? (<h1 className='text-center my-4'>Sign Up Page</h1>) : (<h2 className='text-center my-4'>Login Page</h2>)}
      </div>
      <div>
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
      <div className="AuthPage">
        <div>
          <Button className='text-center' variant="info" onClick={() => setShowSignUp(!showSignUp)}> 
            Click for {showSignUp ? 'Log In' : 'Sign Up'}
          </Button>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
