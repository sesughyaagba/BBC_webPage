import Header from './Components/Header/Header';
import EditorPick from './Components/EditorPick';
import FeaturedProducts from './Components/FeaturedProducts';
import MiddleBanner from './Components/MiddleBanner';
import AsianWears from './Components/AsianWears';
import FeaturedPostsHeader from './Components/FeaturedPostsHeader';
import FeaturedPostsCard from './Components/FeaturedPostsCard';
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <EditorPick />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <MiddleBanner />
      </div>
      <div>
        <AsianWears />
      </div>
      <div>
        <FeaturedPostsHeader />
      </div>
      <div><FeaturedPostsCard/></div>
    </>
  );
};

export default App;
