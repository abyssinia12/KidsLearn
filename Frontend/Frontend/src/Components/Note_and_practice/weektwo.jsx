import React, { useState } from "react";

const slideGroups = {
  "Introduction to CSS": [],
  "Inline and Internal CSS": [],
  "Styling Text": [],
  "Background Color": [],
  "Border and Padding": [],
};

export default function WeekTwoSlides() {
  const groupNames = Object.keys(slideGroups);
  const [selectedGroup, setSelectedGroup] = useState(null); // No topic selected by default
  const [current, setCurrent] = useState(0);
  const slides = selectedGroup ? slideGroups[selectedGroup] : [];
  const slide = slides[current];

  React.useEffect(() => {
    setCurrent(0);
  }, [selectedGroup]);

  return (
    <div style={{
      display: 'flex',
      maxWidth: 900,
      margin: "40px auto",
      background: "#f0f7ff",
      borderRadius: 16,
      boxShadow: "0 4px 24px #b3c6ff33",
      fontFamily: 'Comic Sans MS, Comic Sans, cursive',
      minHeight: 400,
    }}>
      {/* Sidebar vertical menu */}
      <div style={{
        minWidth: 220,
        background: '#e0e7ff',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        padding: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 8,
        boxShadow: '2px 0 8px #b3c6ff22',
      }}>
        {groupNames.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedGroup(name)}
            style={{
              background: selectedGroup === name ? '#6c47ff' : 'transparent',
              color: selectedGroup === name ? 'white' : '#6c47ff',
              border: 'none',
              borderRadius: 8,
              margin: '0 16px',
              padding: '14px 10px',
              fontWeight: 700,
              fontSize: '1.08rem',
              cursor: 'pointer',
              boxShadow: selectedGroup === name ? '0 2px 8px #6c47ff33' : 'none',
              transition: 'background 0.2s',
              outline: selectedGroup === name ? '2px solid #6c47ff' : 'none',
              textAlign: 'left',
            }}
          >
            {name}
          </button>
        ))}
      </div>
      {/* Main content area */}
      <div style={{
        flex: 1,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: slides.length === 0 ? 'center' : 'flex-start',
        minHeight: 400,
        textAlign: 'center',
      }}>
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
                  style={{
                    background: current === 0 ? "#ccc" : "#6c47ff",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 24px",
                    fontSize: "1.1rem",
                    cursor: current === 0 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px #0001",
                    transition: "background 0.2s",
                  }}
                >
                  Prev
                </button>
                <span style={{ alignSelf: "center", fontSize: "1.1rem", color: "#6c47ff" }}>
                  Slide {current + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
                  disabled={current === slides.length - 1}
                  style={{
                    background: current === slides.length - 1 ? "#ccc" : "#6c47ff",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 24px",
                    fontSize: "1.1rem",
                    cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px #0001",
                    transition: "background 0.2s",
                  }}
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
