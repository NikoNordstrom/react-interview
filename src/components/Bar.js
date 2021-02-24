import React from "react";

export default function Bar(props) {
    return (
        <form
            className="bar"
            style={{ gridTemplateColumns: '7fr 2fr' }}
            onSubmit={props.onSubmit}>
            <input
                className="text-input"
                placeholder="Add new todo"
                size="2"
                value={props.newTodoName}
                onChange={props.onInputChange}
            />
            <button
                className="button button-submit"
                type="submit"
                value="Submit">
                Submit
            </button>
        </form>
    );
}