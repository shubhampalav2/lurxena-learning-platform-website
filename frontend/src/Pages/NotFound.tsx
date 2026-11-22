import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="not-found-page">
    <div className="not-found-art" aria-hidden="true">
      <div className="not-found-orbit orbit-one" />
      <div className="not-found-orbit orbit-two" />
      <div className="not-found-number">404</div>
      <div className="not-found-book">
        <svg viewBox="0 0 96 72" fill="none">
          <path d="M48 18c-10-8-23-9-38-5v43c15-4 28-3 38 5V18Z" />
          <path d="M48 18c10-8 23-9 38-5v43c-15-4-28-3-38 5V18Z" />
          <path d="M48 18v43M18 25c9-2 17-1 24 2M78 25c-9-2-17-1-24 2M18 35c9-2 17-1 24 2M78 35c-9-2-17-1-24 2" />
        </svg>
      </div>
    </div>
    <div className="not-found-copy">
      <p className="not-found-eyebrow">PAGE NOT FOUND</p>
      <h1>Looks like you took a wrong turn.</h1>
      <p>The page you’re looking for isn’t here. It may have moved, or the link may be incorrect.</p>
      <Link className="not-found-home" to="/">Back to home <span aria-hidden="true">→</span></Link>
    </div>
  </main>
)

export default NotFound
