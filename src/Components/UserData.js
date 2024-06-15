import React, { useState, useEffect } from "react";
import "./UserData.css"; // Import the CSS file

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) =>
        console.error("Sorry, we can't fetch data: ", error)
      );
  }, []);

  return (
    <div className="container">
      <h2>User Data</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <label>
              Name: <span>{user.name}</span>
            </label>
            <label>
              Username: <span>{user.username}</span>
            </label>
            <label>
              Phone: <span>{user.phone}</span>
            </label>
            <label>
              Email: <span>{user.email}</span>
            </label>
            <label>
              Address:{" "}
              <span>
                {user.address.street}, {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode} {user.address.geo.lat} ,{user.address.geo.lng}
              </span>
            </label>
            <label>
              Company:{" "}
              <span>
                {user.company.name}, {user.company.catchPhrase} , {user.company.bs}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;

