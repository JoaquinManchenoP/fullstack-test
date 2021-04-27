import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const [finalUsers, setFinalUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState({
    username: "",
  });

  const handleUserInputChange = (event) => {
    setCurrentUser({
      username: event.target.value,
    });

    console.log(users);
  };

  const onSumbit = (event) => {
    event.preventDefault();

    const User = {
      username: currentUser.username,
    };

    axios
      .post("http://localhost:5000/users/add/", User)
      .then((res) => console.log(res.data));

    setCurrentUser({
      username: "",
    });

    async function fetchData() {
      const request = await axios
        .get("http://localhost:5000/users/")
        .then((results) => {
          console.log(results.data);
          if (results.data) {
            setUsers([results.data]);
          }
        });
    }
    fetchData();
  };

  return (
    <div className="App">
      <form>
        <input
          onChange={handleUserInputChange}
          type="text"
          placeholder="User"
          name="username"
          value={currentUser.username}
        ></input>
        <input onClick={onSumbit} type="submit"></input>
      </form>
      <div className="users">
        {users[0].map((user) => (
        
        ))}
      </div>
    </div>
  );
}

export default App;
