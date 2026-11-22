import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Auth() {

    type Role = 'Student' | 'Instructor' | 'Admin'

    const navigate = useNavigate();
    const [role, setRole] = useState<Role>('Student');
    const [showPassword, setShowPassword] = useState(false)


    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <main className="auth-layout" id="home">
            <section className="auth-panel" aria-labelledby="auth-title">
                <div className="auth-copy">
                    <h1 id="auth-title">Welcome Back</h1>
                    <p className="intro">Build skills for today, tomorrow, and beyond. <em>Education<br className="desktop-break" /> to future-proof your career.</em></p>

                    <div className="role-switch" role="tablist" aria-label="Choose account type">
                        {(['Student', 'Instructor', 'Admin'] as Role[]).map((item) => (
                            <button key={item} role="tab" aria-selected={role === item} className={role === item ? 'role-active' : ''} onClick={() => { setRole(item) }}>
                                {item}
                            </button>
                        ))}
                    </div>

                    <form className="auth-form" onSubmit={submitForm}>
                        <label><span className="field-label">Email Address <span>*</span></span><input type="email" placeholder="Enter email address" required autoComplete="email" /></label>
                        <label><span className="field-label">Password <span>*</span></span><span className="password-field"><input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" required minLength={8} /><button className="eye-button" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}><svg viewBox="0 0 24 24"><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.6" /></svg></button></span></label>
                        <button className="forgot-button" type="button">Forgot password</button>
                        <button className="submit-button" type="submit">Sign in</button>
                    </form>
                    <p className="mode-hint">New to Lurxena?<button onClick={() => navigate('/signup')}>Create an account</button></p>
                </div>
            </section>

            <section className="visual-panel" aria-label="Student learning with a tablet">
                <div className="photo-frame">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=85" alt="Student smiling as she studies with a tablet" />
                </div>
                <div className="mesh-decoration" aria-hidden="true" />
                <div className="visual-caption"><span className="caption-dot" /> Learning that moves you forward <span>→</span></div>
            </section>
        </main>
    )
}

export default Auth;