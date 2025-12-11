import "../../css/App.css"
import Props from "./Props.jsx";
import State from "./State.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import LearningReact from "./LearningReact.jsx";
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";


function Navbar(props){
    return(
        <>
            <nav style={{backgroundColor:"Pink",color:"Black"}}>
                <ul >
                    <Link to="/"> <li><Home /></li></Link>
                    <Link to="/about"> <li>About /</li></Link>
                    <Link to="/learn-react"> <li>Learning React /</li></Link>
                    <Link to="/contact"> <li>Contact /</li></Link>
                    <ol>
                        <li><Props hi="Welcome to Props" grade="12th" age="17" img="public/vite.svg"/></li>
                        <ul>
                             <li>Nethra</li>
                             <li>Contact</li>
                        </ul>
                        <li><State /></li>
                    </ol>
                    
                </ul>

            </nav>
            <p>The above content is Navbar </p>
        </>
    );
}
export default Navbar;