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
      badgeColor: "hsl(210, 85%, 55%)",
      cardBg: "hsl(210, 60%, 95%)",
      cardBorder: "hsl(210, 40%, 85%)",
      playIconColor: "hsl(210, 85%, 55%)",
    },
    {
      week: 2,
      title: "Styling with CSS",
      description: "Master the art of styling with CSS: selectors, properties, and combining styles.",
      activitiesCount: 1,
      badgeColor: "hsl(120, 75%, 45%)",
      cardBg: "hsl(120, 50%, 95%)",
      cardBorder: "hsl(120, 30%, 85%)",
      playIconColor: "hsl(120, 75%, 45%)",
    },
    {
      week: 3,
      title: "Web Page Layout & Structure",
      description: "Learn to arrange elements on a page using div, span, classes, and basic layout techniques.",
      activitiesCount: 1,
      badgeColor: "hsl(280, 80%, 60%)",
      cardBg: "hsl(280, 50%, 95%)",
      cardBorder: "hsl(280, 30%, 85%)",
      playIconColor: "hsl(280, 80%, 60%)",
    },
    {
      week: 4,
      title: "Introduction to JavaScript",
      description: "Kickstart your journey into interactive web pages with JavaScript fundamentals.",
      activitiesCount: 1,
      badgeColor: "hsl(45, 95%, 60%)",
      cardBg: "hsl(45, 80%, 95%)",
      cardBorder: "hsl(45, 60%, 85%)",
      playIconColor: "hsl(45, 95%, 60%)",
    },
    {
      week: 5,
      title: "JavaScript & DOM Manipulation",
      description: "Learn to interact with the Document Object Model to dynamically change web content.",
      activitiesCount: 1,
      badgeColor: "hsl(15, 90%, 55%)",
      cardBg: "hsl(15, 80%, 95%)",
      cardBorder: "hsl(15, 60%, 85%)",
      playIconColor: "hsl(15, 90%, 55%)",
    },
    {
      week: 6,
      title: "Final Projects",
      description: "Apply everything you've learned to build two exciting final projects.",
      activitiesCount: 2,
      badgeColor: "hsl(350, 80%, 55%)",
      cardBg: "hsl(350, 60%, 95%)",
      cardBorder: "hsl(350, 40%, 85%)",
      playIconColor: "hsl(350, 80%, 55%)",
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

    const defaultShadow = '0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)';
    const hoverShadow = '0 8px 20px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06)';

    const baseItemStyle = {
      backgroundColor: weekItem.cardBg,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: weekItem.cardBorder,
      transition: 'all 0.3s ease-out',
      borderRadius: '0.75rem',
      boxShadow: defaultShadow,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      outline: 'none',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
    };

    const hoverItemStyle = {
      transform: isVisible ? 'translateY(-0.4rem)' : 'translateY(15px)',
      boxShadow: hoverShadow,
      borderColor: weekItem.playIconColor,
      borderWidth: '2px',
    };

    const currentItemStyle = {
      ...baseItemStyle,
      ...(isHovered ? hoverItemStyle : {}),
    };

    const badgeCommonStyle = {
      color: 'white',
      padding: '0.4rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.8rem',
      fontWeight: '600',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '0' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.6rem' }}>
            <Badge
              style={{
                ...badgeCommonStyle,
                backgroundColor: weekItem.badgeColor,
                lineHeight: '1.2',
              }}
            >
              Week {weekItem.week}
            </Badge>
            <CardTitle
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: 'hsl(210, 10%, 20%)',
                margin: '0',
                lineHeight: '1.3',
              }}
            >
              {weekItem.title}
            </CardTitle>
          </div>
          <CardDescription
            style={{
              fontSize: '0.95rem',
              color: 'hsl(210, 10%, 40%)',
              marginBottom: '1rem',
              lineHeight: '1.5',
            }}
          >
            {weekItem.description}
          </CardDescription>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'hsl(210, 10%, 35%)', fontWeight: '600' }}>
            <Play style={{ width: '1.2rem', height: '1.2rem', color: weekItem.playIconColor }} />
            <span style={{ fontSize: '0.95rem' }}>
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
        maxWidth: '960px',
        margin: '0 auto',
        padding: '5rem 2rem',
        backgroundColor: 'hsl(30, 80%, 97%)',
        minHeight: '100vh',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        color: 'hsl(210, 10%, 20%)',
      }}
    >
      <h1
        style={{
          fontSize: '3.2rem',
          fontWeight: '900',
          textAlign: 'center',
          color: 'hsl(210, 10%, 18%)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
          marginBottom: '4rem',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        }}
      >
        KidsLearn Web Development Course
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
