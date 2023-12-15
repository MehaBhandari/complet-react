import { useState, useEffect } from "react";

export default function AppComponent (props) {
  props.salary[0] = 100;
  props.userName.firstName = "Mayank";
  let totalSalary = props.salary.reduce((e, acc) => e + acc, 0);
  let [counter, setCounter] = useState(0);
  let [incrementBy, setIncrementBy] = useState(1);

  /* Counter is preincremented so that the incremented value should be set in setCounter().
    If we will write setCounter(counter++) then 0 will be set in the counter's new value and 
    then it will be incremented to 1.
  */

  setTimeout(() => { 
    setCounter(++counter);
  }, 1000)

  /*
    useEffect will be called only once i.e. at the time of initialisation 
    of the component when used with empty array as parameter.
    
    useEffect will be called every time whenever there will be a change in 
    argument when some argument is passed in the array like useEffect(()=>{}, [counter]).

    useEffect will be called every time if no parameter is passed and not even
    an empty array.
  */

  useEffect(()=>{
    setInterval(()=>{
      setIncrementBy(++incrementBy);
      console.log("incrementBy: ", incrementBy);
    },5000)
  }, []);

  return (
    <>
      <h1>User name is: {props.userName.firstName} {props.userName.lastName} </h1>
      <h2>Total salary: {totalSalary} </h2>
      <h2>Counter is: {counter}</h2>
      <h2> Incremented value: {incrementBy} </h2>
    </>
  )
}