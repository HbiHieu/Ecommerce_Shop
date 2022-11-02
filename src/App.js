import Homepage from "./pages/HomePage/homepage.component";
import NoMatch from "./components/Page404/NoMatch.component";
import { Route , Switch , Routes} from 'react-router-dom'

function App() {
   
  const AboutPage = (props) => {
    console.log(props)
    return (
    <div>
      <h1>AboutPage</h1>
      </div>
    )
  }
   
  return (
     <div>
      <Routes>
      <Route path="/" element={<Homepage/>}>
      </Route>
      <Route path="/shop/hats" element={<AboutPage/>}>
      </Route>
      <Route path="*" element={<NoMatch />}></Route>
      </Routes>
     </div>
  );
}

export default App;
