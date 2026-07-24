import { SvgEmail } from "../../../icons/SvgEmail"
import { SvgLock } from "../../../icons/SvgLock"
import { SvgUser } from "../../../icons/SvgUser"

export const RegisterForm = () => {
    return(
        <>
        <form className="auth-form">
            <label>
                <div>
                    <SvgUser className={''} />
                </div>
                <input type="email" placeholder="نام خود را وارد کنید..."/>
            </label>
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

            <button className="auth-form-btn">ثبت نام</button>
        </form>
        </>
    )
}