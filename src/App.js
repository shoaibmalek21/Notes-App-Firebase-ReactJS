// import React, { useEffect } from 'react';
import React, { useEffect, useState } from "react";

// import logo from './logo.svg';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Notes from './Notes';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [notes, setNotes] = useState([]);
  // const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out'])
  const [input, setInput] = useState('');
  // console.log('Shoaib',input);
  useEffect(() => {
    db.collection('notes').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setNotes(snapshot.docs.map(doc => doc.data().note))
    })
  }, []);
  
  const addNotes = (event) => {
    event.preventDefault();

    db.collection('notes').add({
      note: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    // console.log('Im Working!');
    setNotes([...notes, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Good day...</h1>
      <form>      
        <FormControl>
          <InputLabel>Write a Notes</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addNotes} variant='contained' color='primary'>
          Add Note
        </Button>
      </form>

      {/* <button type='submit' onClick={addNotes}>Add Note</button> */}

      <ul>
        {notes.map(note => (
          <Notes text={note}/>
            // <li>{todo}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
