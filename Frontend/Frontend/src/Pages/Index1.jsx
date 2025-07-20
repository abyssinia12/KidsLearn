import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/Card";
import { Badge } from "../Components/ui/Badge";

export const Index = () => {
  const navigate = useNavigate();

  const weeks = [
    {
      week: 1,
      title: "Introduction to Web Development",
      description: "Dive into the world of web development, learn basic concepts and set up your tools.",
      activitiesCount: 1,
      badgeColor: "#6c47ff",
      cardBg: "#f0f7ff",
      cardBorder: "#d1d5fa",
      playIconColor: "#6c47ff",
    },
    {
      week: 2,
      title: "Styling with CSS",
      description: "Master the art of styling with CSS: selectors, properties, and combining styles.",
      activitiesCount: 1,
      badgeColor: "#22c55e",
      cardBg: "#e0ffe7",
      cardBorder: "#b6f5c8",
      playIconColor: "#22c55e",
    },
    {
      week: 3,
      title: "Web Page Layout & Structure",
      description: "Learn to arrange elements on a page using div, span, classes, and basic layout techniques.",
      activitiesCount: 1,
      badgeColor: "#a855f7",
      cardBg: "#f3e8ff",
      cardBorder: "#e9d5ff",
      playIconColor: "#a855f7",
    },
    {
      week: 4,
      title: "Introduction to JavaScript",
      description: "Kickstart your journey into interactive web pages with JavaScript fundamentals.",
      activitiesCount: 1,
      badgeColor: "#facc15",
      cardBg: "#fef9c3",
      cardBorder: "#fde68a",
      playIconColor: "#facc15",
    },
    {
      week: 5,
      title: "JavaScript & DOM Manipulation",
      description: "Learn to interact with the Document Object Model to dynamically change web content.",
      activitiesCount: 1,
      badgeColor: "#fb7185",
      cardBg: "#ffe4e6",
      cardBorder: "#fbcfe8",
      playIconColor: "#fb7185",
    },
    {
      week: 6,
      title: "Final Projects",
      description: "Apply everything you've learned to build two exciting final projects.",
      activitiesCount: 2,
      badgeColor: "#f472b6",
      cardBg: "#fdf2f8",
      cardBorder: "#fbcfe8",
      playIconColor: "#f472b6",
    },
  ];

  const handleCardClick = (weekNumber) => {
    navigate(`/week/${weekNumber}`);
  };

  const ListItemCard = ({ weekItem, handleCardClick, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 100 + index * 100);
      return () => clearTimeout(timeoutId);
    }, [index]);

    const defaultShadow = '0 4px 16px rgba(108,71,255,0.07), 0 2px 4px rgba(0,0,0,0.03)';
    const hoverShadow = '0 8px 32px rgba(108,71,255,0.13), 0 4px 8px rgba(0,0,0,0.08)';

    const baseItemStyle = {
      backgroundColor: weekItem.cardBg,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: weekItem.cardBorder,
      transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
      borderRadius: '1.25rem',
      boxShadow: defaultShadow,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '2.2rem 2.2rem 1.6rem 2.2rem',
      outline: 'none',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      minHeight: 220,
      position: 'relative',
    };

    const hoverItemStyle = {
      transform: isVisible ? 'translateY(-0.5rem) scale(1.03)' : 'translateY(20px)',
      boxShadow: hoverShadow,
      borderColor: weekItem.playIconColor,
      borderWidth: '2.5px',
      zIndex: 2,
    };

    const currentItemStyle = {
      ...baseItemStyle,
      ...(isHovered ? hoverItemStyle : {}),
    };

    const badgeCommonStyle = {
      color: 'white',
      padding: '0.5rem 1.2rem',
      borderRadius: '9999px',
      fontSize: '1.1rem',
      fontWeight: '700',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      letterSpacing: '0.01em',
      marginBottom: '0.7rem',
      background: `linear-gradient(90deg, ${weekItem.badgeColor} 60%, #fff0 100%)`,
    };

    return (
      <Card
        onClick={() => handleCardClick(weekItem.week)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={currentItemStyle}
        role="link"
        tabIndex="0"
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '0', width: '100%' }}>
          <Badge style={badgeCommonStyle}>
              Week {weekItem.week}
            </Badge>
            <CardTitle
              style={{
              fontSize: '1.7rem',
              fontWeight: '800',
              color: weekItem.playIconColor,
              margin: '0 0 0.5rem 0',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              textShadow: '0 1px 2px #fff8',
              }}
            >
              {weekItem.title}
            </CardTitle>
          <CardDescription
            style={{
              fontSize: '1.08rem',
              color: '#444',
              marginBottom: '1.2rem',
              lineHeight: '1.6',
              fontWeight: 500,
            }}
          >
            {weekItem.description}
          </CardDescription>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', color: weekItem.playIconColor, fontWeight: '700', fontSize: '1.08rem', marginTop: 'auto' }}>
            <Play style={{ width: '1.3rem', height: '1.3rem', color: weekItem.playIconColor }} />
            <span>
              {weekItem.activitiesCount} Activit{weekItem.activitiesCount > 1 ? "ies" : "y"}
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #f0f7ff 0%, #fdf2f8 100%)',
        minHeight: '100vh',
        fontFamily:
          'Comic Sans MS, Comic Sans, cursive, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        color: '#222',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          textAlign: 'center',
          color: '#6c47ff',
          textShadow: '1px 2px 8px #b3c6ff44',
          marginBottom: '4rem',
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
        }}
      >
        <span role="img" aria-label="sparkle">✨</span> KidsLearn Web Development Course <span role="img" aria-label="sparkle">✨</span>
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.2rem',
        alignItems: 'stretch',
      }}>
        {weeks.map((weekItem, index) => (
          <ListItemCard
            key={weekItem.week}
            weekItem={weekItem}
            handleCardClick={handleCardClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
