// src/components/activities/MagicColorPageActivity.jsx
import React from 'react';

export const MagicColorPageActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eaf5e8', borderRadius: '8px', border: '1px solid #a7d9b9' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#388e3c' }}>Activity: Magic Color Page</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Build a page where you can change the background color dynamically!
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        <li>Create a page with a main content area.</li>
        <li>Add several buttons, each labeled with a color (e.g., "Red", "Blue", "Green").</li>
        <li>When a button is clicked, use JavaScript and DOM manipulation to change the background color of the main content area to the corresponding color.</li>
        <li>Challenge: Add a "Random Color" button!</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        This is where the magic of JavaScript truly shines!
      </p>
    </div>
  );
};