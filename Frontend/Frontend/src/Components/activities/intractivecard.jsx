// src/components/activities/InteractivePersonalCardActivity.jsx
import React from 'react';

export const InteractivePersonalCardActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff7ed', borderRadius: '8px', border: '1px solid #fed7aa' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#ea580c' }}>Activity: Interactive Personal Card (JavaScript)</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Bring your personal card to life with JavaScript!
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        <li>Add a button that, when clicked, displays an `alert()` with a fun fact about you.</li>
        <li>Use `console.log()` to output messages when the page loads or when a button is clicked.</li>
        <li>Declare a variable with your age and display it.</li>
        <li>Create a simple function and call it on button click.</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        Get ready to see your web page respond to your commands!
      </p>
    </div>
  );
};