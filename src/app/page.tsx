import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>

        <div>
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

          <div className={styles.card}>
            <iframe id="sc-widget" width="100%" height="400" className={styles.soundcloud}
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1472005231&color=%23d50000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.center}>
            <button className={styles.buttonAdd}>
              <input type="file"></input>
            </button>
          </div>
          <div className={styles.center}>

            <h2>
              Add to your Board.
            </h2>
          </div>
          <div className={styles.grid}>
            <Image
              src="/profile.png"
              width={250}
              height={250}
              alt="Picture"
            />
            <Image
              src="/profile.png"
              width={250}
              height={250}
              alt="Picture"
            />
            <Image
              src="/profile.png"
              width={250}
              height={250}
              alt="Picture"
            />
            <Image
              src="/profile.png"
              width={250}
              height={250}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
