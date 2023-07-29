import BannerHome from '@/components/BannerHome'
import styles from './page.module.css'
import SearchDestination from '@/components/SearchDestination'

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHome />
      <SearchDestination />
      <h1>Hello World!!!!</h1>
    </main>
  )
}
