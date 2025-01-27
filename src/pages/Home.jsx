import { useLoaderData } from 'react-router-dom';
import Posts from './../components/Posts';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';
import Team from '../components/Team';
import Contact from '../components/Contact';


const Home = () => {
  
  return (
    <div >

      <Banner/>
      <Posts />
      <NewsLetter/>
      <Team/>
      <Contact/>
    </div>
    );
};

export default Home;