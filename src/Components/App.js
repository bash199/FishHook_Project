import Navbar from "./Navbar";
import Routes from "./routes/Routes";
import {AppBox} from "./style/AppBoxUI";

function App() {
   return (
      <AppBox>
         <Navbar />
         <Routes />
      </AppBox>
   );
}

export default App;
