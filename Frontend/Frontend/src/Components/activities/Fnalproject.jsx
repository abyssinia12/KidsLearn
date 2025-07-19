// src/components/activities/FinalProjectActivity.jsx
import React from 'react';

export const FinalProjectActivity = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fbe9e7', borderRadius: '8px', border: '1px solid #ffab91' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#e64a19' }}>Final Projects: Feed the Animal & Superhero Page</h3>
      <p style={{ marginBottom: '15px', color: '#4b5563' }}>
        Congratulations! It's time to show off all your new skills.
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: '#4b5563' }}>
        <li>
          <strong>Project 1: Feed the Animal Game</strong>
          <ul>
            <li>Create an HTML page with an animal image.</li>
            <li>Add buttons to "feed" the animal (e.g., "carrot", "fish").</li>
            <li>Use CSS to style the animal and buttons.</li>
            <li>Use JavaScript to change the animal's expression or display a message when fed.</li>
          </ul>
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Project 2: Superhero Page</strong>
          <ul>
            <li>Design an HTML page dedicated to your favorite superhero (or one you create!).</li>
            <li>Use CSS to give it a heroic look and feel.</li>
            <li>Include details like their powers, backstory, and a cool image.</li>
            <li>Add a small JavaScript interaction, like a hidden message that appears on hover/click.</li>
          </ul>
        </li>
      </ul>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6b7280' }}>
        These projects combine all the HTML, CSS, and JavaScript you've learned. Have fun!
      </p>
    </div>
  );
};