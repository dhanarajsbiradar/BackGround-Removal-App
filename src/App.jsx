import Menubar from "./components/Menubar";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./components/UserSyncHandler.jsx";
const App = () => {
  return (
    <div>
      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <Routes>
        <Route path ="/" element ={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
