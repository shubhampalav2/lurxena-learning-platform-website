import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="topbar">
            <a className="brand" href="#home" aria-label="Lurxena home">
                <span className="brand-mark">L</span><span>Lurxena</span>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
                <NavLink to="/">Home</NavLink>
                <a href="#catalog" className="active">Catalog <span className="chevron">⌄</span></a>
                <a href="#about">About us</a>
                <a href="#contact">Contact us</a>
            </nav>
            <div className="nav-actions">
                <button className="icon-button" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4.2 4.2" /></svg></button>
                <button className="icon-button cart-button" aria-label="Shopping cart"><svg viewBox="0 0 24 24"><path d="M3 4h2l2.1 11.1a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="9.5" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg></button>
                <button className={`nav-login`} onClick={() => navigate('/login')}>Login</button>
                <button className={`nav-signup`} onClick={() => navigate('/signup')}>Sign up</button>
            </div>
        </header>
    )
}

export default Header;