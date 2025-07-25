// import React, { useState } from "react";

// // Import images (adjust paths if needed)
// import htmlImg from "../../assets/Imageweek1/HTML.jpg";
// import cartoonComputer from "../../assets/Imageweek1/comp.webp";
// import childLaptop from "../../assets/Imageweek1/A child.jpg";
// import colorfulWebpage from "../../assets/Imageweek1/Example of a colorful cartoon webpage.jpg";
// import tagCharacters from "../../assets/Imageweek1/Cutetagcharacters.jpg";
// import headingsLadder from "../../assets/Imageweek1/Stacked headings from H1 to H6 like a ladder.jpg";
// import learningHtmlImg from "../../assets/Imageweek1/learning-HTML.jpg";
// import instructionImg from "../../assets/Imageweek1/instruction.webp";
// import webpageImg from "../../assets/Imageweek1/webpage.webp";

// // Grouped slides by topic
// const slideGroups = {
//   "What is Computer?": [
//     {
//       title: "What is Computer?",
//       content: (
//         <div
//           style={{
//             background: "#fffbe7",
//             borderRadius: 12,
//             padding: "20px 16px",
//             marginBottom: 16,
//             boxShadow: "0 2px 8px #ffe06655",
//             fontSize: "1.15rem",
//             color: "#4b3f1d",
//             textAlign: "left",
//             maxWidth: 420,
//             margin: "0 auto 16px auto"
//           }}
//         >
//           <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "#6c47ff", marginBottom: 8 }}>
//             What is a Computer?
//           </div>
//           <div style={{ marginBottom: 10 }}>
//             A <span style={{ color: "#ff9800", fontWeight: 600 }}>computer</span> is a smart machine that follows instructions.<br />
//             It helps you do fun and important things like <b>play games</b>, <b>draw</b>, <b>watch videos</b>, <b>write stories</b>, or <b>chat with friends</b>.
//           </div>
//           <div style={{ marginBottom: 10 }}>
//             <span role="img" aria-label="brain">🧠</span>
//             <span style={{ color: '#6c47ff', fontWeight: 600 }}> And guess what?</span> A computer isn’t just the big screen on a desk!
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Did you know?",
//       content: (
//         <div
//           style={{
//             background: "#e0f7fa",
//             borderRadius: 12,
//             padding: "20px 16px",
//             marginBottom: 16,
//             boxShadow: "0 2px 8px #b3c6ff33",
//             fontSize: "1.13rem",
//             color: "#22535c",
//             textAlign: "left",
//             maxWidth: 420,
//             margin: "0 auto 16px auto"
//           }}
//         >
//           <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#009688", marginBottom: 8 }}>
//             Did you know?
//           </div>
//           <span role="img" aria-label="devices">📱</span> Your <b>smartphone</b>, <span role="img" aria-label="tablet">📱</span> <b>tablet</b>, <span role="img" aria-label="laptop">💻</span> <b>laptop</b>, and even <span role="img" aria-label="tv">📺</span> <b>some TVs</b> are computers too — they all follow instructions to help you learn and play!
//         </div>
//       ),
//       images: [cartoonComputer],
//     },
//   ],
//   "What is Programming?": [
//     {
//       title: "What is Programming?",
//       content: (
//         <div
//           style={{
//             background: "#fffbe7",
//             borderRadius: 12,
//             padding: "20px 16px",
//             marginBottom: 16,
//             boxShadow: "0 2px 8px #ffe06655",
//             fontSize: "1.15rem",
//             color: "#4b3f1d",
//             textAlign: "left",
//             maxWidth: 420,
//             margin: "0 auto 16px auto"
//           }}
//         >
//           <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "#6c47ff", marginBottom: 8 }}>
//             What is Programming?
//           </div>
//           <div style={{ marginBottom: 10 }}>
//             Programming is like writing a <span style={{ color: "#ff9800", fontWeight: 600 }}>recipe</span> or giving <b>step-by-step instructions</b> to a computer. You tell it what to do using a special language — and it listens!<br /><br />
//             You can use programming to make <b>games</b>, <b>apps</b>, <b>websites</b>, and even <b>robots move</b>.
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Programming: Teaching Computers!",
//       content: (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             background: '#e0f7fa',
//             borderRadius: 12,
//             padding: '20px 16px',
//             marginBottom: 16,
//             boxShadow: '0 2px 8px #b3c6ff33',
//             fontSize: '1.13rem',
//             color: '#22535c',
//             maxWidth: 600,
//             margin: '0 auto 16px auto',
//             minHeight: 180
//           }}
//         >
//           <div style={{ flex: 1, textAlign: 'left', paddingRight: 18 }}>
//             <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#6c47ff', marginBottom: 8 }}>
//               Programming: Teaching Computers!
//             </div>
//             <span role="img" aria-label="brain">🧠</span> It's like <span style={{ color: '#6c47ff', fontWeight: 600 }}>teaching your computer to think and work</span> using your own rules!
//           </div>
//           <img
//             src={instructionImg}
//             alt="Programming instructions"
//             style={{
//               flex: 1,
//               maxWidth: 180,
//               minWidth: 120,
//               maxHeight: 160,
//               borderRadius: 10,
//               boxShadow: '0 2px 8px #0001',
//               marginLeft: 12,
//               objectFit: 'contain',
//               background: '#fff',
//               padding: 6
//             }}
//           />
//         </div>
//       ),
//       images: [],
//     },
//   ],
//   "What is a Website?": [
//     {
//       title: "What is a Website?",
//       content: (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             background: '#fffbe7',
//             borderRadius: 12,
//             padding: '20px 16px',
//             marginBottom: 16,
//             boxShadow: '0 2px 8px #ffe06655',
//             fontSize: '1.15rem',
//             color: '#4b3f1d',
//             maxWidth: 600,
//             margin: '0 auto 16px auto',
//             minHeight: 180
//           }}
//         >
//           <img
//             src={webpageImg}
//             alt="Website example"
//             style={{
//               flex: 1,
//               maxWidth: 180,
//               minWidth: 120,
//               maxHeight: 160,
//               borderRadius: 10,
//               boxShadow: '0 2px 8px #0001',
//               marginRight: 18,
//               objectFit: 'contain',
//               background: '#fff',
//               padding: 6
//             }}
//           />
//           <div style={{ flex: 2, textAlign: 'left' }}>
//             <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#6c47ff', marginBottom: 8 }}>
//               What is a Website?
//             </div>
//             <div style={{ marginBottom: 10 }}>
//               A <span style={{ color: '#ff9800', fontWeight: 600 }}>website</span> is like a <b>digital book</b> or <b>playground</b> on the internet. You can visit websites to <b>learn</b>, <b>play</b>, <b>watch</b>, or <b>read</b> — just like opening a magic window to explore anything you like!
//             </div>
//             <div style={{ marginBottom: 10 }}>
//               <span role="img" aria-label="web">🕸️</span> Think of the internet as a big spider web, and each website is a fun spot on the web!
//             </div>
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//   ],
//   "HTML Basics": [
//     {
//       title: "Welcome to HTML!",
//       content: (
//         <>
//           <p style={{ fontSize: "1.3rem", marginBottom: 8 }}>🖥 <b>What is HTML?</b></p>
//           <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
//             HTML stands for <b>HyperText Markup Language</b><br />
//             It's the language of the web!
//           </div>
//           <p style={{ color: "#6c47ff", fontWeight: 500 }}>HTML helps you create web pages!</p>
//         </>
//       ),
//       images: [htmlImg, childLaptop],
//     },
//     {
//       title: "What Can HTML Do?",
//       content: (
//         <div style={{ fontSize: "1.1rem" }}>
//           Create web pages<br />
//           Add text, images, and links<br />
//           Make your ideas come alive!
//         </div>
//       ),
//       images: [colorfulWebpage],
//     },
//     {
//       title: "Basic HTML Tags",
//       content: (
//         <div style={{ width: "100%", background: "#fffbe7", borderRadius: 8, marginBottom: 8, fontSize: "1.1rem", padding: 8 }}>
//           <b>Tag</b> &nbsp; <b>What it does</b><br />
//           &lt;html&gt; &nbsp; Starts the webpage<br />
//           &lt;head&gt; &nbsp; Info about the page<br />
//           &lt;body&gt; &nbsp; Shows content<br />
//           &lt;h1&gt; &nbsp; Big heading<br />
//           &lt;p&gt; &nbsp; A paragraph<br />
//           &lt;img&gt; &nbsp; Adds image
//         </div>
//       ),
//       images: [tagCharacters],
//     },
//     {
//       title: "Let’s See an Example!",
//       content: (
//         <pre style={{ background: "#e0f7fa", padding: 12, borderRadius: 8, fontSize: "1rem" }}>
// {`<!DOCTYPE html>
// <html>
//   <head>
//     <title>My First Page</title>
//   </head>
//   <body>
//     <h1>Hello, World!</h1>
//     <p>This is my first web page.</p>
//     <img src="sun.png" alt="Sunshine" />
//   </body>
// </html>`}
//         </pre>
//       ),
//       images: [],
//     },
//     {
//       title: "The <h1> to <h6> Tags",
//       content: (
//         <div style={{ fontSize: "1.1rem" }}>
//           <b>&lt;h1&gt;</b> is the BIGGEST<br />
//           <b>&lt;h6&gt;</b> is the smallest<br />
//           Use them for headings
//         </div>
//       ),
//       images: [headingsLadder],
//     },
//     {
//       title: "The <p> Tag - Paragraph",
//       content: (
//         <>
//           <div style={{ fontSize: "1.1rem" }}>Use it to write sentences. It's like a regular paragraph in a book.</div>
//           <pre style={{ background: "#f3e8ff", padding: 8, borderRadius: 8, fontSize: "1rem" }}>{`<p>I love learning HTML!</p>`}</pre>
//         </>
//       ),
//       images: [],
//     },
//     {
//       title: "Adding Images – <img> Tag",
//       content: (
//         <>
//           <pre style={{ background: "#fffbe7", padding: 8, borderRadius: 8, fontSize: "1rem" }}>{`<img src="cat.png" alt="Cute Cat" />`}</pre>
//           <div style={{ fontSize: "1.1rem" }}>
//             <b>src</b>: image path<br />
//             <b>alt</b>: image description
//           </div>
//         </>
//       ),
//       images: [],
//     },
//     {
//       title: "Let's Build a Mini Webpage!",
//       content: (
//         <pre style={{ background: "#e0f7fa", padding: 12, borderRadius: 8, fontSize: "1rem" }}>
// {`<!DOCTYPE html>
// <html>
//   <body>
//     <h1>Welcome to My Page</h1>
//     <p>I like soccer, pizza, and drawing.</p>
//     <img src="pizza.png" alt="Pizza" />
//   </body>
// </html>`}
//         </pre>
//       ),
//       images: [],
//     },
//     {
//       title: "You’re a Web Creator Now!",
//       content: (
//         <div style={{ fontSize: "1.1rem" }}>You just made a web page!<br />Keep learning and have fun ✨</div>
//       ),
//       images: [],
//     },
//     {
//       title: "Fun Quiz Time!",
//       content: (
//         <>
//           <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
//             <b>Q1:</b> What tag is used for a heading?<br />
//             <span style={{ marginLeft: 16 }}>A) &lt;h1&gt; &nbsp; B) &lt;p&gt; &nbsp; C) &lt;img&gt;</span>
//           </div>
//           <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
//             <b>Q2:</b> What does &lt;img&gt; do?<br />
//             <span style={{ marginLeft: 16 }}>A) Add text &nbsp; B) Add image &nbsp; C) Make bold</span>
//           </div>
//           <div style={{ fontSize: "2rem" }}>✅ ❌</div>
//         </>
//       ),
//       images: [],
//     },
//     {
//       title: "Keep Learning HTML!",
//       content: (
//         <div style={{ fontSize: "1.2rem", color: "#6c47ff", fontWeight: 600 }}>
//           Keep learning HTML and have fun building web pages!
//         </div>
//       ),
//       images: [learningHtmlImg],
//     },
//   ],
// };

