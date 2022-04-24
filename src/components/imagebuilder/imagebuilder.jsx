import "./imagebuilder.scss";

import fcblu from "../../assets/images/customshoe/fblue.svg";
import fb from "../../assets/images/customshoe/fblueplain.svg";
import fcb from "../../assets/images/customshoe/fblack.svg";
import mcb from "../../assets/images/customshoe/mblack.svg";
import mb from "../../assets/images/customshoe/mblueplain.svg";
import mcblu from "../../assets/images/customshoe/mblue.svg";
import bcb from "../../assets/images/customshoe/bblack.svg";
import bb from "../../assets/images/customshoe/bblueplain.svg";
import bcblu from "../../assets/images/customshoe/bblue.svg";
import sb from "../../assets/images/customshoe/soleblack.svg";
import sblu from "../../assets/images/customshoe/soleblue.svg";
import sg from "../../assets/images/customshoe/solegrey.svg";

const ImageBuilder = (props) => {
  return (
    <div className="back">
      {props.front === 1 ? (
        <div className="fcb im">
          <img src={fcb} alt="fcb" />
        </div>
      ) : props.front === 2 ? (
        <div className="fb im">
          <img src={fb} alt="fb" />
        </div>
      ) : (
        <div className="fcblu im">
          <img src={fcblu} alt="fcblu" />
        </div>
      )}

      {props.middle === 1 ? (
        <div className="mcb im">
          <img src={mcb} alt="mcb" />
        </div>
      ) : props.middle === 2 ? (
        <div className="mb im">
          <img src={mb} alt="mb" />
        </div>
      ) : (
        <div className="mcblu im">
          <img src={mcblu} alt="mcblu" />
        </div>
      )}

      {props.back === 1 ? (
        <div className="bcb im">
          <img src={bcb} alt="bcb" />
        </div>
      ) : props.back === 2 ? (
        <div className="bb im">
          <img src={bb} alt="bb" />
        </div>
      ) : (
        <div className="bcblu im">
          <img src={bcblu} alt="bcblu" />
        </div>
      )}

      {props.sole === 1 ? (
        <div className="sb im">
          <img src={sb} alt="sb" />
        </div>
      ) : props.sole === 2 ? (
        <div className="sblu im">
          <img src={sblu} alt="sblu" />
        </div>
      ) : (
        <div className="sg im">
          <img src={sg} alt="sg" />
        </div>
      )}
    </div>
  );
};

export default ImageBuilder;
