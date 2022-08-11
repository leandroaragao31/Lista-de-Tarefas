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
    if(list !== ""){
      localStorage.getItem('itemTask')
      /* location.reload(false) */
    }
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
    if(taskInput !== null ){
      setTask(event.target.value);
      taskInput.current.focus();
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
      console.table(task)
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


/* 
  principio do cronometro
import React, { useState, useEffect, useRef }  from 'react'

export default function TesteAulaRef() {

const [numero, setNumero] = useState(0)

const handleBtn = useRef()

const Start =()=>{
  setInterval(()=>{
    setNumero(c => c < 5? c+1:c)
  }, 1000)
}

useEffect(()=>{
  if(numero === 5){
    handleBtn.current.style.backgroundColor = 'blue'
  }
}, [numero])
  return (
    <div>
   <h1>{numero}</h1>
   <button ref={handleBtn} onClick={()=>{Start()}}>+</button>
    </div>
  )
}
} */

