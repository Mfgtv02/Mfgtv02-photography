import Link from "next/link";
import styles from "./homegallery.module.css"; 

const homegallery = () => {
  return (
    <div>
      <div className={styles.image}>
          <img src="/avatar.png" alt="image1" className={styles.imagehight} />
          <img src="/avatar.png" alt="image2" className={styles.imagehight} />
          <img src="/avatar.png" alt="image3" className={styles.imagehight} /> 
      </div>

      <div className={styles.imagedown}>
          <img src="/avatars.png" alt="image1" className={styles.imagehight} />
          <img src="/avatars.png" alt="image2" className={styles.imagehight} />
          <img src="/avatars.png" alt="image3" className={styles.imagehight} /> 
      </div>    
    </div>
  );
};

export default homegallery;