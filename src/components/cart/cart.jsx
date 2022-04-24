import "./cart.scss";
import ImageBuilder from "../imagebuilder/imagebuilder";
import bag from "../../assets/images/bag.svg";
const cart = (props) => {
  const removeitem = (id) => {
    let newcart = [...props.cartitems];
    newcart.splice(id, 1);
    props.setcartitems(newcart);
    console.log(newcart);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h1 className="cart-header-title">CART</h1>
        <div className="cart-header-icon">
          <img src={bag} alt="bag" />
        </div>
      </div>
      <div className="cart-body">
        {props.cartitems.map((cartitem, i) => (
          <div className="cart-item" key={i}>
            <div className="cart-item-image">
              <ImageBuilder
                front={cartitem[1].front}
                middle={cartitem[1].middle}
                back={cartitem[1].back}
                sole={cartitem[1].sole}
              />
            </div>

            <div className="cart-item-info">
              <div className="cart-item-info-name">
                {" "}
                {cartitem[0].data.name}
              </div>
              <div className="cart-item-info-price">
                {" "}
                Price: {cartitem[0].data.price}/-
              </div>
              <div className="cart-item-info-size">
                {" "}
                Size: {cartitem[1].size}
              </div>
              <div
                className="cart-item-info-remove"
                onClick={() => removeitem(i)}
              >
                {" "}
                Remove{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-footer-details">
          <div className="cart-footer-details-home">Home</div>
          <div className="cart-footer-details-date">Select Date</div>
        </div>
        <div className="cart-footer-order">
          <div className="cart-footer-order-box">order now</div>
        </div>
      </div>
    </div>
  );
};

export default cart;
