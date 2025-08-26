
import HeroSection from '../components/HeroSection' 
import LatestCollection from '../components/LatestCollection'
import OverPolicy from '../components/OurPolicy'
import BestSeller from '../components/BestSeller'
import NewsLatterBox from '../components/NewsLatterBox'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
      <OverPolicy/>
      <NewsLatterBox/>
    
    </div>
  )
}

export default Home