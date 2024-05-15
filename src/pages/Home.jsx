import { useLoaderData } from 'react-router-dom';
import Posts from './../components/Posts';
import Banner from '../components/Banner';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  
  return (
    <>

      <Banner/>
      <Posts />
      <NewsLetter/>
    </>
    );
};

export default Home;