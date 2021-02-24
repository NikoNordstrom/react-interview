import React from "react";

export default function TodoItem(props) {
    const { id, name, complete } = props.todo;

    return (
        <div className="todo-item" data-testid={`todo-item-${id}`}>
            <input
                className="checkbox"
                type="checkbox"
                onClick={() => props.onClick(id)}
                data-testid={`checkbox-${id}`}
            />
            <h3 style={{ textDecoration: complete ? "line-through" : "none" }}>{name}</h3>
            <button
                className="button button-remove"
                onClick={() =>
                    props.onRemoveClick(id)
                }
                data-testid={`button-remove-${id}`}>
                {"\u{1f5d9}"}
            </button>
        </div>
    );
}