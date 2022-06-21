import React, { useState, useRef, useEffect } from 'react';
import * as S from './styled.js';


let corpo = document.body;
corpo.style.background = '#607B8B';
corpo.style.color = '#FFFFFF';

export default function Main() {
  const taskInput = useRef(null);
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{
    taskInput.current.focus();
 },[])

  const itemTask = {
    task: task,
    id: Date.now(),
  };
 
  const handleSubmit = (e) => {
    setTask(e.preventDefault());
    const local = e.target.elements.local.value;
    localStorage.setItem('itemTask', local);
    location.reload(false);
  };

  const onChange = event => {
    const local = localStorage.getItem('itemTask')
    if(local !== null){
      setTask(event.target.value);
      inputEl.current.focus();
    }
  };

  const remove = (id) => {
    setList(
      list.filter((item) => item.id != id),
      []
    );
  };

  const handleClick = () => {
    if(task !== undefined){
      setList([...list, itemTask]), setTask('');
      //console.log(task)
     }
    
  };
  

 

  return (
    <S.Container>
      <S.SubContainer onSubmit={(e) => {handleSubmit(e)}}>
        <input ref={taskInput} type="text" value={task} placeholder="digite aqui sua tarefa" onChange={onChange}/>
        <S.BtnADD onClick={handleClick}>Add Task</S.BtnADD>
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
