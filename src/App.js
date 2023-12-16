import Counter from "./components/counter/counter";
import UseEffectWithButton from "./components/useEffect/useEffectWithButton";

export default function AppComponent (props) {
  props.salary[0] = 100;
  props.userName.firstName = "Mayank";
  let totalSalary = props.salary.reduce((e, acc) => e + acc, 0);

  

  return (
    <>
      <h1>User name is: {props.userName.firstName} {props.userName.lastName} </h1>
      <h2>Total salary: {totalSalary} </h2>
      <Counter></Counter>
      <hr/>
      <UseEffectWithButton/>
    </>
  )
}