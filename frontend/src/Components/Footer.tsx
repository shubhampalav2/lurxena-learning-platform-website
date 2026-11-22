import './Footer.css'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <section className="footer-brand-column">
        <a className="footer-brand" href="/" aria-label="Lurxena home"><span className="footer-brand-mark">L</span><span>Lurxena</span></a>
        <FooterGroup title="Company" links={['About', 'Careers', 'Affiliates']} />
        <div className="footer-socials" aria-label="Social media links">
          <a href="#facebook" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.7v8h3.4Z" /></svg></a>
          <a href="#google" aria-label="Google"><span className="google-g">G</span></a>
          <a href="#twitter" aria-label="Twitter"><svg viewBox="0 0 24 24"><path d="M21.2 6.1a7.4 7.4 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.3 7.3 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3 10.3 10.3 0 0 1-7.5-3.8 3.6 3.6 0 0 0 1.1 4.8 3.6 3.6 0 0 1-1.6-.4v.1a3.6 3.6 0 0 0 2.9 3.5 3.7 3.7 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3.5 17a10.3 10.3 0 0 0 15.9-8.7v-.5a7.4 7.4 0 0 0 1.8-1.8Z" /></svg></a>
          <a href="#youtube" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M21 7.2a2.5 2.5 0 0 0-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 7.2 26 26 0 0 0 2.6 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.3 3.1-5.3 3.1Z" /></svg></a>
        </div>
      </section>

      <section className="footer-column">
        <FooterGroup title="Resources" links={['Articles', 'Blog', 'Chart Sheet', 'Code challenges', 'Docs', 'Projects', 'Videos', 'Workspaces']} />
        <FooterGroup title="Support" links={['Help Center']} />
      </section>
      <section className="footer-column">
        <FooterGroup title="Plans" links={['Paid memberships', 'For students', 'Business solutions']} />
        <FooterGroup title="Community" links={['Forums', 'Chapters', 'Events']} />
      </section>
      <section className="footer-column footer-taxonomy">
        <FooterGroup title="Subjects" links={['AI', 'Cloud Computing', 'Code Foundations', 'Computer Science', 'Cybersecurity', 'Data Analytics', 'Data Science', 'Data Visualization', 'Developer Tools', 'DevOps', 'Game Development', 'IT', 'Machine Learning', 'Math', 'Mobile Development', 'Web Design', 'Web Development']} />
      </section>
      <section className="footer-column footer-taxonomy">
        <FooterGroup title="Languages" links={['Bash', 'C', 'C++', 'C#', 'Go', 'HTML & CSS', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Python', 'R', 'Ruby', 'SQL', 'Swift']} />
      </section>
      <section className="footer-column">
        <FooterGroup title="Career building" links={['Career paths', 'Career services', 'Interview prep', 'Professional certification', '-', 'Full Catalog', 'Beta Content']} />
      </section>
    </div>

    <div className="footer-bottom">
      <nav className="footer-legal" aria-label="Legal">
        <a href="#privacy">Privacy Policy</a><span>|</span><a href="#cookies">Cookie Policy</a><span>|</span><a href="#terms">Terms</a>
      </nav>
      <p>Made with <span className="footer-heart">♥</span> by Lurxena <span className="footer-copyright">© 2026 Lurxena</span></p>
    </div>
  </footer>
)

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return <div className="footer-group"><h2>{title}</h2><ul>{links.map((link) => <li key={link}><a href="#">{link}</a></li>)}</ul></div>
}

export default Footer
