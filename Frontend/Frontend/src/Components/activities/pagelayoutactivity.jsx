// src/components/activities/PageLayoutActivity.jsx
import React from 'react';

export const PageLayoutActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f3e8ff', borderRadius: '8px', border: '1px solid #d8b4fe' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#9333ea' }}>Activity: Page Layout Design</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Time to build a multi-section page! Create a page that includes:
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        <li>A header section with a title.</li>
        <li>A main content area divided into at least two `div` sections.</li>
        <li>Include images in at least one section.</li>
        <li>Use `span` to highlight specific words.</li>
        <li>Apply different CSS classes for styling different sections.</li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        Think about how to visually separate content using spacing and backgrounds.
      </p>
    </div>
  );
};