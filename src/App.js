import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import Router from './routers';

import { auth , handleAddUserToDB } from './firebase/firebase.util';
import { onAuthStateChanged } from 'firebase/auth';

import { userSlice } from "./redux/user/userSlice" ;
import { useDispatch } from 'react-redux';

import ToastMessage from './components/Toast/toast.component';
import { AppContext } from './context';


function App() {

  const {toastState} = useContext(AppContext) ;

  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;

  useEffect( () => {
    const checkUser = onAuthStateChanged(auth , (user) => {
      if(user) {
        handleAddUserToDB(user);
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
        console.log("user signed out")
      }
    });
    return () => checkUser() ;
  },[] ) ;

  return (
     <div style={{
      position:"relative" 
     }}>
      <Router/>
      {
        toastState.isShow && 
       <ToastMessage
       message = {toastState.message} 
       />
      }
     </div>
  );
}

export default App;
