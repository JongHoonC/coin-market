import { Link } from "react-router-dom";

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "30px",
  };
  const listStyle = {
    listStyle: "none",
  };
  const uls = {
    display: "flex",
    justifyContent: "space-between",
    width: "700px",
    margin: "0 auto",
    alignItems: "center",
  };
  const divs = {
    display: "flex",
    height: "100vh",
  };
  return (
    // Link를 사용해 페이지를 새로 불러오지 않고 History API를 통해 브라우저 주소 경로만 바꾼다
    <div style={divs}>
      <ui style={uls}>
        <li style={listStyle}>
          <Link style={linkStyle} to="/TodoList">
            To Do List
          </Link>
        </li>
        <li style={listStyle}>
          <Link to="/CoinContainer" style={linkStyle}>
            CoinMarketCap Clone Coding
          </Link>
        </li>
      </ui>
    </div>
  );
};

export default Home;
