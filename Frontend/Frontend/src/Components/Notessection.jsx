// src/components/NotesSection.jsx
import React from 'react';

export const NotesSection = ({ week }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#388e3c' }}>Notes & Practice for Week {week}</h2>
      <p style={{ marginBottom: '10px', color: '#4CAF50' }}>
        Here you can find detailed notes and exercises to practice what you learned in Week {week}.
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#555' }}>
        <li>Key Concepts: ...</li>
        <li>Code Examples: ...</li>
        <li>Practice Challenges: ...</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#666' }}>
        "Practice makes perfect! Try out the coding challenges to solidify your understanding."
      </p>
    </div>
  );
};