import React, { useEffect } from 'react';
import './TopicPage.css';

const Geometry = () => {
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
          <h1 className="topic-title">Geometry</h1>
          <p className="topic-description">
            Explore the study of shapes, sizes, positions, and dimensions of objects in space.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Introduction to Geometry</h2>
          <div className="topic-content">
            <p>
              Geometry is one of the oldest branches of mathematics, concerned with the properties and relationships of points, lines, angles, surfaces, and solids. The word "geometry" comes from the Greek words "geo" (earth) and "metron" (measurement), meaning "earth measurement."
            </p>
            <p>
              Geometry helps us understand the world around us by providing tools to measure and describe physical objects and spaces. It has applications in various fields, including architecture, engineering, physics, art, and computer graphics.
            </p>
            <div className="example-box">
              <h3>Basic Elements of Geometry:</h3>
              <ul>
                <li><strong>Point:</strong> A location in space with no size or dimension.</li>
                <li><strong>Line:</strong> A straight path that extends infinitely in both directions.</li>
                <li><strong>Line Segment:</strong> A portion of a line with two endpoints.</li>
                <li><strong>Ray:</strong> A portion of a line with one endpoint that extends infinitely in one direction.</li>
                <li><strong>Angle:</strong> Formed by two rays sharing a common endpoint (vertex).</li>
                <li><strong>Plane:</strong> A flat surface that extends infinitely in all directions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Angles</h2>
          <div className="topic-content">
            <p>
              An angle is formed when two rays share a common endpoint (vertex). Angles are typically measured in degrees (°) or radians.
            </p>
            <h3>Types of Angles:</h3>
            <ul>
              <li><strong>Acute Angle:</strong> Measures less than 90° (e.g., 45°)</li>
              <li><strong>Right Angle:</strong> Measures exactly 90°</li>
              <li><strong>Obtuse Angle:</strong> Measures more than 90° but less than 180° (e.g., 120°)</li>
              <li><strong>Straight Angle:</strong> Measures exactly 180°</li>
              <li><strong>Reflex Angle:</strong> Measures more than 180° but less than 360° (e.g., 270°)</li>
              <li><strong>Complete Angle:</strong> Measures exactly 360°</li>
            </ul>
            <h3>Angle Relationships:</h3>
            <ul>
              <li><strong>Complementary Angles:</strong> Two angles whose sum is 90°</li>
              <li><strong>Supplementary Angles:</strong> Two angles whose sum is 180°</li>
              <li><strong>Vertical Angles:</strong> Opposite angles formed by two intersecting lines (always equal)</li>
              <li><strong>Adjacent Angles:</strong> Angles that share a common vertex and side</li>
            </ul>
            <div className="example-box">
              <h3>Example: Angle Relationships</h3>
              <p>
                If two angles are complementary and one angle measures 37°, what is the measure of the other angle?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Complementary angles sum to 90°.
                <br />
                Let x be the measure of the other angle.
                <br />
                37° + x = 90°
                <br />
                x = 90° - 37° = 53°
                <br />
                The other angle measures 53°.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Triangles</h2>
          <div className="topic-content">
            <p>
              A triangle is a polygon with three sides and three angles. The sum of the angles in any triangle is always 180°.
            </p>
            <h3>Types of Triangles by Sides:</h3>
            <ul>
              <li><strong>Equilateral Triangle:</strong> All three sides are equal in length, and all angles are 60°.</li>
              <li><strong>Isosceles Triangle:</strong> Two sides are equal in length, and the angles opposite to these sides are equal.</li>
              <li><strong>Scalene Triangle:</strong> All three sides have different lengths, and all angles are different.</li>
            </ul>
            <h3>Types of Triangles by Angles:</h3>
            <ul>
              <li><strong>Acute Triangle:</strong> All three angles are less than 90°.</li>
              <li><strong>Right Triangle:</strong> One angle is exactly 90°.</li>
              <li><strong>Obtuse Triangle:</strong> One angle is greater than 90°.</li>
            </ul>
            <h3>Important Triangle Formulas:</h3>
            <ul>
              <li><strong>Area:</strong> A = (1/2) × base × height</li>
              <li><strong>Perimeter:</strong> P = a + b + c (sum of all sides)</li>
              <li><strong>Pythagorean Theorem (for right triangles):</strong> a² + b² = c² (where c is the hypotenuse)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Area of a Triangle</h3>
              <p>
                Find the area of a triangle with a base of 8 cm and a height of 5 cm.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Area = (1/2) × base × height
                <br />
                Area = (1/2) × 8 cm × 5 cm
                <br />
                Area = 20 cm²
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Quadrilaterals</h2>
          <div className="topic-content">
            <p>
              A quadrilateral is a polygon with four sides and four angles. The sum of the angles in any quadrilateral is always 360°.
            </p>
            <h3>Types of Quadrilaterals:</h3>
            <ul>
              <li><strong>Square:</strong> All sides are equal in length, and all angles are 90°.</li>
              <li><strong>Rectangle:</strong> Opposite sides are equal in length, and all angles are 90°.</li>
              <li><strong>Rhombus:</strong> All sides are equal in length, and opposite angles are equal.</li>
              <li><strong>Parallelogram:</strong> Opposite sides are parallel and equal in length, and opposite angles are equal.</li>
              <li><strong>Trapezoid:</strong> Exactly one pair of opposite sides are parallel.</li>
              <li><strong>Kite:</strong> Two pairs of adjacent sides are equal in length.</li>
            </ul>
            <h3>Area Formulas for Quadrilaterals:</h3>
            <ul>
              <li><strong>Square:</strong> A = side²</li>
              <li><strong>Rectangle:</strong> A = length × width</li>
              <li><strong>Parallelogram:</strong> A = base × height</li>
              <li><strong>Trapezoid:</strong> A = (1/2) × (sum of parallel sides) × height</li>
              <li><strong>Rhombus:</strong> A = (1/2) × (product of diagonals)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Area of a Trapezoid</h3>
              <p>
                Find the area of a trapezoid with parallel sides of lengths 10 cm and 16 cm, and a height of 8 cm.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Area = (1/2) × (sum of parallel sides) × height
                <br />
                Area = (1/2) × (10 cm + 16 cm) × 8 cm
                <br />
                Area = (1/2) × 26 cm × 8 cm
                <br />
                Area = 104 cm²
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Circles</h2>
          <div className="topic-content">
            <p>
              A circle is a set of all points in a plane that are at a fixed distance (radius) from a fixed point (center).
            </p>
            <h3>Circle Terminology:</h3>
            <ul>
              <li><strong>Radius:</strong> The distance from the center to any point on the circle.</li>
              <li><strong>Diameter:</strong> A line segment that passes through the center and connects two points on the circle. It equals twice the radius (d = 2r).</li>
              <li><strong>Circumference:</strong> The distance around the circle. It equals π times the diameter (C = πd = 2πr).</li>
              <li><strong>Chord:</strong> A line segment that connects two points on the circle.</li>
              <li><strong>Arc:</strong> A portion of the circumference.</li>
              <li><strong>Sector:</strong> A region bounded by two radii and an arc.</li>
              <li><strong>Segment:</strong> A region bounded by a chord and an arc.</li>
            </ul>
            <h3>Circle Formulas:</h3>
            <ul>
              <li><strong>Circumference:</strong> C = 2πr = πd</li>
              <li><strong>Area:</strong> A = πr²</li>
              <li><strong>Arc Length:</strong> L = (θ/360°) × 2πr (where θ is the central angle in degrees)</li>
              <li><strong>Sector Area:</strong> A = (θ/360°) × πr² (where θ is the central angle in degrees)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Area and Circumference of a Circle</h3>
              <p>
                Find the area and circumference of a circle with a radius of 5 cm.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Area = πr²
                <br />
                Area = π × (5 cm)²
                <br />
                Area = π × 25 cm²
                <br />
                Area ≈ 3.14159 × 25 cm²
                <br />
                Area ≈ 78.54 cm²
                <br />
                <br />
                Circumference = 2πr
                <br />
                Circumference = 2π × 5 cm
                <br />
                Circumference = 10π cm
                <br />
                Circumference ≈ 10 × 3.14159 cm
                <br />
                Circumference ≈ 31.42 cm
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Polygons</h2>
          <div className="topic-content">
            <p>
              A polygon is a closed figure made up of line segments (sides) that meet only at their endpoints (vertices).
            </p>
            <h3>Types of Polygons by Number of Sides:</h3>
            <ul>
              <li><strong>Triangle:</strong> 3 sides</li>
              <li><strong>Quadrilateral:</strong> 4 sides</li>
              <li><strong>Pentagon:</strong> 5 sides</li>
              <li><strong>Hexagon:</strong> 6 sides</li>
              <li><strong>Heptagon:</strong> 7 sides</li>
              <li><strong>Octagon:</strong> 8 sides</li>
              <li><strong>Nonagon:</strong> 9 sides</li>
              <li><strong>Decagon:</strong> 10 sides</li>
            </ul>
            <h3>Regular Polygons:</h3>
            <p>
              A regular polygon has all sides of equal length and all angles of equal measure.
            </p>
            <h3>Polygon Formulas:</h3>
            <ul>
              <li><strong>Sum of Interior Angles:</strong> (n - 2) × 180° (where n is the number of sides)</li>
              <li><strong>Measure of Each Interior Angle (regular polygon):</strong> ((n - 2) × 180°) / n</li>
              <li><strong>Sum of Exterior Angles:</strong> Always 360°</li>
              <li><strong>Measure of Each Exterior Angle (regular polygon):</strong> 360° / n</li>
              <li><strong>Area of Regular Polygon:</strong> A = (1/2) × perimeter × apothem</li>
            </ul>
            <div className="example-box">
              <h3>Example: Interior Angle of a Regular Octagon</h3>
              <p>
                Find the measure of each interior angle in a regular octagon.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                For a regular octagon, n = 8.
                <br />
                Measure of each interior angle = ((n - 2) × 180°) / n
                <br />
                Measure of each interior angle = ((8 - 2) × 180°) / 8
                <br />
                Measure of each interior angle = (6 × 180°) / 8
                <br />
                Measure of each interior angle = 1080° / 8
                <br />
                Measure of each interior angle = 135°
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Three-Dimensional Shapes</h2>
          <div className="topic-content">
            <p>
              Three-dimensional (3D) shapes, also known as solids, have length, width, and height.
            </p>
            <h3>Common 3D Shapes:</h3>
            <ul>
              <li><strong>Cube:</strong> A 3D shape with 6 square faces, 12 edges, and 8 vertices.</li>
              <li><strong>Rectangular Prism:</strong> A 3D shape with 6 rectangular faces, 12 edges, and 8 vertices.</li>
              <li><strong>Sphere:</strong> A 3D shape where all points are equidistant from the center.</li>
              <li><strong>Cylinder:</strong> A 3D shape with two circular bases connected by a curved surface.</li>
              <li><strong>Cone:</strong> A 3D shape with a circular base connected to a point (apex) by a curved surface.</li>
              <li><strong>Pyramid:</strong> A 3D shape with a polygonal base connected to a point (apex) by triangular faces.</li>
            </ul>
            <h3>Volume and Surface Area Formulas:</h3>
            <ul>
              <li><strong>Cube:</strong> V = s³, SA = 6s² (where s is the side length)</li>
              <li><strong>Rectangular Prism:</strong> V = l × w × h, SA = 2(lw + lh + wh)</li>
              <li><strong>Sphere:</strong> V = (4/3)πr³, SA = 4πr²</li>
              <li><strong>Cylinder:</strong> V = πr²h, SA = 2πr² + 2πrh</li>
              <li><strong>Cone:</strong> V = (1/3)πr²h, SA = πr² + πrl (where l is the slant height)</li>
              <li><strong>Square-based Pyramid:</strong> V = (1/3)s²h, SA = s² + 2sl (where l is the slant height)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Volume and Surface Area of a Cylinder</h3>
              <p>
                Find the volume and surface area of a cylinder with a radius of 4 cm and a height of 10 cm.
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Volume = πr²h
                <br />
                Volume = π × (4 cm)² × 10 cm
                <br />
                Volume = π × 16 cm² × 10 cm
                <br />
                Volume = 160π cm³
                <br />
                Volume ≈ 502.65 cm³
                <br />
                <br />
                Surface Area = 2πr² + 2πrh
                <br />
                Surface Area = 2π × (4 cm)² + 2π × 4 cm × 10 cm
                <br />
                Surface Area = 2π × 16 cm² + 2π × 40 cm²
                <br />
                Surface Area = 32π cm² + 80π cm²
                <br />
                Surface Area = 112π cm²
                <br />
                Surface Area ≈ 351.86 cm²
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Find the area of a triangle with sides of lengths 5 cm, 12 cm, and 13 cm.</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Use Heron's formula to find the area.
                  <br />
                  Area = √(s(s-a)(s-b)(s-c)), where s = (a + b + c) / 2
                </p>
                <p>
                  <strong>Step 2:</strong> Calculate s.
                  <br />
                  s = (5 cm + 12 cm + 13 cm) / 2 = 30 cm / 2 = 15 cm
                </p>
                <p>
                  <strong>Step 3:</strong> Substitute into Heron's formula.
                  <br />
                  Area = √(15(15-5)(15-12)(15-13))
                  <br />
                  Area = √(15 × 10 × 3 × 2)
                  <br />
                  Area = √(900)
                  <br />
                  Area = 30 cm²
                </p>
                <p>
                  Note: This is a right triangle (5² + 12² = 13²), so we could also use the formula Area = (1/2) × base × height.
                  <br />
                  Area = (1/2) × 5 cm × 12 cm = 30 cm²
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>A circle has an area of 64π cm². What is its circumference?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the radius using the area formula.
                  <br />
                  Area = πr²
                  <br />
                  64π cm² = πr²
                  <br />
                  r² = 64 cm²
                  <br />
                  r = 8 cm
                </p>
                <p>
                  <strong>Step 2:</strong> Calculate the circumference using the radius.
                  <br />
                  Circumference = 2πr
                  <br />
                  Circumference = 2π × 8 cm
                  <br />
                  Circumference = 16π cm
                  <br />
                  Circumference ≈ 50.27 cm
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>Find the volume of a rectangular prism with a length of 5 m, a width of 3 m, and a height of 4 m.</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Solution:</strong>
                  <br />
                  Volume = length × width × height
                  <br />
                  Volume = 5 m × 3 m × 4 m
                  <br />
                  Volume = 60 m³
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've explored the basics of geometry, you might want to dive deeper into these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/coordinate-geometry">Coordinate Geometry</a> - Learn how to represent geometric shapes on a coordinate plane.
              </li>
              <li>
                <a href="/topics/transformations">Transformations</a> - Explore how shapes can be moved, resized, and rotated.
              </li>
              <li>
                <a href="/topics/trigonometry">Trigonometry</a> - Study the relationships between angles and sides of triangles.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Geometry;