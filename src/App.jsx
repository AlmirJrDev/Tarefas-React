import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check, Text } from './style.js'

 

function App() {

  const [list, setList] = useState([{ id:uuid(), task:"Primeira tarefa já realizada, você entrou na sua lista de tarefa 😁", finished: true},]);
  
  const [inputTask, setInputTask ] = useState('');



  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueinoBotao() {
    if(inputTask){setList([...list,{ id: uuid(), task: inputTask, finished: false }])}
    
  }

  function finalizarTarefa(id){
      const newList = list.map( item => (
        item.id === id ? { ...item, finished: !item.finished } : item
      ) )

      setList(newList)
  }

  function deletarTarefa(id){
    const newList = list.filter( (item) => item.id !== id)

    setList(newList)
    
  }

  return (
    <Container>
        
      <ToDoList> 
      <Input onChange={inputMudou} type="text" placeholder="o que tenho para fazer..." />
      <Button onClick={cliqueinoBotao}>Adicionar</Button> 

    
      <ul>
       {
       list.length > 0 ? (
              
              list.map((item) => (
                  <ListItem isFinished={item.finished} key={item.id}  >
                  <Check onClick={()=> finalizarTarefa(item.id)} />
                      <li>{item.task}</li>
                      <Trash onClick={()=> deletarTarefa(item.id)} />
                </ListItem>
         ))
         ) : (
          <Text> ✨Parabens!👏 As tarefas já foram feitas, Qual é a Proxima?🤔</Text>
         )}
      </ul>
      </ToDoList>
    </Container>
  )
} 

export default App