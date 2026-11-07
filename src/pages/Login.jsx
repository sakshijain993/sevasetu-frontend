import "./Login.css";

function Login({ onClose, onRegister }) {

    return (
        <div className="auth-overlay" onClick={onClose}>

            <div
                className="login-card"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="auth-close"
                    onClick={onClose}
                >
                    ×
                </button>

                <h1>Welcome Back</h1>

                <p className="login-subtitle">
                    Login to your SevaSetu account
                </p>

                <form>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>


                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>


                <p className="register-text">

                    Don't have an account?{" "}

                    <button
                        type="button"
                        className="auth-switch"
                        onClick={onRegister}
                    >
                        Register
                    </button>

                </p>

            </div>

        </div>
    );
}

export default Login;