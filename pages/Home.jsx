import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerCarousel from '../components/BannerCarousel'
import InspireSection from '../components/InspireSection'
import SecondBanner from '../components/SecondBanner'
import BestSeller from '../components/BestSeller'
import QuickLinks from '../components/QuickLinks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <BannerCarousel />
      <InspireSection />
      <SecondBanner />
      <BestSeller />
      {/* <QuickLinks /> */}
      <Footer />
    </>
  )
}

export default Home
