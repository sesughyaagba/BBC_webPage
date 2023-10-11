import Header from './Components/Header/Header';
import EditorPick from './Components/EditorPick';
import FeaturedProducts from './Components/FeaturedProducts';
import MiddleBanner from './Components/MiddleBanner';
import AsianWears from './Components/AsianWears';
import FeaturedPosts from './Components/FeaturedPosts/FeaturedPosts';
import Footer from './Components/Footer /Footer';
function App() {
  return (
    <>
        <Header />
        <EditorPick />
        <FeaturedProducts />
        <MiddleBanner />
        <AsianWears />
      <FeaturedPosts/>
     <Footer /> 
    </>
  );
};

export default App;
