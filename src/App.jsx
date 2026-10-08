import "./App.css";
import Fooditem from "./components/FoodItem/Fooditem";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="all-container">
        <Header />
        <Fooditem />
        <Footer/>
       
        
      </div>
    </>
  );
}

export default App;
