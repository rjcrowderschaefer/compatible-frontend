import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    setLoading(true);

    fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.key) {
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setEmail('');
          setPassword('');
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
