const Props=(props)=>{

    return(
        <div>
            <h1>This is a Props Component</h1>
            <ol>
                <li>Props are:</li>
                <ul>
                    <li>{props.hi}</li>
                    <li>I completed my {props.grade} grade by the age of {props.age}</li>
                    <li><img src={props.img} alt="image not found" /></li>
                </ul>
            </ol>
        </div>
    )
}
export default Props;