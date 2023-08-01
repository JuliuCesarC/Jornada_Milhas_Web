
import BannerHome from '@/components/HomePage/BannerHome'
import Destination from '@/components/HomePage/Destination'
import SearchDestination from '@/components/HomePage/SearchDestination'
import Testimonial from '@/components/HomePage/Testimonial'
import styles from './page.module.css'
import BannerFooter from '@/components/HomePage/BannerFooter'

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHome />
      <SearchDestination />
      <Destination />
      <Testimonial />
      <BannerFooter />
    </main>
  )
}
