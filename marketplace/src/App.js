import './App.css';
import TopMenu from './components/top-menu/TopMenu';
import HeroSection from './components/hero-section/HeroSection';
import About from './components/amazeNFT/about';
import Collection from './components/collection/collection';
import CollectionsFeatured from './components/FeaturedNFT/collectionsFeatured';
import SignUp from './components/signUp/signUp';
import Discover from './components/discover/Discover';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <TopMenu/>
      <HeroSection/>
      <About/>
      <Collection/>
      <CollectionsFeatured/>
      <SignUp/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
