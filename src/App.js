import { useState } from "react";

export default function AppComponent (props) {
  props.salary[0] = 100;
  props.userName.firstName = "Mayank";
  let totalSalary = props.salary.reduce((e, acc) => e + acc, 0);
  let [counter, setCounter] = useState(0);
  let [otherCounter, setOtherCounter] = useState(0);
  
  setTimeout(() => {

    setCounter(++counter);

    setOtherCounter((initialValue) => {
      return initialValue + 1;
    });
  }, 1000)

  return (
    <>
      <h1>User name is: {props.userName.firstName} {props.userName.lastName} </h1>
      <h2>Total salary: {totalSalary} </h2>
      <h2>Counter is: {counter}</h2>
      <h2>Other Counter is: {otherCounter}</h2>
    </>
  )
}