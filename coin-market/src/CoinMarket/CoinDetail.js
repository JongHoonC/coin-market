import { useParams, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
// import React, { useState } from "react";
import "../App.css";
const CoinDetail = () => {
  const { name } = useParams();
  const location = useLocation();

  // const [childElements, setChildElements] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);
  // const addChildElement = () => {
  //   if (!isClicked) {
  //     const newElement = <div>New element</div>;
  //     setChildElements((prevElements) => [...prevElements, newElement]);
  //     setIsClicked(true);
  //   }
  // };
  const rank = location.state.rank;
  const symbol = location.state.symbol;
  const price = location.state.price;
  const imgID = location.state.imgID;
  const Hour1 = location.state.Hour1;
  const fixedHour24 = location.state.fixedHour24;
  const localfixedMarketCap = location.state.localfixedMarketCap;
  const localFixedVolume_24h = location.state.localFixedVolume_24h;
  const localTotal_supply = location.state.localTotal_supply;
  const localFully = location.state.localFully;
  const fixedday7 = location.state.fixedday7;
  const getHourBC = () => {
    if (Hour1.fixedHour1 < 0) {
      return "minHour";
    } else {
      return "plusHour";
    }
  };
  const getHourCO = () => {
    if (fixedday7.fixedday7 < 0) {
      return "minHourCO";
    } else {
      return "plusHourCO";
    }
  };
  const getHourCO1 = () => {
    if (fixedHour24.fixedHour24 < 0) {
      return "minHourCO";
    } else {
      return "plusHourCO";
    }
  };
  return (
    <div className="detailContainer">
      <Reset />
      <div className="nameNprice">
        <div className="CON1">
          <div className="coinName">
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${imgID.imgID}.png`}
              alt={name}
            />
            <p>{name}</p>
            <p>{symbol.symbol}</p>
          </div>
          <div className="Rank">
            <p>Rank #{rank.rank}</p>
            <p
            // onClick={addChildElement}\
            >
              Coin
              {/* {childElements} */}
            </p>
          </div>
        </div>
        <div className="CON2">
          <div className="nameSmallText">
            {name.name} Price ({symbol.symbol})
          </div>
          <div className={`coinPrice ${getHourBC()}`}>
            <p>${price.localPrice}</p>
            <p>{Hour1.fixedHour1}%</p>
          </div>
          <div className="capNfully">
            <div className={`capN  ${getHourCO1()}`}>
              <p>
                Market Cap <span>i</span>
              </p>
              <p>${localfixedMarketCap.localfixedMarketCap}</p>
              <p>{fixedHour24.fixedHour24}%</p>
            </div>
            <div className={`fully ${getHourCO()}`}>
              <p>
                Fully Diluted Market Cap
                <span>i</span>
              </p>
              <p>${localFully.localFully}</p>
              <p>{fixedday7.fixedday7}%</p>
            </div>
          </div>
        </div>
        <div className="CON3">
          <div className="volumArea">
            <p>
              volume
              <p>24h</p>
              <span>i</span>
            </p>
            <p>${localFixedVolume_24h.localFixedVolume_24h}</p>
          </div>
          <div className="supplyArea">
            <p>
              Circulating Supply
              <span>i</span>
            </p>
            <p>
              {localTotal_supply.localTotal_supply}
              {symbol.symbol}
            </p>
          </div>
        </div>
      </div>
      <div className="graph"></div>
    </div>
  );
};

export default CoinDetail;
