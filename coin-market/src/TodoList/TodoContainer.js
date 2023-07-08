import React, { useState, useRef } from "react";
import Input from "./Input";
import Item from "./Item";
import "../App.css";

const TodoContainer = () => {
  const nextId = useRef(0);

  const [dataValue, setDataValue] = useState({
    date: "",
    text: "",
  });
  // 비구조화 할당을 통해 변수 선언
  const [items, setItems] = useState([]);
  // 초기 값을 빈 배열로 설정한다
  const { date, text } = dataValue;

  const todoData = (e) => {
    const { value, name } = e.target;
    setDataValue({
      ...dataValue, // 기존 dataValue 객체를 복사 한다.
      [name]: value, // name 이라는 키를 가진 값을 value로 설정한다
    });

    console.log(setDataValue);
  };
  const dataSet = () => {
    // 유효성 검사 하는 부분
    // 날짜와 텍스트가 모두 작성 되면 아래 코드 실행
    if (date && text) {
      const dataValues = {
        id: nextId.current,
        date,
        text,
      };

      setItems(items.concat(dataValues));
      setDataValue({
        date: "",
        text: "",
      });
      nextId.current += 1;
    }
    // 하나라도 작성되지 않으면 아래 코드 실행
    else {
      alert("다시 입력하세요");
      setDataValue({
        date: "",
        text: "",
      });
    }
  };
  // filter메소드를 사용해 items 배열에서 해당 id와 일치하지 않은 항목들로 새로운 배열을 만들어 setItems state를 통해 상태 업데이트
  const onRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="TodoContainer">
      <Item onRemove={onRemove} items={items} setItems={setItems} />
      <div className="head">
        <Input todoData={todoData} dataSet={dataSet} dataValue={dataValue} />
      </div>
    </div>
  );
};

export default TodoContainer;
