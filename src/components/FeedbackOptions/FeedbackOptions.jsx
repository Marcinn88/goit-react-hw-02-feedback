import React from "react";
import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export  class FeedbackOptions extends React.Component {
    static defaultProps = {
        options:[],
    }
    static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func,
    }

    render() {
        return (
            <ul className={css.buttons}>
                <li>
                    <button onClick={event => console.log(event)}>Good</button>
                </li>
                <li>
                    <button onClick={event => console.log(event)}>Neutral</button>
                </li>
                <li>
                    <button onClick={event => console.log(event)}>Bad</button>
                </li>
            </ul>
        )
    }
};
