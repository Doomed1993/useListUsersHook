import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function App() {
  let [userId, setUserId] = useState(1)
  const [user, setUser] = useState({ name: '', email: '' });

   const handleClick = () => {
    setUserId(userId => userId + 1)
  }

  //let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  // const fetchUser = async () => {
  //   const res = await fetch(url);
  //   const newUser = await res.json();
  //   setUser(newUser);
  // };

//  useEffect(() => {
//   const fetchUser = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     const newUser = await res.json();
//     setUser(newUser); // Triggers re-render, but ...
//   };

//   fetchUser();
// }, [userId]);

const fetchUser = useCallback(async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const newUser = await res.json();
  setUser(newUser);
}, [userId]);

useEffect(() => {
  fetchUser();
}, [fetchUser]);

  console.log(userId, user)
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>User Lister</h1>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tr>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} onClick = {handleClick}>
        <button >
          Change User
        </button>
      </div>
    </div>
  );
}
