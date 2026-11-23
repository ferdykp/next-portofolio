export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="portfolio-shell footer-inner">
        <p className="footer-meta">Ferdy Kurnia Panggabean</p>
        <p className="footer-meta">© {new Date().getFullYear()}</p>
        <a className="footer-top" href="#home">Back to top</a>
      </div>
    </footer>
  );
}
