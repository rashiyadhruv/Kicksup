import "./mainstore.scss";
import { items } from "./utils/items";
import Itemcard from "../itemcard/itemcard";
const mainstore = (props) => {
  return (
    <div className="mainstore">
      <div className="mainstore-main">
        {items.map((item) => (
          <div className="item-wrapper" key={item.id}>
            {props.min < item.price && props.max > item.price ? (
              props.designtemp === item.design || props.designtemp === 0 ? (
                props.type === item.type || props.type === 0 ? (
                  (props.colors.red && item.color) === "red" ? (
                    <Itemcard data={item} />
                  ) : (props.colors.blue && item.color) === "blue" ? (
                    <Itemcard data={item} />
                  ) : (props.colors.yellow && item.color) === "yellow" ? (
                    <Itemcard data={item} />
                  ) : (props.colors.green && item.color) === "green" ? (
                    <Itemcard data={item} />
                  ) : (props.colors.golden && item.color) === "golden" ? (
                    <Itemcard data={item} />
                  ) : null
                ) : null
              ) : null
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default mainstore;
