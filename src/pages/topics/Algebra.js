import React, { useEffect } from 'react';
import './TopicPage.css';

const Algebra = () => {
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
          <h1 className="topic-title">Algebra</h1>
          <p className="topic-description">
            Learn about equations, variables, and algebraic structures. Algebra is the foundation for many advanced
            mathematical concepts.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Introduction to Algebra</h2>
          <div className="topic-content">
            <p>
              Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in
              formulas and equations. These symbols are called variables because their values can vary.
            </p>
            <p>
              The main purpose of algebra is to simplify complex problems and find unknown values. It provides a way to
              formulate general rules and relationships between numbers.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                If we know that <strong>x + 5 = 12</strong>, we can use algebra to find the value of x.
              </p>
              <p>
                <strong>Step 1:</strong> Subtract 5 from both sides of the equation.
                <br />
                <strong>x + 5 - 5 = 12 - 5</strong>
                <br />
                <strong>x = 7</strong>
              </p>
              <p>
                We've found that x equals 7. We can verify this by substituting 7 back into the original equation:
                <br />
                <strong>7 + 5 = 12</strong> ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Basic Algebraic Operations</h2>
          <div className="topic-content">
            <p>
              Just like with regular numbers, we can perform operations like addition, subtraction, multiplication, and
              division with algebraic expressions.
            </p>
            
            <h3>Addition and Subtraction</h3>
            <p>
              When adding or subtracting algebraic expressions, we combine like terms (terms with the same variables
              raised to the same powers).
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <p>
                <strong>(3x + 2y) + (4x - 5y)</strong>
                <br />
                = <strong>3x + 2y + 4x - 5y</strong>
                <br />
                = <strong>7x - 3y</strong> (combining like terms)
              </p>
            </div>
            
            <h3>Multiplication</h3>
            <p>
              When multiplying algebraic expressions, we use the distributive property and multiply each term in the
              first expression by each term in the second expression.
            </p>
            <div className="example-box">
              <h4>Example:</h4>
              <p>
                <strong>(2x + 3)(4x - 1)</strong>
                <br />
                = <strong>2x(4x - 1) + 3(4x - 1)</strong>
                <br />
                = <strong>8x² - 2x + 12x - 3</strong>
                <br />
                = <strong>8x² + 10x - 3</strong> (combining like terms)
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Solving Linear Equations</h2>
          <div className="topic-content">
            <p>
              A linear equation is an equation where each term is either a constant or the product of a constant and a
              single variable raised to the power of 1.
            </p>
            <p>
              To solve a linear equation, we isolate the variable on one side of the equation by performing the same
              operations on both sides.
            </p>
            <div className="example-box">
              <h3>Example: Solve 2x - 7 = 3x + 4</h3>
              <p>
                <strong>Step 1:</strong> Subtract 3x from both sides.
                <br />
                <strong>2x - 7 - 3x = 3x + 4 - 3x</strong>
                <br />
                <strong>-x - 7 = 4</strong>
              </p>
              <p>
                <strong>Step 2:</strong> Add 7 to both sides.
                <br />
                <strong>-x - 7 + 7 = 4 + 7</strong>
                <br />
                <strong>-x = 11</strong>
              </p>
              <p>
                <strong>Step 3:</strong> Multiply both sides by -1.
                <br />
                <strong>x = -11</strong>
              </p>
              <p>
                We can verify this by substituting -11 back into the original equation:
                <br />
                <strong>2(-11) - 7 = 3(-11) + 4</strong>
                <br />
                <strong>-22 - 7 = -33 + 4</strong>
                <br />
                <strong>-29 = -29</strong> ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Solve for x: 5x + 3 = 18</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Subtract 3 from both sides.
                  <br />
                  <strong>5x + 3 - 3 = 18 - 3</strong>
                  <br />
                  <strong>5x = 15</strong>
                </p>
                <p>
                  <strong>Step 2:</strong> Divide both sides by 5.
                  <br />
                  <strong>x = 3</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Simplify: (4x² + 3x - 2) + (2x² - 5x + 7)</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>(4x² + 3x - 2) + (2x² - 5x + 7)</strong>
                  <br />
                  = <strong>4x² + 3x - 2 + 2x² - 5x + 7</strong>
                  <br />
                  = <strong>6x² - 2x + 5</strong> (combining like terms)
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>Solve for y: 3(y - 4) = 2(y + 5)</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Expand the expressions.
                  <br />
                  <strong>3y - 12 = 2y + 10</strong>
                </p>
                <p>
                  <strong>Step 2:</strong> Subtract 2y from both sides.
                  <br />
                  <strong>3y - 2y - 12 = 2y - 2y + 10</strong>
                  <br />
                  <strong>y - 12 = 10</strong>
                </p>
                <p>
                  <strong>Step 3:</strong> Add 12 to both sides.
                  <br />
                  <strong>y = 22</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've learned the basics of algebra, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/quadratic-equations">Quadratic Equations</a> - Learn how to solve equations with
                variables raised to the power of 2.
              </li>
              <li>
                <a href="/topics/functions">Functions</a> - Understand how to work with mathematical relationships
                between inputs and outputs.
              </li>
              <li>
                <a href="/topics/polynomials">Polynomials</a> - Explore expressions with variables raised to various
                powers.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Algebra;