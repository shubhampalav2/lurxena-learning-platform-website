import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { courses } from '../data/courses'

const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [catalogOpen, setCatalogOpen] = useState(false)
    const closeMenu = () => {
        setMenuOpen(false)
        setCatalogOpen(false)
    }
    const catalogActive = pathname.startsWith('/catalog')

    return (
        <header className="topbar">
            <NavLink className="brand" to="/" aria-label="Lurxena home" onClick={closeMenu}>
                <span className="brand-mark">L</span><span>Lurxena</span>
            </NavLink>
            <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} id="primary-navigation" aria-label="Main navigation">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
                <div className="catalog-control">
                    <button type="button" className={catalogActive ? 'catalog-trigger active' : 'catalog-trigger'} aria-expanded={catalogOpen} aria-controls="catalog-dropdown" onClick={() => setCatalogOpen(!catalogOpen)}>
                        Catalog <span className={catalogOpen ? 'chevron is-rotated' : 'chevron'}>⌄</span>
                    </button>
                    {catalogOpen && <div className="catalog-dropdown" id="catalog-dropdown">
                        <NavLink to="/catalog" className="catalog-all-link" onClick={closeMenu}>Browse all courses <span aria-hidden="true">→</span></NavLink>
                        <div className="catalog-course-list">
                            {courses.map((course) => <NavLink key={course.slug} to={'/catalog/' + course.slug} onClick={closeMenu}>{course.title}</NavLink>)}
                        </div>
                    </div>}
                </div>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About us</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact us</NavLink>
            </nav>
            <div className="nav-actions">
                <button className="icon-button search-button" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4.2 4.2" /></svg></button>
                <button className="icon-button cart-button" aria-label="Shopping cart"><svg viewBox="0 0 24 24"><path d="M3 4h2l2.1 11.1a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="9.5" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg></button>
                <button className="nav-login" onClick={() => { closeMenu(); navigate('/login') }}>Login</button>
                <button className="nav-signup" onClick={() => { closeMenu(); navigate('/signup') }}>Sign up</button>
                <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => { setMenuOpen(!menuOpen); setCatalogOpen(false) }}>
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}

export default Header
