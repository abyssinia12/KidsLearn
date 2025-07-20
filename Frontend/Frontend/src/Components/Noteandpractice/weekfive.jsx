import React, { useState } from "react";
import domImg from "../../assets/week3image/DOM.jpg";

const slideGroups = {
  "Let’s Do More with JavaScript!": [
    {
      title: "Let’s Do More with JavaScript!",
      content: (
        <div style={{ fontSize: "1.15rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          Today we’ll learn about:<br /><br />
          ✨ More JavaScript tricks<br />
          🌳 The DOM (Document Object Model)<br />
          🎨 A Magic Color Project!
          <div style={{ marginTop: 16, fontStyle: 'italic', color: '#888' }}>
            {/* Image: A magician with a wand turning a web page into colors. Cartoon tree with nodes labeled “DOM”. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Review – What We Know So Far",
      content: (
        <div style={{ fontSize: "1.15rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          We used:<br /><br />
          <code>alert()</code><br />
          <code>console.log()</code><br />
          <code>var</code>, <code>function()</code>, and buttons!<br /><br />
          Ready to level up?
          <div style={{ marginTop: 16, fontStyle: 'italic', color: '#888' }}>
            {/* Image: Superhero ladder going up. Kid jumping over HTML + CSS boxes into JS. */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "What Is the DOM?": [
    {
      title: "What Is the DOM?",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>DOM</b> = <b>Document Object Model</b><br /><br />
          JavaScript uses DOM to change HTML elements<br />
          Like a tree of your webpage!
          <div style={{ marginTop: 10 }}>
            {/* Image: DOM Tree cartoon with elements like <body>, <h1>, <p> as tree branches */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Finding Elements with JavaScript",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`document.getElementById("myTitle")`}
          </pre>
          Finds an element with <code>id="myTitle"</code>
          <div style={{ marginTop: 10 }}>
            {/* Image: Cartoon magnifying glass finding a title with an ID tag */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Changing Text on the Page",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`document.getElementById("myTitle").innerText = "Hello, Magic!";`}
          </pre>
          Changes the text inside that element
          <div style={{ marginTop: 10 }}>
            {/* Image: Webpage showing “Hello” change into “Hello, Magic!” with sparkle */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Changing Styles with JavaScript",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#ffe0e0", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`document.body.style.backgroundColor = "pink";`}
          </pre>
          We can change:<br />
          background colors<br />
          text size<br />
          borders... and more!
          <div style={{ marginTop: 10 }}>
            {/* Image: Page background changing from white → pink → yellow */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Event Listeners – Magic Buttons!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`document.getElementById("myBtn").onclick = function() {
  alert("Button clicked!");
};`}
          </pre>
          Add actions when buttons are clicked
          <div style={{ marginTop: 10 }}>
            {/* Image: Button smiling when clicked. “Click me!” button with sparkles */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Magic Color Project": [
    {
      title: "Let’s Build Our Magic Color Page!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Project Setup:</b>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<h1 id="title">Magic Color Page</h1>
<button onclick="changeColor()">Change Color</button>`}
          </pre>
          <b>JS:</b>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`function changeColor() {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("title").innerText = "✨ Magic Happened!";
}`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Rainbow-colored background and happy heading */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Make It Random! 🌈",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>JS with Random Color:</b>
          <pre style={{ background: "#ffe0e0", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`function changeColor() {
  const colors = ["red", "green", "blue", "purple", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Dice rolling → changing color background */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Final Project – Full Code",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>HTML:</b>
          <pre style={{ background: "#f3e8ff", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<h1 id="title">Magic Color Page</h1>
<button onclick="changeColor()">Make Magic!</button>`}
          </pre>
          <b>JS:</b>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`function changeColor() {
  const colors = ["lightgreen", "skyblue", "lightcoral", "gold"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  document.getElementById("title").innerText = "✨ Magic Happened!";
}`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Page that keeps changing color every time it’s clicked */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "You Did It! 🎉",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          You now know:<br /><br />
          How to use the DOM<br />
          How to change text and style<br />
          How to make your own interactive page
          <div style={{ marginTop: 10 }}>
            {/* Image: Wizard kid with wand and “Certified DOM Magician” badge */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Fun Quiz Time!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Q1:</b> What does document.getElementById() do?<br />
          <span style={{ marginLeft: 16 }}>A) Add a picture<br />B) Find an element<br />C) Make pizza 🍕</span>
          <br /><br />
          <b>Q2:</b> What does innerText do?<br />
          <span style={{ marginLeft: 16 }}>A) Change the image<br />B) Change the text<br />C) Change the border</span>
        </div>
      ),
      images: [],
    },
    {
      title: "🎨 Try Your Own Magic Page!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Challenge:</b><br /><br />
          Try using:<br />
          6 colors<br />
          A surprise emoji 🎉<br />
          Changing the button text too!
          <div style={{ marginTop: 10 }}>
            {/* Image: Celebration with fireworks and stars */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "The Magic Web Creator!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ marginBottom: 16 }}>
            Meet our magic boy who can create amazing web pages with a wave of his wand.<br />
            With JavaScript and the DOM, you can make your own web magic too!
          </div>
          <img
            src={domImg}
            alt="Magic Web Creator"
            style={{ maxWidth: 400, width: '100%', borderRadius: 12, boxShadow: '0 2px 8px #b3c6ff33', margin: '0 auto' }}
          />
        </div>
      ),
      images: [domImg],
    },
  ],
};

export default function WeekFiveSlides() {
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