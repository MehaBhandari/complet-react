import Counter from "./components/counter/counter";
import UseEffectWithButton from "./components/useEffect/useEffectWithButton";
import GrandParent from "./components/useContext/grandParent";
import UseStateInput from "./components/useState/useStateInput";
import UseRefComponent from "./components/useRef/useRefComponent";

export default function AppComponent (props) {
  props.salary[0] = 100;
  props.userName.firstName = "Mayank";
  let totalSalary = props.salary.reduce((e, acc) => e + acc, 0);

  

  return (
    <>
      <h1>User name is: {props.userName.firstName} {props.userName.lastName} </h1>
      <h2>Total salary: {totalSalary} </h2>
      <UseRefComponent></UseRefComponent>
      <hr/>
      <UseStateInput></UseStateInput>
      <Counter></Counter>
      <hr/>
      <UseEffectWithButton/>
      <hr/>
      <GrandParent/>
    </>
  )
}