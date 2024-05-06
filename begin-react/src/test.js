import React, { useState, useRef } from 'react';

function test() {
  const [todo, setTodo] = useState({
    text: 'Hello',
    done: false,
  });

  const onClick = useCallback(() => {
    setTodo((todo) => ({
      ...todo,
      done: !todo.done,
    }));
  }, []);

  
  
  return <>${console.log(todo)}</>;
}

export default test;
