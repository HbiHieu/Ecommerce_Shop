import { useState ,useEffect } from 'react';

import { Route , Routes , useNavigate } from 'react-router-dom'

import ShopPage from "./pages/ShopPage/ShopPage.component";
import Homepage from "./pages/HomePage/homepage.component";
import NoMatch from "./components/Page404/NoMatch.component";
import Header from './layout/Header/Header';

import { auth , handleAddUserToDB } from './firebase/firebase.util';
import { onAuthStateChanged } from 'firebase/auth';
import SignInAndSignUp from './pages/SignIn-SignUp/SignInAndSignUp';

import { userSlice } from "./redux/user/userSlice" ;
import { useDispatch } from 'react-redux';

function App() {

  const [isLogin,setIsLogin] = useState(null) ;
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;

  useEffect( () => {
    const checkUser = onAuthStateChanged(auth , (user) => {
      if(user) {
        handleAddUserToDB(user);
        setIsLogin(true) ;
        navigate("/");
        dispatch(
          userSlice.actions.setUser({
            id: user.uid ,
            name : user.displayName ,
            picture : user.photoURL ,
            email : user.email ,
          })
        )
      } 
      else {
        setIsLogin(false) ;
        console.log("user signed out")
      }
    });
    return () => checkUser() ;
  },[] ) 
   
  return (
     <div>
      <Header
      isLogin={isLogin} 
      />
      <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/shop" element={<ShopPage/>}>
      </Route>
      <Route path="/signInAndSignUp" element={<SignInAndSignUp/>}>
      </Route>
      <Route path="*" element={<NoMatch />}>
      </Route>
      </Routes>
     </div>
  );
}

export default App;
