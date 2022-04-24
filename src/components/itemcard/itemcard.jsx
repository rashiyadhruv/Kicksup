import "./itemcard.scss";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const itemcard = (props) => {
  return (
    <Link to={`/store/shoedesigner/${props.data.id}`} className="linking">
      <div className="itemcard-wrapper">
        <div className="itemcard-image">
          <img src={props.data.imgurl} alt="item" />
        </div>
        <div className="itemcard-text">
          <div className="itemcard-text-name-and-color">
            <div className="itemcard-text-name">{props.data.name}</div>
            <div className={`itemcard-text-color ${props.data.color}box`}></div>
          </div>
          <div className="itemcard-text-price-and-rating">
            <div className="itemcard-text-price">Rs. {props.data.price}/-</div>
            <div className="itemcard-text-rating">
              <Rating
                ratingValue={props.data.rating * 10}
                size={15}
                allowHalfIcon
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default itemcard;
