import React, { useEffect } from 'react';
import './TopicPage.css';

const Decimals = () => {
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
          <h1 className="topic-title">Decimals</h1>
          <p className="topic-description">
            Learn how to work with decimal numbers and perform operations with them.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Understanding Decimals</h2>
          <div className="topic-content">
            <p>
              A decimal is a way to represent parts of a whole using place value. The decimal point separates the whole number part from the fractional part.
            </p>
            <p>
              In a decimal number, each digit has a place value determined by its position relative to the decimal point.
            </p>
            <div className="example-box">
              <h3>Example: 42.567</h3>
              <p>
                In this decimal number:
              </p>
              <p>
                - 4 is in the tens place (4 × 10 = 40)
                <br />
                - 2 is in the ones place (2 × 1 = 2)
                <br />
                - 5 is in the tenths place (5 × 0.1 = 0.5)
                <br />
                - 6 is in the hundredths place (6 × 0.01 = 0.06)
                <br />
                - 7 is in the thousandths place (7 × 0.001 = 0.007)
              </p>
              <p>
                So, 42.567 = 40 + 2 + 0.5 + 0.06 + 0.007
              </p>
            </div>
            
            <h3>Types of Decimals</h3>
            <ul>
              <li>
                <strong>Terminating Decimal:</strong> A decimal that ends after a finite number of digits (e.g., 0.25, 3.75).
              </li>
              <li>
                <strong>Repeating Decimal:</strong> A decimal where a digit or group of digits repeats infinitely (e.g., 0.333... or 0.142857142857...).
              </li>
              <li>
                <strong>Non-terminating, Non-repeating Decimal:</strong> A decimal that continues infinitely without a repeating pattern (e.g., π = 3.14159...).
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Converting Between Fractions and Decimals</h2>
          <div className="topic-content">
            <h3>Converting a Fraction to a Decimal</h3>
            <p>
              To convert a fraction to a decimal, divide the numerator by the denominator.
            </p>
            <div className="example-box">
              <h4>Example: Convert 3/4 to a decimal</h4>
              <p>
                <strong>Step 1:</strong> Divide the numerator by the denominator.
                <br />
                3 ÷ 4 = 0.75
                <br />
                <strong>Result: 3/4 = 0.75</strong>
              </p>
            </div>
            
            <h3>Converting a Decimal to a Fraction</h3>
            <p>
              To convert a decimal to a fraction, write the decimal as a fraction with a power of 10 in the denominator, then simplify.
            </p>
            <div className="example-box">
              <h4>Example: Convert 0.625 to a fraction</h4>
              <p>
                <strong>Step 1:</strong> Write the decimal as a fraction with a power of 10 in the denominator.
                <br />
                0.625 = 625/1000
              </p>
              <p>
                <strong>Step 2:</strong> Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor (GCD).
                <br />
                The GCD of 625 and 1000 is 125.
                <br />
                625 ÷ 125 = 5
                <br />
                1000 ÷ 125 = 8
                <br />
                <strong>Result: 0.625 = 5/8</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Adding and Subtracting Decimals</h2>
          <div className="topic-content">
            <p>
              When adding or subtracting decimals, it's important to line up the decimal points to ensure that digits with the same place value are aligned.
            </p>
            
            <h3>Adding Decimals</h3>
            <div className="example-box">
              <h4>Example: 23.45 + 6.789</h4>
              <p>
                <strong>Step 1:</strong> Line up the decimal points.
                <br />
                23.450
                <br />
                + 6.789
              </p>
              <p>
                <strong>Step 2:</strong> Add the digits in each column, starting from the right.
                <br />
                23.450
                <br />
                + 6.789
                <br />
                30.239
                <br />
                <strong>Result: 23.45 + 6.789 = 30.239</strong>
              </p>
            </div>
            
            <h3>Subtracting Decimals</h3>
            <div className="example-box">
              <h4>Example: 45.67 - 12.89</h4>
              <p>
                <strong>Step 1:</strong> Line up the decimal points.
                <br />
                45.67
                <br />
                - 12.89
              </p>
              <p>
                <strong>Step 2:</strong> Subtract the digits in each column, starting from the right.
                <br />
                45.67
                <br />
                - 12.89
                <br />
                32.78
                <br />
                <strong>Result: 45.67 - 12.89 = 32.78</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Multiplying Decimals</h2>
          <div className="topic-content">
            <p>
              When multiplying decimals, multiply as if they were whole numbers, then place the decimal point in the product.
            </p>
            <div className="example-box">
              <h3>Example: 2.34 × 5.6</h3>
              <p>
                <strong>Step 1:</strong> Multiply the numbers as if they were whole numbers.
                <br />
                234 × 56 = 13,104
              </p>
              <p>
                <strong>Step 2:</strong> Count the total number of decimal places in both factors.
                <br />
                2.34 has 2 decimal places.
                <br />
                5.6 has 1 decimal place.
                <br />
                Total: 3 decimal places.
              </p>
              <p>
                <strong>Step 3:</strong> Place the decimal point in the product by counting from the right.
                <br />
                13,104 with 3 decimal places = 13.104
                <br />
                <strong>Result: 2.34 × 5.6 = 13.104</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Dividing Decimals</h2>
          <div className="topic-content">
            <p>
              When dividing decimals, first convert the divisor to a whole number by moving the decimal point, then move the decimal point in the dividend by the same number of places.
            </p>
            <div className="example-box">
              <h3>Example: 12.6 ÷ 0.4</h3>
              <p>
                <strong>Step 1:</strong> Move the decimal point in the divisor to make it a whole number.
                <br />
                0.4 becomes 4 (moved 1 place to the right)
              </p>
              <p>
                <strong>Step 2:</strong> Move the decimal point in the dividend by the same number of places.
                <br />
                12.6 becomes 126 (moved 1 place to the right)
              </p>
              <p>
                <strong>Step 3:</strong> Perform the division.
                <br />
                126 ÷ 4 = 31.5
                <br />
                <strong>Result: 12.6 ÷ 0.4 = 31.5</strong>
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example: 5.25 ÷ 0.25</h3>
              <p>
                <strong>Step 1:</strong> Move the decimal point in the divisor to make it a whole number.
                <br />
                0.25 becomes 25 (moved 2 places to the right)
              </p>
              <p>
                <strong>Step 2:</strong> Move the decimal point in the dividend by the same number of places.
                <br />
                5.25 becomes 525 (moved 2 places to the right)
              </p>
              <p>
                <strong>Step 3:</strong> Perform the division.
                <br />
                525 ÷ 25 = 21
                <br />
                <strong>Result: 5.25 ÷ 0.25 = 21</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Rounding Decimals</h2>
          <div className="topic-content">
            <p>
              Rounding decimals is useful for approximating values and making calculations easier.
            </p>
            <div className="example-box">
              <h3>Example: Round 3.746 to the nearest tenth</h3>
              <p>
                <strong>Step 1:</strong> Identify the digit in the tenths place (7) and look at the digit to its right (4).
              </p>
              <p>
                <strong>Step 2:</strong> If the digit to the right is less than 5, round down. If it's 5 or greater, round up.
                <br />
                Since 4 is less than 5, we round down.
                <br />
                <strong>Result: 3.746 rounded to the nearest tenth is 3.7</strong>
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example: Round 9.85 to the nearest whole number</h3>
              <p>
                <strong>Step 1:</strong> Identify the digit in the ones place (9) and look at the digit to its right (8).
              </p>
              <p>
                <strong>Step 2:</strong> If the digit to the right is less than 5, round down. If it's 5 or greater, round up.
                <br />
                Since 8 is greater than 5, we round up.
                <br />
                <strong>Result: 9.85 rounded to the nearest whole number is 10</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Calculate: 3.45 + 2.8</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Line up the decimal points.
                  <br />
                  3.45
                  <br />
                  + 2.80
                </p>
                <p>
                  <strong>Step 2:</strong> Add the digits in each column, starting from the right.
                  <br />
                  3.45
                  <br />
                  + 2.80
                  <br />
                  6.25
                  <br />
                  <strong>Result: 3.45 + 2.8 = 6.25</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Calculate: 7.5 × 0.25</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Multiply the numbers as if they were whole numbers.
                  <br />
                  75 × 25 = 1,875
                </p>
                <p>
                  <strong>Step 2:</strong> Count the total number of decimal places in both factors.
                  <br />
                  7.5 has 1 decimal place.
                  <br />
                  0.25 has 2 decimal places.
                  <br />
                  Total: 3 decimal places.
                </p>
                <p>
                  <strong>Step 3:</strong> Place the decimal point in the product by counting from the right.
                  <br />
                  1,875 with 3 decimal places = 1.875
                  <br />
                  <strong>Result: 7.5 × 0.25 = 1.875</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>A recipe calls for 2.75 cups of flour. If you want to make 1.5 times the recipe, how much flour will you need?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  To find how much flour you need, multiply the original amount by 1.5.
                  <br />
                  <strong>2.75 × 1.5</strong>
                </p>
                <p>
                  <strong>Step 1:</strong> Multiply the numbers as if they were whole numbers.
                  <br />
                  275 × 15 = 4,125
                </p>
                <p>
                  <strong>Step 2:</strong> Count the total number of decimal places in both factors.
                  <br />
                  2.75 has 2 decimal places.
                  <br />
                  1.5 has 1 decimal place.
                  <br />
                  Total: 3 decimal places.
                </p>
                <p>
                  <strong>Step 3:</strong> Place the decimal point in the product by counting from the right.
                  <br />
                  4,125 with 3 decimal places = 4.125
                  <br />
                  <strong>Result: 2.75 × 1.5 = 4.125</strong>
                </p>
                <p>
                  You will need 4.125 cups of flour, which is 4 1/8 cups.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered decimals, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/percentages">Percentages</a> - Learn how decimals relate to percentages.
              </li>
              <li>
                <a href="/topics/scientific-notation">Scientific Notation</a> - Understand how to express very large or very small numbers.
              </li>
              <li>
                <a href="/topics/money-math">Money Math</a> - Apply decimal operations to financial calculations.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Decimals;