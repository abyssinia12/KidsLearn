import React from "react";
import FeatureCard from "../Components/ui/FeatureCard";
import "./FeaturesGrid.css";

const FeaturesGrid = () => {
  return (
    <section className="features-grid-section" id="features">
      <div className="features-grid-container">
        <h2 className="features-grid-title">What Makes Learning Fun?</h2>
        <div className="features-grid">
          <FeatureCard
            icon={<span className="feature-icon-blue">📖</span>}
            title="Interactive Videos"
            description="Engaging educational videos designed specifically for young learners"
          />
          <FeatureCard
            icon={<span className="feature-icon-green">🎲</span>}
            title="Fun Activities"
            description="Hands-on activities that make learning memorable and enjoyable"
          />
          <FeatureCard
            icon={<span className="feature-icon-orange">⭐</span>}
            title="Progress Tracking"
            description="Track your child's progress through each week of learning"
          />
          <FeatureCard
            icon={<span className="feature-icon-pink">🏅</span>}
            title="Achievements"
            description="Celebrate milestones and achievements along the learning journey"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
