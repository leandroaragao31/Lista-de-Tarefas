import React, { useState, useContext } from 'react';
import * as S from './styled.js';

let corpo = document.body;
corpo.style.background = '#aa7b5d';
corpo.style.color = '#FFFFFF';

export default function Main() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const itemTask = {
    task: task,
    id: Date.now(),
  };

  const handleSubmit = (e) => {
    setTask(e.preventDefault());
  };

  const remove = (id) => {
    setList(
      list.filter((item) => item.id != id),
      []
    );
  };

  const handleClick = () => {
    setList([...list, itemTask]), setTask('');
  };

  return (
    <S.Container>
      <S.SubContainer
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={task}
          placeholder="digite aqui sua tarefa"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleClick}>Add Task</button>
        <S.List>
          {list.map((item, index) => (
            <>
              <ul key={index}>
                <li>{item.task}</li>
                <button onClick={() => remove(item.id)}>x</button>
              </ul>
            </>
          ))}
        </S.List>
      </S.SubContainer>
    </S.Container>
  );
}
