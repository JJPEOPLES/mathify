import React, { useEffect } from 'react';
import './TopicPage.css';

const Fractions = () => {
  useEffect(() => {
    // Add event listeners to show/hide solutions
    const solutionButtons = document.querySelectorAll('.show-solution-btn');
    
    solutionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const solution = this.nextElementSibling;
        if (solution.style.display === 'block') {
          solution.style.display = 'none';
          this.textContent = 'Show Solution';
        } else {
          solution.style.display = 'block';
          this.textContent = 'Hide Solution';
        }
      });
    });
    
    // Cleanup event listeners on component unmount
    return () => {
      solutionButtons.forEach(button => {
        button.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="topic-page">
      <div className="container">
        <header className="topic-header">
          <h1 className="topic-title">Fractions</h1>
          <p className="topic-description">
            Learn how to work with parts of whole numbers and master operations with fractions.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Understanding Fractions</h2>
          <div className="topic-content">
            <p>
              A fraction represents a part of a whole. It consists of two numbers: a numerator (top number) and a denominator (bottom number).
            </p>
            <p>
              The numerator represents how many parts we have, while the denominator represents the total number of equal parts that make up the whole.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                In the fraction <strong>3/4</strong>:
              </p>
              <p>
                - The numerator is 3, meaning we have 3 parts.
                <br />
                - The denominator is 4, meaning the whole is divided into 4 equal parts.
                <br />
                - So 3/4 means "3 out of 4 equal parts" or "three-fourths."
              </p>
            </div>
            
            <h3>Types of Fractions</h3>
            <ul>
              <li>
                <strong>Proper Fraction:</strong> The numerator is less than the denominator (e.g., 3/4, 2/5).
              </li>
              <li>
                <strong>Improper Fraction:</strong> The numerator is greater than or equal to the denominator (e.g., 5/3, 7/4).
              </li>
              <li>
                <strong>Mixed Number:</strong> A whole number and a proper fraction combined (e.g., 1 1/2, 2 3/4).
              </li>
              <li>
                <strong>Equivalent Fractions:</strong> Fractions that represent the same value (e.g., 1/2 = 2/4 = 3/6).
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Simplifying Fractions</h2>
          <div className="topic-content">
            <p>
              A fraction is in its simplest form (or reduced form) when the numerator and denominator have no common factors other than 1.
            </p>
            <p>
              To simplify a fraction, divide both the numerator and denominator by their greatest common divisor (GCD).
            </p>
            <div className="example-box">
              <h3>Example: Simplify 8/12</h3>
              <p>
                <strong>Step 1:</strong> Find the GCD of 8 and 12.
                <br />
                The factors of 8 are: 1, 2, 4, 8
                <br />
                The factors of 12 are: 1, 2, 3, 4, 6, 12
                <br />
                The common factors are: 1, 2, 4
                <br />
                The GCD is 4.
              </p>
              <p>
                <strong>Step 2:</strong> Divide both the numerator and denominator by the GCD.
                <br />
                8 ÷ 4 = 2
                <br />
                12 ÷ 4 = 3
                <br />
                So, 8/12 = 2/3 in its simplest form.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Adding and Subtracting Fractions</h2>
          <div className="topic-content">
            <p>
              To add or subtract fractions, the denominators must be the same (like terms). If they're not, we need to find a common denominator.
            </p>
            
            <h3>Adding Fractions with the Same Denominator</h3>
            <div className="example-box">
              <h4>Example: 2/5 + 1/5</h4>
              <p>
                <strong>Step 1:</strong> Add the numerators.
                <br />
                2 + 1 = 3
                <br />
                <strong>Step 2:</strong> Keep the same denominator.
                <br />
                <strong>Result: 2/5 + 1/5 = 3/5</strong>
              </p>
            </div>
            
            <h3>Subtracting Fractions with the Same Denominator</h3>
            <div className="example-box">
              <h4>Example: 4/7 - 2/7</h4>
              <p>
                <strong>Step 1:</strong> Subtract the numerators.
                <br />
                4 - 2 = 2
                <br />
                <strong>Step 2:</strong> Keep the same denominator.
                <br />
                <strong>Result: 4/7 - 2/7 = 2/7</strong>
              </p>
            </div>
            
            <h3>Adding Fractions with Different Denominators</h3>
            <div className="example-box">
              <h4>Example: 1/4 + 2/3</h4>
              <p>
                <strong>Step 1:</strong> Find the least common multiple (LCM) of the denominators.
                <br />
                The LCM of 4 and 3 is 12.
              </p>
              <p>
                <strong>Step 2:</strong> Convert each fraction to an equivalent fraction with the common denominator.
                <br />
                1/4 = (1 × 3)/(4 × 3) = 3/12
                <br />
                2/3 = (2 × 4)/(3 × 4) = 8/12
              </p>
              <p>
                <strong>Step 3:</strong> Add the numerators and keep the common denominator.
                <br />
                3/12 + 8/12 = 11/12
                <br />
                <strong>Result: 1/4 + 2/3 = 11/12</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Multiplying Fractions</h2>
          <div className="topic-content">
            <p>
              Multiplying fractions is straightforward: multiply the numerators together and multiply the denominators together.
            </p>
            <div className="example-box">
              <h3>Example: 2/3 × 3/4</h3>
              <p>
                <strong>Step 1:</strong> Multiply the numerators.
                <br />
                2 × 3 = 6
              </p>
              <p>
                <strong>Step 2:</strong> Multiply the denominators.
                <br />
                3 × 4 = 12
              </p>
              <p>
                <strong>Step 3:</strong> Simplify if possible.
                <br />
                6/12 = 1/2 (dividing both by 6)
                <br />
                <strong>Result: 2/3 × 3/4 = 1/2</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Dividing Fractions</h2>
          <div className="topic-content">
            <p>
              To divide fractions, multiply the first fraction by the reciprocal (flip) of the second fraction.
            </p>
            <div className="example-box">
              <h3>Example: 3/4 ÷ 2/5</h3>
              <p>
                <strong>Step 1:</strong> Find the reciprocal of the second fraction.
                <br />
                The reciprocal of 2/5 is 5/2.
              </p>
              <p>
                <strong>Step 2:</strong> Multiply the first fraction by the reciprocal of the second.
                <br />
                3/4 × 5/2
              </p>
              <p>
                <strong>Step 3:</strong> Multiply the numerators and denominators.
                <br />
                (3 × 5)/(4 × 2) = 15/8
                <br />
                <strong>Result: 3/4 ÷ 2/5 = 15/8 or 1 7/8</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Converting Between Improper Fractions and Mixed Numbers</h2>
          <div className="topic-content">
            <h3>Converting an Improper Fraction to a Mixed Number</h3>
            <div className="example-box">
              <h4>Example: Convert 17/5 to a mixed number</h4>
              <p>
                <strong>Step 1:</strong> Divide the numerator by the denominator.
                <br />
                17 ÷ 5 = 3 with a remainder of 2
              </p>
              <p>
                <strong>Step 2:</strong> The whole number part is the quotient.
                <br />
                Whole number = 3
              </p>
              <p>
                <strong>Step 3:</strong> The fraction part is the remainder over the original denominator.
                <br />
                Fraction = 2/5
              </p>
              <p>
                <strong>Result: 17/5 = 3 2/5</strong>
              </p>
            </div>
            
            <h3>Converting a Mixed Number to an Improper Fraction</h3>
            <div className="example-box">
              <h4>Example: Convert 2 3/4 to an improper fraction</h4>
              <p>
                <strong>Step 1:</strong> Multiply the whole number by the denominator.
                <br />
                2 × 4 = 8
              </p>
              <p>
                <strong>Step 2:</strong> Add the result to the numerator.
                <br />
                8 + 3 = 11
              </p>
              <p>
                <strong>Step 3:</strong> Put this sum over the original denominator.
                <br />
                <strong>Result: 2 3/4 = 11/4</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Simplify: 15/25</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the GCD of 15 and 25.
                  <br />
                  The factors of 15 are: 1, 3, 5, 15
                  <br />
                  The factors of 25 are: 1, 5, 25
                  <br />
                  The common factors are: 1, 5
                  <br />
                  The GCD is 5.
                </p>
                <p>
                  <strong>Step 2:</strong> Divide both the numerator and denominator by the GCD.
                  <br />
                  15 ÷ 5 = 3
                  <br />
                  25 ÷ 5 = 5
                  <br />
                  <strong>Result: 15/25 = 3/5</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Calculate: 2/3 + 3/4</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the LCM of the denominators.
                  <br />
                  The LCM of 3 and 4 is 12.
                </p>
                <p>
                  <strong>Step 2:</strong> Convert each fraction to an equivalent fraction with the common denominator.
                  <br />
                  2/3 = (2 × 4)/(3 × 4) = 8/12
                  <br />
                  3/4 = (3 × 3)/(4 × 3) = 9/12
                </p>
                <p>
                  <strong>Step 3:</strong> Add the numerators and keep the common denominator.
                  <br />
                  8/12 + 9/12 = 17/12
                </p>
                <p>
                  <strong>Step 4:</strong> Convert to a mixed number if needed.
                  <br />
                  17/12 = 1 5/12
                  <br />
                  <strong>Result: 2/3 + 3/4 = 17/12 = 1 5/12</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>Calculate: 4/5 ÷ 1/2</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the reciprocal of the second fraction.
                  <br />
                  The reciprocal of 1/2 is 2/1 or simply 2.
                </p>
                <p>
                  <strong>Step 2:</strong> Multiply the first fraction by the reciprocal of the second.
                  <br />
                  4/5 × 2/1
                </p>
                <p>
                  <strong>Step 3:</strong> Multiply the numerators and denominators.
                  <br />
                  (4 × 2)/(5 × 1) = 8/5
                </p>
                <p>
                  <strong>Step 4:</strong> Convert to a mixed number if needed.
                  <br />
                  8/5 = 1 3/5
                  <br />
                  <strong>Result: 4/5 ÷ 1/2 = 8/5 = 1 3/5</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered fractions, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/decimals">Decimals</a> - Learn how to convert between fractions and decimals.
              </li>
              <li>
                <a href="/topics/percentages">Percentages</a> - Understand how fractions relate to percentages.
              </li>
              <li>
                <a href="/topics/ratios-proportions">Ratios and Proportions</a> - Explore relationships between quantities.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fractions;