import { useEffect, useState } from "react";
import "./Auth.css";
import { AnimatedBorder } from "../../components/AnimatedBorder/index";
import { SvgLogo } from "../../icons/SvgLogo";
import { LoginForm } from "./_components/LoginForm";
import { RegisterForm } from "./_components/RegisterForm";
import { SvgAuthFooter } from "../../icons/SvgAuthFooter";
import { useTranslation } from "react-i18next";

export const Auth = () => {

  const [formType, setFormType] = useState('login');
  const {t} = useTranslation();


  return (
    <>
      <div className="auth">
        <AnimatedBorder>
          <div className="auth-container">
            <SvgLogo className="auth-container-logo" />
            <div className="auth-line"></div>
            <div className="auth-switch">
              <button className={`auth-switch-btn ${formType == 'login' && 'auth-switch-btn-active'}`} onClick={()=> setFormType('login')}>{t('auth.login')}</button>
              <button className={`auth-switch-btn ${formType == 'register' && 'auth-switch-btn-active'}`} onClick={()=> setFormType('register')}>{t('auth.signin')}</button>
            </div>
            {formType == 'login' && <LoginForm />}
            {formType == 'register' && <RegisterForm setFormType={setFormType} />}
            
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
