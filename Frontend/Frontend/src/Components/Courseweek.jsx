// src/Pages/CourseWeek.jsx
import React from 'react'; // Removed useState as it's no longer used directly for tabs
import { Button } from "../Components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/Card";
import { Badge } from "../Components/ui/Badge";
// Ensure these are correctly imported from your updated tabs.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/Tabs";
// Fixed self-closing syntax for all imported Lucide icons
import { ArrowLeft, Play, BookOpen, Code, CheckCircle, Star, Link as LinkIcon, Activity as ActivityIcon } from "lucide-react";
import { VideoPlayer } from "../Components/videoplayer";
import { NotesSection } from "../Components/Notessection"; // Assuming NotesSection component correctly handles its content
import WeekOneSlides from '../Components/Noteandpractice/weekone';
import WeekTwoSlides from '../Components/Noteandpractice/weektwo';
import WeekThreeSlides from '../Components/Noteandpractice/weekthree';
import WeekFourSlides from '../Components/Noteandpractice/weekfour';
import WeekFiveSlides from '../Components/Noteandpractice/weekfive';

import  {PersonalCardActivity } from './activities/PersonalCardActivity';
import { CustomizedPersonalCardActivity } from '../Components/activities/customizedPersonalcard';
import  {PageLayoutActivity } from '../Components/activities/pagelayoutactivity';
import { InteractivePersonalCardActivity } from '../Components/activities/intractivecard';
import { MagicColorPageActivity } from '../Components/activities/magiccolor';
import { FinalProjectActivity } from '../Components/activities/Fnalproject';

// A map to easily get the component by its string name from the 'weeks' data
const activityComponents = {
  PersonalCardActivity,
  CustomizedPersonalCardActivity,
  PageLayoutActivity,
  InteractivePersonalCardActivity,
  MagicColorPageActivity,
  FinalProjectActivity,
};


