import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = () => {
  // Topics data organized by category
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
        { id: 201, name: 'Algebra Overview', path: '/topics/algebra' },
        { id: 202, name: 'Linear Equations', path: '/topics/linear-equations' },
        { id: 203, name: 'Quadratic Equations', path: '/topics/quadratic-equations' },
        { id: 204, name: 'Functions', path: '/topics/functions' },
        { id: 205, name: 'Polynomials', path: '/topics/polynomials' },
      ],
    },
    {
      id: 3,
      title: 'Geometry',
      topics: [
        { id: 301, name: 'Geometry Overview', path: '/topics/geometry' },
        { id: 302, name: 'Trigonometry', path: '/topics/trigonometry' },
      ],
    },
    {
      id: 4,
      title: 'Statistics & Probability',
      topics: [
        { id: 401, name: 'Statistics', path: '/topics/statistics' },
        { id: 402, name: 'Probability', path: '/topics/probability' },
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