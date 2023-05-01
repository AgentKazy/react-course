import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// Styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password);
  };

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        {/* <span>Display name:</span> */}
        <input
          type="text"
          placeholder="Display name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        {/* <span>Email:</span> */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        {/* <span>Password:</span> */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
