import BannerHome from '@/components/BannerHome'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHome />
      <h1>Hello World!!!!</h1>
    </main>
  )
}
