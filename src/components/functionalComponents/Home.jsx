import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Welcome to the Home Page</h2>

            <p>Please login or signup to continue</p>

            <div style={{ marginTop: "20px" }}>
                <Link to="/login">
                    <button style={{ marginRight: "10px" }}>
                        Login
                    </button>
                </Link>

                <Link to="/signup">
                    <button>
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
