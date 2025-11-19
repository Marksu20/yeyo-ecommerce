import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerCarousel from '../components/BannerCarousel'
import InspireSection from '../components/InspireSection'
import SecondBanner from '../components/SecondBanner'
import SecondBannerCarousel from '../components/SecondBannerCarousel'
import AdContainer from '../components/AdContainer'
import BestSeller from '../components/BestSeller'
import QuickLinks from '../components/QuickLinks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <BannerCarousel />
      <AdContainer />
      <InspireSection />
      <SecondBannerCarousel />
      <AdContainer />
      <BestSeller />
      <Footer />
    </>
  )
}

export default Home
