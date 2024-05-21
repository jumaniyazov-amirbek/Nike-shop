import bg from '../assets/login/pngtree-vector-abstract-white-background-with-geometric-design-of-hexago-picture-image_1149954.jpg'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-all">
      <div className="img-bg">
      </div>
      <div className="login">
        <h1>
          YOUR ACCOUNT <br />
          FOR EVERYTHING <br /> NIKE
        </h1>
        <input className="login-input" placeholder="Email address" type="text" />
        <input className="login-input" placeholder="Password" type="password" />
        <div className="login-bottom">
          <div className="login-bottom-left">
            <input className="login-chekbox" type="checkbox" />
            <span>Keep me signed in</span>
          </div>

          <div className="login-bottom-right">
            <span >Forgotten your password?</span>
          </div>
        </div>
        <p>By logging in, you agree to Nike's <a href="">Privacy Policy</a><br />
          and Terms of Use.</p>
   <Link to="/">    <button className="btnlink">  Sign Up</button></Link>  
        <p>Don’t have a account? <Link to="/LoginRegister">Register</Link></p>
      </div>
    </div>
  );
}
