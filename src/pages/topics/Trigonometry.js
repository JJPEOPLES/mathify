import React, { useEffect } from 'react';
import './TopicPage.css';

const Trigonometry = () => {
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
          <h1 className="topic-title">Trigonometry</h1>
          <p className="topic-description">
            Explore the relationships between angles and sides of triangles and the applications of these relationships.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Introduction to Trigonometry</h2>
          <div className="topic-content">
            <p>
              Trigonometry is a branch of mathematics that studies the relationships between the sides and angles of triangles. The word "trigonometry" comes from the Greek words "trigonon" (triangle) and "metron" (measure).
            </p>
            <p>
              Trigonometry has numerous applications in various fields, including navigation, surveying, engineering, physics, and astronomy. It provides powerful tools for solving problems involving distances, heights, and angles.
            </p>
            <div className="example-box">
              <h3>The Right Triangle</h3>
              <p>
                Most basic trigonometric concepts are based on right triangles (triangles with one 90° angle). In a right triangle:
              </p>
              <ul>
                <li><strong>Hypotenuse:</strong> The longest side, opposite to the right angle.</li>
                <li><strong>Adjacent:</strong> The side adjacent to the angle being considered (not the right angle).</li>
                <li><strong>Opposite:</strong> The side opposite to the angle being considered (not the right angle).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Trigonometric Ratios</h2>
          <div className="topic-content">
            <p>
              The six fundamental trigonometric ratios are defined for an angle θ in a right triangle:
            </p>
            <ul>
              <li><strong>Sine (sin):</strong> sin(θ) = opposite / hypotenuse</li>
              <li><strong>Cosine (cos):</strong> cos(θ) = adjacent / hypotenuse</li>
              <li><strong>Tangent (tan):</strong> tan(θ) = opposite / adjacent = sin(θ) / cos(θ)</li>
              <li><strong>Cosecant (csc):</strong> csc(θ) = hypotenuse / opposite = 1 / sin(θ)</li>
              <li><strong>Secant (sec):</strong> sec(θ) = hypotenuse / adjacent = 1 / cos(θ)</li>
              <li><strong>Cotangent (cot):</strong> cot(θ) = adjacent / opposite = 1 / tan(θ)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Finding Trigonometric Ratios</h3>
              <p>
                In a right triangle, if one angle is 30° and the hypotenuse is 10 cm, find the lengths of the other sides and all six trigonometric ratios for the 30° angle.
              </p>
              <p>
                <strong>Step 1:</strong> Use the properties of a 30-60-90 triangle.
                <br />
                In a 30-60-90 triangle, if the hypotenuse is 10 cm:
                <br />
                - The side opposite to the 30° angle = (hypotenuse × sin(30°)) = 10 cm × 0.5 = 5 cm
                <br />
                - The side adjacent to the 30° angle = (hypotenuse × cos(30°)) = 10 cm × 0.866 = 8.66 cm
              </p>
              <p>
                <strong>Step 2:</strong> Calculate the trigonometric ratios.
                <br />
                sin(30°) = opposite / hypotenuse = 5 cm / 10 cm = 0.5
                <br />
                cos(30°) = adjacent / hypotenuse = 8.66 cm / 10 cm = 0.866
                <br />
                tan(30°) = opposite / adjacent = 5 cm / 8.66 cm = 0.577
                <br />
                csc(30°) = 1 / sin(30°) = 1 / 0.5 = 2
                <br />
                sec(30°) = 1 / cos(30°) = 1 / 0.866 = 1.155
                <br />
                cot(30°) = 1 / tan(30°) = 1 / 0.577 = 1.732
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Special Angles</h2>
          <div className="topic-content">
            <p>
              Certain angles have exact trigonometric values that are important to memorize:
            </p>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Angle (degrees)</th>
                    <th>Angle (radians)</th>
                    <th>sin</th>
                    <th>cos</th>
                    <th>tan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0°</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>30°</td>
                    <td>π/6</td>
                    <td>1/2</td>
                    <td>√3/2</td>
                    <td>1/√3</td>
                  </tr>
                  <tr>
                    <td>45°</td>
                    <td>π/4</td>
                    <td>1/√2</td>
                    <td>1/√2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>60°</td>
                    <td>π/3</td>
                    <td>√3/2</td>
                    <td>1/2</td>
                    <td>√3</td>
                  </tr>
                  <tr>
                    <td>90°</td>
                    <td>π/2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>undefined</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="example-box">
              <h3>Example: Using Special Angles</h3>
              <p>
                Find the exact value of sin(60°) + cos(30°).
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                sin(60°) = √3/2
                <br />
                cos(30°) = √3/2
                <br />
                sin(60°) + cos(30°) = √3/2 + √3/2 = √3
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Solving Right Triangles</h2>
          <div className="topic-content">
            <p>
              "Solving" a triangle means finding all of its sides and angles. For a right triangle, we need to know at least one side and one acute angle, or two sides.
            </p>
            <div className="example-box">
              <h3>Example 1: Given One Side and One Angle</h3>
              <p>
                In a right triangle, if one angle is 45° and the adjacent side is 8 cm, find the other sides and angle.
              </p>
              <p>
                <strong>Step 1:</strong> Find the other acute angle.
                <br />
                In a triangle, the sum of angles is 180°.
                <br />
                45° + 90° + third angle = 180°
                <br />
                Third angle = 180° - 45° - 90° = 45°
                <br />
                So, the triangle is a 45-45-90 triangle (isosceles right triangle).
              </p>
              <p>
                <strong>Step 2:</strong> Find the other sides.
                <br />
                The adjacent side to the 45° angle is 8 cm.
                <br />
                The opposite side to the 45° angle is also 8 cm (since it's an isosceles triangle).
                <br />
                For the hypotenuse, we can use the Pythagorean theorem:
                <br />
                hypotenuse² = 8² + 8² = 64 + 64 = 128
                <br />
                hypotenuse = √128 = 8√2 ≈ 11.31 cm
                <br />
                Alternatively, in a 45-45-90 triangle, if the legs are of length a, the hypotenuse is a√2.
                <br />
                So, hypotenuse = 8√2 cm.
              </p>
            </div>
            <div className="example-box">
              <h3>Example 2: Given Two Sides</h3>
              <p>
                In a right triangle, if the hypotenuse is 10 cm and one leg is 6 cm, find the other leg and the acute angles.
              </p>
              <p>
                <strong>Step 1:</strong> Find the other leg using the Pythagorean theorem.
                <br />
                a² + b² = c²
                <br />
                6² + b² = 10²
                <br />
                36 + b² = 100
                <br />
                b² = 64
                <br />
                b = 8 cm
              </p>
              <p>
                <strong>Step 2:</strong> Find the acute angles using trigonometric ratios.
                <br />
                Let's call the angle opposite to the 6 cm leg as θ.
                <br />
                sin(θ) = opposite / hypotenuse = 6 cm / 10 cm = 0.6
                <br />
                θ = arcsin(0.6) ≈ 36.87°
                <br />
                The other acute angle = 90° - 36.87° = 53.13°
                <br />
                We can verify this:
                <br />
                cos(36.87°) = adjacent / hypotenuse = 8 cm / 10 cm = 0.8 ✓
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">The Unit Circle</h2>
          <div className="topic-content">
            <p>
              The unit circle is a circle with a radius of 1 unit, centered at the origin of a coordinate plane. It's a powerful tool for understanding trigonometric functions for any angle, not just those in right triangles.
            </p>
            <p>
              For any point (x, y) on the unit circle:
            </p>
            <ul>
              <li>x = cos(θ)</li>
              <li>y = sin(θ)</li>
              <li>tan(θ) = y / x (when x ≠ 0)</li>
            </ul>
            <p>
              Where θ is the angle formed by the positive x-axis and the line from the origin to the point (x, y), measured counterclockwise.
            </p>
            <div className="example-box">
              <h3>Example: Finding Coordinates on the Unit Circle</h3>
              <p>
                Find the coordinates of the point on the unit circle corresponding to an angle of 120°.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                For an angle of 120°:
                <br />
                x = cos(120°) = -1/2
                <br />
                y = sin(120°) = √3/2
                <br />
                So, the coordinates are (-1/2, √3/2).
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Trigonometric Functions</h2>
          <div className="topic-content">
            <p>
              Trigonometric functions extend the concept of trigonometric ratios to any angle, not just those in right triangles. They are periodic functions, meaning they repeat their values at regular intervals.
            </p>
            <h3>Properties of Trigonometric Functions:</h3>
            <ul>
              <li><strong>Domain and Range:</strong>
                <ul>
                  <li>sin(θ): Domain = all real numbers, Range = [-1, 1]</li>
                  <li>cos(θ): Domain = all real numbers, Range = [-1, 1]</li>
                  <li>tan(θ): Domain = all real numbers except θ = (2n+1)π/2, Range = all real numbers</li>
                </ul>
              </li>
              <li><strong>Periodicity:</strong>
                <ul>
                  <li>sin(θ + 2π) = sin(θ) (period = 2π)</li>
                  <li>cos(θ + 2π) = cos(θ) (period = 2π)</li>
                  <li>tan(θ + π) = tan(θ) (period = π)</li>
                </ul>
              </li>
              <li><strong>Even/Odd Functions:</strong>
                <ul>
                  <li>sin(-θ) = -sin(θ) (odd function)</li>
                  <li>cos(-θ) = cos(θ) (even function)</li>
                  <li>tan(-θ) = -tan(θ) (odd function)</li>
                </ul>
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Using Periodicity and Even/Odd Properties</h3>
              <p>
                Find the exact value of sin(390°).
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                We can use the periodicity of the sine function:
                <br />
                sin(θ + 360°) = sin(θ)
                <br />
                sin(390°) = sin(390° - 360°) = sin(30°) = 1/2
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Trigonometric Identities</h2>
          <div className="topic-content">
            <p>
              Trigonometric identities are equations involving trigonometric functions that are true for all values of the variables (where they are defined).
            </p>
            <h3>Fundamental Identities:</h3>
            <ul>
              <li><strong>Pythagorean Identities:</strong>
                <ul>
                  <li>sin²(θ) + cos²(θ) = 1</li>
                  <li>1 + tan²(θ) = sec²(θ)</li>
                  <li>1 + cot²(θ) = csc²(θ)</li>
                </ul>
              </li>
              <li><strong>Quotient Identities:</strong>
                <ul>
                  <li>tan(θ) = sin(θ) / cos(θ)</li>
                  <li>cot(θ) = cos(θ) / sin(θ)</li>
                </ul>
              </li>
              <li><strong>Reciprocal Identities:</strong>
                <ul>
                  <li>sin(θ) = 1 / csc(θ)</li>
                  <li>cos(θ) = 1 / sec(θ)</li>
                  <li>tan(θ) = 1 / cot(θ)</li>
                </ul>
              </li>
              <li><strong>Sum and Difference Formulas:</strong>
                <ul>
                  <li>sin(α ± β) = sin(α)cos(β) ± cos(α)sin(β)</li>
                  <li>cos(α ± β) = cos(α)cos(β) ∓ sin(α)sin(β)</li>
                  <li>tan(α ± β) = (tan(α) ± tan(β)) / (1 ∓ tan(α)tan(β))</li>
                </ul>
              </li>
              <li><strong>Double Angle Formulas:</strong>
                <ul>
                  <li>sin(2θ) = 2sin(θ)cos(θ)</li>
                  <li>cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)</li>
                  <li>tan(2θ) = 2tan(θ) / (1 - tan²(θ))</li>
                </ul>
              </li>
              <li><strong>Half Angle Formulas:</strong>
                <ul>
                  <li>sin(θ/2) = ±√((1 - cos(θ)) / 2)</li>
                  <li>cos(θ/2) = ±√((1 + cos(θ)) / 2)</li>
                  <li>tan(θ/2) = (1 - cos(θ)) / sin(θ) = sin(θ) / (1 + cos(θ))</li>
                </ul>
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Using Trigonometric Identities</h3>
              <p>
                Simplify the expression: sin²(θ) - cos²(θ).
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                We can use the Pythagorean identity: sin²(θ) + cos²(θ) = 1
                <br />
                Rearranging: sin²(θ) = 1 - cos²(θ)
                <br />
                Substituting:
                <br />
                sin²(θ) - cos²(θ) = (1 - cos²(θ)) - cos²(θ) = 1 - 2cos²(θ)
                <br />
                We can also recognize this as the double angle formula for cosine:
                <br />
                sin²(θ) - cos²(θ) = -cos(2θ)
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Law of Sines and Law of Cosines</h2>
          <div className="topic-content">
            <p>
              The Law of Sines and the Law of Cosines are used to solve triangles that are not necessarily right triangles.
            </p>
            <h3>Law of Sines:</h3>
            <p>
              For any triangle with sides a, b, c and opposite angles A, B, C:
            </p>
            <p className="equation">
              sin(A) / a = sin(B) / b = sin(C) / c
            </p>
            <p>
              This law is useful when we know:
            </p>
            <ul>
              <li>Two angles and one side (AAS or ASA)</li>
              <li>Two sides and the angle opposite to one of them (SSA, which may have 0, 1, or 2 solutions)</li>
            </ul>
            <h3>Law of Cosines:</h3>
            <p>
              For any triangle with sides a, b, c and opposite angles A, B, C:
            </p>
            <p className="equation">
              a² = b² + c² - 2bc·cos(A)
              <br />
              b² = a² + c² - 2ac·cos(B)
              <br />
              c² = a² + b² - 2ab·cos(C)
            </p>
            <p>
              This law is useful when we know:
            </p>
            <ul>
              <li>Three sides (SSS)</li>
              <li>Two sides and the included angle (SAS)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Using the Law of Cosines</h3>
              <p>
                In a triangle, if a = 8 cm, b = 6 cm, and c = 10 cm, find the measure of angle A.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Using the Law of Cosines:
                <br />
                a² = b² + c² - 2bc·cos(A)
                <br />
                8² = 6² + 10² - 2(6)(10)·cos(A)
                <br />
                64 = 36 + 100 - 120·cos(A)
                <br />
                64 = 136 - 120·cos(A)
                <br />
                120·cos(A) = 136 - 64 = 72
                <br />
                cos(A) = 72 / 120 = 0.6
                <br />
                A = arccos(0.6) ≈ 53.13°
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>In a right triangle, if one angle is 60° and the hypotenuse is 12 cm, find the lengths of the other two sides.</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the other acute angle.
                  <br />
                  60° + 90° + third angle = 180°
                  <br />
                  Third angle = 180° - 60° - 90° = 30°
                </p>
                <p>
                  <strong>Step 2:</strong> Find the sides using trigonometric ratios.
                  <br />
                  The side opposite to the 60° angle:
                  <br />
                  sin(60°) = opposite / hypotenuse
                  <br />
                  opposite = hypotenuse × sin(60°) = 12 cm × (√3/2) = 6√3 cm ≈ 10.39 cm
                </p>
                <p>
                  The side adjacent to the 60° angle:
                  <br />
                  cos(60°) = adjacent / hypotenuse
                  <br />
                  adjacent = hypotenuse × cos(60°) = 12 cm × (1/2) = 6 cm
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Find the exact value of cos(15°) using the half-angle formula.</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Express 15° as half of 30°.
                  <br />
                  15° = 30° / 2
                </p>
                <p>
                  <strong>Step 2:</strong> Use the half-angle formula for cosine.
                  <br />
                  cos(θ/2) = ±√((1 + cos(θ)) / 2)
                  <br />
                  cos(15°) = cos(30° / 2) = √((1 + cos(30°)) / 2)
                  <br />
                  cos(15°) = √((1 + (√3/2)) / 2)
                  <br />
                  cos(15°) = √((2 + √3) / 4)
                  <br />
                  cos(15°) = (1/2)√(2 + √3)
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>A ladder 10 meters long leans against a vertical wall. If the angle between the ladder and the ground is 65°, how high up the wall does the ladder reach?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Identify the given information.
                  <br />
                  - The ladder (hypotenuse) is 10 meters long.
                  <br />
                  - The angle between the ladder and the ground is 65°.
                  <br />
                  - We need to find the height up the wall (opposite side).
                </p>
                <p>
                  <strong>Step 2:</strong> Use the sine function to find the height.
                  <br />
                  sin(65°) = opposite / hypotenuse
                  <br />
                  sin(65°) = height / 10 m
                  <br />
                  height = 10 m × sin(65°)
                  <br />
                  height = 10 m × 0.9063
                  <br />
                  height ≈ 9.06 meters
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've explored trigonometry, you might want to dive deeper into these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/analytic-geometry">Analytic Geometry</a> - Apply trigonometry to problems in the coordinate plane.
              </li>
              <li>
                <a href="/topics/vectors">Vectors</a> - Learn about quantities that have both magnitude and direction.
              </li>
              <li>
                <a href="/topics/calculus">Calculus</a> - Explore the derivatives and integrals of trigonometric functions.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trigonometry;