import FristFood from "../FristFood/FristFood";
import "./Fooditem.css";
import menu from "../../assets/data";
import { Component } from "react";

class Fooditem extends Component {
  render(){
  return (
    <div className="foods-container">
      {menu.map((product) => {
        const { id, title, category, price, img, desc } = product;

        return (
          <FristFood
            key={id}
            title={title}
            category={category}
            price={price}
            img={img}
            desc={desc}
          />
        );
      })}
    </div>
  );
}
}
export default Fooditem;