// export default function WeekOneSlides() {
//   const groupNames = Object.keys(slideGroups);

//   const [selectedGroup, setSelectedGroup] = useState(null); // No topic selected by default
//   const [current, setCurrent] = useState(0);
//   const slides = selectedGroup ? slideGroups[selectedGroup] : [];
//   const slide = slides[current];
//   // When group changes, reset current slide to 0
//   React.useEffect(() => {
//     setCurrent(0);
//   }, [selectedGroup]);

//   return (
//     <div style={{
//       display: 'flex',
//       maxWidth: 900,
//       margin: "40px auto",
//       background: "#f0f7ff",
//       borderRadius: 16,
//       boxShadow: "0 4px 24px #b3c6ff33",
//       fontFamily: 'Comic Sans MS, Comic Sans, cursive',
//       minHeight: 400,
//     }}>
//       {/* Sidebar vertical menu */}
//       <div style={{
//         minWidth: 220,
//         background: '#e0e7ff',
//         borderTopLeftRadius: 16,
//         borderBottomLeftRadius: 16,
//         padding: '32px 0',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'stretch',
//         gap: 8,
//         boxShadow: '2px 0 8px #b3c6ff22',
//       }}>
//         {groupNames.map((name) => (
//           <button
//             key={name}
//             onClick={() => setSelectedGroup(name)}
//             style={{
//               background: selectedGroup === name ? '#6c47ff' : 'transparent',
//               color: selectedGroup === name ? 'white' : '#6c47ff',
//               border: 'none',
//               borderRadius: 8,
//               margin: '0 16px',
//               padding: '14px 10px',
//               fontWeight: 700,
//               fontSize: '1.08rem',
//               cursor: 'pointer',
//               boxShadow: selectedGroup === name ? '0 2px 8px #6c47ff33' : 'none',
//               transition: 'background 0.2s',
//               outline: selectedGroup === name ? '2px solid #6c47ff' : 'none',
//               textAlign: 'left',
//             }}
//           >
//             {name}
//           </button>
//         ))}
//       </div>
//       {/* Main content area */}
//       <div style={{
//         flex: 1,
//         padding: 32,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: slides.length === 0 ? 'center' : 'flex-start',
//         minHeight: 400,
//         textAlign: 'center',
//       }}>
//         {selectedGroup && slides.length > 0 ? (
//           <>
//             <h2 style={{ color: "#6c47ff", fontSize: "2rem", marginBottom: 12 }}>{slide.title}</h2>
//             <div style={{ marginBottom: 16 }}>{slide.content}</div>
//             {slide.images && slide.images.length > 0 && (
//               <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
//                 {slide.images.map((img, i) => (
//                   <img key={i} src={img} alt="slide visual" style={{ maxHeight: 120, borderRadius: 8, boxShadow: "0 2px 8px #0001" }} />
//                 ))}
//               </div>
//             )}
//             {slides.length > 1 && (
//               <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, width: '100%', maxWidth: 500 }}>
//                 <button
//                   onClick={() => setCurrent((c) => Math.max(0, c - 1))}
//                   disabled={current === 0}
//                   style={{
//                     background: current === 0 ? "#ccc" : "#6c47ff",
//                     color: "white",
//                     border: "none",
//                     borderRadius: 8,
//                     padding: "10px 24px",
//                     fontSize: "1.1rem",
//                     cursor: current === 0 ? "not-allowed" : "pointer",
//                     fontWeight: 600,
//                     boxShadow: "0 2px 8px #0001",
//                     transition: "background 0.2s",
//                   }}
//                 >
//                   Prev
//                 </button>
//                 <span style={{ alignSelf: "center", fontSize: "1.1rem", color: "#6c47ff" }}>
//                   Slide {current + 1} / {slides.length}
//                 </span>
//                 <button
//                   onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
//                   disabled={current === slides.length - 1}
//                   style={{
//                     background: current === slides.length - 1 ? "#ccc" : "#6c47ff",
//                     color: "white",
//                     border: "none",
//                     borderRadius: 8,
//                     padding: "10px 24px",
//                     fontSize: "1.1rem",
//                     cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
//                     fontWeight: 600,
//                     boxShadow: "0 2px 8px #0001",
//                     transition: "background 0.2s",
//                   }}
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div style={{ color: '#6c47ff', fontSize: '1.3rem', opacity: 0.7 }}>
//             Please select a topic from the left menu to begin.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react"; // Import useEffect

// Import images (adjust paths if needed)
import htmlImg from "../../assets/Imageweek1/HTML.jpg";
import cartoonComputer from "../../assets/Imageweek1/comp.webp";
import childLaptop from "../../assets/Imageweek1/A child.jpg";
import colorfulWebpage from "../../assets/Imageweek1/Example of a colorful cartoon webpage.jpg";
import tagCharacters from "../../assets/Imageweek1/Cutetagcharacters.jpg";
import headingsLadder from "../../assets/Imageweek1/Stacked headings from H1 to H6 like a ladder.jpg";
import learningHtmlImg from "../../assets/Imageweek1/learning-HTML.jpg";
import instructionImg from "../../assets/Imageweek1/instruction.webp";
import webpageImg from "../../assets/Imageweek1/webpage.webp";

// Grouped slides by topic
const slideGroups = {
  "What is Computer?": [
    {
      title: "What is Computer?",
      content: (
        <div
          style={{
            background: "#fffbe7",
            borderRadius: 12,
            padding: "20px 16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px #ffe06655",
            fontSize: "1.15rem",
            color: "#4b3f1d",
            textAlign: "left",
            maxWidth: 420,
            margin: "0 auto 16px auto",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#6c47ff",
              marginBottom: 8,
            }}
          >
            What is a Computer?
          </div>
          <div style={{ marginBottom: 10 }}>
            A{" "}
            <span style={{ color: "#ff9800", fontWeight: 600 }}>computer</span>{" "}
            is a smart machine that follows instructions.
            <br />
            It helps you do fun and important things like <b>
              play games
            </b>, <b>draw</b>, <b>watch videos</b>, <b>write stories</b>, or{" "}
            <b>chat with friends</b>.
          </div>
          <div style={{ marginBottom: 10 }}>
            <span role="img" aria-label="brain">
              🧠
            </span>
            <span style={{ color: "#6c47ff", fontWeight: 600 }}>
              {" "}
              And guess what?
            </span>{" "}
            A computer isn’t just the big screen on a desk!
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Did you know?",
      content: (
        <div
          style={{
            background: "#e0f7fa",
            borderRadius: 12,
            padding: "20px 16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px #b3c6ff33",
            fontSize: "1.13rem",
            color: "#22535c",
            textAlign: "left",
            maxWidth: 420,
            margin: "0 auto 16px auto",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#009688",
              marginBottom: 8,
            }}
          >
            Did you know?
          </div>
          <span role="img" aria-label="devices">
            📱
          </span>{" "}
          Your <b>smartphone</b>,{" "}
          <span role="img" aria-label="tablet">
            📱
          </span>{" "}
          <b>tablet</b>,{" "}
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          <b>laptop</b>, and even{" "}
          <span role="img" aria-label="tv">
            📺
          </span>{" "}
          <b>some TVs</b> are computers too — they all follow instructions to
          help you learn and play!
        </div>
      ),
      images: [cartoonComputer],
    },
  ],
  "What is Programming?": [
    {
      title: "What is Programming?",
      content: (
        <div
          style={{
            background: "#fffbe7",
            borderRadius: 12,
            padding: "20px 16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px #ffe06655",
            fontSize: "1.15rem",
            color: "#4b3f1d",
            textAlign: "left",
            maxWidth: 420,
            margin: "0 auto 16px auto",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#6c47ff",
              marginBottom: 8,
            }}
          >
            What is Programming?
          </div>
          <div style={{ marginBottom: 10 }}>
            Programming is like writing a{" "}
            <span style={{ color: "#ff9800", fontWeight: 600 }}>recipe</span> or
            giving <b>step-by-step instructions</b> to a computer. You tell it
            what to do using a special language — and it listens!
            <br />
            <br />
            You can use programming to make <b>games</b>, <b>apps</b>,{" "}
            <b>websites</b>, and even <b>robots move</b>.
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Programming: Teaching Computers!",
      content: (
        <div
          className="programming-slide-content" // Add a class for media query
          style={{
            display: "flex",
            flexDirection: "row", // Default for larger screens
            alignItems: "center",
            background: "#e0f7fa",
            borderRadius: 12,
            padding: "20px 16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px #b3c6ff33",
            fontSize: "1.13rem",
            color: "#22535c",
            maxWidth: 600,
            margin: "0 auto 16px auto",
            minHeight: 180,
          }}
        >
          <div style={{ flex: 1, textAlign: "left", paddingRight: 18 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#6c47ff",
                marginBottom: 8,
              }}
            >
              Programming: Teaching Computers!
            </div>
            <span role="img" aria-label="brain">
              🧠
            </span>{" "}
            It's like{" "}
            <span style={{ color: "#6c47ff", fontWeight: 600 }}>
              teaching your computer to think and work
            </span>{" "}
            using your own rules!
          </div>
          <img
            src={instructionImg}
            alt="Programming instructions"
            style={{
              flex: 1,
              maxWidth: 180,
              minWidth: 120,
              maxHeight: 160,
              borderRadius: 10,
              boxShadow: "0 2px 8px #0001",
              marginLeft: 12,
              objectFit: "contain",
              background: "#fff",
              padding: 6,
            }}
          />
        </div>
      ),
      images: [],
    },
  ],
  "What is a Website?": [
    {
      title: "What is a Website?",
      content: (
        <div
          className="website-slide-content" // Add a class for media query
          style={{
            display: "flex",
            flexDirection: "row", // Default for larger screens
            alignItems: "center",
            background: "#fffbe7",
            borderRadius: 12,
            padding: "20px 16px",
            marginBottom: 16,
            boxShadow: "0 2px 8px #ffe06655",
            fontSize: "1.15rem",
            color: "#4b3f1d",
            maxWidth: 600,
            margin: "0 auto 16px auto",
            minHeight: 180,
          }}
        >
          <img
            src={webpageImg}
            alt="Website example"
            style={{
              flex: 1,
              maxWidth: 180,
              minWidth: 120,
              maxHeight: 160,
              borderRadius: 10,
              boxShadow: "0 2px 8px #0001",
              marginRight: 18,
              objectFit: "contain",
              background: "#fff",
              padding: 6,
            }}
          />
          <div style={{ flex: 2, textAlign: "left" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#6c47ff",
                marginBottom: 8,
              }}
            >
              What is a Website?
            </div>
            <div style={{ marginBottom: 10 }}>
              A{" "}
              <span style={{ color: "#ff9800", fontWeight: 600 }}>website</span>{" "}
              is like a <b>digital book</b> or <b>playground</b> on the
              internet. You can visit websites to <b>learn</b>, <b>play</b>,{" "}
              <b>watch</b>, or <b>read</b> — just like opening a magic window to
              explore anything you like!
            </div>
            <div style={{ marginBottom: 10 }}>
              <span role="img" aria-label="web">
                🕸️
              </span>{" "}
              Think of the internet as a big spider web, and each website is a
              fun spot on the web!
            </div>
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "HTML Basics": [
    {
      title: "Welcome to HTML!",
      content: (
        <>
          <p style={{ fontSize: "1.3rem", marginBottom: 8 }}>
            🖥 <b>What is HTML?</b>
          </p>
          <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
            HTML stands for <b>HyperText Markup Language</b>
            <br />
            It's the language of the web!
          </div>
          <p style={{ color: "#6c47ff", fontWeight: 500 }}>
            HTML helps you create web pages!
          </p>
        </>
      ),
      images: [htmlImg, childLaptop],
    },
    {
      title: "What Can HTML Do?",
      content: (
        <div style={{ fontSize: "1.1rem" }}>
          Create web pages
          <br />
          Add text, images, and links
          <br />
          Make your ideas come alive!
        </div>
      ),
      images: [colorfulWebpage],
    },
    {
      title: "Basic HTML Tags",
      content: (
        <div
          style={{
            width: "100%",
            background: "#fffbe7",
            borderRadius: 8,
            marginBottom: 8,
            fontSize: "1.1rem",
            padding: 8,
          }}
        >
          <b>Tag</b> &nbsp; <b>What it does</b>
          <br />
          &lt;html&gt; &nbsp; Starts the webpage
          <br />
          &lt;head&gt; &nbsp; Info about the page
          <br />
          &lt;body&gt; &nbsp; Shows content
          <br />
          &lt;h1&gt; &nbsp; Big heading
          <br />
          &lt;p&gt; &nbsp; A paragraph
          <br />
          &lt;img&gt; &nbsp; Adds image
        </div>
      ),
      images: [tagCharacters],
    },
    {
      title: "Let’s See an Example!",
      content: (
        <pre
          style={{
            background: "#e0f7fa",
            padding: 12,
            borderRadius: 8,
            fontSize: "1rem",
            overflowX: "auto", // Added for code block horizontal scroll
          }}
        >
          {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
    <img src="sun.png" alt="Sunshine" />
  </body>
</html>`}
        </pre>
      ),
      images: [],
    },
    {
      title: "The <h1> to <h6> Tags",
      content: (
        <div style={{ fontSize: "1.1rem" }}>
          <b>&lt;h1&gt;</b> is the BIGGEST
          <br />
          <b>&lt;h6&gt;</b> is the smallest
          <br />
          Use them for headings
        </div>
      ),
      images: [headingsLadder],
    },
    {
      title: "The <p> Tag - Paragraph",
      content: (
        <>
          <div style={{ fontSize: "1.1rem" }}>
            Use it to write sentences. It's like a regular paragraph in a book.
          </div>
          <pre
            style={{
              background: "#f3e8ff",
              padding: 8,
              borderRadius: 8,
              fontSize: "1rem",
              overflowX: "auto", // Added for code block horizontal scroll
            }}
          >
            {`<p>I love learning HTML!</p>`}
          </pre>
        </>
      ),
      images: [],
    },
    {
      title: "Adding Images – <img> Tag",
      content: (
        <>
          <pre
            style={{
              background: "#fffbe7",
              padding: 8,
              borderRadius: 8,
              fontSize: "1rem",
              overflowX: "auto", // Added for code block horizontal scroll
            }}
          >
            {`<img src="cat.png" alt="Cute Cat" />`}
          </pre>
          <div style={{ fontSize: "1.1rem" }}>
            <b>src</b>: image path
            <br />
            <b>alt</b>: image description
          </div>
        </>
      ),
      images: [],
    },
    {
      title: "Let's Build a Mini Webpage!",
      content: (
        <pre
          style={{
            background: "#e0f7fa",
            padding: 12,
            borderRadius: 8,
            fontSize: "1rem",
            overflowX: "auto", // Added for code block horizontal scroll
          }}
        >
          {`<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome to My Page</h1>
    <p>I like soccer, pizza, and drawing.</p>
    <img src="pizza.png" alt="Pizza" />
  </body>
</html>`}
        </pre>
      ),
      images: [],
    },
    {
      title: "You’re a Web Creator Now!",
      content: (
        <div style={{ fontSize: "1.1rem" }}>
          You just made a web page!
          <br />
          Keep learning and have fun ✨
        </div>
      ),
      images: [],
    },
    {
      title: "Fun Quiz Time!",
      content: (
        <>
          <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
            <b>Q1:</b> What tag is used for a heading?
            <br />
            <span style={{ marginLeft: 16 }}>
              A) &lt;h1&gt; &nbsp; B) &lt;p&gt; &nbsp; C) &lt;img&gt;
            </span>
          </div>
          <div style={{ fontSize: "1.1rem", marginBottom: 8 }}>
            <b>Q2:</b> What does &lt;img&gt; do?
            <br />
            <span style={{ marginLeft: 16 }}>
              A) Add text &nbsp; B) Add image &nbsp; C) Make bold
            </span>
          </div>
          <div style={{ fontSize: "2rem" }}>✅ ❌</div>
        </>
      ),
      images: [],
    },
    {
      title: "Keep Learning HTML!",
      content: (
        <div style={{ fontSize: "1.2rem", color: "#6c47ff", fontWeight: 600 }}>
          Keep learning HTML and have fun building web pages!
        </div>
      ),
      images: [learningHtmlImg],
    },
  ],
};

export default function WeekOneSlides() {
  const groupNames = Object.keys(slideGroups);

  const [selectedGroup, setSelectedGroup] = useState(null); // No topic selected by default
  const [current, setCurrent] = useState(0);
  const slides = selectedGroup ? slideGroups[selectedGroup] : [];
  const slide = slides[current];

  // State to track screen width for responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // When group changes, reset current slide to 0
    setCurrent(0);
  }, [selectedGroup]);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Change flex direction on mobile
        maxWidth: 900,
        margin: isMobile ? "20px 10px" : "40px auto", // Adjust margin for mobile
        background: "#f0f7ff",
        borderRadius: 16,
        boxShadow: "0 4px 24px #b3c6ff33",
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
        minHeight: 400,
      }}
    >
      {/* Sidebar vertical menu */}
      <div
        style={{
          minWidth: isMobile ? "unset" : 220, // Remove minWidth on mobile
          width: isMobile ? "100%" : "auto", // Make sidebar full width on mobile
          background: "#e0e7ff",
          borderRadius: isMobile ? "16px 16px 0 0" : "16px 0 0 16px", // Adjust border radius
          padding: isMobile ? "16px 0" : "32px 0", // Adjust padding
          display: "flex",
          flexDirection: isMobile ? "row" : "column", // Row for topics on mobile, column for desktop
          alignItems: isMobile ? "center" : "stretch", // Center items horizontally on mobile
          justifyContent: isMobile ? "center" : "flex-start", // Center topics on mobile
          gap: isMobile ? 4 : 8, // Reduce gap on mobile
          boxShadow: isMobile ? "0 2px 8px #b3c6ff22" : "2px 0 8px #b3c6ff22", // Adjust shadow
          overflowX: isMobile ? "auto" : "hidden", // Allow horizontal scrolling for topic buttons on mobile
          whiteSpace: isMobile ? "nowrap" : "normal", // Prevent wrapping on mobile
          paddingBottom: isMobile ? "8px" : "32px", // Add some bottom padding for horizontal scroll
        }}
      >
        {groupNames.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedGroup(name)}
            style={{
              background: selectedGroup === name ? "#6c47ff" : "transparent",
              color: selectedGroup === name ? "white" : "#6c47ff",
              border: "none",
              borderRadius: 8,
              margin: isMobile ? "0 8px" : "0 16px", // Adjust margin for mobile
              padding: isMobile ? "10px 14px" : "14px 10px", // Adjust padding for mobile buttons
              fontWeight: 700,
              fontSize: isMobile ? "0.9rem" : "1.08rem", // Smaller font on mobile
              cursor: "pointer",
              boxShadow:
                selectedGroup === name ? "0 2px 8px #6c47ff33" : "none",
              transition: "background 0.2s",
              outline: selectedGroup === name ? "2px solid #6c47ff" : "none",
              textAlign: "center", // Center text in buttons on mobile
              flexShrink: 0, // Prevent buttons from shrinking on mobile
            }}
          >
            {name}
          </button>
        ))}
      </div>
      {/* Main content area */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? 20 : 32, // Adjust padding for mobile
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: slides.length === 0 ? "center" : "flex-start",
          minHeight: isMobile ? "unset" : 400, // Remove minHeight on mobile
          textAlign: "center",
          borderTopRightRadius: 16, // Ensure rounded corners on desktop
          borderBottomRightRadius: 16, // Ensure rounded corners on desktop
          borderBottomLeftRadius: isMobile ? 16 : 0, // Adjust for mobile
          borderTopLeftRadius: isMobile ? 0 : 16, // Adjust for mobile
        }}
      >
        {selectedGroup && slides.length > 0 ? (
          <>
            <h2
              style={{
                color: "#6c47ff",
                fontSize: isMobile ? "1.6rem" : "2rem", // Smaller heading on mobile
                marginBottom: 12,
              }}
            >
              {slide.title}
            </h2>
            <div style={{ marginBottom: 16 }}>
              {/* Responsive adjustments for specific slide content */}
              {slide.title === "Programming: Teaching Computers!" ||
              slide.title === "What is a Website?" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Stack on mobile
                    alignItems: "center",
                    background:
                      slide.title === "Programming: Teaching Computers!"
                        ? "#e0f7fa"
                        : "#fffbe7",
                    borderRadius: 12,
                    padding: "20px 16px",
                    marginBottom: 16,
                    boxShadow:
                      slide.title === "Programming: Teaching Computers!"
                        ? "0 2px 8px #b3c6ff33"
                        : "0 2px 8px #ffe06655",
                    fontSize: isMobile ? "1rem" : "1.15rem", // Smaller font on mobile
                    color:
                      slide.title === "Programming: Teaching Computers!"
                        ? "#22535c"
                        : "#4b3f1d",
                    maxWidth: 600,
                    margin: "0 auto 16px auto",
                    minHeight: 180,
                    textAlign: isMobile ? "center" : "left", // Center text on mobile
                  }}
                >
                  <img
                    src={
                      slide.title === "Programming: Teaching Computers!"
                        ? instructionImg
                        : webpageImg
                    }
                    alt={
                      slide.title === "Programming: Teaching Computers!"
                        ? "Programming instructions"
                        : "Website example"
                    }
                    style={{
                      width: "100%", // Full width for image on mobile
                      maxWidth: isMobile ? 200 : 180, // Adjust max width for image
                      minWidth: 120,
                      maxHeight: 160,
                      borderRadius: 10,
                      boxShadow: "0 2px 8px #0001",
                      marginBottom: isMobile ? 12 : 0, // Add margin below image on mobile
                      marginRight: isMobile ? 0 : 18, // Remove right margin on mobile
                      objectFit: "contain",
                      background: "#fff",
                      padding: 6,
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      textAlign: isMobile ? "center" : "left",
                      paddingLeft: isMobile ? 0 : 18,
                    }}
                  >
                    {slide.content.props.children[1] ||
                      slide.content.props.children[0].props.children[1]}{" "}
                    {/* Accessing the text content dynamically */}
                  </div>
                </div>
              ) : (
                slide.content
              )}
            </div>
            {slide.images && slide.images.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: isMobile ? 8 : 12, // Reduce gap on mobile
                  flexWrap: "wrap",
                  marginBottom: 16,
                }}
              >
                {slide.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="slide visual"
                    style={{
                      maxHeight: isMobile ? 80 : 120, // Smaller images on mobile
                      width: "auto", // Maintain aspect ratio
                      borderRadius: 8,
                      boxShadow: "0 2px 8px #0001",
                    }}
                  />
                ))}
              </div>
            )}
            {slides.length > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 24,
                  width: "100%",
                  maxWidth: 500,
                  flexDirection: isMobile ? "column" : "row", // Stack buttons on mobile
                  gap: isMobile ? 10 : 0, // Add gap between stacked buttons
                }}
              >
                <button
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  style={{
                    background: current === 0 ? "#ccc" : "#6c47ff",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: isMobile ? "10px 18px" : "10px 24px", // Adjust padding
                    fontSize: isMobile ? "1rem" : "1.1rem", // Adjust font size
                    cursor: current === 0 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px #0001",
                    transition: "background 0.2s",
                    width: isMobile ? "100%" : "auto", // Full width on mobile
                  }}
                >
                  Prev
                </button>
                <span
                  style={{
                    alignSelf: "center",
                    fontSize: isMobile ? "1rem" : "1.1rem", // Adjust font size
                    color: "#6c47ff",
                    order: isMobile ? -1 : 0, // Move slide counter to top on mobile
                    marginBottom: isMobile ? 10 : 0, // Add margin below counter on mobile
                  }}
                >
                  Slide {current + 1} / {slides.length}
                </span>
                <button
                  onClick={() =>
                    setCurrent((c) => Math.min(slides.length - 1, c + 1))
                  }
                  disabled={current === slides.length - 1}
                  style={{
                    background:
                      current === slides.length - 1 ? "#ccc" : "#6c47ff",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: isMobile ? "10px 18px" : "10px 24px", // Adjust padding
                    fontSize: isMobile ? "1rem" : "1.1rem", // Adjust font size
                    cursor:
                      current === slides.length - 1 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px #0001",
                    transition: "background 0.2s",
                    width: isMobile ? "100%" : "auto", // Full width on mobile
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ color: "#6c47ff", fontSize: "1.3rem", opacity: 0.7 }}>
            Please select a topic from the{" "}
            {isMobile ? "menu above" : "left menu"} to begin.
          </div>
        )}
      </div>
    </div>
  );
}