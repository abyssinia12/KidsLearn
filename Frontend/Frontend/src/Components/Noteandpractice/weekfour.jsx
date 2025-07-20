import React, { useState } from "react";
import js1Img from "../../assets/week3image/js1.jpg";
import js2Img from "../../assets/week3image/js2.jpg";

const slideGroups = {
  "Welcome to JavaScript": [
    {
      title: "Welcome to JavaScript!",
      content: (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#fffbe7', borderRadius: 12, padding: '20px 16px', marginBottom: 16, boxShadow: '0 2px 8px #ffe06655', fontSize: '1.15rem', color: '#4b3f1d', maxWidth: 600, margin: '0 auto 16px auto', minHeight: 180 }}>
          <div style={{ flex: 2, textAlign: 'left' }}>
            JavaScript makes your web pages <b>smart and interactive!</b><br /><br />
            It can make things pop up, move, or change!
            <div style={{ marginTop: 16, fontStyle: 'italic', color: '#888' }}>
              {/* Image: Cartoon robot pressing buttons and making a web page dance. JavaScript logo with a smiling face. */}
            </div>
          </div>
          <img
            src={js1Img}
            alt="Jumping from HTML and CSS to JS"
            style={{ flex: 1, maxWidth: 140, minWidth: 90, maxHeight: 140, borderRadius: 10, boxShadow: '0 2px 8px #0001', marginLeft: 18, objectFit: 'contain', background: '#fff', padding: 6 }}
          />
        </div>
      ),
      images: [js1Img],
    },
    {
      title: "What Can JavaScript Do?",
      content: (
        <div style={{ fontSize: "1.15rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <span role="img" aria-label="balloon">🎈</span> Show messages<br />
          <span role="img" aria-label="brain">🧠</span> Think with logic<br />
          <span role="img" aria-label="robot">🤖</span> React to clicks<br />
          <span role="img" aria-label="sound">🔊</span> Talk to the console
          <div style={{ marginTop: 16, fontStyle: 'italic', color: '#888' }}>
            {/* Image: A button on a webpage with “Click me!” Happy webpage reacting to a click. */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Show a Message": [
    {
      title: "Show a Message – alert()",
      content: (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#fffbe7', borderRadius: 12, padding: '20px 16px', marginBottom: 16, boxShadow: '0 2px 8px #ffe06655', fontSize: '1.13rem', color: '#4b3f1d', maxWidth: 600, margin: '0 auto 16px auto', minHeight: 140 }}>
          <div style={{ flex: 2, textAlign: 'left' }}>
            <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`alert("Hello, friend!");`}
            </pre>
            Pops up a message box on the screen
            <div style={{ marginTop: 10 }}>
              {/* Image: Cartoon pop-up box saying “Hello!” Smiling emoji popping out of a computer. */}
            </div>
          </div>
          <img
            src={js2Img}
            alt="Show a message with alert()"
            style={{ flex: 1, maxWidth: 120, minWidth: 80, maxHeight: 120, borderRadius: 10, boxShadow: '0 2px 8px #0001', marginLeft: 18, objectFit: 'contain', background: '#fff', padding: 6 }}
          />
        </div>
      ),
      images: [js2Img],
    },
  ],
  "Console Log": [
    {
      title: "Write to the Console – console.log()",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`console.log("I’m learning JavaScript!");`}
          </pre>
          Sends messages to the console<br />
          Used for debugging or testing
          <div style={{ marginTop: 10 }}>
            {/* Image: A magnifying glass emoji or spy icon. Console window with friendly message. */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Variables": [
    {
      title: "Variables – var",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#ffe0e0", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`var name = "Zara";`}
          </pre>
          A variable stores a value (like a label or container)<br />
          You can use it again later!
          <div style={{ marginTop: 10 }}>
            {/* Image: A jar labeled “name” with “Zara” inside. Cartoon brain storing a label. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Data Types – What Can We Store?",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 10 }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: 4 }}>Type</th>
                <th style={{ border: '1px solid #ccc', padding: 4 }}>Example</th>
                <th style={{ border: '1px solid #ccc', padding: 4 }}>What it is</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Text</td>
                <td>"Hello"</td>
                <td>Words</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>10</td>
                <td>Count or math</td>
              </tr>
              <tr>
                <td>Boolean</td>
                <td>true / false</td>
                <td>Yes or No</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 10 }}>
            {/* Image: Icons: 📝 (text), 🔢 (number), ✅❌ (true/false) */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Functions": [
    {
      title: "Functions – Do Something!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`function sayHi() {
  alert("Hi there!");
}`}
          </pre>
          A function is like a mini-program<br />
          It runs when you call it
          <div style={{ marginTop: 10 }}>
            {/* Image: Cartoon button pushing a robot that says “Hi!” Puzzle pieces representing code blocks. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Button + JavaScript = Fun!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<button onclick="sayHi()">Click Me</button>

<script>
  function sayHi() {
    alert("You clicked the button!");
  }
</script>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Big colorful “Click Me” button with fireworks. Happy face popping out after click. */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Mini Project": [
    {
      title: "Mini Project – My First Web Trick!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#f3e8ff", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, JavaScript!</h1>
    <button onclick="greet()">Say Hello</button>

    <script>
      function greet() {
        alert("Hi, awesome coder!");
      }
    </script>
  </body>
</html>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Click animation of a kid pressing a glowing button. Cheerful popup message on screen. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "You’re a JavaScript Coder! 🎉",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          You just:<br /><br />
          <span role="img" aria-label="yellow square">🟨</span> Created alerts<br />
          <span role="img" aria-label="speech">💬</span> Used console.log<br />
          <span role="img" aria-label="purple square">🟪</span> Made buttons work<br />
          <span role="img" aria-label="brain">🧠</span> Built your own function
          <div style={{ marginTop: 10 }}>
            {/* Image: “Certified Junior Coder” badge. Cartoon superhero with JS cape. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Fun Quiz Time!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Q1:</b> What does alert() do?<br />
          <span style={{ marginLeft: 16 }}>A) Change color<br />B) Show a message<br />C) Make pizza</span>
          <br /><br />
          <b>Q2:</b> What’s a function?<br />
          <span style={{ marginLeft: 16 }}>A) A picture<br />B) A sound<br />C) A block of code that runs</span>
          <div style={{ marginTop: 10 }}>
            {/* Image: Colorful quiz board with happy faces and checkmarks */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
};

export default function WeekFourSlides() {
  const groupNames = Object.keys(slideGroups);
  const [selectedGroup, setSelectedGroup] = useState(groupNames[0]);
  const slides = slideGroups[selectedGroup];
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  React.useEffect(() => {
    setCurrent(0);
  }, [selectedGroup]);

  return (
    <div style={{ display: 'flex', maxWidth: 900, margin: "40px auto", background: "#f0f7ff", borderRadius: 16, boxShadow: "0 4px 24px #b3c6ff33", fontFamily: 'Comic Sans MS, Comic Sans, cursive', minHeight: 400 }}>
      {/* Sidebar vertical menu */}
      <div style={{ minWidth: 220, background: '#e0e7ff', borderTopLeftRadius: 16, borderBottomLeftRadius: 16, padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 8, boxShadow: '2px 0 8px #b3c6ff22' }}>
        {groupNames.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedGroup(name)}
            style={{ background: selectedGroup === name ? '#6c47ff' : 'transparent', color: selectedGroup === name ? 'white' : '#6c47ff', border: 'none', borderRadius: 8, margin: '0 16px', padding: '14px 10px', fontWeight: 700, fontSize: '1.08rem', cursor: 'pointer', boxShadow: selectedGroup === name ? '0 2px 8px #6c47ff33' : 'none', transition: 'background 0.2s', outline: selectedGroup === name ? '2px solid #6c47ff' : 'none', textAlign: 'left' }}
          >
            {name}
          </button>
        ))}
      </div>
      {/* Main content area */}
      <div style={{ flex: 1, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: slides.length === 0 ? 'center' : 'flex-start', minHeight: 400, textAlign: 'center' }}>
        {selectedGroup && slides.length > 0 ? (
          <>
            <h2 style={{ color: "#6c47ff", fontSize: "2rem", marginBottom: 12 }}>{slide.title}</h2>
            <div style={{ marginBottom: 16 }}>{slide.content}</div>
            {slide.images && slide.images.length > 0 && (
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                {slide.images.map((img, i) => (
                  <img key={i} src={img} alt="slide visual" style={{ maxHeight: 120, borderRadius: 8, boxShadow: "0 2px 8px #0001" }} />
                ))}
              </div>
            )}
            {slides.length > 1 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, width: '100%', maxWidth: 500 }}>
                <button
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  style={{ background: current === 0 ? "#ccc" : "#6c47ff", color: "white", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: "1.1rem", cursor: current === 0 ? "not-allowed" : "pointer", fontWeight: 600, boxShadow: "0 2px 8px #0001", transition: "background 0.2s" }}
                >
                  Prev
                </button>
                <span style={{ alignSelf: "center", fontSize: "1.1rem", color: "#6c47ff" }}>
                  Slide {current + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
                  disabled={current === slides.length - 1}
                  style={{ background: current === slides.length - 1 ? "#ccc" : "#6c47ff", color: "white", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: "1.1rem", cursor: current === slides.length - 1 ? "not-allowed" : "pointer", fontWeight: 600, boxShadow: "0 2px 8px #0001", transition: "background 0.2s" }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ color: '#6c47ff', fontSize: '1.3rem', opacity: 0.7 }}>
            Please select a topic from the left menu to begin.
          </div>
        )}
      </div>
    </div>
  );
}
