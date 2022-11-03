import { Route , Routes} from 'react-router-dom'


import ShopPage from "./pages/ShopPage/ShopPage.component";
import Homepage from "./pages/HomePage/homepage.component";
import NoMatch from "./components/Page404/NoMatch.component";
import Header from './layout/Header/Header';
import SignIn from './components/SignIn/SignIn.component';

function App() {
   
  return (
     <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/shop" element={<ShopPage/>}>
      </Route>
      <Route path="/signIn" element={<SignIn/>}>
      </Route>
      <Route path="*" element={<NoMatch />}>
      </Route>
      </Routes>
     </div>
  );
}

export default App;
