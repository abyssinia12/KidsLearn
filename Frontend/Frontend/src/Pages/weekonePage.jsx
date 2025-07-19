// src/pages/WeekOneDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Components/ui/Card';
import { Badge } from '../Components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Components/ui/Tabs';

import {
  ArrowLeft,
  CheckCircle,
  Code,
  Play,
  BookOpen,
  Star,
  Link as LinkIcon,
  Activity as ActivityIcon,
} from 'lucide-react';

import { PersonalCardActivity } from '../Components/activities/PersonalCardActivity';
import WeekOneSlides from '../Components/Note_and_practice/weekone';

// --- HoverButton (with hoverStyle support) ---
const HoverButton = ({ children, onClick, style, hoverStyle = {}, disabled, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s ease-out, box-shadow 0.2s ease-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    ...style,
    ...(isHovered && !disabled ? hoverStyle : {}),
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={defaultStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// --- HoverDiv (entry + hover animation) ---
const HoverDiv = ({ children, onClick, style, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const baseStyle = {
    transition: 'all 0.3s ease-out',
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
    opacity: isVisible ? 1 : 0,
    cursor: onClick ? 'pointer' : 'default',
    ...style,
    ...(isHovered && onClick
      ? {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }
      : {}),
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={baseStyle}
      {...(onClick ? { role: 'button', tabIndex: '0' } : {})}
      {...props}
    >
      {children}
    </div>
  );
};

export const WeekOneDetailsPage = ({ onComplete, isCompleted }) => {
  const navigate = useNavigate();

  const week1LearningObjectives = [
    'How to Install & Use SPCK Editor',
    'Introduction to Computers & Programming',
    'What is a Website?',
    'HTML Basic Tags',
  ];

  const activitiesOverviewCard = (
    <HoverDiv
      style={{
        backgroundColor: 'white',
        border: '1px solid hsl(210, 20%, 90%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 300px',
        padding: '20px',
      }}
    >
      <CardHeader style={{ padding: '0 0 16px 0' }}>
        <CardTitle
          style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'hsl(210, 10%, 20%)',
            marginBottom: '4px',
          }}
        >
          Week 1 Activities
        </CardTitle>
        <CardDescription style={{ fontSize: '0.9rem', color: 'hsl(210, 10%, 45%)' }}>
          Fun exercises to practice what you learn!
        </CardDescription>
      </CardHeader>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '0',
        }}
      >
        {[Play, BookOpen, Code].map((Icon, i) => {
          const items = [
            ['Watch Video Lesson', '15-20 minutes of fun learning', 'hsl(210, 70%, 55%)'],
            ['Read Notes & Examples', 'Easy-to-follow explanations', 'hsl(140, 60%, 50%)'],
            ['Try Practice Exercises', 'Hands-on coding practice', 'hsl(270, 60%, 55%)'],
          ];
          const [title, desc, color] = items[i];

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: 'hsl(210, 20%, 98%)',
                borderRadius: '8px',
                boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)',
              }}
            >
              <Icon style={{ height: '22px', width: '22px', color, marginRight: '12px' }} />
              <div>
                <p style={{ fontWeight: '600', fontSize: '1rem', color: 'hsl(210, 10%, 25%)' }}>{title}</p>
                <p style={{ fontSize: '0.875rem', color: 'hsl(210, 10%, 40%)' }}>{desc}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </HoverDiv>
  );

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 20px',
        minHeight: '100vh',
        backgroundColor: 'hsl(210, 15%, 98%)',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        <HoverButton
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'white',
            color: 'hsl(210, 10%, 30%)',
            border: '1px solid hsl(210, 15%, 90%)',
            boxShadow: 'none',
          }}
        >
          <ArrowLeft style={{ height: '16px', width: '16px', marginRight: '8px' }} />
          Back to Course Overview
        </HoverButton>

        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'hsl(210, 10%, 18%)', marginBottom: '4px' }}>
            Week 1: Introduction to Web Development
          </h1>
          <p style={{ color: 'hsl(210, 10%, 40%)', fontSize: '1rem' }}>Start your journey into creating amazing websites!</p>
        </div>

        <div style={{ alignSelf: 'flex-end', minWidth: '150px' }}>
          {!isCompleted ? (
            <HoverButton onClick={onComplete} style={{ backgroundColor: 'hsl(140, 60%, 50%)', color: 'white' }}>
              <CheckCircle style={{ height: '16px', width: '16px', marginRight: '8px' }} />
              Mark Complete
            </HoverButton>
          ) : (
            <Badge
              style={{
                backgroundColor: 'hsl(140, 60%, 50%)',
                color: 'white',
                padding: '10px 18px',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '0.9rem',
              }}
            >
              <CheckCircle style={{ height: '16px', width: '16px', marginRight: '4px' }} />
              Completed
            </Badge>
          )}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" style={{ width: '100%' }}>
        <TabsList style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', backgroundColor: 'hsl(210, 20%, 95%)', borderRadius: '8px', padding: '6px', marginBottom: '24px' }}>
          {[
            ['overview', Star, 'Overview'],
            ['video', Play, 'Video Lesson'],
            ['notes', BookOpen, 'Notes & Practice'],
            ['activity', ActivityIcon, 'Activity'],
          ].map(([val, Icon, label]) => (
            <TabsTrigger
              key={val}
              value={val}
              style={{
                flex: '1 1 auto',
                minWidth: '120px',
                padding: '10px 15px',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '0.95rem',
                color: 'hsl(210, 10%, 30%)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Icon style={{ height: '16px', width: '16px', marginRight: '8px' }} />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <HoverDiv
              style={{
                backgroundColor: 'hsl(210, 20%, 97%)',
                border: '1px solid hsl(210, 15%, 90%)',
                borderRadius: '10px',
                flex: '1 1 300px',
                padding: '20px',
              }}
            >
              <CardHeader style={{ padding: '0 0 16px 0' }}>
                <CardTitle style={{ display: 'flex', alignItems: 'center', fontSize: '1.25rem', fontWeight: '700', color: 'hsl(210, 10%, 20%)' }}>
                  <Code style={{ height: '22px', width: '22px', marginRight: '8px', color: 'hsl(210, 70%, 55%)' }} />
                  What You'll Learn in Week 1
                </CardTitle>
              </CardHeader>
              <CardContent style={{ padding: '0' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyleType: 'none', padding: 0, margin: 0 }}>
                  {week1LearningObjectives.map((topic, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.95rem', color: 'hsl(210, 10%, 30%)' }}>
                      <CheckCircle style={{ height: '20px', width: '20px', color: 'hsl(140, 60%, 50%)', marginRight: '10px', flexShrink: '0' }} />
                      <span style={{ fontWeight: '500', lineHeight: '1.4' }}>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </HoverDiv>
            {activitiesOverviewCard}
          </div>
        </TabsContent>

        {/* Video Tab */}
        <TabsContent value="video">
          <HoverDiv style={{ padding: '30px', backgroundColor: 'hsl(210, 20%, 97%)', borderRadius: '10px', border: '1px solid hsl(210, 15%, 90%)' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '15px', color: 'hsl(210, 10%, 18%)', fontWeight: '700' }}>Week 1 Video Lesson</h2>
            <p style={{ marginBottom: '20px', color: 'hsl(210, 10%, 40%)', fontSize: '1rem' }}>
              Watch the introductory video for Week 1. This video covers the basics of web development and SPCK editor installation.
            </p>
            <div style={{ marginTop: '20px', backgroundColor: 'hsl(210, 15%, 90%)', aspectRatio: '16 / 9', maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: 'hsl(210, 10%, 50%)', fontSize: '1.1rem' }}>
              <p>Video Player Placeholder for Week 1</p>
            </div>
          </HoverDiv>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes">
          <div style={{ padding: '30px', backgroundColor: 'hsl(210, 20%, 97%)', borderRadius: '10px', border: '1px solid hsl(210, 15%, 90%)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'hsl(210, 80%, 50%)', fontWeight: '700' }}>
              Week 1 Notes & Practice
            </h2>
            <WeekOneSlides />
          </div>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity">
          <div style={{ padding: '30px', backgroundColor: 'hsl(45, 20%, 97%)', borderRadius: '10px', border: '1px solid hsl(45, 15%, 90%)' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', color: 'hsl(45, 80%, 50%)', fontWeight: '700' }}>
              Week 1 Hands-On Activity: Build Your First Page!
            </h2>
            <PersonalCardActivity />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
