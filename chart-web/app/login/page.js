'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.180.2.181:3000/', // 백엔드 서버 주소 
  withCredentials: true,
});

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
// 사용할 변수 : 아이디, 비밀번호, 로그인 성공 후 서버에서 전송받은 사용자 정보 - 여기서는 아이디만 받음

  useEffect(() => {
    api.get('/').then(() => {
        console.log("GET!!!!!")
    });
  }, []);

  const login = () => {
    api.post('/login', { email, password })
    .then(()=>console.log("POST!!!!!"))
    .catch(error => {
      console.error(error.response.data);
    });
  };

  return (
    <div>
      <h1>ID</h1>
      <div>
        <input
          type="text"
          name="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={login}>Login</button>
      <div>
        {/* {user ? <h2>Welcome, {user.email}</h2> : <h2>Please log in</h2>} */}
      </div>
    </div>
  );
}

export default App;