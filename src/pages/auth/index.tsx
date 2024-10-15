import "./Auth.css";
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-container__content">
        <h1 className="auth-title">Welcome to the SVault!</h1>
        <h2 className="auth-desc">Press on the button to log in as a Guest</h2>
        <button className="auth-btn">
          <img src="/logo.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
