import styles from "./FristFood.module.css"
import react, { Component } from "react";
class  FristFood extends Component  {
  render(){

 
  const { title, price, category, img, desc } =this.props;
  return (
    <div className={styles["single-food"]}>
      <h3 className={styles["food-category"]}>{category}</h3>
      <div className={styles["img"]}>
        <img src={img} alt={title} />
      </div>
      <div className={styles["title-price"]}>
        <h3>{title}</h3>

        <p>${price}</p>
      </div>

      <div className={styles["food-desc"]}>{desc}</div>
    </div>
  );
}
}
export default FristFood
