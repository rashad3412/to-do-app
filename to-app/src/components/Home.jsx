/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Calendar from "react-calendar";

const Home = () => {
  const { date, setDate } = useState();

  const dateString = date?.toDateString();
  console.log(dateString);

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <heading>
      <h2>Tasks</h2>
      <section className="calendar">
        <Calendar onClickDay={handleClick} onChange={setDate} value={date} />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/511/848/original/illustration-graphic-cartoon-character-of-achieving-goals-free-vector.jpg"
          width={"400"}
          height={"400"}
        />
      </section>
      <section className="inputs">
        <input className="inputs-prop"></input>
      </section>
      <section className="btn">
        <button className="btn-prop">Add</button>
      </section>
    </heading>
  );
};

export default Home;
