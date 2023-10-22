import Image from 'next/image'
import styles from './page.module.css'

export default function EditProfile() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.card}>
          <Image
            className={styles.img}
            src="/profile.png"
            width={100}
            height={100}
            alt="Picture"
          />
          <h2>
            SHREDDERxBOY
          </h2>
          <p>@SHREDDERxBOY</p>
          <a
            href="https://justindavenport.space/"
            target="_blank"
            rel="noopener noreferrer"
          >justindavenport.space</a>
          <button className={styles.button}>
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  )
}