// REMOVED: activeTab and setActiveTab from props.
// The Tabs component now manages its internal state.
export  const CourseWeek = ({ week, onBack, onComplete, isCompleted }) => {
  // REMOVED: getTabTriggerStyle helper function is no longer needed.
  // The TabsTrigger component handles its own styling based on internal state.

  // Helper for parsing week.color string into inline style for Card (this remains unchanged as it's not related to tabs)
  const getCardColorStyle = (colorString) => {
    const style = {};
    if (colorString && typeof colorString === 'string') {
        if (colorString.includes('bg-red-100')) style.backgroundColor = '#fee2e2';
        if (colorString.includes('border-red-300')) style.borderColor = '#fca5a5';
        if (colorString.includes('bg-orange-100')) style.backgroundColor = '#ffedd5';
        if (colorString.includes('border-orange-300')) style.borderColor = '#fdba74';
        if (colorString.includes('bg-yellow-100')) style.backgroundColor = '#fef9c3';
        if (colorString.includes('border-yellow-300')) style.borderColor = '#fcd34d';
        if (colorString.includes('bg-green-100')) style.backgroundColor = '#dcfce7';
        if (colorString.includes('border-green-300')) style.borderColor = '#86efad';
        if (colorString.includes('bg-blue-100')) style.backgroundColor = '#dbeafe';
        if (colorString.includes('border-blue-300')) style.borderColor = '#93c5fd';
        if (colorString.includes('bg-purple-100')) style.backgroundColor = '#f3e8ff';
        if (colorString.includes('border-purple-300')) style.borderColor = '#d8b4fe';
    }
    style.border = '1px solid';
    return style;
  };

  // Determine which Activity Component to render
  const CurrentActivityComponent = week.activity?.component
    ? activityComponents[week.activity.component]
    : null;


  // Define the activities card (common for all weeks)
  const activitiesCard = (
    <Card style={{
      backgroundImage: 'linear-gradient(to bottom right, #eff6ff, #fbf6ff)',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CardHeader>
        <CardTitle style={{ fontSize: '1.125rem' }}>Week {week.week} Activities</CardTitle>
        <CardDescription style={{ fontSize: '0.875rem', color: '#6b7280' }}>Fun exercises to practice what you learn!</CardDescription>
      </CardHeader>
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
          <Play style={{ height: '20px', width: '20px', color: '#3b82f6', marginRight: '12px' }} /> {/* Fixed /> syntax */}
          <div>
            <p style={{ fontWeight: '500', fontSize: '1rem' }}>Watch Video Lesson</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>15-20 minutes of fun learning</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
          <BookOpen style={{ height: '20px', width: '20px', color: '#22c55e', marginRight: '12px' }} /> {/* Fixed /> syntax */}
          <div>
            <p style={{ fontWeight: '500', fontSize: '1rem' }}>Read Notes & Examples</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Easy-to-follow explanations</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
          <Code style={{ height: '20px', width: '20px', color: '#a855f7', marginRight: '12px' }} /> {/* Fixed /> syntax */}
          <div>
            <p style={{ fontWeight: '500', fontSize: '1rem' }}>Try Practice Exercises</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Hands-on coding practice</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );


  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <Button variant="outline" onClick={onBack} style={{ marginRight: '16px' }}>
          <ArrowLeft style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
          Back to Course
        </Button>
        <Badge className={`${week.badge} text-white`} style={{ marginRight: '16px' }}>
          Week {week.week}
        </Badge>
        <div style={{ flex: '1 1 0%' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937' }}>{week.title}</h1>
          <p style={{ color: '#4b5563' }}>{week.description}</p>
        </div>
        {!isCompleted && (
          <Button onClick={onComplete} style={{ backgroundColor: '#22c55e', color: 'white' }}>
            <CheckCircle style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
            Mark Complete
          </Button>
        )}
        {isCompleted && (
          <Badge className="bg-green-500 text-white">
            <CheckCircle style={{ height: '16px', width: '16px', marginRight: '4px' }} /> {/* Fixed /> syntax */}
            Completed
          </Badge>
        )}
      </div>

      {/* UPDATED: Tabs Component usage */}
      {/* Removed 'value' and 'onValueChange' props from Tabs. Added 'defaultValue'. */}
      <Tabs defaultValue="overview" style={{ width: '100%' }}>
        <TabsList style={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', marginBottom: '24px' }}> {/* Changed to 4 columns */}
          {/* UPDATED: Removed onClick and style props from TabsTrigger */}
          <TabsTrigger value="overview">
            <Star style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
            Overview
          </TabsTrigger>
          {/* UPDATED: Removed onClick and style props from TabsTrigger */}
          <TabsTrigger value="video">
            <Play style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
            Video Lesson
          </TabsTrigger>
          {/* UPDATED: Removed onClick and style props from TabsTrigger */}
          <TabsTrigger value="notes">
            <BookOpen style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
            Notes & Practice
          </TabsTrigger>
          {/* UPDATED: Removed onClick and style props from TabsTrigger */}
          <TabsTrigger value="activity"> {/* New Activity Tab */}
            <ActivityIcon style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }}>
            {/* What You'll Learn Card */}
            <Card style={{ ...getCardColorStyle(week.color) }}>
                <CardHeader>
                    <CardTitle style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem' }}>
                        <Code style={{ height: '20px', width: '20px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
                        What You'll Learn
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'none', padding: 0 }}>
                        {week.topics.map((topic, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircle style={{ height: '20px', width: '20px', color: '#22c55e', marginRight: '12px' }} /> {/* Fixed /> syntax */}
                                <span style={{ fontWeight: '500' }}>{topic}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            {activitiesCard}
          </div>
        </TabsContent>

        <TabsContent value="video">
          <VideoPlayer week={week.week} />
        </TabsContent>

        <TabsContent value="notes">
          <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#388e3c' }}>Notes & Practice for Week {week.week}</h2>
            <p style={{ marginBottom: '10px', color: '#4CAF50' }}>
              Here are detailed notes and a practice video to help you master this week's topics.
            </p>
            {week.week === 1 ? (
              <WeekOneSlides />
            ) : week.week === 2 ? (
              <WeekTwoSlides />
            ) : week.week === 3 ? (
              <WeekThreeSlides />
            ) : week.week === 4 ? (
              <WeekFourSlides />
            ) : week.week === 5 ? (
              <WeekFiveSlides />
            ) : (
              <NotesSection week={week} />
            )}
            {week.youtubeLink && (
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '10px', color: '#1f2937' }}>Watch the Lesson & Practice:</h3>
                <a
                  href={week.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#ef4444', // Red-500 for YouTube
                    color: 'white',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dc2626'} // Red-600
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                >
                  <LinkIcon style={{ height: '16px', width: '16px', marginRight: '8px' }} /> {/* Fixed /> syntax */}
                  Go to YouTube Lesson
                </a>
              </div>
            )}
            {!week.youtubeLink && (
                <p style={{ color: '#888' }}>No YouTube link provided for this week yet.</p>
            )}
          </div>
        </TabsContent>

        {/* New Activity Tab Content */}
        <TabsContent value="activity">
          {CurrentActivityComponent ? (
            <CurrentActivityComponent />
          ) : (
            <div style={{ padding: '20px', backgroundColor: '#fdf3f2', borderRadius: '8px', border: '1px solid #fca5a5', color: '#ef4444' }}>
              <p>No specific activity component found for Week {week.week}.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};