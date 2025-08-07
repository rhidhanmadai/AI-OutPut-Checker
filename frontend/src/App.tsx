import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>AI Output Checker</h1>
      <textarea
        rows={6}
        style={{ width: '100%', marginBottom: '1rem' }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste text here..."
      />
      <br />
      <button onClick={handleSubmit}>Check</button>
      <div style={{ marginTop: '1rem' }}>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;
