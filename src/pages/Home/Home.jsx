import Section1 from '../../layouts/Section1'
import Section2 from '../../layouts/Section2'
import Section3 from '../../layouts/Section3'
import Section4 from '../../layouts/Section4'
import Section5 from '../../layouts/Section5'
import Clients from '../../layouts/Clients'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Clients/>
       <NewsLetter/>
    </div>
  )
}

export default Home
