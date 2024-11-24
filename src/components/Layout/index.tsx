import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Social Network</Link>
      </div>
      
      <div className={styles.search}>
        <input 
          type="search" 
          placeholder="Search..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/messages" className={styles.navLink}>Messages</Link>
        <Link to="/profile" className={styles.navLink}>Profile</Link>
        
        <div className={styles.userMenu}>
          <button className={styles.userButton}>
            <img src="/default-avatar.png" alt="User" className={styles.avatar} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;