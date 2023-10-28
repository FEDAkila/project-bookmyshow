import  {Nav} from './Component/Header/Nav'
import {Router} from './Component/Router'
import { Provider } from "react-redux";
import { Store } from "./Component/Store"; 
import  {Footer} from "./Component/Footer/Footer"


function App() {
  return (
    <div className="App">
        <Nav/>
        <Provider store={Store}>
     <Router/>
     </Provider>
     <Footer/>
    </div>
  );
}

export default App;
