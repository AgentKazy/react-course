import { useState } from 'react';

// Styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
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
      <h2>Sign Up</h2>
      <label>
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
        {/* <span>Display name:</span> */}
        <input
          required
          type="text"
          placeholder="Display name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>Profile picture:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
}
