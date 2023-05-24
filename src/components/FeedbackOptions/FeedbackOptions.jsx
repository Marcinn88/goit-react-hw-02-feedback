import React from "react";
import css from "./FeedbackOptions.module.css";

export default class FeedbackOptions extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    // static defaultProps = {
    //     contents:[]
    // }
    // static propTypes = {
    //     contents: Array
    // }

    render(){
        return (
    <ul className={css.buttons}>
        <li>
            <button>Good</button>
        </li>
        <li>
            <button>Neutral</button>
        </li>
        <li>
            <button>Bad</button>
        </li>
    </ul>
    )}};
