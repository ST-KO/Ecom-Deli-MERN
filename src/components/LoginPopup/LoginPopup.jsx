import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
  
    const [currentState, setCurrentState] = useState("Sign Up");

    return (
        <section className='login-popup'>
            <form className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img 
                        src={assets.cross_icon} 
                        alt="cross icon" 
                        onClick={() => setShowLogin(false)}
                    />
                </div>
                <div className="login-popup-inputs">
                    {
                        currentState === 'Login' ? 
                        <></> :
                        <input type="text" placeholder='Your Name' required />
                    }
                    
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>
                    {
                        currentState === 'Sign Up' ?
                        "Create Account" :
                        "Login"
                    }
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentState === 'Login' ?
                    <p>Create a new account? 
                        <span 
                            onClick={() => setCurrentState("Sign Up")}
                        >Sign Up Here</span>
                    </p> :
                    <p>Already have an account? 
                        <span
                            onClick={() => setCurrentState("Login")}
                        >Login Here</span>
                    </p>
                }
            </form>
        </section>
    )
}

export default LoginPopup