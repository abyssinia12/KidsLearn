// src/components/ui/tabs.jsx
import React, { useState, createContext, useContext } from 'react';

// Create a Context to hold the active tab state and setter function
const TabsContext = createContext(null);

export const Tabs = ({ defaultValue, style, className = '', children, ...props }) => {
  // Manage activeTab state internally within the Tabs component
  // defaultValue allows setting an initial active tab, e.g., 'overview'
  const [activeTab, setActiveTab] = useState(defaultValue || null);

  const tabsContainerStyles = {
    width: '100%',
    ...style,
  };

  return (
    // Provide the activeTab state and its setter to all children components
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div style={tabsContainerStyles} className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ style, className = '', children, ...props }) => {
  const tabsListStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // Set to 4 columns as per your usage
    backgroundColor: '#f3f4f6', // Gray-100
    borderRadius: '8px',
    padding: '4px',
    marginBottom: '24px', // mb-6
    ...style,
  };
  return (
    <div style={tabsListStyles} className={className} {...props}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, style, className = '', children, ...props }) => {
  // Consume the context to get the activeTab and the setter
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component.');
  }
  const { activeTab, setActiveTab } = context;

  // Determine if this specific trigger is currently active
  const isActive = activeTab === value;

  // Apply styles based on whether the tab is active
  const triggerStyles = {
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: isActive ? '#1f2937' : '#4b5563', // Text color changes
    backgroundColor: isActive ? 'white' : 'transparent', // Background changes
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', // Add shadow for active tab
    ...style,
  };

  return (
    <button
      style={triggerStyles}
      className={className}
      // When clicked, update the activeTab state in the context
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, style, className = '', children, ...props }) => {
  // Consume the context to get the activeTab
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component.');
  }
  const { activeTab } = context;

  // Conditionally render the content: only show if its 'value' matches the 'activeTab'
  if (activeTab !== value) {
    return null; // Don't render this content if it's not the active tab
  }

  const contentContainerStyles = {
    padding: '0',
    ...style,
  };

  return (
    <div style={contentContainerStyles} className={className} {...props}>
      {children}
    </div>
  );
};