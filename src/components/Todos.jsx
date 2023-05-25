import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //kode kunci
      props.updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />

      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />

      <ul>
        {props.todos.map((item) => {
          return (
            <li key={item.id}>
              {item.item}
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
              />
              <button onClick={() => changeFocus()}>Edit</button>
              <button onClick={() => props.removeTodo(item.id)}>
                Delete
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispathToProps)(Todos);