import React, { useEffect } from 'react';
import './TopicPage.css';

const Polynomials = () => {
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
          <h1 className="topic-title">Polynomials</h1>
          <p className="topic-description">
            Learn about expressions with variables raised to non-negative integer powers, a fundamental concept in algebra.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">What is a Polynomial?</h2>
          <div className="topic-content">
            <p>
              A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.
            </p>
            <p>
              The general form of a polynomial in one variable is:
            </p>
            <p className="equation">
              P(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ
            </p>
            <p>
              Where:
            </p>
            <ul>
              <li>n is a non-negative integer representing the degree of the polynomial</li>
              <li>a₀, a₁, a₂, ..., aₙ are constants called coefficients</li>
              <li>aₙ ≠ 0 (the coefficient of the highest power must not be zero)</li>
            </ul>
            <div className="example-box">
              <h3>Examples of Polynomials:</h3>
              <p>
                - P(x) = 3x² - 5x + 2 (a quadratic polynomial, degree 2)
                <br />
                - P(x) = 4x³ + 2x - 7 (a cubic polynomial, degree 3)
                <br />
                - P(x) = 5 (a constant polynomial, degree 0)
                <br />
                - P(x) = 2x⁵ - 3x³ + x - 8 (a polynomial of degree 5)
              </p>
            </div>
            <div className="example-box">
              <h3>Non-examples (Not Polynomials):</h3>
              <p>
                - P(x) = 1/x (contains negative exponent)
                <br />
                - P(x) = √x (contains fractional exponent)
                <br />
                - P(x) = 3ˣ (variable in the exponent)
                <br />
                - P(x) = 2/(x-1) (division by a variable expression)
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Degree and Classification</h2>
          <div className="topic-content">
            <p>
              The degree of a polynomial is the highest power of the variable in the polynomial. Polynomials are often classified by their degree:
            </p>
            <ul>
              <li><strong>Constant Polynomial:</strong> Degree 0 (e.g., P(x) = 5)</li>
              <li><strong>Linear Polynomial:</strong> Degree 1 (e.g., P(x) = 2x + 3)</li>
              <li><strong>Quadratic Polynomial:</strong> Degree 2 (e.g., P(x) = 3x² - 5x + 2)</li>
              <li><strong>Cubic Polynomial:</strong> Degree 3 (e.g., P(x) = 4x³ + 2x - 7)</li>
              <li><strong>Quartic Polynomial:</strong> Degree 4 (e.g., P(x) = x⁴ - 2x² + 5)</li>
              <li><strong>Quintic Polynomial:</strong> Degree 5 (e.g., P(x) = 2x⁵ - 3x³ + x - 8)</li>
            </ul>
            <p>
              Polynomials can also be classified by the number of terms they contain:
            </p>
            <ul>
              <li><strong>Monomial:</strong> One term (e.g., 3x², 5, 7x)</li>
              <li><strong>Binomial:</strong> Two terms (e.g., x + 3, 2x² - 5)</li>
              <li><strong>Trinomial:</strong> Three terms (e.g., x² + 2x + 1, 3x³ - 2x + 4)</li>
              <li><strong>Polynomial:</strong> General term for any number of terms</li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Adding and Subtracting Polynomials</h2>
          <div className="topic-content">
            <p>
              To add or subtract polynomials, combine like terms (terms with the same variable raised to the same power).
            </p>
            <div className="example-box">
              <h3>Example 1: Add (3x² - 5x + 2) and (2x² + 3x - 7)</h3>
              <p>
                <strong>Step 1:</strong> Group like terms.
                <br />
                (3x² - 5x + 2) + (2x² + 3x - 7)
                <br />
                = (3x² + 2x²) + (-5x + 3x) + (2 - 7)
              </p>
              <p>
                <strong>Step 2:</strong> Combine like terms.
                <br />
                = 5x² - 2x - 5
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example 2: Subtract (4x³ + 2x - 7) from (6x³ - 3x² + x + 5)</h3>
              <p>
                <strong>Step 1:</strong> Change the sign of each term in the second polynomial and add.
                <br />
                (6x³ - 3x² + x + 5) - (4x³ + 2x - 7)
                <br />
                = (6x³ - 3x² + x + 5) + (-4x³ - 2x + 7)
                <br />
                = (6x³ - 4x³) + (-3x²) + (x - 2x) + (5 + 7)
              </p>
              <p>
                <strong>Step 2:</strong> Combine like terms.
                <br />
                = 2x³ - 3x² - x + 12
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Multiplying Polynomials</h2>
          <div className="topic-content">
            <h3>Multiplying a Monomial by a Polynomial</h3>
            <p>
              To multiply a monomial by a polynomial, multiply each term of the polynomial by the monomial.
            </p>
            <div className="example-box">
              <h4>Example: Multiply 3x by (2x² - 5x + 1)</h4>
              <p>
                <strong>Step 1:</strong> Multiply each term by 3x.
                <br />
                3x(2x² - 5x + 1)
                <br />
                = 3x(2x²) - 3x(5x) + 3x(1)
                <br />
                = 6x³ - 15x² + 3x
              </p>
            </div>
            
            <h3>Multiplying Two Binomials</h3>
            <p>
              To multiply two binomials, use the FOIL method (First, Outer, Inner, Last).
            </p>
            <div className="example-box">
              <h4>Example: Multiply (x + 3) by (x - 2)</h4>
              <p>
                <strong>Step 1:</strong> Apply the FOIL method.
                <br />
                (x + 3)(x - 2)
                <br />
                = (F) x · x + (O) x · (-2) + (I) 3 · x + (L) 3 · (-2)
                <br />
                = x² - 2x + 3x - 6
                <br />
                = x² + x - 6
              </p>
            </div>
            
            <h3>Multiplying Any Two Polynomials</h3>
            <p>
              To multiply any two polynomials, multiply each term of the first polynomial by each term of the second polynomial, and then combine like terms.
            </p>
            <div className="example-box">
              <h4>Example: Multiply (2x² + x - 3) by (x + 2)</h4>
              <p>
                <strong>Step 1:</strong> Multiply each term of the first polynomial by each term of the second polynomial.
                <br />
                (2x² + x - 3)(x + 2)
                <br />
                = 2x²(x + 2) + x(x + 2) - 3(x + 2)
                <br />
                = 2x²(x) + 2x²(2) + x(x) + x(2) - 3(x) - 3(2)
                <br />
                = 2x³ + 4x² + x² + 2x - 3x - 6
                <br />
                = 2x³ + 5x² - x - 6
              </p>
            </div>
            
            <h3>Special Products</h3>
            <p>
              Some polynomial multiplications have special patterns that can be memorized:
            </p>
            <ul>
              <li><strong>(a + b)² = a² + 2ab + b²</strong></li>
              <li><strong>(a - b)² = a² - 2ab + b²</strong></li>
              <li><strong>(a + b)(a - b) = a² - b²</strong> (difference of squares)</li>
              <li><strong>(a + b)³ = a³ + 3a²b + 3ab² + b³</strong></li>
              <li><strong>(a - b)³ = a³ - 3a²b + 3ab² - b³</strong></li>
            </ul>
            <div className="example-box">
              <h4>Example: Use special products to find (x + 5)²</h4>
              <p>
                <strong>Using the formula (a + b)² = a² + 2ab + b²:</strong>
                <br />
                (x + 5)² = x² + 2(x)(5) + 5²
                <br />
                = x² + 10x + 25
              </p>
            </div>
            <div className="example-box">
              <h4>Example: Use special products to find (2x - 3)(2x + 3)</h4>
              <p>
                <strong>Using the formula (a + b)(a - b) = a² - b²:</strong>
                <br />
                (2x - 3)(2x + 3) = (2x)² - 3²
                <br />
                = 4x² - 9
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Dividing Polynomials</h2>
          <div className="topic-content">
            <h3>Dividing a Polynomial by a Monomial</h3>
            <p>
              To divide a polynomial by a monomial, divide each term of the polynomial by the monomial.
            </p>
            <div className="example-box">
              <h4>Example: Divide 6x³ - 9x² + 3x by 3x</h4>
              <p>
                <strong>Step 1:</strong> Divide each term by 3x.
                <br />
                (6x³ - 9x² + 3x) ÷ 3x
                <br />
                = (6x³ ÷ 3x) - (9x² ÷ 3x) + (3x ÷ 3x)
                <br />
                = 2x² - 3x + 1
              </p>
            </div>
            
            <h3>Long Division of Polynomials</h3>
            <p>
              To divide a polynomial by another polynomial with more than one term, use polynomial long division.
            </p>
            <div className="example-box">
              <h4>Example: Divide x³ - 2x² - 4 by x - 2</h4>
              <p>
                <strong>Step 1:</strong> Set up the long division.
                <br />
                <strong>Step 2:</strong> Divide the first term of the dividend (x³) by the first term of the divisor (x) to get the first term of the quotient (x²).
                <br />
                <strong>Step 3:</strong> Multiply the entire divisor (x - 2) by the first term of the quotient (x²) to get x³ - 2x².
                <br />
                <strong>Step 4:</strong> Subtract x³ - 2x² from the dividend and bring down the next term.
                <br />
                <strong>Step 5:</strong> Repeat the process until the remainder has a degree less than the divisor.
                <br />
                <br />
                The result is x² + 0x + 4 with a remainder of 4.
                <br />
                So, (x³ - 2x² - 4) ÷ (x - 2) = x² + 0x + 4 + 4/(x - 2)
                <br />
                Or more simply: (x³ - 2x² - 4) ÷ (x - 2) = x² + 4 + 4/(x - 2)
              </p>
            </div>
            
            <h3>Synthetic Division</h3>
            <p>
              Synthetic division is a shorthand method for dividing a polynomial by a binomial of the form (x - r).
            </p>
            <div className="example-box">
              <h4>Example: Use synthetic division to divide x³ - 2x² - 4 by x - 2</h4>
              <p>
                <strong>Step 1:</strong> Write down the coefficients of the dividend: 1, -2, 0, -4.
                <br />
                <strong>Step 2:</strong> Write down the value of r (where the divisor is x - r): r = 2.
                <br />
                <strong>Step 3:</strong> Bring down the first coefficient (1).
                <br />
                <strong>Step 4:</strong> Multiply this by r and add it to the next coefficient.
                <br />
                <strong>Step 5:</strong> Repeat until all coefficients are used.
                <br />
                <br />
                The result is 1, 0, 4, 4.
                <br />
                The first three numbers (1, 0, 4) are the coefficients of the quotient: x² + 0x + 4 = x² + 4.
                <br />
                The last number (4) is the remainder.
                <br />
                So, (x³ - 2x² - 4) ÷ (x - 2) = x² + 4 + 4/(x - 2)
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Factoring Polynomials</h2>
          <div className="topic-content">
            <p>
              Factoring is the process of finding polynomials whose product equals the original polynomial. It's the reverse of multiplication.
            </p>
            
            <h3>Common Factor</h3>
            <p>
              Always look for a common factor first.
            </p>
            <div className="example-box">
              <h4>Example: Factor 3x³ - 6x² + 9x</h4>
              <p>
                <strong>Step 1:</strong> Find the greatest common factor (GCF) of all terms.
                <br />
                The GCF of 3x³, -6x², and 9x is 3x.
                <br />
                <strong>Step 2:</strong> Factor out the GCF.
                <br />
                3x³ - 6x² + 9x = 3x(x² - 2x + 3)
              </p>
            </div>
            
            <h3>Factoring Trinomials</h3>
            <p>
              For a trinomial of the form ax² + bx + c, find two numbers whose product is ac and whose sum is b.
            </p>
            <div className="example-box">
              <h4>Example: Factor x² + 5x + 6</h4>
              <p>
                <strong>Step 1:</strong> Find two numbers whose product is 6 (= 1 × 6) and whose sum is 5.
                <br />
                The numbers are 2 and 3 (2 × 3 = 6 and 2 + 3 = 5).
                <br />
                <strong>Step 2:</strong> Rewrite the middle term using these numbers.
                <br />
                x² + 5x + 6 = x² + 2x + 3x + 6
                <br />
                <strong>Step 3:</strong> Group and factor.
                <br />
                = (x² + 2x) + (3x + 6)
                <br />
                = x(x + 2) + 3(x + 2)
                <br />
                = (x + 2)(x + 3)
              </p>
            </div>
            
            <h3>Difference of Squares</h3>
            <p>
              A difference of squares can be factored using the formula a² - b² = (a + b)(a - b).
            </p>
            <div className="example-box">
              <h4>Example: Factor x² - 16</h4>
              <p>
                <strong>Step 1:</strong> Recognize this as a difference of squares: x² - 4².
                <br />
                <strong>Step 2:</strong> Apply the formula a² - b² = (a + b)(a - b).
                <br />
                x² - 16 = x² - 4² = (x + 4)(x - 4)
              </p>
            </div>
            
            <h3>Sum and Difference of Cubes</h3>
            <p>
              Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)
              <br />
              Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)
            </p>
            <div className="example-box">
              <h4>Example: Factor x³ - 27</h4>
              <p>
                <strong>Step 1:</strong> Recognize this as a difference of cubes: x³ - 3³.
                <br />
                <strong>Step 2:</strong> Apply the formula a³ - b³ = (a - b)(a² + ab + b²).
                <br />
                x³ - 27 = x³ - 3³ = (x - 3)(x² + 3x + 9)
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Polynomial Functions and Their Graphs</h2>
          <div className="topic-content">
            <p>
              A polynomial function is a function of the form P(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ, where n is a non-negative integer and aₙ ≠ 0.
            </p>
            <p>
              The graph of a polynomial function has the following properties:
            </p>
            <ul>
              <li>It is continuous (no breaks or holes)</li>
              <li>It is smooth (no sharp corners)</li>
              <li>The end behavior is determined by the leading term (the term with the highest power)</li>
              <li>A polynomial of degree n can have at most n real roots (x-intercepts)</li>
              <li>A polynomial of degree n can have at most n-1 turning points (local maxima or minima)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Describe the end behavior of P(x) = 2x³ - 5x² + x - 7</h3>
              <p>
                <strong>Step 1:</strong> Identify the leading term and its degree.
                <br />
                The leading term is 2x³, and the degree is 3 (odd).
                <br />
                <strong>Step 2:</strong> Determine the end behavior based on the degree and the sign of the leading coefficient.
                <br />
                Since the degree is odd and the leading coefficient is positive, the function will rise to the right and fall to the left.
                <br />
                As x → ∞, P(x) → ∞
                <br />
                As x → -∞, P(x) → -∞
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Add the polynomials: (3x³ - 2x² + 5) and (2x³ + 4x² - 3x - 1)</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Group like terms.
                  <br />
                  (3x³ - 2x² + 5) + (2x³ + 4x² - 3x - 1)
                  <br />
                  = (3x³ + 2x³) + (-2x² + 4x²) + (-3x) + (5 - 1)
                </p>
                <p>
                  <strong>Step 2:</strong> Combine like terms.
                  <br />
                  = 5x³ + 2x² - 3x + 4
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Multiply: (2x - 3)(x² + 2x - 5)</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Multiply each term of the first polynomial by each term of the second polynomial.
                  <br />
                  (2x - 3)(x² + 2x - 5)
                  <br />
                  = 2x(x² + 2x - 5) - 3(x² + 2x - 5)
                  <br />
                  = 2x(x²) + 2x(2x) + 2x(-5) - 3(x²) - 3(2x) - 3(-5)
                  <br />
                  = 2x³ + 4x² - 10x - 3x² - 6x + 15
                </p>
                <p>
                  <strong>Step 2:</strong> Combine like terms.
                  <br />
                  = 2x³ + (4 - 3)x² + (-10 - 6)x + 15
                  <br />
                  = 2x³ + x² - 16x + 15
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>Factor completely: 2x³ - 8x² - 24x</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Factor out the greatest common factor (GCF).
                  <br />
                  The GCF of 2x³, -8x², and -24x is 2x.
                  <br />
                  2x³ - 8x² - 24x = 2x(x² - 4x - 12)
                </p>
                <p>
                  <strong>Step 2:</strong> Factor the trinomial x² - 4x - 12.
                  <br />
                  We need two numbers whose product is -12 and whose sum is -4.
                  <br />
                  The numbers are -6 and 2 ((-6) × 2 = -12 and (-6) + 2 = -4).
                  <br />
                  x² - 4x - 12 = x² - 6x + 2x - 12 = x(x - 6) + 2(x - 6) = (x - 6)(x + 2)
                </p>
                <p>
                  <strong>Step 3:</strong> Combine the results.
                  <br />
                  2x³ - 8x² - 24x = 2x(x² - 4x - 12) = 2x(x - 6)(x + 2)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered polynomials, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/rational-expressions">Rational Expressions</a> - Learn about expressions that are ratios of polynomials.
              </li>
              <li>
                <a href="/topics/polynomial-equations">Polynomial Equations</a> - Understand how to solve equations involving polynomials.
              </li>
              <li>
                <a href="/topics/limits">Limits</a> - Explore how polynomial functions behave as they approach certain values.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Polynomials;