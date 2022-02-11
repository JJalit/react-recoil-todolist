import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { getId } from '../utils';
import { todoListState } from '../state';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
