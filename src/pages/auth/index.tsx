import "./Auth.css";
import { useMutation } from "react-query";
import { mutationLogin } from "./mutation";
const Auth = () => {
  const {data, mutate} = useMutation({mutationKey: ["login"], mutationFn: mutationLogin})
  const handleLogin = async () => {
    await mutate()
    localStorage.setItem("guest_session_id", data.guest_session_id)
  }
  return (
    <div className="auth-container">
      <div className="auth-container__content">
        <h1 className="auth-title">Welcome to the SVault!</h1>
        <h2 className="auth-desc">Press on the button to log in as a Guest</h2>
        <button className="auth-btn" onClick={handleLogin}>
          <img src="/logo.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
