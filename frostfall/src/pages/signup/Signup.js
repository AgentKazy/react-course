import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// Styles
import './Signup.css';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file.');
      return;
    }

    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image.');
      return;
    }

    if (selected.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB.');
      return;
    }

    // Passed all checks.
    setThumbnailError(null);
    setThumbnail(selected);
    console.log('Profile picture selected.');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <label>
          {/* <span>Display name:</span> */}
          <input
            required
            type="text"
            placeholder="Display name"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        {/* <span>Email:</span> */}
        <input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        {/* <span>Password:</span> */}
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>Profile picture:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
