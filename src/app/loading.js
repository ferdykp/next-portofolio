export default function Loading() {
  return (
    <main className="portfolio-loading" id="main" aria-busy="true" aria-label="Loading portfolio">
      <p className="loading-status" role="status">Preparing the work</p>
      <section className="loading-hero" aria-hidden="true">
        <div className="loading-wordmark">FERDY<span /></div>
        <div className="loading-title">
          <i className="skeleton-block skeleton-line-wide" />
          <i className="skeleton-block skeleton-line-medium" />
          <i className="skeleton-block skeleton-line-short" />
        </div>
        <i className="skeleton-block skeleton-portrait" />
        <div className="loading-track"><i /></div>
      </section>
      <section className="loading-work" aria-hidden="true">
        <i className="skeleton-block skeleton-section-title" />
        <i className="skeleton-block skeleton-work-image" />
        <div className="loading-rows">
          {Array.from({ length: 5 }, (_, index) => <i className="skeleton-block skeleton-row" key={index} />)}
        </div>
      </section>
    </main>
  );
}
