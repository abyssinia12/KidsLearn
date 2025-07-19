// src/components/activities/CustomizedPersonalCardActivity.jsx
import React from 'react';

export const CustomizedPersonalCardActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f2f7', borderRadius: '8px', border: '1px solid #81d4fa' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#0288d1' }}>Activity: Customized Personal Card (CSS)</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Now, let's make your personal card look awesome using CSS!
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        <li>Change background color of the card.</li>
        <li>Change text colors and font sizes.</li>
        <li>Add borders to elements.</li>
        <li>Center your name or image.</li>
        <li>Experiment with different selectors (tag, class, id).</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        Be creative and express your personality with styles!
      </p>
    </div>
  );
};