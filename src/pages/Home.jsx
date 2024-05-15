import { useLoaderData } from 'react-router-dom';
import Posts from './../components/Posts';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';
import Team from '../components/Team';


const Home = () => {
  
  return (
    <>

      <Banner/>
      <Posts />
      <NewsLetter/>
      <Team/>
    </>
    );
};

export default Home;