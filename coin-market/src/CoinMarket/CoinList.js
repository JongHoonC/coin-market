import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const CoinList = ({
  name,
  symbol,
  price,
  imgID,
  Hour1,
  Hour24,
  day7,
  marketCap,
  rank,
  volume_24h,
  total_supply,
  fully_diluted_market_cap,
}) => {
  const navigate = useNavigate();
  const tal = {
    textAlign: "left",
  };
  const imgStyle = {
    width: "24px",
    height: "24px",
  };

  const fixedPrice = price.toFixed(3);
  const localPrice = fixedPrice.toLocaleString();
  const fixedHour1 = Hour1.toFixed(2);
  const fixedHour24 = Hour24.toFixed(2);
  const fixedday7 = day7.toFixed(2);
  const fixedMarketCap = Math.floor(marketCap);
  const localfixedMarketCap = fixedMarketCap.toLocaleString();
  const fixedVolume_24h = Math.floor(volume_24h);
  const localFixedVolume_24h = fixedVolume_24h.toLocaleString();
  const fixedTotal_supply = Math.floor(total_supply);
  const localTotal_supply = fixedTotal_supply.toLocaleString();
  const fixedFully = Math.floor(fully_diluted_market_cap);
  const localFully = fixedFully.toLocaleString();
  const changeColor1 = () => {
    if (fixedHour1 < 0) {
      return "down0";
    } else {
      return "up0";
    }
  };
  const changeColor2 = () => {
    if (fixedHour24 < 0) {
      return "down0";
    } else {
      return "up0";
    }
  };
  const changeColor3 = () => {
    if (fixedday7 < 0) {
      return "down0";
    } else {
      return "up0";
    }
  };

  const absFixedHour1 = () => {
    if (fixedHour1 < 0) {
      const absFixedHour1 = Math.abs(fixedHour1);
      return absFixedHour1;
    } else {
      return fixedHour1;
    }
  };
  const absFixedHour24 = () => {
    if (fixedHour24 < 0) {
      const absFixedHour24 = Math.abs(fixedHour24);
      return absFixedHour24;
    } else {
      return fixedHour24;
    }
  };
  const absFixedDay7 = () => {
    if (fixedday7 < 0) {
      const absFixedDay7 = Math.abs(fixedday7);
      return absFixedDay7;
    } else {
      return fixedday7;
    }
  };

  return (
    <tr
      className="tr"
      onClick={() => {
        navigate(`/CoinContainer/${name}`, {
          state: {
            rank: { rank },
            symbol: { symbol },
            price: { localPrice },
            imgID: { imgID },
            Hour1: { fixedHour1 },
            localTotal_supply: { localTotal_supply },
            localfixedMarketCap: { localfixedMarketCap },
            fixedHour24: { fixedHour24 },
            localFixedVolume_24h: { localFixedVolume_24h },
            localFully: { localFully },
            fixedday7: { fixedday7 },
          },
        });
      }}
    >
      <th>{rank}</th>
      <th className="name">
        <div>
          <img
            style={imgStyle}
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${imgID}.png`}
            alt={name}
          />
          <p style={tal}>{name}</p>
          <p className="symbol"> {symbol}</p>
        </div>
      </th>
      <th>${localPrice}</th>
      <th className={`${changeColor1()}`}>
        <div></div>
        <p>{absFixedHour1()}%</p>
      </th>
      <th className={`${changeColor2()}`}>
        <div></div>
        <p>{absFixedHour24()}%</p>
      </th>
      <th className={`${changeColor3()}`}>
        <div></div>
        <p>{absFixedDay7()}%</p>
      </th>
      <th>${localfixedMarketCap}</th>
      <th>${localFixedVolume_24h}</th>
      <th>
        {localTotal_supply}
        <span> {symbol}</span>
      </th>
      <th>
        <img
          src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${imgID}.svg`}
          alt={name}
        />
      </th>
    </tr>
  );
};

export default CoinList;
// https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg
