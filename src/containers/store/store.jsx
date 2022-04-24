import "./store.scss";
import React, { useState } from "react";
import Filter from "../../components/filter/filter";
import Mainstore from "../../components/mainstore/mainstore";
import Cart from "../../components/cart/cart";

const Store = (props) => {
  const [maxprice, setmaxprice] = useState(100000);
  const [minprice, setminprice] = useState(0);
  const [colors, setcolors] = useState({
    red: true,
    blue: true,
    yellow: true,
    green: true,
    golden: true,
  });
  const [designtemp, setdesigntemp] = useState(0);
  const [type, settype] = useState(0);
  const [sort, setsort] = useState(false);

  return (
    <div className="store">
      <div className="store-filter">
        <Filter
          setmax={setmaxprice}
          setmin={setminprice}
          setcolors={setcolors}
          colors={colors}
          setdesigntemp={setdesigntemp}
          settype={settype}
          setsort={setsort}
        />
      </div>
      <div className="store-mainstore">
        <Mainstore
          max={maxprice}
          min={minprice}
          designtemp={designtemp}
          colors={colors}
          type={type}
          sort={sort}
        />
      </div>
      <div className="store-cart">
        <Cart cartitems={props.cartitems} setcartitems={props.setcartitems} />
      </div>
    </div>
  );
};

export default Store;
