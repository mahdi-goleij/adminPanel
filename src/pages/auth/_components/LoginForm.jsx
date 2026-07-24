import { SvgEmail } from "../../../icons/SvgEmail"
import { SvgLock } from "../../../icons/SvgLock"

export const LoginForm = () => {
    return(
        <>
        <form className="auth-form">
            <label>
                <div>
                    <SvgEmail className={''} />
                </div>
                <input type="email" placeholder="ایمیل خود را وارد کنید..."/>
            </label>
            <label>
                <div>
                    <SvgLock className="" />
                </div>
                <input type="password" placeholder="رمز خود را وارد کنید..."/>
            </label>

            <button className="auth-form-btn">ورود</button>
        </form>
        </>
    )
}