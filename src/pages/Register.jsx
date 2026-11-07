import "./Register.css";

function Register({ onClose, onLogin }) {
    return (
        <div className="auth-overlay" onClick={onClose}>

            <div
                className="register-card"
                onClick={(e) => e.stopPropagation()}
            >

                <button className="auth-close" onClick={onClose}>
                    ×
                </button>

                <h1>Create Account</h1>

                <p className="register-subtitle">
                    Join SevaSetu and become a part of the community
                </p>

                <form>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>

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
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Register
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?{" "}
                    <button
                        type="button"
                        className="auth-switch"
                        onClick={onLogin}
                    >
                        Login
                    </button>
                </p>

            </div>
        </div>
    );
}

export default Register;