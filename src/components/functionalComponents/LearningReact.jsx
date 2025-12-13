import Props from "./Props";
import UseStateExample from "./Hooks/UseState";
import UseEffectExample from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";

const LearningReact = () => {
  return (
    <div>
      <h1>Learning React Components</h1>
      <p>Learning React Components is a good way to learn React</p>

      <hr />

      <ol>
        <li>
          <Props
            hi="Welcome to Props"
            grade="12"
            age="17"
            img="/vite.svg"
          />
        </li>

        <li>
          <h1>Hooks</h1>
          <ul>
            <li><UseStateExample /></li>
            <li><UseEffectExample/></li>
            <li><UseEffectAPI/></li>
            <li><UseRef /></li>
            <li><UseMemo /></li>
          </ul>
         
        </li>
      </ol>
    </div>
  );
};

export default LearningReact;