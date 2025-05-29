import React, { useEffect } from 'react';
import './TopicPage.css';

const Functions = () => {
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
          <h1 className="topic-title">Functions</h1>
          <p className="topic-description">
            Learn about mathematical relationships that assign exactly one output to each input, a fundamental concept in mathematics.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">What is a Function?</h2>
          <div className="topic-content">
            <p>
              A function is a rule that assigns to each input exactly one output. In other words, it's a relationship between two sets, where each element in the first set (the domain) is paired with exactly one element in the second set (the range).
            </p>
            <p>
              Functions are typically represented using function notation, such as f(x) = 2x + 3, where:
            </p>
            <ul>
              <li>f is the name of the function</li>
              <li>x is the input variable (independent variable)</li>
              <li>f(x) is the output value (dependent variable)</li>
              <li>2x + 3 is the rule that defines how to calculate the output from the input</li>
            </ul>
            <div className="example-box">
              <h3>Example: Function Evaluation</h3>
              <p>
                For the function f(x) = 2x + 3, find f(4).
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                To find f(4), we substitute x = 4 into the function rule.
                <br />
                f(4) = 2(4) + 3 = 8 + 3 = 11
                <br />
                So, when the input is 4, the output is 11.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Domain and Range</h2>
          <div className="topic-content">
            <p>
              The domain of a function is the set of all possible input values (x-values) for which the function is defined. The range is the set of all possible output values (y-values or f(x) values) that the function can produce.
            </p>
            <div className="example-box">
              <h3>Example 1: Find the domain and range of f(x) = x²</h3>
              <p>
                <strong>Domain:</strong>
                <br />
                The function f(x) = x² is defined for all real numbers, so the domain is all real numbers, or (-∞, ∞).
              </p>
              <p>
                <strong>Range:</strong>
                <br />
                Since x² is always greater than or equal to 0 for any real number x, the range is [0, ∞).
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example 2: Find the domain and range of g(x) = √x</h3>
              <p>
                <strong>Domain:</strong>
                <br />
                The square root function is only defined for non-negative numbers, so the domain is [0, ∞).
              </p>
              <p>
                <strong>Range:</strong>
                <br />
                The square root of a non-negative number is always non-negative, so the range is also [0, ∞).
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example 3: Find the domain and range of h(x) = 1/(x-2)</h3>
              <p>
                <strong>Domain:</strong>
                <br />
                The function is undefined when the denominator is zero, which happens when x = 2. So, the domain is all real numbers except 2, or (-∞, 2) ∪ (2, ∞).
              </p>
              <p>
                <strong>Range:</strong>
                <br />
                The function h(x) = 1/(x-2) can take any real value except 0. So, the range is (-∞, 0) ∪ (0, ∞).
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Types of Functions</h2>
          <div className="topic-content">
            <h3>Linear Functions</h3>
            <p>
              A linear function has the form f(x) = mx + b, where m is the slope and b is the y-intercept. The graph of a linear function is a straight line.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = 3x - 2</h4>
              <p>
                This is a linear function with slope m = 3 and y-intercept b = -2.
              </p>
            </div>
            
            <h3>Quadratic Functions</h3>
            <p>
              A quadratic function has the form f(x) = ax² + bx + c, where a ≠ 0. The graph of a quadratic function is a parabola.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = x² - 4x + 3</h4>
              <p>
                This is a quadratic function with a = 1, b = -4, and c = 3.
              </p>
            </div>
            
            <h3>Polynomial Functions</h3>
            <p>
              A polynomial function has the form f(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ, where n is a non-negative integer and aₙ ≠ 0.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = 2x³ - 5x² + x - 7</h4>
              <p>
                This is a polynomial function of degree 3 (a cubic function).
              </p>
            </div>
            
            <h3>Rational Functions</h3>
            <p>
              A rational function is a function that can be written as the ratio of two polynomial functions, where the denominator is not zero.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = (x² - 4)/(x - 1)</h4>
              <p>
                This is a rational function with a polynomial of degree 2 in the numerator and a polynomial of degree 1 in the denominator.
              </p>
            </div>
            
            <h3>Exponential Functions</h3>
            <p>
              An exponential function has the form f(x) = aᵇˣ, where a > 0, a ≠ 1, and b is a constant.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = 2ˣ</h4>
              <p>
                This is an exponential function with base 2.
              </p>
            </div>
            
            <h3>Logarithmic Functions</h3>
            <p>
              A logarithmic function has the form f(x) = log_b(x), where b > 0, b ≠ 1.
            </p>
            <div className="example-box">
              <h4>Example: f(x) = log₁₀(x)</h4>
              <p>
                This is a logarithmic function with base 10.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Function Operations</h2>
          <div className="topic-content">
            <p>
              Functions can be combined using various operations to create new functions.
            </p>
            
            <h3>Addition and Subtraction</h3>
            <p>
              (f + g)(x) = f(x) + g(x)
              <br />
              (f - g)(x) = f(x) - g(x)
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <p>
                If f(x) = x² and g(x) = 3x + 1, find (f + g)(2) and (f - g)(2).
              </p>
              <p>
                <strong>(f + g)(2) = f(2) + g(2) = 2² + (3(2) + 1) = 4 + 7 = 11</strong>
                <br />
                <strong>(f - g)(2) = f(2) - g(2) = 2² - (3(2) + 1) = 4 - 7 = -3</strong>
              </p>
            </div>
            
            <h3>Multiplication and Division</h3>
            <p>
              (f · g)(x) = f(x) · g(x)
              <br />
              (f / g)(x) = f(x) / g(x), where g(x) ≠ 0
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <p>
                If f(x) = x² and g(x) = 3x + 1, find (f · g)(2) and (f / g)(2).
              </p>
              <p>
                <strong>(f · g)(2) = f(2) · g(2) = 2² · (3(2) + 1) = 4 · 7 = 28</strong>
                <br />
                <strong>(f / g)(2) = f(2) / g(2) = 2² / (3(2) + 1) = 4 / 7 ≈ 0.571</strong>
              </p>
            </div>
            
            <h3>Composition</h3>
            <p>
              The composition of functions f and g, denoted by (f ∘ g)(x) or f(g(x)), is the function obtained by applying g first and then f.
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <p>
                If f(x) = x² and g(x) = 3x + 1, find (f ∘ g)(2) and (g ∘ f)(2).
              </p>
              <p>
                <strong>(f ∘ g)(2) = f(g(2)) = f(3(2) + 1) = f(7) = 7² = 49</strong>
                <br />
                <strong>(g ∘ f)(2) = g(f(2)) = g(2²) = g(4) = 3(4) + 1 = 13</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Inverse Functions</h2>
          <div className="topic-content">
            <p>
              The inverse of a function f, denoted by f⁻¹, is a function that "undoes" what f does. If f maps a to b, then f⁻¹ maps b back to a.
            </p>
            <p>
              Not all functions have inverses. A function has an inverse if and only if it is one-to-one (injective), meaning each output comes from exactly one input.
            </p>
            <div className="example-box">
              <h3>Example: Find the inverse of f(x) = 2x + 3</h3>
              <p>
                <strong>Step 1:</strong> Replace f(x) with y.
                <br />
                y = 2x + 3
              </p>
              <p>
                <strong>Step 2:</strong> Swap x and y.
                <br />
                x = 2y + 3
              </p>
              <p>
                <strong>Step 3:</strong> Solve for y.
                <br />
                x - 3 = 2y
                <br />
                y = (x - 3) / 2
              </p>
              <p>
                <strong>Step 4:</strong> Replace y with f⁻¹(x).
                <br />
                f⁻¹(x) = (x - 3) / 2
              </p>
              <p>
                <strong>Check:</strong> Verify that (f ∘ f⁻¹)(x) = x and (f⁻¹ ∘ f)(x) = x.
                <br />
                (f ∘ f⁻¹)(x) = f(f⁻¹(x)) = f((x - 3) / 2) = 2((x - 3) / 2) + 3 = (x - 3) + 3 = x ✓
                <br />
                (f⁻¹ ∘ f)(x) = f⁻¹(f(x)) = f⁻¹(2x + 3) = ((2x + 3) - 3) / 2 = 2x / 2 = x ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Graphing Functions</h2>
          <div className="topic-content">
            <p>
              The graph of a function f is the set of all points (x, f(x)) in the Cartesian plane, where x is in the domain of f.
            </p>
            <p>
              Some key features to look for when graphing functions include:
            </p>
            <ul>
              <li>x-intercepts: points where f(x) = 0</li>
              <li>y-intercept: the point (0, f(0))</li>
              <li>Asymptotes: lines that the graph approaches but never touches</li>
              <li>Increasing/decreasing intervals: where the function is increasing or decreasing</li>
              <li>Maximum/minimum points: where the function reaches its highest or lowest values</li>
            </ul>
            <div className="example-box">
              <h3>Example: Sketch the graph of f(x) = x² - 4</h3>
              <p>
                <strong>Step 1:</strong> Find the y-intercept.
                <br />
                f(0) = 0² - 4 = -4
                <br />
                The y-intercept is (0, -4).
              </p>
              <p>
                <strong>Step 2:</strong> Find the x-intercepts.
                <br />
                f(x) = 0
                <br />
                x² - 4 = 0
                <br />
                x² = 4
                <br />
                x = ±2
                <br />
                The x-intercepts are (-2, 0) and (2, 0).
              </p>
              <p>
                <strong>Step 3:</strong> Find additional points to help sketch the graph.
                <br />
                f(-1) = (-1)² - 4 = 1 - 4 = -3
                <br />
                f(1) = 1² - 4 = 1 - 4 = -3
                <br />
                f(-3) = (-3)² - 4 = 9 - 4 = 5
                <br />
                f(3) = 3² - 4 = 9 - 4 = 5
              </p>
              <p>
                <strong>Step 4:</strong> Plot the points and connect them with a smooth curve.
                <br />
                The graph is a parabola that opens upward, with vertex at (0, -4) and x-intercepts at (-2, 0) and (2, 0).
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>For the function f(x) = 3x² - 2x + 5, find f(-1) and f(2).</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>f(-1) = 3(-1)² - 2(-1) + 5 = 3(1) + 2 + 5 = 3 + 2 + 5 = 10</strong>
                </p>
                <p>
                  <strong>f(2) = 3(2)² - 2(2) + 5 = 3(4) - 4 + 5 = 12 - 4 + 5 = 13</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Find the domain and range of the function f(x) = √(16 - x²).</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Domain:</strong>
                  <br />
                  For the function to be defined, we need 16 - x² ≥ 0 (since we can't take the square root of a negative number).
                  <br />
                  16 - x² ≥ 0
                  <br />
                  x² ≤ 16
                  <br />
                  -4 ≤ x ≤ 4
                  <br />
                  So, the domain is [-4, 4].
                </p>
                <p>
                  <strong>Range:</strong>
                  <br />
                  When x = 0, f(0) = √(16 - 0) = 4, which is the maximum value.
                  <br />
                  When x = ±4, f(±4) = √(16 - 16) = 0, which is the minimum value.
                  <br />
                  So, the range is [0, 4].
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>If f(x) = 2x - 3 and g(x) = x² + 1, find (f ∘ g)(2) and (g ∘ f)(2).</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>(f ∘ g)(2) = f(g(2)) = f(2² + 1) = f(5) = 2(5) - 3 = 10 - 3 = 7</strong>
                </p>
                <p>
                  <strong>(g ∘ f)(2) = g(f(2)) = g(2(2) - 3) = g(1) = 1² + 1 = 2</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered functions, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/polynomials">Polynomials</a> - Explore polynomial functions in more depth.
              </li>
              <li>
                <a href="/topics/limits">Limits</a> - Understand how functions behave as they approach certain values.
              </li>
              <li>
                <a href="/topics/derivatives">Derivatives</a> - Learn about rates of change and the slope of a function.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Functions;