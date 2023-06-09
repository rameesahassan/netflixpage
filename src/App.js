
import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import RowPost from './Component/RowPost/RowPost';
import {bannerimg,action, comedy, documentary, horror, originals, romance} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner url={bannerimg}/>
      <RowPost  url={originals} title='Netflix Originals' />
      <RowPost  url={action} title='Action' isSmall />
      <RowPost  url={comedy} title='Comedy' isSmall />
      <RowPost  url={romance} title='Romance' isSmall />
      <RowPost  url={horror} title='Horror' isSmall />
      <RowPost  url={documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
