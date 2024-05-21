import { Link } from "react-router-dom";
import bg from '../assets/login/pngtree-vector-abstract-white-background-with-geometric-design-of-hexago-picture-image_1149954.jpg'


export default function LoginRegister() {
    return (
        <div className="login-alll">
            <div className="img-bg">

            </div>
            <div className="login">
                <h1>
                    YOUR ACCOUNT <br />
                    FOR EVERYTHING <br /> NIKE
                </h1>
                <input className="login-input" placeholder="Full Name" type="Full Name" />
                <input className="login-input" placeholder="Your Email" type="Your Email" />
                <input className="login-input" placeholder="Password" type="password" />
                <input className="login-input" placeholder="Password Again" type="password" />
                <div className="login-bottom">
                    <div className="login-bottom-left">
                        <input className="login-chekbox" type="checkbox" />
                        <span>Keep me signed in</span>
                    </div>

                    <div className="login-bottom-right">
                        <span>Forgotten your password?</span>
                    </div>
                </div>
                <p>By logging in, you agree to Nike's <span>Privacy Policy</span><br />
                    and Terms of Use.</p>
                    <Link to="/">    <button className="btnlink"> Sign Up </button></Link>  
                <p>have a account? <Link to="/Login">Sign In</Link></p>
            </div>
        </div>
    );
}


