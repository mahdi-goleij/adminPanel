import { useEffect, useState } from "react";
import "./Auth.css";
import { AnimatedBorder } from "../../components/AnimatedBorder/index";
import { SvgLogo } from "../../icons/SvgLogo";
import { LoginForm } from "./_components/LoginForm";
import { RegisterForm } from "./_components/RegisterForm";
import { SvgAuthFooter } from "../../icons/SvgAuthFooter";
import { useTranslation } from "react-i18next";
// ۱. ایمپورت کردن هوک خودتان (آدرس را چک کنید که نسبت به فایل Auth درست باشد)
import { useLayoutStore } from "../../store/LayoutStore";
import { useTheme } from "../../hooks/theme-hooks";

export const Auth = () => {
  const [formType, setFormType] = useState('login');
  
  const { t, i18n } = useTranslation();
  const { theme, lang, setLang } = useLayoutStore();
  
  // ۲. استخراج handleTheme و initTheme از هوک خودتان
  const { handleTheme, initTheme } = useTheme();

  // ۳. لود کردن تم اولیه هنگام بالا آمدن صفحه
  useEffect(() => {
    initTheme();
  }, []);

  const handleToggleLang = () => {
    const newLang = lang === "fa" ? "en" : "fa";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  // ۴. تابع سوییچ تم با استیکر که از متد خودتان استفاده می‌کند
  const handleToggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    handleTheme(nextTheme);
  };

  return (
    <>
      <div className="auth">
        
        {/* دکمه‌های مینیمال تنظیمات */}
        <div className="auth-settings">
          <button className="auth-settings-btn" onClick={handleToggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="auth-settings-btn lang-btn" onClick={handleToggleLang}>
            {lang === "fa" ? "EN" : "فا"}
          </button>
        </div>

        <AnimatedBorder>
          <div className="auth-container">
            <SvgLogo className="auth-container-logo" />
            <div className="auth-line"></div>
            <div className="auth-switch">
              <button 
                className={`auth-switch-btn ${formType === 'login' && 'auth-switch-btn-active'}`} 
                onClick={() => setFormType('login')}
              >
                {t('auth.login')}
              </button>
              <button 
                className={`auth-switch-btn ${formType === 'register' && 'auth-switch-btn-active'}`} 
                onClick={() => setFormType('register')}
              >
                {t('auth.signin')}
              </button>
            </div>
            {formType === 'login' && <LoginForm />}
            {formType === 'register' && <RegisterForm setFormType={setFormType} />}
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