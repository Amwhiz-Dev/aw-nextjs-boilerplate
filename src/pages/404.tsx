export default function NotFoundPage() {
  return (
    <main className="notfound_layout">
      <div className="notfound_wrapper">
        <p className="notfound_code">404</p>

        <h1 className="notfound_title">Page not found</h1>

        <p className="notfound_message">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="notfound_actions">
          <a href="/" className="notfound_homeBtn">
            Go back home
          </a>

          {/* <a href="/support" className="notfound_supportLink">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
}
