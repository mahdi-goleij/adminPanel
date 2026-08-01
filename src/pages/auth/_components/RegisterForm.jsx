import { useTranslation } from "react-i18next";
import { SvgEmail } from "../../../icons/SvgEmail";
import { SvgLock } from "../../../icons/SvgLock";
import { SvgUser } from "../../../icons/SvgUser";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/auth-hooks";
import { BtnLoader } from "../../../components/BtnLoader/BtnLoader";
import { SvgProfile } from "../../../icons/SvgProfile";

export const RegisterForm = ({ setFormType }) => {
  const formRef = useRef();
  const navigation = useNavigate();
  const { mutate, isPending } = useRegister(setFormType);

  const handleRegister = (e) => {
    e.preventDefault();
    let email = formRef.current["email"].value;
    let password = formRef.current["password"].value;
    let fullName = formRef.current["fullName"].value;
    let postData = {
      email,
      password,
      fullName,
    };
    mutate(postData);
  };

  const { t } = useTranslation();
  return (
    <>
      <form onSubmit={handleRegister} ref={formRef} className="auth-form">
        <label>
          <div>
            <SvgUser className={""} />
          </div>
          <input
            name={"fullName"}
            type="text"
            placeholder={t("auth.register_name_place")}
          />
        </label>
        <label>
          <div>
            <SvgEmail className={""} />
          </div>
          <input
            name={"email"}
            type="email"
            placeholder={t("auth.register_email_place")}
          />
        </label>
        <label>
          <div>
            <SvgLock className="" />
          </div>
          <input
            name={"password"}
            type="password"
            placeholder={t("auth.register_pass_place")}
          />
        </label>

        {isPending ? (
          <button className="auth-form-btn-loading">
            <BtnLoader />
          </button>
        ) : (
          <button className="auth-form-btn">{t("auth.register_btn")}</button>
        )}
      </form>
    </>
  );
};
