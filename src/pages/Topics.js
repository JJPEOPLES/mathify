import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = () => {
  // Sample topics data - in a real app, this might come from an API
  const topicCategories = [
    {
      id: 1,
      title: 'Elementary Math',
      topics: [
        { id: 101, name: 'Addition and Subtraction', path: '/topics/addition-subtraction' },
        { id: 102, name: 'Multiplication and Division', path: '/topics/multiplication-division' },
        { id: 103, name: 'Fractions', path: '/topics/fractions' },
        { id: 104, name: 'Decimals', path: '/topics/decimals' },
      ],
    },
    {
      id: 2,
      title: 'Algebra',
      topics: [
        { id: 201, name: 'Linear Equations', path: '/topics/linear-equations' },
        { id: 202, name: 'Quadratic Equations', path: '/topics/quadratic-equations' },
        { id: 203, name: 'Functions', path: '/topics/functions' },
        { id: 204, name: 'Polynomials', path: '/topics/polynomials' },
      ],
    },
    {
      id: 3,
      title: 'Geometry',
      topics: [
        { id: 301, name: 'Angles and Lines', path: '/topics/angles-lines' },
        { id: 302, name: 'Triangles', path: '/topics/triangles' },
        { id: 303, name: 'Circles', path: '/topics/circles' },
        { id: 304, name: 'Coordinate Geometry', path: '/topics/coordinate-geometry' },
      ],
    },
    {
      id: 4,
      title: 'Calculus',
      topics: [
        { id: 401, name: 'Limits', path: '/topics/limits' },
        { id: 402, name: 'Derivatives', path: '/topics/derivatives' },
        { id: 403, name: 'Integrals', path: '/topics/integrals' },
        { id: 404, name: 'Differential Equations', path: '/topics/differential-equations' },
      ],
    },
    {
      id: 5,
      title: 'Statistics',
      topics: [
        { id: 501, name: 'Data Analysis', path: '/topics/data-analysis' },
        { id: 502, name: 'Probability', path: '/topics/probability' },
        { id: 503, name: 'Hypothesis Testing', path: '/topics/hypothesis-testing' },
        { id: 504, name: 'Regression Analysis', path: '/topics/regression-analysis' },
      ],
    },
  ];

  return (
    <div className="topics-page">
      <div className="container">
        <header className="topics-header">
          <h1 className="topics-title">Math Topics</h1>
          <p className="topics-description">
            Explore our comprehensive collection of math topics, from elementary concepts to advanced mathematics.
          </p>
        </header>

        <div className="topic-categories">
          {topicCategories.map((category) => (
            <div key={category.id} className="topic-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="topics-list">
                {category.topics.map((topic) => (
                  <Link key={topic.id} to={topic.path} className="topic-item">
                    <h3 className="topic-name">{topic.name}</h3>
                    <div className="topic-arrow">→</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="topics-note">
          <h3>Can't find what you're looking for?</h3>
          <p>
            We're constantly adding new topics and expanding our content. If you have suggestions for topics you'd like
            to see, please let us know!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topics;