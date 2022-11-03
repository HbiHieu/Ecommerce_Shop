import { Route , Routes} from 'react-router-dom'


import ShopPage from "./pages/ShopPage/ShopPage.component";
import Homepage from "./pages/HomePage/homepage.component";
import NoMatch from "./components/Page404/NoMatch.component";
import Header from './layout/Header/Header';

function App() {
   
  return (
     <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/shop" element={<ShopPage/>}>
      </Route>
      <Route path="*" element={<NoMatch />}></Route>
      </Routes>
     </div>
  );
}

export default App;
