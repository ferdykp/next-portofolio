export default function ProjectLoading() {
  return (
    <main className="case-main case-loading" id="main" aria-busy="true" aria-label="Loading project case study">
      <p className="loading-status" role="status">Opening the case study</p>
      <div className="loading-case-heading" aria-hidden="true">
        <i className="skeleton-block skeleton-line-short" />
        <i className="skeleton-block skeleton-case-title" />
        <i className="skeleton-block skeleton-case-copy" />
      </div>
      <i className="skeleton-block skeleton-case-image" aria-hidden="true" />
      <div className="loading-case-facts" aria-hidden="true">
        <i className="skeleton-block" />
        <i className="skeleton-block" />
        <i className="skeleton-block" />
      </div>
      <div className="loading-track"><i /></div>
    </main>
  );
}
