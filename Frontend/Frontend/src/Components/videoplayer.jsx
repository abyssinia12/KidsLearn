// src/components/VideoPlayer.jsx
import React from "react";

export const VideoPlayer = ({ week, weekData }) => {
  // YouTube video links for each week (fallback if weekData doesn't have youtubeLink)
  const videoLinks = {
    1: "https://youtu.be/d9zz0yU2xWE",
    2: "https://youtu.be/hCYAdNQy6R8?si=dWUWHdnFsQvGJIUP", // Replace with actual Week 2 video
    3: "https://youtu.be/dm-XyxDgkqE?si=K395fQPDDTqiePh2", // Replace with actual Week 3 video
    4: "https://youtu.be/WXFVq4uEjF0?si=SU_SmxVf3NacH0C6", // Replace with actual Week 4 video
    5: "https://youtu.be/Ud9H7l72wBY?si=eq5SFbKT6p_m2DyC", // Replace with actual Week 5 video
    6: "https://youtu.be/example6", // Replace with actual Week 6 video
  };

  // Use youtubeLink from weekData if available, otherwise fall back to videoLinks
  const videoLink = weekData?.youtubeLink || videoLinks[week];

  if (!videoLink) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f4f8",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Video Lesson for Week {week}
        </h2>
        <div
          style={{
            backgroundColor: "#ccc",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#555",
            borderRadius: "5px",
          }}
        >
          Video not available for Week {week}
        </div>
        <p style={{ marginTop: "15px", color: "#555" }}>
          Video content for Week {week} is not yet available.
        </p>
      </div>
    );
  }

  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoLink);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f4f8",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{ fontSize: "24px", marginBottom: "15px", textAlign: "center" }}
      >
        Video Lesson for Week {week}
      </h2>

      {videoId ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`Week ${week} Video Lesson`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#ccc",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#555",
            borderRadius: "5px",
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          Invalid video link for Week {week}
        </div>
      )}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#ef4444",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "14px",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#dc2626")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ef4444")}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};
