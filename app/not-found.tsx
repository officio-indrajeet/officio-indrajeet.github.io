export default function NotFound() {
  return (
    <main className="section section-soft">
      <div className="container">
        <span className="section-kicker">404 / Not found</span>
        <h1>That page isn’t here.</h1>
        <p className="section-deck">The link may be outdated or the page may have moved.</p>
        <a className="button button-solid" href="/">Return to portfolio <span>↗</span></a>
      </div>
    </main>
  );
}
