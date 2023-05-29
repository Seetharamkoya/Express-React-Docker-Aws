import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHelloWorld = async () => {
      try {
        const response = await axios.get('http://35.157.187.47:5000/helloworld');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error calling API:', error);
        setMessage('Error fetching message');
      }
    };

    fetchHelloWorld();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
