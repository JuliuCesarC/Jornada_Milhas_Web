
import BannerHome from '@/components/HomePage/BannerHome'
import Destination from '@/components/HomePage/Destination'
import SearchDestination from '@/components/HomePage/SearchDestination'
import Testimonial from '@/components/HomePage/Testimonial'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHome />
      <SearchDestination />
      <Destination />
      <Testimonial />
      <h1>Hello World!!!!</h1>
    </main>
  )
}
