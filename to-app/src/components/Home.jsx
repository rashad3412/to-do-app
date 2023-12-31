/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Calendar from "react-calendar";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  const OnSubmitHandler = async (event) => {
    event.preventDefault();
  };

  const HandleClick = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItem((oldList) => [...oldList, item]);

    setNewItem("");
    console.log(item);
  };

  const HandleDateClick = () => {
    alert(
      `Your setting a new task on: ${date.toDateString()} \n Add an task below`
    );
  };

  const HandleEdit = (item, id) => {
    const editList = items.filter((i) => i.id !== item)
    const selectedItems = items.find(item => item.id === id)
    setItem(editList)


  };

  const HandleRemove = (item) => {
    const newList = items.filter((i) => i.id !== item);
    setItem(newList);
    console.log(newList);
  };

  return (
    <>
      <h2>Tasks</h2>
      <section className="calendar">
        <Calendar
          onClickDay={HandleDateClick}
          onChange={(date) => setDate(date)}
          value={date}
          minDate={new Date()}
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/511/848/original/illustration-graphic-cartoon-character-of-achieving-goals-free-vector.jpg"
          width={"400"}
          height={"400"}
        />
      </section>
      <form className="inputs" onSubmit={OnSubmitHandler}>
        <input
          type="text"
          placeholder="Add new task..."
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          className="inputs-prop"
        ></input>
      </form>
      <section className="btn">
        <button onClick={() => HandleClick()} className="btn-prop">
          Add
        </button>
      </section>
      <ul>
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              {" "}
              {item.value}
              <section className="btn2">
                <span onClick={() => HandleRemove(item.id)} className="txt-btn">
                  x
                </span>
                <span onClick={() => HandleEdit(item.id)} className="txt-btn">
                  edit
                </span>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Home;
