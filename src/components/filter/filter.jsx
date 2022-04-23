import "./filter.scss";
import React, { useState } from "react";
import Filterimg from "../../assets/images/filter.png";

const Filter = (props) => {
  const [ischecked, setischecked] = useState({
    pa: false,
    pb: false,
    pc: false,
    dt2: false,
    dt3: false,
    dt4: false,
    tl: false,
    ts: false,
  });
  const [colorsort, setcolorsort] = useState(false);

  const onchangepa = () => {
    if (!ischecked.pa) {
      props.setmax(4000);
      props.setmin(1500);
    } else {
      props.setmax(100000);
      props.setmin(0);
    }
    setischecked({ ...ischecked, pa: !ischecked.pa, pb: false, pc: false });
  };

  const onchangepb = () => {
    if (!ischecked.pb) {
      props.setmax(7000);
      props.setmin(4001);
    } else {
      props.setmax(100000);
      props.setmin(0);
    }
    setischecked({ ...ischecked, pb: !ischecked.pb, pa: false, pc: false });
  };
  const onchangepc = () => {
    if (!ischecked.pc) {
      props.setmax(100000);
      props.setmin(7001);
    } else {
      props.setmax(100000);
      props.setmin(0);
    }
    setischecked({ ...ischecked, pc: !ischecked.pc, pa: false, pb: false });
  };

  const onchangered = () => {
    if (colorsort === false && props.colors.red === true) {
      props.setcolors({
        red: true,
        blue: false,
        yellow: false,
        green: false,
        golden: false,
      });
      setcolorsort(true);
    }
    if (
      colorsort === true &&
      props.colors.red === true &&
      props.colors.blue === false &&
      props.colors.yellow === false &&
      props.colors.green === false &&
      props.colors.golden === false
    ) {
      props.setcolors({
        red: true,
        blue: true,
        yellow: true,
        green: true,
        golden: true,
      });
      setcolorsort(false);
    }
    if (
      colorsort === true &&
      (props.colors.blue === true ||
        props.colors.yellow === true ||
        props.colors.green === true ||
        props.colors.golden === true)
    ) {
      props.setcolors({ ...props.colors, red: !props.colors.red });
    }
  };

  const onchangeblue = () => {
    if (colorsort === false && props.colors.blue === true) {
      props.setcolors({
        blue: true,
        red: false,
        yellow: false,
        green: false,
        golden: false,
      });
      setcolorsort(true);
    }
    if (
      colorsort === true &&
      props.colors.blue === true &&
      props.colors.red === false &&
      props.colors.yellow === false &&
      props.colors.green === false &&
      props.colors.golden === false
    ) {
      props.setcolors({
        red: true,
        blue: true,
        yellow: true,
        green: true,
        golden: true,
      });
      setcolorsort(false);
    }
    if (
      colorsort === true &&
      (props.colors.red === true ||
        props.colors.yellow === true ||
        props.colors.green === true ||
        props.colors.golden === true)
    ) {
      props.setcolors({ ...props.colors, blue: !props.colors.blue });
    }
  };

  const onchangeyellow = () => {
    if (colorsort === false && props.colors.yellow === true) {
      props.setcolors({
        blue: false,
        red: false,
        yellow: true,
        green: false,
        golden: false,
      });
      setcolorsort(true);
    }
    if (
      colorsort === true &&
      props.colors.yellow === true &&
      props.colors.red === false &&
      props.colors.blue === false &&
      props.colors.green === false &&
      props.colors.golden === false
    ) {
      props.setcolors({
        red: true,
        blue: true,
        yellow: true,
        green: true,
        golden: true,
      });
      setcolorsort(false);
    }
    if (
      colorsort === true &&
      (props.colors.red === true ||
        props.colors.blue === true ||
        props.colors.green === true ||
        props.colors.golden === true)
    ) {
      props.setcolors({ ...props.colors, yellow: !props.colors.yellow });
    }
  };

  const onchangegreen = () => {
    if (colorsort === false && props.colors.green === true) {
      props.setcolors({
        green: true,
        blue: false,
        yellow: false,
        red: false,
        golden: false,
      });
      setcolorsort(true);
    }
    if (
      colorsort === true &&
      props.colors.green === true &&
      props.colors.blue === false &&
      props.colors.yellow === false &&
      props.colors.red === false &&
      props.colors.golden === false
    ) {
      props.setcolors({
        red: true,
        blue: true,
        yellow: true,
        green: true,
        golden: true,
      });
      setcolorsort(false);
    }
    if (
      colorsort === true &&
      (props.colors.blue === true ||
        props.colors.yellow === true ||
        props.colors.red === true ||
        props.colors.golden === true)
    ) {
      props.setcolors({ ...props.colors, green: !props.colors.green });
    }
  };

  const onchangegolden = () => {
    if (colorsort === false && props.colors.golden === true) {
      props.setcolors({
        golden: true,
        blue: false,
        yellow: false,
        green: false,
        red: false,
      });
      setcolorsort(true);
    }
    if (
      colorsort === true &&
      props.colors.golden === true &&
      props.colors.blue === false &&
      props.colors.yellow === false &&
      props.colors.green === false &&
      props.colors.red === false
    ) {
      props.setcolors({
        red: true,
        blue: true,
        yellow: true,
        green: true,
        golden: true,
      });
      setcolorsort(false);
    }
    if (
      colorsort === true &&
      (props.colors.blue === true ||
        props.colors.yellow === true ||
        props.colors.green === true ||
        props.colors.red === true)
    ) {
      props.setcolors({ ...props.colors, golden: !props.colors.golden });
    }
  };

  const onchangedt2 = () => {
    if (ischecked.dt2 === false) {
      props.setdesigntemp(2);
      setischecked({
        ...ischecked,
        dt2: !ischecked.dt2,
        dt3: false,
        dt4: false,
      });
    } else {
      props.setdesigntemp(0);
      setischecked({ ...ischecked, dt2: !ischecked.dt2 });
    }
  };
  const onchangedt3 = () => {
    if (ischecked.dt3 === false) {
      props.setdesigntemp(3);
      setischecked({
        ...ischecked,
        dt3: !ischecked.dt3,
        dt2: false,
        dt4: false,
      });
    } else {
      props.setdesigntemp(0);
      setischecked({ ...ischecked, dt3: !ischecked.dt3 });
    }
  };
  const onchangedt4 = () => {
    if (ischecked.dt4 === false) {
      props.setdesigntemp(4);
      setischecked({
        ...ischecked,
        dt4: !ischecked.dt4,
        dt2: false,
        dt3: false,
      });
    } else {
      props.setdesigntemp(0);
      setischecked({ ...ischecked, dt4: !ischecked.dt4 });
    }
  };
  const onchangetl = () => {
    if (ischecked.tl === false) {
      props.settype(1);
      setischecked({ ...ischecked, tl: !ischecked.tl, ts: false });
    } else {
      props.settype(0);
      setischecked({ ...ischecked, tl: !ischecked.tl });
    }
  };
  const onchangets = () => {
    if (ischecked.ts === false) {
      props.settype(2);
      setischecked({ ...ischecked, ts: !ischecked.ts, tl: false });
    } else {
      props.settype(0);
      setischecked({ ...ischecked, ts: !ischecked.ts });
    }
  };

  return (
    <div className="filter">
      <div className="filter-main">
        <div className="filter-main-head">
          <div className="filter-main-title">FILTER</div>
          <div className="filter-main-icon">
            <img src={Filterimg} alt="filter" />
          </div>
        </div>
        <div className="filter-cost">
          <div className="filter-cost-title">COST</div>
          <div className="filter-cost-points">
            <div className="filter-cost-points-point">
              <input
                type="checkbox"
                id="pa"
                name="pa"
                value="Rs. 1500-4000"
                onChange={onchangepa}
                checked={ischecked.pa}
              />
              <div> Rs. 1500-4000</div>
            </div>
            <div className="filter-cost-points-point">
              <input
                type="checkbox"
                id="pb"
                name="pb"
                value="Rs. 4001-7000"
                onChange={onchangepb}
                checked={ischecked.pb}
              />
              <div> Rs. 4001-7000</div>
            </div>
            <div className="filter-cost-points-point">
              <input
                type="checkbox"
                id="pc"
                name="pc"
                value="Rs. 7001+"
                onChange={onchangepc}
                checked={ischecked.pc}
              />
              <div> Rs. 7001+</div>
            </div>
          </div>
        </div>

        <div className="filter-color">
          <div className="filter-color-title">COLORS</div>
          <div className="filter-color-points">
            <div className="filter-color-points-point">
              <input
                className="red-input"
                type="checkbox"
                id="red"
                name="red"
                value="RED"
                onChange={onchangered}
              />

              <div className="redbox"></div>
            </div>
            <div className="filter-color-points-point">
              <input
                className="blue-input"
                type="checkbox"
                id="blue"
                name="blue"
                value="BLUE"
                onChange={onchangeblue}
              />

              <div className="bluebox"></div>
            </div>
            <div className="filter-color-points-point">
              <input
                type="checkbox"
                id="yellow"
                name="yellow"
                value="YELLOW"
                onChange={onchangeyellow}
              />
              <div className="yellowbox"></div>
            </div>
            <div className="filter-color-points-point">
              <input
                type="checkbox"
                id=" green"
                name="green"
                value="GREEN"
                onChange={onchangegreen}
              />
              <div className="greenbox"></div>
            </div>
            <div className="filter-color-points-point">
              <input
                type="checkbox"
                id="golden"
                name="golden"
                value="GOLDEN"
                onChange={onchangegolden}
              />
              <div className="goldenbox"></div>
            </div>
          </div>
        </div>

        <div className="filter-designtemp">
          <div className="filter-designtemp-title">DESIGN TEMPLATES</div>
          <div className="filter-designtemp-points">
            <div className="filter-designtemp-points-point">
              <input
                type="checkbox"
                id="dt2"
                name="dt2"
                value="2 DESIGN TEMPLATES"
                onChange={onchangedt2}
                checked={ischecked.dt2}
              />
              <div>2</div>
            </div>
            <div className="filter-designtemp-points-point">
              <input
                type="checkbox"
                id="dt3"
                name="dt3"
                value="3 DESIGN TEMPLATES"
                onChange={onchangedt3}
                checked={ischecked.dt3}
              />
              <div>3</div>
            </div>
            <div className="filter-designtemp-points-point">
              <input
                type="checkbox"
                id="dt4"
                name="dt4"
                value="4 DESIGN TEMPLATES"
                onChange={onchangedt4}
                checked={ischecked.dt4}
              />
              <div>3+</div>
            </div>
          </div>
        </div>

        <div className="filter-type">
          <div className="filter-type-title">DESIGN TEMPLATES</div>
          <div className="filter-type-points">
            <div className="filter-type-points-point">
              <input
                type="checkbox"
                id="tl"
                name="tl"
                value="LOAFERS"
                onChange={onchangetl}
                checked={ischecked.tl}
              />
              <div> LOAFERS</div>
            </div>
            <div className="filter-type-points-point">
              <input
                type="checkbox"
                id="ts"
                name="ts"
                value="SNEAKERS"
                onChange={onchangets}
                checked={ischecked.ts}
              />
              <div> SNEAKERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
