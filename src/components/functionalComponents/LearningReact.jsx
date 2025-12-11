import Props from "./Props";

const LearningReact = () => {
    return (
        <div>
            <h1>React</h1>
            <p>This page is about learning React</p>
            <hr />

            <ol>
                <li>
                    <Props
                        hi="Welcome to Props"
                        grade="12th"
                        age="17"
                        img="public/vite.svg"
                    />
                </li>
            </ol>

            <hr />
        </div>
    );
};

export default LearningReact;
