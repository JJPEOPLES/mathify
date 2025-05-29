import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Learn Mathematics the Fun Way</h1>
            <p className="hero-subtitle">
              Interactive lessons, practice problems, and tools to help you master math concepts at any level.
            </p>
            <div className="hero-buttons">
              <Link to="/topics" className="btn btn-primary">
                Start Learning
              </Link>
              <Link to="/practice" className="btn btn-secondary">
                Practice Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Mathify?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Comprehensive Topics</h3>
              <p className="feature-description">
                From basic arithmetic to advanced calculus, we cover all math topics with clear explanations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h3 className="feature-title">Interactive Practice</h3>
              <p className="feature-description">
                Reinforce your learning with interactive practice problems and immediate feedback.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧮</div>
              <h3 className="feature-title">Helpful Tools</h3>
              <p className="feature-description">
                Use our calculators and tools to solve complex problems and visualize mathematical concepts.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Track Progress</h3>
              <p className="feature-description">
                Monitor your learning journey and see your improvement over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="section topics-section">
        <div className="container">
          <h2 className="section-title">Popular Math Topics</h2>
          <div className="topics-grid">
            <Link to="/topics/algebra" className="topic-card">
              <h3 className="topic-title">Algebra</h3>
              <p className="topic-description">
                Learn equations, functions, and algebraic structures.
              </p>
            </Link>
            <Link to="/topics/geometry" className="topic-card">
              <h3 className="topic-title">Geometry</h3>
              <p className="topic-description">
                Explore shapes, sizes, and properties of space.
              </p>
            </Link>
            <Link to="/topics/calculus" className="topic-card">
              <h3 className="topic-title">Calculus</h3>
              <p className="topic-description">
                Understand derivatives, integrals, and limits.
              </p>
            </Link>
            <Link to="/topics/statistics" className="topic-card">
              <h3 className="topic-title">Statistics</h3>
              <p className="topic-description">
                Analyze and interpret data with statistical methods.
              </p>
            </Link>
          </div>
          <div className="view-all-container">
            <Link to="/topics" className="view-all-link">
              View All Topics
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Master Mathematics?</h2>
            <p className="cta-description">
              Join thousands of students who are improving their math skills with Mathify.
            </p>
            <Link to="/topics" className="btn btn-accent cta-button">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;