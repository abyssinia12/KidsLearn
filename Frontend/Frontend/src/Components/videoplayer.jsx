// src/components/VideoPlayer.jsx
import React from 'react';

export const VideoPlayer = ({ week }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '8px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Video Lesson for Week {week}</h2>
      <div style={{ backgroundColor: '#ccc', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#555', borderRadius: '5px' }}>
        [Video Player Placeholder for Week {week}]
      </div>
      <p style={{ marginTop: '15px', color: '#555' }}>
        This is where your video content for Week {week} would be embedded.
      </p>
    </div>
  );
};