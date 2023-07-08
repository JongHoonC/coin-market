import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./CoinList";
import "../App.css";

const CoinItem = () => {
  // 코인의 데이터를 넣기 위해 빈 배열 생성
  const [coinData, setCoinData] = useState([]);
  // 코인을 내림차순으로 정렬하기 위해 기본 값을 desc 로 설정한다
  const [sortID, setSortID] = useState("desc");

  const API_KEY = "4f4648a7-9f7a-47f7-999c-dc39544a0480";

  const table = {
    width: "1400px",
    margin: "0 auto",
  };
  const nameWidth = {
    width: "10%",
  };
  const priceWidth = {
    width: "200px",
  };

  useEffect(() => {
    const apiUrl =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    axios
      .get(apiUrl, {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      })
      .then((response) => {
        // 원하는 데이터 객체
        setCoinData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const sortCoinData = () => {
    const sortedData = [...coinData].sort((beforeData, nextData) => {
      if (sortID === "desc") {
        // 처음에는 내림차순
        return beforeData.cmc_rank - nextData.cmc_rank;
      } else {
        // 버튼을 누르면 오름차순으로 변경
        return nextData.cmc_rank - beforeData.cmc_rank;
      }
    });
    return sortedData;
  };
  const onToggle = () => {
    setSortID((id) => (id === "desc" ? "asc" : "desc"));
  };
  return (
    <div>
      <table style={table}>
        <thead>
          <tr className="theadBorder">
            <th onClick={onToggle}>
              <p>#</p>
            </th>
            <th style={nameWidth}>
              <p>Name</p>
            </th>
            <th style={priceWidth}>
              <p>Price</p>
            </th>
            <th>
              <p>1h %</p>
            </th>
            <th>
              <p>24h %</p>
            </th>
            <th>
              <p>7d %</p>
            </th>
            <th>
              <p>Market Cap</p>
            </th>
            <th>
              <p>Volume(24h)</p>
            </th>
            <th>
              <p>Circulating Supply</p>
            </th>
            <th>
              <p>Last 7 Days</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 정렬된 데이터에 map 메소드 사용 */}
          {sortCoinData().map((coin, index) => (
            // <Link>
            <CoinList
              name={coin.name}
              symbol={coin.symbol}
              key={index}
              imgID={coin.id}
              rank={coin.cmc_rank}
              price={coin.quote.USD.price}
              Hour1={coin.quote.USD.percent_change_1h}
              Hour24={coin.quote.USD.percent_change_24h}
              day7={coin.quote.USD.percent_change_7d}
              marketCap={coin.quote.USD.market_cap}
              volume_24h={coin.quote.USD.volume_24h}
              total_supply={coin.total_supply}
              fully_diluted_market_cap={coin.quote.USD.fully_diluted_market_cap}
            />
            // </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinItem;
