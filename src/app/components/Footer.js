import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-meta">Ferdy Kurnia Panggabean</p>
        <p className="footer-meta">© {new Date().getFullYear()}</p>
        <Link className="footer-top" href="/#home">Back to top</Link>
      </div>
    </footer>
  );
}
