import React, { useState } from "react";

const slideGroups = {
  "Welcome to Web Layout Fun!": [
    {
      title: "Welcome to Web Layout Fun!",
      content: (
        <div style={{ fontSize: "1.15rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          Today we’ll learn how to build the structure of a webpage<br /><br />
          Add images, boxes, and even give them names!
          <div style={{ marginTop: 16, fontStyle: 'italic', color: '#888' }}>
            {/* Image: A cartoon webpage with labeled parts (header, image, box, etc.). Smiling webpage character saying "Let’s build me!" */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "The <img> Tag – Show Pictures",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<img src="dog.png" alt="Cute dog">`}
          </pre>
          src = picture file<br />
          alt = text if image doesn't load
          <div style={{ marginTop: 10 }}>
            {/* Image: A real or cartoon puppy image with <img> label. Picture frame with “src” and “alt” notes. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "The <div> Tag – Big Box",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>&lt;div&gt;</b> = a block or section<br />
          Think of it like a container for other stuff<br /><br />
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<div>
  <p>This is inside a box!</p>
</div>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: A cardboard box with text inside. Cute cartoon box with a label: "I hold stuff!" */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "The <span> Tag – Tiny Wrapper",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>&lt;span&gt;</b> = for styling small parts of text<br />
          Used inside lines<br /><br />
          <pre style={{ background: "#ffe0e0", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<p>I love <span style="color: red;">pizza</span>!</p>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: A highlight marker circling one word. Cartoon hand pointing to the word "pizza". */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Class and ID – Giving Tags Names",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>class</b> = group name<br />
          <b>id</b> = special name (only one!)<br /><br />
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<div class="fun-box"></div>
<p id="title-text"></p>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Cartoon boxes wearing name tags like “class=fun-box”. One box proudly saying: "I’m unique! I have an ID!" */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Styling Boxes with CSS",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`.fun-box {
  background-color: pink;
  border: 2px solid purple;
  padding: 20px;
}`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: A pink box with thick purple border and padding labeled. Visual diagram: inside = content, around = padding, border */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Page Layout Parts",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          Common layout parts:<br /><br />
          <span role="img" aria-label="purple square">🟪</span> Header<br />
          <span role="img" aria-label="page">📄</span> Main Content<br />
          <span role="img" aria-label="brown square">🟫</span> Footer
          <div style={{ marginTop: 10 }}>
            {/* Image: Cartoon webpage sliced into 3 labeled sections: Header, Body, Footer. Smiling boxes saying, “I’m the header!” etc. */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Layout Example with Boxes",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Code Example:</b>
          <pre style={{ background: "#e0f7fa", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<div id="header">Welcome!</div>
<div class="main">
  <img src="cat.png" alt="Cat">
  <p>Hello from the main area.</p>
</div>
<div id="footer">Thank you!</div>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Mock webpage showing header, image, paragraph, and footer. Fun cat image inside the layout */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Simple CSS for Layout",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>CSS Example:</b>
          <pre style={{ background: "#fffbe7", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`#header, #footer {
  background-color: lightgreen;
  padding: 10px;
}
.main {
  background-color: lightyellow;
  border: 1px solid black;
  padding: 20px;
}`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Final colorful layout with labels: Header, Main, Footer */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Let’s Build It Together!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Mini Project Code:</b>
          <pre style={{ background: "#f3e8ff", padding: 10, borderRadius: 8, marginBottom: 10 }}>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      #header, #footer {
        background-color: skyblue;
        padding: 10px;
      }
      .main {
        background-color: lightgray;
        padding: 20px;
        border: 2px dashed orange;
      }
    </style>
  </head>
  <body>
    <div id="header">🌟 Welcome to My Page!</div>
    <div class="main">
      <img src="robot.png" alt="Robot" width="100">
      <p>Hello from the main content!</p>
    </div>
    <div id="footer">👋 See you later!</div>
  </body>
</html>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Cute robot image, colorful boxes, and smiling header/footer */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "You Did It! 🎉",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          You built a webpage with:<br /><br />
          Images<br />
          Boxes<br />
          Layout<br />
          Class and ID
          <div style={{ marginTop: 10 }}>
            {/* Image: Cartoon superhero kid with a cape that says “HTML + CSS Hero!” Sticker: “Junior Page Designer” */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Fun Quiz Time!",
      content: (
        <div style={{ fontSize: "1.13rem", textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
          <b>Q1:</b> What tag is used to make a big section box?<br />
          <span style={{ marginLeft: 16 }}>A) &lt;span&gt; B) &lt;div&gt; C) &lt;img&gt;</span>
          <br /><br />
          <b>Q2:</b> Which one is unique?<br />
          <span style={{ marginLeft: 16 }}>A) class B) id</span>
          <div style={{ marginTop: 10 }}>
            {/* Image: Webpage quiz board with checkmarks ✅ */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
};

export default function WeekThreeSlides() {
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
