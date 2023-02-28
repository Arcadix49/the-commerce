import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../pages/Home.js';
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from '../store/slice/userSlice.js';


export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const dispatch = useDispatch()
  const store = useSelector(state => state);
console.log(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9576/auth/register', { email, password })
      .then((res) => {
        dispatch(addUser({ user: res.data.user }));
      
        setSuccess(res.data.message);
        navigate('/auth/login');
        
         // navigate to home page on success
      })
      
      .catch((err) => {
        setSuccess(null);
        alert(err.response.data.message);
      });
  };

 

  return (
    <div>
      <Header/>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Crée un compte:</h2>
        <div className="nem2">
          <label>Email :</label>
        </div>
        <input onChange={(e) => setEmail(e.target.value)} type='email'name='email' required/>
        <div className="nem2">
          <label>Password :</label>
        </div>
        <input onChange={(e) => setPassword(e.target.value)} type='password' name='password' required/>
        <input className="nem" type='submit' name='go' />
      </form>
      
    </div>
  );
};