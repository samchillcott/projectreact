import React, {useState} from 'react';
import Tweet from './tweet';

function App(){
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there"},
    { name: "Voy", message: "I love Marina"},
    { name: "Dhanish", message: "BuildUp Devs"}
  ]);
  

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;