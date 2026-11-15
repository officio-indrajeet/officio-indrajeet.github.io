import { userData } from "../data/userData";

export default function Footer() {
  return <footer className="footer"><div className="container"><a className="footer-name" href="#home">{userData.name}<span>.</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} {userData.name}</span><a href="#home">Back to top ↑</a><span>Based in {userData.location}</span></div></div></footer>;
}
