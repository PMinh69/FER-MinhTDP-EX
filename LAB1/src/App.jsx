import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [likes, setLikes] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const student = {
    avatar: 'angry.jpg',
    fullName: 'Trần Dương Phúc Minh',
    studentId: 'HE204308',
    className: 'SE2004-NJ',
    major: 'Software Engineering',
    hobbies: ['Sleeping', 'Gaming', 'Eating', 'Music'],
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleStatus = () => setIsOnline(!isOnline);
  const handleLike = () => setLikes(likes + 1);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`profile-card ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="avatar-wrapper">
          <img 
            src={student.avatar} 
            alt={`${student.fullName}'s avatar`} 
            className="avatar-img" 
          />
          <span className={`status-dot ${isOnline ? 'online' : 'offline'}`}></span>
        </div>

        <div className="profile-info">
          <h1>{student.fullName}</h1>
          <p><strong>ID:</strong> {student.studentId}</p>
          <p><strong>Class:</strong> {student.className}</p>
          <p><strong>Major:</strong> {student.major}</p>
          <p>
            <strong>Status:</strong> 
            <span className={isOnline ? 'status-online' : 'status-offline'}>
              {isOnline ? ' Online' : ' Offline'}
            </span>
          </p>
          <p><strong>Total Likes:</strong> {likes}</p>

          <div className="hobbies-container">
            <h3>Hobbies</h3>
            <ul className="hobbies-list">
              {student.hobbies.map((hobby, index) => (
                <li key={index} className="hobby-item">{hobby}</li>
              ))}
            </ul>
          </div>

          <button className="toggle-btn" onClick={toggleStatus} style={{ marginRight: '10px' }}>
            {isOnline ? 'Go Offline' : 'Go Online'}
          </button>
          <button className="toggle-btn" onClick={handleLike} style={{ marginRight: '10px' }}>Like</button>
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  )
}


export default App
