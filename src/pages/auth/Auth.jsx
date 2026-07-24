import { useEffect, useState } from "react";
import "./Auth.css";
import { AnimatedBorder } from "../../components/AnimatedBorder/index";
import { SvgLogo } from "../../icons/SvgLogo";
import { LoginForm } from "./_components/LoginForm";
import { RegisterForm } from "./_components/RegisterForm";
import { SvgAuthFooter } from "../../icons/SvgAuthFooter";

export const Auth = () => {

  const [formType, setFormType] = useState('login')


  return (
    <>
      <div className="auth">
        <AnimatedBorder>
          <div className="auth-container">
            <SvgLogo className="auth-container-logo" />
            <div className="auth-line"></div>
            <div className="auth-switch">
              <button className={`auth-switch-btn ${formType == 'login' && 'auth-switch-btn-active'}`} onClick={()=> setFormType('login')}>ورود</button>
              <button className={`auth-switch-btn ${formType == 'register' && 'auth-switch-btn-active'}`} onClick={()=> setFormType('register')}>ثبت نام</button>
            </div>
            {formType == 'login' && <LoginForm />}
            {formType == 'register' && <RegisterForm />}
            
          </div>
        </AnimatedBorder>
        <footer>
          <SvgAuthFooter className='auth-footer-svg'/>
          <div className="auth-footer-inner">
            <h2>webMG</h2>
            <SvgLogo />
          </div>
        </footer>
      </div>
    </>
  );
};
