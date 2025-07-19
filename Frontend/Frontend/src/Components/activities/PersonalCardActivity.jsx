// src/components/activities/PersonalCardActivity.jsx
import React from 'react';

export const PersonalCardActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fffbe5', borderRadius: '8px', border: '1px solid #fcd34d' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#d97706' }}>Activity: Create Your Personal Card (HTML Only)</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Your first mission! Create a simple HTML page that represents you.
        Include:
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        {/* Corrected lines: Using HTML entities for angle brackets */}
        <li>Your Name (using &lt;h1&gt; tag)</li>
        <li>A picture of yourself or an avatar (using &lt;img&gt; tag)</li>
        <li>A short bio (using &lt;p&gt; tag)</li>
        <li>Your favorite hobby (using &lt;ul&gt; and &lt;li&gt; tags)</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        Focus on just the structure with HTML. We'll make it pretty later!
      </p>
      {/* You could add a simple code editor/viewer here or instructions for SPCK */}
    </div>
  );
};