import { Link, Outlet } from "react-router-dom";

const LearningReact = () => {
  return (
    <div>
      <h1>Learning React</h1>
      <p>Click a topic to learn React concepts</p>

      <hr />

      {/* Internal navigation */}
      <nav>
        <Link to="props">Props</Link> |{" "}
        <Link to="useState">useState</Link> |{" "}
        <Link to="useEffect">useEffect</Link> |{" "}
        <Link to="useEffectAPI">useEffect API</Link> |{" "}
        <Link to="useRef">useRef</Link> |{" "}
        <Link to="useMemo">useMemo</Link> |{" "}
        <Link to="useCallback">useCallback</Link>
      </nav>

      <hr />

      {/* Selected content loads here */}
      <Outlet />
    </div>
  );
};

export default LearningReact;