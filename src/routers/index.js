import ShopPage from "../pages/ShopPage/ShopPage.component";
import Homepage from "../pages/HomePage/homepage.component";
import NoMatch from "../components/Page404/NoMatch.component";
import Header from '../layout/Header/Header';
import CheckoutPage from '../pages/checkout/checkout.component';
import CollectionOverview from '../pages/Collection/collectionOverview';
import SignInAndSignUp from '../pages/SignIn-SignUp/SignInAndSignUp';

import { useRoutes } from "react-router-dom";

export default function Router() {
    return useRoutes([
        {
            path:"/" ,
            element : <Header/> ,
            children:[
                {
                    element:<Homepage/> , 
                    index : true ,
                } ,
                {
                    path:"shop" ,
                    element : <ShopPage/> ,
                } ,
                {
                    path:"/checkout" ,
                    element: <CheckoutPage/>
                } ,
                {
                    path:"/shop/:category" ,
                    element:<CollectionOverview/>
                }
            ]
        } ,
        {
            path:"/signInAndSignUp" ,
            element : <SignInAndSignUp/>
        } ,
        {
            path:"*" ,
            element: <NoMatch/>
        }
    ])
}