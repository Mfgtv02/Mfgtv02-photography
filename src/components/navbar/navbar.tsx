import Link from "next/link";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/avatar.png" alt="Logo" className={styles.logoImage} />
      </div>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/nima" className={styles.link}>Gallery</Link>
      <Link href="/nima" className={styles.link}>Social Media</Link>
      <Link href="/nima" className={styles.link}>Contact</Link>
    </nav>
  );
};

export default Navbar;