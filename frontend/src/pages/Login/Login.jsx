import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import AuthService from "../../services/auth.service";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const navigate = useNavigate();
  const handleLogin = (formValue) => {
    formValue.preventDefault();
    const { email, password } = formValue;

    AuthService.login(email, password)
    .then(() => {
        navigate("/perfil", { replace: true });
        // window.location.reload();
      })
      .catch((err) =>{
        console.log(err)
      });
  }

// ------------------ WORKING 4 U -------------------------------------------



  return(
  <div className="bg-base-300 h-full">
    <div className="hero pt-20 pb-20">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-96">
            {/* ---------------- LOGIN ---------------- */}
            <form action="/dashboard" onSubmit={handleLogin}>
              <a className="btn btn-ghost normal-case text-xl relative right-3.5" href="/">
                <img src={logo} alt="Edullka Logo" className="w-10 mr-1" />
                edullka
              </a>
              <p className="font-bold text-2xl mb-6">
                Bienvenido a Edullka
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text relative right-1">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text relative right-1">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover relative right-1">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn bg-brand-pantone1925C border-brand-pantone1925C" value="Login" />
              </div>
            </form>
            {/* ---------------- LOGIN ---------------- */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )};

export default Login;
