
import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";

export class FeedbackOptions  {
    // constructor(props){
    //     super(props);
    // }
    static defaultProps = {
        contents:[]
    }
    static propTypes = {
        contents: Array
    }

    render(){
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
}};
