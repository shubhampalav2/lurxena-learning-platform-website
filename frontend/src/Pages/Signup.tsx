import { useState } from 'react'
import signupImage from '../assets/signupImg.png'

type Role = 'Student' | 'Instructor'

const Signup = () => {
    const [role, setRole] = useState<Role>('Student')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <main className="signup-layout">
            <section className="signup-panel" aria-labelledby="signup-title">
                <div className="signup-copy">
                    <h1 id="signup-title">Join the millions learning to code with Lurxena for free</h1>
                    <p className="signup-intro">Build skills for today, tomorrow, and beyond. <em>Education to future-proof your career.</em></p>

                    <div className="role-switch signup-role-switch" role="tablist" aria-label="Choose account type">
                        {(['Student', 'Instructor'] as Role[]).map((item) => (
                            <button key={item} type="button" role="tab" aria-selected={role === item} className={role === item ? 'role-active' : ''} onClick={() => setRole(item)}>{item}</button>
                        ))}
                    </div>

                    <form className="signup-form" onSubmit={submitForm}>
                        <div className="signup-name-row">
                            <label><span className="field-label">First Name <span>*</span></span><input type="text" placeholder="Enter first name" autoComplete="given-name" required /></label>
                            <label><span className="field-label">Last Name <span>*</span></span><input type="text" placeholder="Enter last name" autoComplete="family-name" required /></label>
                        </div>
                        <label><span className="field-label">Email Address <span>*</span></span><input type="email" placeholder="Enter email address" autoComplete="email" required /></label>
                        <label><span className="field-label">Phone Number <span>*</span></span><span className="phone-row"><select aria-label="Country calling code" defaultValue="+91"><option value="+91">+91</option><option value="+1">+1</option><option value="+44">+44</option></select><input type="tel" placeholder="12345 67890" autoComplete="tel-national" required /></span></label>
                        <div className="signup-name-row">
                            <label><span className="field-label">Create Password <span>*</span><span className="password-info" title="Use at least 8 characters" aria-label="Use at least 8 characters">i</span></span><span className="password-field"><input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" autoComplete="new-password" minLength={8} required /><button className="eye-button" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}><EyeIcon crossed={showPassword} /></button></span></label>
                            <label><span className="field-label">Confirm Password <span>*</span></span><span className="password-field"><input type={showConfirmPassword ? 'text' : 'password'} placeholder="Enter Password" autoComplete="new-password" minLength={8} required /><button className="eye-button" type="button" aria-label={showConfirmPassword ? 'Hide password' : 'Show password'} onClick={() => setShowConfirmPassword(!showConfirmPassword)}><EyeIcon crossed={showConfirmPassword} /></button></span></label>
                        </div>
                        <button className="submit-button signup-submit" type="submit">Create Account</button>
                    </form>
                </div>
            </section>

            <section className="signup-visual" aria-label="Students learning together">
                <div className="signup-photo"><img src={signupImage} alt="Three students learning together around a tablet" /></div>
                <div className="mesh-decoration" aria-hidden="true" />
            </section>
        </main>
    )
}

function EyeIcon({ crossed }: { crossed: boolean }) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.6" />{crossed && <path d="m4 4 16 16" />}</svg>
}

export default Signup
