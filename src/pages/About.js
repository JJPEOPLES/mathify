import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="about-header">
          <h1 className="about-title">About Mathify</h1>
          <p className="about-subtitle">
            Our mission is to make mathematics accessible, understandable, and enjoyable for everyone.
          </p>
        </header>

        <section className="about-section">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Mathify was created with a simple goal: to help students of all ages develop a strong foundation in
                mathematics through interactive learning and practice.
              </p>
              <p>
                We believe that mathematics is not just about memorizing formulas and procedures, but about understanding
                concepts and developing problem-solving skills. Our platform is designed to foster this understanding
                through clear explanations, interactive examples, and plenty of practice opportunities.
              </p>
              <p>
                Whether you're a student looking to improve your math skills, a parent helping your child with homework,
                or an adult brushing up on math concepts, Mathify is here to support your learning journey.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Topics</h3>
              <p>
                Our platform covers a wide range of mathematical topics, from basic arithmetic to advanced calculus,
                with clear explanations and examples.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✏️</div>
              <h3>Interactive Practice</h3>
              <p>
                Reinforce your understanding with our interactive practice problems, which provide immediate feedback
                and step-by-step solutions.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🧮</div>
              <h3>Useful Tools</h3>
              <p>
                Access a variety of calculators and tools to help you solve problems and visualize mathematical
                concepts.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Progress Tracking</h3>
              <p>
                Track your progress over time and identify areas where you need additional practice to master the
                concepts.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Our Team</h2>
          <p className="team-intro">
            Mathify is developed and maintained by a team of educators, mathematicians, and developers who are
            passionate about mathematics education.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🏫</div>
              <h3 className="member-name">Dr. Alex Johnson</h3>
              <p className="member-role">Mathematics Educator</p>
              <p className="member-bio">
                With over 15 years of experience teaching mathematics at various levels, Dr. Johnson ensures that our
                content is pedagogically sound and accessible to learners of all abilities.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3 className="member-name">Sarah Chen</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-bio">
                Sarah brings her expertise in web development and educational technology to create an engaging and
                user-friendly learning platform.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔬</div>
              <h3 className="member-name">Michael Rodriguez</h3>
              <p className="member-role">Mathematics Content Creator</p>
              <p className="member-bio">
                Michael combines his background in pure mathematics with a talent for clear explanation to develop our
                comprehensive library of math topics and practice problems.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-intro">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions for improvement, please
            don't hesitate to reach out.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@mathify.k2lang.org">contact@mathify.k2lang.org</a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <h3>Social Media</h3>
              <p>Follow us on social media for updates and math tips!</p>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <h3>GitHub</h3>
              <p>
                <a href="https://github.com/yourusername/mathify" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername/mathify
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;