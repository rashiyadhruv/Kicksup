import "./shoedesigner.scss";
import React, { useState } from "react";
import Cart from "../../components/cart/cart";
import ImageBuilder from "../../components/imagebuilder/imagebuilder";
import Checked from "../../assets/images/check.svg";
import Arrow from "../../assets/images/arrow.svg";
import { Rating } from "react-simple-star-rating";
import { items } from "../../components/mainstore/utils/items";
import { Link } from "react-router-dom";

const assigndata = () => {};

const Shoedesigner = (props) => {
  var myMainSite = window.location.pathname;
  var splitUrl = myMainSite.split("/");

  const [front, setfront] = useState(1);
  const [middle, setmiddle] = useState(1);
  const [back, setback] = useState(1);
  const [sole, setsole] = useState(1);
  const [size, setsize] = useState(7);
  const [data, setdata] = useState(items[splitUrl[3]]);

  const onfrontchangeone = () => {
    setfront(1);
  };
  const onfrontchangetwo = () => {
    setfront(2);
  };
  const onfrontchangethree = () => {
    setfront(3);
  };
  const onmiddlechangeone = () => {
    setmiddle(1);
  };
  const onmiddlechangetwo = () => {
    setmiddle(2);
  };
  const onmiddlechangethree = () => {
    setmiddle(3);
  };
  const onbackchangeone = () => {
    setback(1);
  };
  const onbackchangetwo = () => {
    setback(2);
  };
  const onbackchangethree = () => {
    setback(3);
  };
  const onsolechangeone = () => {
    setsole(1);
  };
  const onsolechangetwo = () => {
    setsole(2);
  };
  const onsolechangethree = () => {
    setsole(3);
  };
  const onsizechangeseven = (e) => {
    setsize(7);
  };
  const onsizechangeeight = (e) => {
    setsize(8);
  };
  const onsizechangenine = (e) => {
    setsize(9);
  };
  const onsizechangeten = (e) => {
    setsize(10);
  };
  assigndata();

  const addtocart = () => {
    console.log(props.cartitems);
    props.setcartitems([
      ...props.cartitems,
      [{ data }, { front, middle, back, sole, size }],
    ]);
  };
  return (
    <div className="shoedesigner-container">
      <div className="shoedesigner">
        <div className="shoedesigner-header">
          <div className="shoedesigner-header-left">
            <div className="shoedesigner-header-left-icon">
              <Link to="/store">
                <img src={Arrow} alt="arrow" />
              </Link>
            </div>
            <div className="shoedesigner-header-left-text">
              YOUR DESIGN SPACE
            </div>
          </div>
        </div>
        <div className="shoedesigner-main">
          <div className="shoedesigner-image">
            <div className="shoedesigner-image-main">
              <ImageBuilder
                front={front}
                middle={middle}
                back={back}
                sole={sole}
              />
            </div>
            <div className="shoedesigner-image-secs">
              <div className="shoedesigner-image-sec">
                {" "}
                <ImageBuilder
                  front={front}
                  middle={middle}
                  back={back}
                  sole={sole}
                />
              </div>
              <div className="shoedesigner-image-sec">
                {" "}
                <ImageBuilder
                  front={front}
                  middle={middle}
                  back={back}
                  sole={sole}
                />
              </div>
              <div className="shoedesigner-image-sec">
                {" "}
                <ImageBuilder
                  front={front}
                  middle={middle}
                  back={back}
                  sole={sole}
                />
              </div>
            </div>
          </div>
          <div className="shoedesigner-options-wrapper">
            <div className="shoedesigner-info">
              <div className="shoedesigner-info-text">
                <div className="shoedesigner-info-text-name">{data.name}</div>
                <div className="shoedesigner-info-text-rating">
                  <Rating
                    ratingValue={data.rating * 10}
                    size={20}
                    Hoveroff
                    readonly
                  />
                </div>
                <div className="shoedesigner-info-text-reviews">
                  {data.reviews} Reviews
                </div>
                <div className="shoedesigner-info-text-price">
                  {data.price}/-
                </div>
                <div className="shoedesigner-info-text-offer">
                  Get an exclusive 20% off shoping with HDFC bank
                </div>
              </div>
            </div>
            <div className="shoedesigner-options">
              <div className="shoedesigner-options-front">
                <div className="shoedesigner-options-front-title">FRONT</div>
                <div className="shoedesigner-options-front-options options">
                  <div
                    className="shoedesigner-options-front-options-one options-one"
                    onClick={onfrontchangeone}
                  >
                    <div className="shoedesigner-options-front-options-one-img opt1"></div>
                    {front === 1 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-front-options-two options-two"
                    onClick={onfrontchangetwo}
                  >
                    <div className="shoedesigner-options-front-options-two-img opt2"></div>
                    {front === 2 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-front-options-three options-three"
                    onClick={onfrontchangethree}
                  >
                    <div className="shoedesigner-options-front-options-three-img opt3"></div>
                    {front === 3 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="shoedesigner-options-middle">
                <div className="shoedesigner-options-middle-title">MIDDLE</div>
                <div className="shoedesigner-options-middle-options options">
                  <div
                    className="shoedesigner-options-middle-options-one options-one"
                    onClick={onmiddlechangeone}
                  >
                    <div className="shoedesigner-options-middle-options-one-img opt1"></div>
                    {middle === 1 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-middle-options-two options-two"
                    onClick={onmiddlechangetwo}
                  >
                    <div className="shoedesigner-options-middle-options-two-img opt2"></div>
                    {middle === 2 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-middle-options-three options-three"
                    onClick={onmiddlechangethree}
                  >
                    <div className="shoedesigner-options-middle-options-three-img opt3"></div>
                    {middle === 3 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="shoedesigner-options-back">
                <div className="shoedesigner-options-back-title">BACK</div>
                <div className="shoedesigner-options-back-options options">
                  <div
                    className="shoedesigner-options-back-options-one options-one"
                    onClick={onbackchangeone}
                  >
                    <div className="shoedesigner-options-back-options-one-img opt1"></div>
                    {back === 1 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-back-options-two options-two"
                    onClick={onbackchangetwo}
                  >
                    <div className="shoedesigner-options-back-options-two-img opt2"></div>
                    {back === 2 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-back-options-three options-three"
                    onClick={onbackchangethree}
                  >
                    <div className="shoedesigner-options-back-options-three-img opt3"></div>
                    {back === 3 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="shoedesigner-options-sole">
                <div className="shoedesigner-options-sole-title">SOLE</div>
                <div className="shoedesigner-options-sole-options options">
                  <div
                    className="shoedesigner-options-sole-options-one options-one"
                    onClick={onsolechangeone}
                  >
                    <div className="shoedesigner-options-sole-options-one-img opt1sole"></div>
                    {sole === 1 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-sole-options-two options-two"
                    onClick={onsolechangetwo}
                  >
                    <div className="shoedesigner-options-sole-options-two-img opt2sole"></div>
                    {sole === 2 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-sole-options-three options-three"
                    onClick={onsolechangethree}
                  >
                    <div className="shoedesigner-options-sole-options-three-img opt3sole"></div>
                    {sole === 3 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="shoedesigner-options-size">
                <div className="shoedesigner-options-size-title">SIZE</div>
                <div className="shoedesigner-options-size-options sizeoptions">
                  <div
                    className="shoedesigner-options-size-options-seven sizeoptions-seven"
                    onClick={onsizechangeseven}
                  >
                    <div className="shoedesigner-options-size-options-seven-img size ">
                      7
                    </div>
                    {size === 7 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-size-options-eight sizeoptions-eight"
                    onClick={onsizechangeeight}
                  >
                    <div className="shoedesigner-options-back-options-eight-img size">
                      8
                    </div>
                    {size === 8 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-size-options-nine sizeoptions-nine"
                    onClick={onsizechangenine}
                  >
                    <div className="shoedesigner-options-size-options-nine-img size">
                      9
                    </div>
                    {size === 9 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className="shoedesigner-options-size-options-ten sizeoptions-ten"
                    onClick={onsizechangeten}
                  >
                    <div className="shoedesigner-options-back-options-ten-img size">
                      10
                    </div>
                    {size === 10 ? (
                      <div className="checkbox">
                        <img src={Checked} alt="checkbox" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shoedesigner-footer">
          <div className="shoedesigner-footer-main">
            <div className="shoedesigner-footer-main-share">share design</div>
            <div className="shoedesigner-footer-main-cart" onClick={addtocart}>
              add to cart
            </div>
          </div>
        </div>
      </div>
      <div className="shoedesigner-cart">
        <Cart cartitems={props.cartitems} setcartitems={props.setcartitems} />
      </div>
    </div>
  );
};

export default Shoedesigner;
