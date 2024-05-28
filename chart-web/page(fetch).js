'use client'

import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://54.180.2.181:3000/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type':'application/json;charset=utf-8',
        },
        credentials: 'include', // 세션을 요청할 때 쿠키를 같이 전송
      }).then(()=>{
        console.log(email);
      })
      ;

      // if (response.ok) {
      //   // 세션을 요청하여 사용자 정보 받아오기
      //   const sessionResponse = await fetch('http://54.180.2.181:3000', {
      //     method: 'GET',
      //     credentials: 'include', // 세션을 요청할 때 쿠키를 같이 전송
      //   });

      //   if (sessionResponse.ok) {
      //     const sessionData = await sessionResponse.json();
      //     console.log('Received session data:', sessionData);
      //     // 여기서 세션 데이터를 상태로 저장하거나 다른 작업 수행 가능
      //   } else {
      //     console.error('Failed to fetch session data');
      //   }
      // } else {
      //   console.error('Login failed');
      // }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
