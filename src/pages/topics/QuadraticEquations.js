import React, { useEffect } from 'react';
import './TopicPage.css';

const QuadraticEquations = () => {
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
          <h1 className="topic-title">Quadratic Equations</h1>
          <p className="topic-description">
            Learn how to solve equations where the highest power of the variable is 2, a key concept in algebra.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">What is a Quadratic Equation?</h2>
          <div className="topic-content">
            <p>
              A quadratic equation is a polynomial equation of the second degree, which means the highest power of the variable is 2. The standard form of a quadratic equation is:
            </p>
            <p className="equation">
              ax² + bx + c = 0
            </p>
            <p>
              Where a, b, and c are constants, and a ≠ 0.
            </p>
            <div className="example-box">
              <h3>Examples of Quadratic Equations:</h3>
              <p>
                - x² + 5x + 6 = 0
                <br />
                - 2x² - 7x + 3 = 0
                <br />
                - x² - 9 = 0
                <br />
                - 3x² + 2x = 0
              </p>
            </div>
            <p>
              The graph of a quadratic equation is a parabola, which is a U-shaped curve. The solutions to a quadratic equation are the x-values where the parabola crosses the x-axis.
            </p>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Solving by Factoring</h2>
          <div className="topic-content">
            <p>
              One method to solve quadratic equations is by factoring. This method works well when the quadratic expression can be easily factored.
            </p>
            <p>
              The key insight is that if a product equals zero, then at least one of the factors must be zero. This is known as the Zero Product Property.
            </p>
            <div className="example-box">
              <h3>Example 1: Solve x² + 5x + 6 = 0 by factoring</h3>
              <p>
                <strong>Step 1:</strong> Factor the quadratic expression.
                <br />
                x² + 5x + 6 = (x + 2)(x + 3)
              </p>
              <p>
                <strong>Step 2:</strong> Set each factor equal to zero and solve.
                <br />
                x + 2 = 0 or x + 3 = 0
                <br />
                x = -2 or x = -3
              </p>
              <p>
                <strong>Check:</strong> Substitute each solution back into the original equation.
                <br />
                For x = -2:
                <br />
                (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
                <br />
                For x = -3:
                <br />
                (-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example 2: Solve 2x² - 7x + 3 = 0 by factoring</h3>
              <p>
                <strong>Step 1:</strong> Factor the quadratic expression.
                <br />
                2x² - 7x + 3 = (2x - 1)(x - 3)
              </p>
              <p>
                <strong>Step 2:</strong> Set each factor equal to zero and solve.
                <br />
                2x - 1 = 0 or x - 3 = 0
                <br />
                2x = 1 or x = 3
                <br />
                x = 1/2 or x = 3
              </p>
              <p>
                <strong>Check:</strong> Substitute each solution back into the original equation.
                <br />
                For x = 1/2:
                <br />
                2(1/2)² - 7(1/2) + 3 = 2(1/4) - 7/2 + 3 = 1/2 - 7/2 + 3 = 1/2 - 7/2 + 6/2 = 0 ✓
                <br />
                For x = 3:
                <br />
                2(3)² - 7(3) + 3 = 2(9) - 21 + 3 = 18 - 21 + 3 = 0 ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Solving by Completing the Square</h2>
          <div className="topic-content">
            <p>
              Completing the square is a method that transforms a quadratic expression into a perfect square trinomial plus or minus a constant. This method is useful when the quadratic expression cannot be easily factored.
            </p>
            <div className="example-box">
              <h3>Example: Solve x² + 6x + 8 = 0 by completing the square</h3>
              <p>
                <strong>Step 1:</strong> Move the constant term to the right side of the equation.
                <br />
                x² + 6x = -8
              </p>
              <p>
                <strong>Step 2:</strong> Take half the coefficient of x, square it, and add it to both sides.
                <br />
                Half of 6 is 3, and 3² = 9.
                <br />
                x² + 6x + 9 = -8 + 9
                <br />
                (x + 3)² = 1
              </p>
              <p>
                <strong>Step 3:</strong> Take the square root of both sides.
                <br />
                x + 3 = ±1
                <br />
                x = -3 ± 1
                <br />
                x = -2 or x = -4
              </p>
              <p>
                <strong>Check:</strong> Substitute each solution back into the original equation.
                <br />
                For x = -2:
                <br />
                (-2)² + 6(-2) + 8 = 4 - 12 + 8 = 0 ✓
                <br />
                For x = -4:
                <br />
                (-4)² + 6(-4) + 8 = 16 - 24 + 8 = 0 ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Solving Using the Quadratic Formula</h2>
          <div className="topic-content">
            <p>
              The quadratic formula is a general formula that can be used to solve any quadratic equation. It is derived by completing the square on the standard form of a quadratic equation.
            </p>
            <p className="equation">
              x = (-b ± √(b² - 4ac)) / (2a)
            </p>
            <p>
              Where a, b, and c are the coefficients in the standard form ax² + bx + c = 0.
            </p>
            <div className="example-box">
              <h3>Example: Solve 2x² - 5x - 3 = 0 using the quadratic formula</h3>
              <p>
                <strong>Step 1:</strong> Identify the values of a, b, and c.
                <br />
                a = 2, b = -5, c = -3
              </p>
              <p>
                <strong>Step 2:</strong> Substitute these values into the quadratic formula.
                <br />
                x = (-(-5) ± √((-5)² - 4(2)(-3))) / (2(2))
                <br />
                x = (5 ± √(25 + 24)) / 4
                <br />
                x = (5 ± √49) / 4
                <br />
                x = (5 ± 7) / 4
              </p>
              <p>
                <strong>Step 3:</strong> Calculate the two solutions.
                <br />
                x = (5 + 7) / 4 = 12/4 = 3
                <br />
                x = (5 - 7) / 4 = -2/4 = -1/2
              </p>
              <p>
                <strong>Check:</strong> Substitute each solution back into the original equation.
                <br />
                For x = 3:
                <br />
                2(3)² - 5(3) - 3 = 2(9) - 15 - 3 = 18 - 15 - 3 = 0 ✓
                <br />
                For x = -1/2:
                <br />
                2(-1/2)² - 5(-1/2) - 3 = 2(1/4) + 5/2 - 3 = 1/2 + 5/2 - 3 = 6/2 - 6/2 = 0 ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">The Discriminant and Types of Solutions</h2>
          <div className="topic-content">
            <p>
              The discriminant is the expression under the square root in the quadratic formula: b² - 4ac. It tells us about the nature of the solutions to a quadratic equation.
            </p>
            <ul>
              <li>
                <strong>If b² - 4ac > 0:</strong> The equation has two distinct real solutions.
              </li>
              <li>
                <strong>If b² - 4ac = 0:</strong> The equation has one repeated real solution (a double root).
              </li>
              <li>
                <strong>If b² - 4ac &lt; 0:</strong> The equation has two complex solutions (not real).
              </li>
            </ul>
            <div className="example-box">
              <h3>Example 1: Find the discriminant of x² - 4x + 4 = 0</h3>
              <p>
                <strong>Step 1:</strong> Identify the values of a, b, and c.
                <br />
                a = 1, b = -4, c = 4
              </p>
              <p>
                <strong>Step 2:</strong> Calculate the discriminant.
                <br />
                b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0
              </p>
              <p>
                Since the discriminant is 0, the equation has one repeated real solution.
                <br />
                Using the quadratic formula:
                <br />
                x = (-(-4) ± √0) / (2(1)) = 4/2 = 2
                <br />
                The solution is x = 2 (a double root).
              </p>
            </div>
            
            <div className="example-box">
              <h3>Example 2: Find the discriminant of x² + x + 1 = 0</h3>
              <p>
                <strong>Step 1:</strong> Identify the values of a, b, and c.
                <br />
                a = 1, b = 1, c = 1
              </p>
              <p>
                <strong>Step 2:</strong> Calculate the discriminant.
                <br />
                b² - 4ac = 1² - 4(1)(1) = 1 - 4 = -3
              </p>
              <p>
                Since the discriminant is negative, the equation has two complex solutions.
                <br />
                Using the quadratic formula:
                <br />
                x = (-1 ± √(-3)) / (2(1)) = (-1 ± i√3) / 2
                <br />
                The solutions are x = (-1 + i√3) / 2 and x = (-1 - i√3) / 2.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Applications of Quadratic Equations</h2>
          <div className="topic-content">
            <p>
              Quadratic equations have many real-world applications, including:
            </p>
            <ul>
              <li>Calculating the trajectory of projectiles</li>
              <li>Finding the dimensions of geometric shapes</li>
              <li>Analyzing the motion of objects under gravity</li>
              <li>Optimizing profit, cost, or revenue in economics</li>
            </ul>
            <div className="example-box">
              <h3>Example: Projectile Motion</h3>
              <p>
                A ball is thrown upward from a height of 1.5 meters with an initial velocity of 20 meters per second. The height h (in meters) of the ball after t seconds is given by the equation:
                <br />
                h = -4.9t² + 20t + 1.5
                <br />
                When will the ball hit the ground (h = 0)?
              </p>
              <p>
                <strong>Step 1:</strong> Set h = 0 and solve for t.
                <br />
                0 = -4.9t² + 20t + 1.5
                <br />
                4.9t² - 20t - 1.5 = 0
              </p>
              <p>
                <strong>Step 2:</strong> Use the quadratic formula with a = 4.9, b = -20, c = -1.5.
                <br />
                t = (20 ± √((-20)² - 4(4.9)(-1.5))) / (2(4.9))
                <br />
                t = (20 ± √(400 + 29.4)) / 9.8
                <br />
                t = (20 ± √429.4) / 9.8
                <br />
                t = (20 ± 20.72) / 9.8
                <br />
                t = 4.15 or t = -0.07
              </p>
              <p>
                Since time cannot be negative in this context, we take t = 4.15 seconds.
                <br />
                The ball will hit the ground approximately 4.15 seconds after it is thrown.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Solve by factoring: x² - 7x + 12 = 0</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Factor the quadratic expression.
                  <br />
                  x² - 7x + 12 = (x - 3)(x - 4)
                </p>
                <p>
                  <strong>Step 2:</strong> Set each factor equal to zero and solve.
                  <br />
                  x - 3 = 0 or x - 4 = 0
                  <br />
                  x = 3 or x = 4
                </p>
                <p>
                  <strong>Check:</strong> Substitute each solution back into the original equation.
                  <br />
                  For x = 3:
                  <br />
                  (3)² - 7(3) + 12 = 9 - 21 + 12 = 0 ✓
                  <br />
                  For x = 4:
                  <br />
                  (4)² - 7(4) + 12 = 16 - 28 + 12 = 0 ✓
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Solve using the quadratic formula: 3x² + 5x - 2 = 0</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Identify the values of a, b, and c.
                  <br />
                  a = 3, b = 5, c = -2
                </p>
                <p>
                  <strong>Step 2:</strong> Substitute these values into the quadratic formula.
                  <br />
                  x = (-5 ± √(5² - 4(3)(-2))) / (2(3))
                  <br />
                  x = (-5 ± √(25 + 24)) / 6
                  <br />
                  x = (-5 ± √49) / 6
                  <br />
                  x = (-5 ± 7) / 6
                </p>
                <p>
                  <strong>Step 3:</strong> Calculate the two solutions.
                  <br />
                  x = (-5 + 7) / 6 = 2/6 = 1/3
                  <br />
                  x = (-5 - 7) / 6 = -12/6 = -2
                </p>
                <p>
                  <strong>Check:</strong> Substitute each solution back into the original equation.
                  <br />
                  For x = 1/3:
                  <br />
                  3(1/3)² + 5(1/3) - 2 = 3(1/9) + 5/3 - 2 = 1/3 + 5/3 - 2 = 6/3 - 6/3 = 0 ✓
                  <br />
                  For x = -2:
                  <br />
                  3(-2)² + 5(-2) - 2 = 3(4) - 10 - 2 = 12 - 10 - 2 = 0 ✓
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>A rectangle has a perimeter of 34 cm and an area of 60 cm². Find its dimensions.</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Define the variables.
                  <br />
                  Let's say the length is x cm and the width is y cm.
                </p>
                <p>
                  <strong>Step 2:</strong> Set up equations based on the given information.
                  <br />
                  From the perimeter: 2x + 2y = 34, so y = (34 - 2x) / 2 = 17 - x
                  <br />
                  From the area: xy = 60
                </p>
                <p>
                  <strong>Step 3:</strong> Substitute the expression for y into the area equation.
                  <br />
                  x(17 - x) = 60
                  <br />
                  17x - x² = 60
                  <br />
                  -x² + 17x - 60 = 0
                  <br />
                  x² - 17x + 60 = 0
                </p>
                <p>
                  <strong>Step 4:</strong> Solve the quadratic equation by factoring.
                  <br />
                  x² - 17x + 60 = (x - 12)(x - 5)
                  <br />
                  x = 12 or x = 5
                </p>
                <p>
                  <strong>Step 5:</strong> Find the corresponding values of y.
                  <br />
                  If x = 12, then y = 17 - 12 = 5
                  <br />
                  If x = 5, then y = 17 - 5 = 12
                </p>
                <p>
                  <strong>Check:</strong> Verify that both solutions satisfy the original conditions.
                  <br />
                  For x = 12 and y = 5:
                  <br />
                  Perimeter = 2(12) + 2(5) = 24 + 10 = 34 cm ✓
                  <br />
                  Area = 12 × 5 = 60 cm² ✓
                  <br />
                  For x = 5 and y = 12:
                  <br />
                  Perimeter = 2(5) + 2(12) = 10 + 24 = 34 cm ✓
                  <br />
                  Area = 5 × 12 = 60 cm² ✓
                </p>
                <p>
                  The rectangle has dimensions of either 12 cm by 5 cm or 5 cm by 12 cm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered quadratic equations, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/functions">Functions</a> - Learn about quadratic functions and their graphs.
              </li>
              <li>
                <a href="/topics/polynomials">Polynomials</a> - Explore higher-degree polynomial equations.
              </li>
              <li>
                <a href="/topics/complex-numbers">Complex Numbers</a> - Understand the solutions to quadratic equations with negative discriminants.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuadraticEquations;