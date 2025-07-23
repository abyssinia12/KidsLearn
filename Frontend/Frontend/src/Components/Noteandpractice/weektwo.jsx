// import React, { useState } from "react";
// import cssImg from "../../assets/week2images/css.webp";
// import fancy from "../../assets/week2images/fancy.jpg";
// import border from "../../assets/week2images/border.jpg";
// import ranbo from "../../assets/week2images/ranbo.jpg";
// import pading from "../../assets/week2images/pading.jpg";
// import csshero from "../../assets/week2images/csshero.jpg";
// import web from "../../assets/week2images/web.jpg";
// import csstypeImg from "../../assets/week3image/csstype.jpg";

// const slideGroups = {
//   "Introduction to CSS": [
//     {
//       title: "Welcome to CSS!",
//       content: (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             background: "#fffbe7",
//             borderRadius: 12,
//             padding: "20px 16px",
//             marginBottom: 16,
//             boxShadow: "0 2px 8px #ffe06655",
//             fontSize: "1.15rem",
//             color: "#4b3f1d",
//             maxWidth: 600,
//             margin: "0 auto 16px auto",
//             minHeight: 180,
//           }}
//         >
//           <div style={{ flex: 2, textAlign: "left" }}>
//             <b>CSS</b> stands for <b>Cascading Style Sheets</b>
//             <br />
//             <br />
//             It helps us make our webpage look{" "}
//             <span style={{ color: "#6c47ff", fontWeight: 600 }}>beautiful</span>
//             !<br />
//             <br />
//             With CSS, we can change <b>colors</b>, <b>fonts</b>, <b>sizes</b>,
//             and more!
//             <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
           
//               {/* Image: A dull page turning into a colorful, styled page. Smiling paintbrush or crayon drawing a web page. */}
//             </div>
//           </div>
//           <img
//             src={cssImg}
//             alt="CSS Illustration"
//             style={{
//               flex: 1,
//               maxWidth: 180,
//               minWidth: 120,
//               maxHeight: 160,
//               borderRadius: 10,
//               boxShadow: "0 2px 8px #0001",
//               marginLeft: 18,
//               objectFit: "contain",
//               background: "#fff",
//               padding: 6,
//             }}
//           />
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "What Can CSS Do?",
//       content: (
//         <div
//           style={{
//             fontSize: "1.15rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <b>CSS can:</b>
//           <br />
//           <br />
//           <span role="img" aria-label="palette">
//             🎨
//           </span>{" "}
//           Change text colors
//           <br />
//           <span role="img" aria-label="writing">
//             ✍️
//           </span>{" "}
//           Change fonts
//           <br />
//           <span role="img" aria-label="bg">
//             🟨
//           </span>{" "}
//           Add background colors
//           <br />
//           <span role="img" aria-label="border">
//             🔲
//           </span>{" "}
//           Add borders and spacing
//           <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
//             {/* Image: A webpage being decorated like a party with balloons and paint. */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//   ],
//   "Inline and Internal CSS": [
//     {
//       title: "3 Ways to Add CSS",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <b>Inline CSS</b> – inside a tag
//           <br />
//           <b>Internal CSS</b> – in the <code>&lt;style&gt;</code> tag
//           <br />
//           <b>External CSS</b> – (skip for now)
//           <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
//             {/* Image: Comic strip: three characters "Inline", "Internal", and "External" (friendly mascots) */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Inline CSS (One-time Style)",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           Add style directly to a tag:
//           <pre
//             style={{
//               background: "#ffe0e0",
//               padding: 10,
//               borderRadius: 8,
//               marginTop: 10,
//             }}
//           >
//             {`<p style="color: red;">This is red text!</p>`}
//           </pre>
//           <div style={{ marginTop: 10 }}>
//             <span role="img" aria-label="paintbrush">
//               🖌️
//             </span>{" "}
//             Red-colored text with a paintbrush emoji
//             <br />
//             {/* Image: A cartoon "p" tag holding a paint can */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Internal CSS (Better Styling!)",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           Use <code>&lt;style&gt;</code> inside the <code>&lt;head&gt;</code>:
//           <pre
//             style={{
//               background: "#e0f7fa",
//               padding: 10,
//               borderRadius: 8,
//               marginTop: 10,
//             }}
//           >
//             {`<head>
//   <style>
//     p {
//       color: blue;
//     }
//   </style>
// </head>`}
//           </pre>
//           <div style={{ marginTop: 10 }}>
//             {/* Image: A notepad with a style tag putting on sunglasses 😎, Blue text styled with sparkles ✨ */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "CSS Property Types",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "center",
//             maxWidth: 600,
//             margin: "0 auto",
//           }}
//         >
//           <div style={{ marginBottom: 16 }}>
//             Here are some common CSS property types you can use to style your
//             web pages!
//           </div>
//           <img
//             src={csstypeImg}
//             alt="CSS Property Types"
//             style={{
//               maxWidth: 400,
//               width: "100%",
//               borderRadius: 12,
//               boxShadow: "0 2px 8px #b3c6ff33",
//               margin: "0 auto",
//             }}
//           />
//         </div>
//       ),
//       images: [csstypeImg],
//     },
//   ],
//   "Styling Text": [
//     {
//       title: "Styling Text",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           You can change:
//           <br />
//           <br />
//           <b>Color:</b> <code>color: blue;</code>
//           <br />
//           <b>Font size:</b> <code>font-size: 24px;</code>
//           <br />
//           <b>Font style:</b> <code>font-family: Comic Sans MS;</code>
//           <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
//             <img
//               src={fancy}
//               alt="CSS Property Types"
//               style={{
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 12,
//                 boxShadow: "0 2px 8px #b3c6ff33",
//                 margin: "0 auto",
//               }}
//             />
//             {/* Image: Three lines of text: one big, one fancy font, one colorful. Comic-style bubble: “WOW! Look at that!” */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//   ],
//   "Background Color": [
//     {
//       title: "Background Color",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <pre
//             style={{
//               background: "#fffbe7",
//               padding: 10,
//               borderRadius: 8,
//               marginBottom: 10,
//             }}
//           >
//             {`<body style="background-color: lightyellow;">`}
//           </pre>
//           Makes your page colorful and fun!
//           <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
//             <img
//               src={ranbo}
//               alt="CSS Property Types"
//               style={{
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 12,
//                 boxShadow: "0 2px 8px #b3c6ff33",
//                 margin: "0 auto",
//               }}
//             />
//             {/* Image: A sunshine background on a webpage, Rainbow paint filling the background */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//   ],
//   "Border and Padding": [
//     {
//       title: "Borders in CSS",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <pre
//             style={{
//               background: "#e0ffe0",
//               padding: 10,
//               borderRadius: 8,
//               marginBottom: 10,
//             }}
//           >
//             {`p {
//   border: 2px solid green;
// }`}
//           </pre>
//           Borders add a frame around things!
//           <div style={{ marginTop: 10 }}>
//             <img
//               src={border}
//               alt="CSS Property Types"
//               style={{
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 12,
//                 boxShadow: "0 2px 8px #b3c6ff33",
//                 margin: "0 auto",
//               }}
//             />
//             {/* Image: Boxed text with a green border, A cartoon square character saying, "Nice border!" */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Padding (Space Inside a Box)",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <pre
//             style={{
//               background: "#e0f7fa",
//               padding: 10,
//               borderRadius: 8,
//               marginBottom: 10,
//             }}
//           >
//             {`p {
//   padding: 20px;
// }`}
//           </pre>
//           Padding = soft space inside the box before the text starts
//           <div style={{ marginTop: 10 }}>
//             <img
//               src={pading}
//               alt="CSS Property Types"
//               style={{
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 12,
//                 boxShadow: "0 2px 8px #b3c6ff33",
//                 margin: "0 auto",
//               }}
//             />
//             {/* Image: A box with a cushion/pillow and text inside, Labelled diagram showing padding */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Let’s Style This Together!",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <b>Mini Project Code:</b>
//           <pre
//             style={{
//               background: "#f3e8ff",
//               padding: 10,
//               borderRadius: 8,
//               marginTop: 10,
//             }}
//           >
//             {`<!DOCTYPE html>
// <html>
//   <head>
//     <style>
//       body {
//         background-color: lightblue;
//       }
//       h1 {
//         color: purple;
//         font-size: 30px;
//         border: 2px dashed orange;
//         padding: 15px;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>Hello from CSS!</h1>
//   </body>
// </html>`}
//           </pre>
//           <div style={{ marginTop: 10 }}>
//             {/* Image: Styled result of the code with colorful box */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "You’re a Web Designer Now!",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           You just styled your first page!{" "}
//           <span role="img" aria-label="party">
//             🎉
//           </span>
//           <br />
//           <br />
//           Try changing colors, fonts, and sizes for fun!
//           <div style={{ marginTop: 10 }}>
//             <img
//               src={csshero}
//               alt="CSS Property Types"
//               style={{
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 12,
//                 boxShadow: "0 2px 8px #b3c6ff33",
//                 margin: "0 auto",
//               }}
//             />
//             {/* Image: Kid superhero holding a CSS shield, “Junior Web Designer” badge */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//     {
//       title: "Fun Quiz Time!",
//       content: (
//         <div
//           style={{
//             fontSize: "1.13rem",
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "0 auto",
//           }}
//         >
//           <b>Q1:</b> What tag is used for internal CSS?
//           <br />
//           <span style={{ marginLeft: 16 }}>
//             A) &lt;script&gt; &nbsp; B) &lt;style&gt; &nbsp; C) &lt;html&gt;
//           </span>
//           <br />
//           <br />
//           <b>Q2:</b> What is padding?
//           <br />
//           <span style={{ marginLeft: 16 }}>
//             A) Border thickness
//             <br />
//             B) Space inside the box
//             <br />
//             C) Text color
//           </span>
//           <div style={{ marginTop: 10 }}>
//             {/* Image: Thumbs up, quiz board, and animated checkmarks ✅ */}
//           </div>
//         </div>
//       ),
//       images: [],
//     },
//   ],
// };

// export default function WeekTwoSlides() {
//   const groupNames = Object.keys(slideGroups);
//   const [selectedGroup, setSelectedGroup] = useState(null); // No topic selected by default
//   const [current, setCurrent] = useState(0);
//   const slides = selectedGroup ? slideGroups[selectedGroup] : [];
//   const slide = slides[current];

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


import React, { useState, useEffect } from "react";
import cssImg from "../../assets/week2images/css.webp";
import fancy from "../../assets/week2images/fancy.jpg";
import border from "../../assets/week2images/border.jpg";
import ranbo from "../../assets/week2images/ranbo.jpg";
import pading from "../../assets/week2images/pading.jpg";
import csshero from "../../assets/week2images/csshero.jpg";
import web from "../../assets/week2images/web.jpg";
import csstypeImg from "../../assets/week3image/csstype.jpg";

const slideGroups = {
  "Introduction to CSS": [
    {
      title: "Welcome to CSS!",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <b>CSS</b> stands for <b>Cascading Style Sheets</b>
            <br />
            <br />
            It helps us make our webpage look{" "}
            <span style={{ color: "#6c47ff", fontWeight: 600 }}>beautiful</span>
            !<br />
            <br />
            With CSS, we can change <b>colors</b>, <b>fonts</b>, <b>sizes</b>,
            and more!
            <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
              {/* Image: A dull page turning into a colorful, styled page. Smiling paintbrush or crayon drawing a web page. */}
            </div>
          </div>
          <img
            src={cssImg}
            alt="CSS Illustration"
            style={{
              flex: 1,
              maxWidth: 180,
              minWidth: 120,
              maxHeight: 160,
              borderRadius: 10,
              boxShadow: "0 2px 8px #0001",
              marginLeft: 18,
              objectFit: "contain",
              background: "#fff",
              padding: 6,
            }}
          />
        </div>
      ),
      images: [],
    },
    {
      title: "What Can CSS Do?",
      content: (
        <div
          style={{
            fontSize: "1.15rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <b>CSS can:</b>
          <br />
          <br />
          <span role="img" aria-label="palette">
            🎨
          </span>{" "}
          Change text colors
          <br />
          <span role="img" aria-label="writing">
            ✍️
          </span>{" "}
          Change fonts
          <br />
          <span role="img" aria-label="bg">
            🟨
          </span>{" "}
          Add background colors
          <br />
          <span role="img" aria-label="border">
            🔲
          </span>{" "}
          Add borders and spacing
          <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
            {/* Image: A webpage being decorated like a party with balloons and paint. */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Inline and Internal CSS": [
    {
      title: "3 Ways to Add CSS",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <b>Inline CSS</b> – inside a tag
          <br />
          <b>Internal CSS</b> – in the <code>&lt;style&gt;</code> tag
          <br />
          <b>External CSS</b> – (skip for now)
          <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
            {/* Image: Comic strip: three characters "Inline", "Internal", and "External" (friendly mascots) */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Inline CSS (One-time Style)",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Add style directly to a tag:
          <pre
            style={{
              background: "#ffe0e0",
              padding: 10,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            {`<p style="color: red;">This is red text!</p>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            <span role="img" aria-label="paintbrush">
              🖌️
            </span>{" "}
            Red-colored text with a paintbrush emoji
            <br />
            {/* Image: A cartoon "p" tag holding a paint can */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Internal CSS (Better Styling!)",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Use <code>&lt;style&gt;</code> inside the <code>&lt;head&gt;</code>:
          <pre
            style={{
              background: "#e0f7fa",
              padding: 10,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            {`<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: A notepad with a style tag putting on sunglasses 😎, Blue text styled with sparkles ✨ */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "CSS Property Types",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            Here are some common CSS property types you can use to style your
            web pages!
          </div>
          <img
            src={csstypeImg}
            alt="CSS Property Types"
            style={{
              maxWidth: 400,
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 2px 8px #b3c6ff33",
              margin: "0 auto",
            }}
          />
        </div>
      ),
      images: [csstypeImg],
    },
  ],
  "Styling Text": [
    {
      title: "Styling Text",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          You can change:
          <br />
          <br />
          <b>Color:</b> <code>color: blue;</code>
          <br />
          <b>Font size:</b> <code>font-size: 24px;</code>
          <br />
          <b>Font style:</b> <code>font-family: Comic Sans MS;</code>
          <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
            <img
              src={fancy}
              alt="CSS Property Types"
              style={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 2px 8px #b3c6ff33",
                margin: "0 auto",
              }}
            />
            {/* Image: Three lines of text: one big, one fancy font, one colorful. Comic-style bubble: “WOW! Look at that!” */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Background Color": [
    {
      title: "Background Color",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <pre
            style={{
              background: "#fffbe7",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            {`<body style="background-color: lightyellow;">`}
          </pre>
          Makes your page colorful and fun!
          <div style={{ marginTop: 16, fontStyle: "italic", color: "#888" }}>
            <img
              src={ranbo}
              alt="CSS Property Types"
              style={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 2px 8px #b3c6ff33",
                margin: "0 auto",
              }}
            />
            {/* Image: A sunshine background on a webpage, Rainbow paint filling the background */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
  "Border and Padding": [
    {
      title: "Borders in CSS",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <pre
            style={{
              background: "#e0ffe0",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            {`p {
  border: 2px solid green;
}`}
          </pre>
          Borders add a frame around things!
          <div style={{ marginTop: 10 }}>
            <img
              src={border}
              alt="CSS Property Types"
              style={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 2px 8px #b3c6ff33",
                margin: "0 auto",
              }}
            />
            {/* Image: Boxed text with a green border, A cartoon square character saying, "Nice border!" */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Padding (Space Inside a Box)",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <pre
            style={{
              background: "#e0f7fa",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            {`p {
  padding: 20px;
}`}
          </pre>
          Padding = soft space inside the box before the text starts
          <div style={{ marginTop: 10 }}>
            <img
              src={pading}
              alt="CSS Property Types"
              style={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 2px 8px #b3c6ff33",
                margin: "0 auto",
              }}
            />
            {/* Image: A box with a cushion/pillow and text inside, Labelled diagram showing padding */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Let’s Style This Together!",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <b>Mini Project Code:</b>
          <pre
            style={{
              background: "#f3e8ff",
              padding: 10,
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            {`<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightblue;
      }
      h1 {
        color: purple;
        font-size: 30px;
        border: 2px dashed orange;
        padding: 15px;
      }
    </style>
  </head>
  <body>
    <h1>Hello from CSS!</h1>
  </body>
</html>`}
          </pre>
          <div style={{ marginTop: 10 }}>
            {/* Image: Styled result of the code with colorful box */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "You’re a Web Designer Now!",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          You just styled your first page!{" "}
          <span role="img" aria-label="party">
            🎉
          </span>
          <br />
          <br />
          Try changing colors, fonts, and sizes for fun!
          <div style={{ marginTop: 10 }}>
            <img
              src={csshero}
              alt="CSS Property Types"
              style={{
                maxWidth: 400,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 2px 8px #b3c6ff33",
                margin: "0 auto",
              }}
            />
            {/* Image: Kid superhero holding a CSS shield, “Junior Web Designer” badge */}
          </div>
        </div>
      ),
      images: [],
    },
    {
      title: "Fun Quiz Time!",
      content: (
        <div
          style={{
            fontSize: "1.13rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <b>Q1:</b> What tag is used for internal CSS?
          <br />
          <span style={{ marginLeft: 16 }}>
            A) &lt;script&gt; &nbsp; B) &lt;style&gt; &nbsp; C) &lt;html&gt;
          </span>
          <br />
          <br />
          <b>Q2:</b> What is padding?
          <br />
          <span style={{ marginLeft: 16 }}>
            A) Border thickness
            <br />
            B) Space inside the box
            <br />
            C) Text color
          </span>
          <div style={{ marginTop: 10 }}>
            {/* Image: Thumbs up, quiz board, and animated checkmarks ✅ */}
          </div>
        </div>
      ),
      images: [],
    },
  ],
};

const MOBILE_BREAKPOINT = 768; // Define your mobile breakpoint

export default function WeekTwoSlides() {
  const groupNames = Object.keys(slideGroups);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [current, setCurrent] = useState(0);
  const slides = selectedGroup ? slideGroups[selectedGroup] : [];
  const slide = slides[current];
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu visibility

  useEffect(() => {
    setCurrent(0);
  }, [selectedGroup]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Base styles for the main container
  const mainContainerStyle = {
    display: "flex",
    maxWidth: 900,
    margin: "40px auto",
    background: "#f0f7ff",
    borderRadius: 16,
    boxShadow: "0 4px 24px #b3c6ff33",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    minHeight: 400,
    flexDirection: isMobile ? "column" : "row", // Column for mobile
  };

  // Styles for the sidebar/menu
  const sidebarStyle = {
    minWidth: isMobile ? "auto" : 220,
    width: isMobile ? "100%" : "auto",
    background: "#e0e7ff",
    borderRadius: isMobile ? "16px 16px 0 0" : "16px 0 0 16px", // Rounded top for mobile
    padding: isMobile ? "16px" : "32px 0",
    display: isMobile ? (showMobileMenu ? "flex" : "none") : "flex", // Hide/show for mobile
    flexDirection: isMobile ? "column" : "column",
    alignItems: "stretch",
    gap: 8,
    boxShadow: isMobile ? "0 2px 8px #b3c6ff22" : "2px 0 8px #b3c6ff22",
  };

  // Styles for the content area
  const contentAreaStyle = {
    flex: 1,
    padding: isMobile ? 20 : 32, // Less padding on mobile
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: slides.length === 0 ? "center" : "flex-start",
    minHeight: isMobile ? "auto" : 400, // Auto height for mobile
    textAlign: "center",
  };

  return (
    <div style={mainContainerStyle}>
      {isMobile && (
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          style={{
            background: "#6c47ff",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            margin: "10px",
            alignSelf: "flex-start", // Align button to the start
            display: "block", // Ensure button takes full width if needed
            width: "calc(100% - 20px)", // Adjust width for padding
          }}
        >
          {showMobileMenu ? "Hide Topics" : "Show Topics"}
        </button>
      )}

      {/* Sidebar vertical menu */}
      <div style={sidebarStyle}>
        {groupNames.map((name) => (
          <button
            key={name}
            onClick={() => {
              setSelectedGroup(name);
              if (isMobile) setShowMobileMenu(false); // Close menu after selection on mobile
            }}
            style={{
              background: selectedGroup === name ? "#6c47ff" : "transparent",
              color: selectedGroup === name ? "white" : "#6c47ff",
              border: "none",
              borderRadius: 8,
              margin: "0 16px",
              padding: "14px 10px",
              fontWeight: 700,
              fontSize: "1.08rem",
              cursor: "pointer",
              boxShadow:
                selectedGroup === name ? "0 2px 8px #6c47ff33" : "none",
              transition: "background 0.2s",
              outline: selectedGroup === name ? "2px solid #6c47ff" : "none",
              textAlign: "left",
            }}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div style={contentAreaStyle}>
        {selectedGroup && slides.length > 0 ? (
          <>
            <h2
              style={{
                color: "#6c47ff",
                fontSize: isMobile ? "1.6rem" : "2rem",
                marginBottom: 12,
              }}
            >
              {slide.title}
            </h2>
            <div style={{ marginBottom: 16 }}>{slide.content}</div>
            {slide.images && slide.images.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 12,
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
                      maxHeight: isMobile ? 80 : 120,
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
                    padding: "10px 20px", // Adjusted padding for mobile
                    fontSize: isMobile ? "0.9rem" : "1.1rem", // Smaller font on mobile
                    cursor: current === 0 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px #0001",
                    transition: "background 0.2s",
                  }}
                >
                  Prev
                </button>
                <span
                  style={{
                    alignSelf: "center",
                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                    color: "#6c47ff",
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
                    padding: "10px 20px", // Adjusted padding for mobile
                    fontSize: isMobile ? "0.9rem" : "1.1rem", // Smaller font on mobile
                    cursor:
                      current === slides.length - 1 ? "not-allowed" : "pointer",
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
          <div
            style={{
              color: "#6c47ff",
              fontSize: isMobile ? "1rem" : "1.3rem",
              opacity: 0.7,
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            Please select a topic from the{" "}
            {isMobile ? "menu above" : "left menu"} to begin.
          </div>
        )}
      </div>
    </div>
  );
}