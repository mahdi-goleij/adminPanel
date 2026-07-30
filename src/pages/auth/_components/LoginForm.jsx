import { useTranslation } from "react-i18next";
import { SvgEmail } from "../../../icons/SvgEmail";
import { SvgLock } from "../../../icons/SvgLock";
import { useRef } from "react";
import { useLogin } from "../../../hooks/auth-hooks";
import { BtnLoader } from "../../../components/BtnLoader/BtnLoader";

export const LoginForm = () => {
  const formRef = useRef();
  const { t } = useTranslation();
  const { mutate, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    let email = formRef.current["email"].value;
    let password = formRef.current["password"].value;
    let postData = {
      email,
      password,
    };
    mutate(postData);
  };

  return (
    <>
      <form onSubmit={handleLogin} ref={formRef} className="auth-form">
        <label>
          <div>
            <SvgEmail className={""} />
          </div>
          <input
            name="email"
            type="email"
            placeholder={t("auth.login_email_place")}
          />
        </label>
        <label>
          <div>
            <SvgLock className="" />
          </div>
          <input
            name="password"
            type="password"
            placeholder={t("auth.login_pass_place")}
          />
        </label>
        {isPending ? (
          <button className="auth-form-btn-loading">
            <BtnLoader />
          </button>
        ) : (
          <button className="auth-form-btn">{t("auth.login_btn")}</button>
        )}
      </form>
    </>
  );
};
