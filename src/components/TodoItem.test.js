import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import TodoItem from "./TodoItem";

const todo = {
    id: 1,
    name: "Go to the supermarket",
    complete: false
};

it("renders correctly", () => {
    cleanup();

    const { queryByText, queryByTestId } = render(<TodoItem todo={todo} />);

    expect(queryByTestId(`todo-item-${todo.id}`)).toBeTruthy();
    expect(queryByTestId(`checkbox-${todo.id}`)).toBeTruthy();
    expect(queryByText(todo.name)).toBeTruthy();
    expect(queryByTestId(`button-remove-${todo.id}`)).toBeTruthy();
});

test("checkbox click toggles line-through style", () => {
    cleanup();

    const onClick = () => todo.complete = !todo.complete;

    const { queryByText, queryByTestId, rerender } = render(<TodoItem todo={todo} onClick={onClick} />);

    const checkboxElement = queryByTestId(`checkbox-${todo.id}`);
    const todoNameElement = queryByText(todo.name);

    const clickCheckbox = () => {
        fireEvent.click(checkboxElement);
        rerender(<TodoItem todo={todo} onClick={onClick} />);
    };

    clickCheckbox();
    expect(todoNameElement.style.textDecoration).toBe("line-through");

    clickCheckbox();
    expect(todoNameElement.style.textDecoration).toBe("none");
});

test("remove button removes todo item", () => {
    cleanup();

    let todoArray = [todo];
    const onClick = id => todoArray = todoArray.filter(todo => todo.id !== id);

    const { queryByTestId } = render(<TodoItem todo={todo} onRemoveClick={onClick} />);
    const removeButtonElement = queryByTestId(`button-remove-${todo.id}`);

    fireEvent.click(removeButtonElement);
    
    expect(todoArray.length).toBe(0);
});