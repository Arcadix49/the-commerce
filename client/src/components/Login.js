import { useState } from 'react';
import axios from 'axios';
import Header from '../pages/Home.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9576/auth/login', { email, password })
      .then((res) => {
        setSuccess('User logged in!');
        localStorage.setItem('token', res.data.token); // stocker le token JWT dans localStorage
        navigate('/'); // rediriger vers la page d'accueil
      })
      .catch((err) => {
        setSuccess(null);
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <Header />
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Connectez-vous :</h2>
        <div className="nem2">
          <label>Email :</label>
        </div>
        <input onChange={(e) => setEmail(e.target.value)}type="email" name="email" required/>
        <div className="nem2">
          <label>Password :</label>
        </div>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" required/>

        <input className="nem" type="submit" name="go" />
      </form>

      {success !== '' && <p className="auth-mess">{success}</p>}
      
    </div>
  );
};