import React, { useEffect } from 'react';
import './TopicPage.css';

const MultiplicationDivision = () => {
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
          <h1 className="topic-title">Multiplication and Division</h1>
          <p className="topic-description">
            Master the fundamental operations of multiplication and division, essential skills for advanced mathematics.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Understanding Multiplication</h2>
          <div className="topic-content">
            <p>
              Multiplication is a mathematical operation that represents repeated addition. It's a faster way to add the same number multiple times.
            </p>
            <p>
              The symbol for multiplication is the times sign (×) or an asterisk (*). When we multiply numbers, we're finding the total when one number is added to itself a certain number of times.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                If you have 4 boxes, and each box contains 3 chocolates, how many chocolates do you have in total?
              </p>
              <p>
                <strong>4 × 3 = 12</strong>
              </p>
              <p>
                This is the same as: 3 + 3 + 3 + 3 = 12
              </p>
              <p>
                You have 12 chocolates in total.
              </p>
            </div>
            
            <h3>Properties of Multiplication</h3>
            <p>Multiplication has several important properties:</p>
            <ul>
              <li>
                <strong>Commutative Property:</strong> The order of the numbers doesn't matter.
                <br />
                Example: 5 × 3 = 3 × 5
              </li>
              <li>
                <strong>Associative Property:</strong> How you group the numbers doesn't matter.
                <br />
                Example: (2 × 3) × 4 = 2 × (3 × 4)
              </li>
              <li>
                <strong>Identity Property:</strong> Multiplying any number by 1 gives the same number.
                <br />
                Example: 7 × 1 = 7
              </li>
              <li>
                <strong>Zero Property:</strong> Multiplying any number by 0 gives 0.
                <br />
                Example: 7 × 0 = 0
              </li>
              <li>
                <strong>Distributive Property:</strong> Multiplication distributes over addition.
                <br />
                Example: 3 × (4 + 2) = (3 × 4) + (3 × 2)
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Understanding Division</h2>
          <div className="topic-content">
            <p>
              Division is the process of splitting a number into equal parts. It's the opposite operation of multiplication.
            </p>
            <p>
              The symbol for division is the division sign (÷) or a forward slash (/). When we divide, we're finding out how many times one number goes into another, or how much each person gets when we share equally.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                If you have 15 candies and want to share them equally among 3 friends, how many candies will each friend get?
              </p>
              <p>
                <strong>15 ÷ 3 = 5</strong>
              </p>
              <p>
                Each friend will get 5 candies.
              </p>
            </div>
            
            <h3>Properties of Division</h3>
            <p>Unlike multiplication, division does not have the commutative or associative properties:</p>
            <ul>
              <li>
                <strong>Not Commutative:</strong> The order of the numbers matters.
                <br />
                Example: 10 ÷ 2 ≠ 2 ÷ 10 (10 ÷ 2 = 5, but 2 ÷ 10 = 0.2)
              </li>
              <li>
                <strong>Not Associative:</strong> How you group the numbers matters.
                <br />
                Example: (20 ÷ 4) ÷ 2 ≠ 20 ÷ (4 ÷ 2) ((20 ÷ 4) ÷ 2 = 2.5, but 20 ÷ (4 ÷ 2) = 10)
              </li>
              <li>
                <strong>Identity Property:</strong> Dividing any number by 1 gives the same number.
                <br />
                Example: 7 ÷ 1 = 7
              </li>
              <li>
                <strong>Zero Property:</strong> Zero divided by any non-zero number equals zero.
                <br />
                Example: 0 ÷ 7 = 0
              </li>
              <li>
                <strong>Undefined:</strong> Division by zero is undefined.
                <br />
                Example: 7 ÷ 0 is undefined
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Multiplication with Larger Numbers</h2>
          <div className="topic-content">
            <p>
              When multiplying larger numbers, it's helpful to use the standard algorithm, working from right to left.
            </p>
            
            <div className="example-box">
              <h4>Example: 347 × 25</h4>
              <p>
                <strong>Step 1:</strong> Multiply 347 by 5 (the ones digit of 25).
                <br />
                5 × 7 = 35, write down 5 and carry the 3.
                <br />
                5 × 4 + 3 (carried) = 23, write down 3 and carry the 2.
                <br />
                5 × 3 + 2 (carried) = 17, write down 17.
                <br />
                So, 347 × 5 = 1,735.
              </p>
              <p>
                <strong>Step 2:</strong> Multiply 347 by 2 (the tens digit of 25), and shift one place to the left.
                <br />
                2 × 7 = 14, write down 4 and carry the 1.
                <br />
                2 × 4 + 1 (carried) = 9, write down 9.
                <br />
                2 × 3 = 6, write down 6.
                <br />
                So, 347 × 20 = 6,940.
              </p>
              <p>
                <strong>Step 3:</strong> Add the partial products.
                <br />
                1,735 + 6,940 = 8,675.
                <br />
                <strong>Result: 347 × 25 = 8,675</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Long Division</h2>
          <div className="topic-content">
            <p>
              Long division is a method for dividing large numbers, breaking the division into simpler steps.
            </p>
            
            <div className="example-box">
              <h4>Example: 825 ÷ 5</h4>
              <p>
                <strong>Step 1:</strong> Divide the first digit (8) by the divisor (5).
                <br />
                8 ÷ 5 = 1 with a remainder of 3.
                <br />
                Write 1 above the 8, and carry the remainder 3 to the next digit.
              </p>
              <p>
                <strong>Step 2:</strong> Combine the remainder with the next digit: 3 and 2 make 32.
                <br />
                32 ÷ 5 = 6 with a remainder of 2.
                <br />
                Write 6 above the 2, and carry the remainder 2 to the next digit.
              </p>
              <p>
                <strong>Step 3:</strong> Combine the remainder with the next digit: 2 and 5 make 25.
                <br />
                25 ÷ 5 = 5 with a remainder of 0.
                <br />
                Write 5 above the 5.
              </p>
              <p>
                <strong>Result: 825 ÷ 5 = 165</strong>
              </p>
            </div>
            
            <div className="example-box">
              <h4>Example with Remainder: 827 ÷ 5</h4>
              <p>
                <strong>Step 1:</strong> Divide the first digit (8) by the divisor (5).
                <br />
                8 ÷ 5 = 1 with a remainder of 3.
                <br />
                Write 1 above the 8, and carry the remainder 3 to the next digit.
              </p>
              <p>
                <strong>Step 2:</strong> Combine the remainder with the next digit: 3 and 2 make 32.
                <br />
                32 ÷ 5 = 6 with a remainder of 2.
                <br />
                Write 6 above the 2, and carry the remainder 2 to the next digit.
              </p>
              <p>
                <strong>Step 3:</strong> Combine the remainder with the next digit: 2 and 7 make 27.
                <br />
                27 ÷ 5 = 5 with a remainder of 2.
                <br />
                Write 5 above the 7, and note the remainder of 2.
              </p>
              <p>
                <strong>Result: 827 ÷ 5 = 165 remainder 2</strong>
                <br />
                This can also be written as 165 2/5 or 165.4.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Calculate: 24 × 16</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>24 × 16</strong>
                  <br />
                  <strong>Method 1: Standard Algorithm</strong>
                  <br />
                  <strong>Step 1:</strong> Multiply 24 by 6 (the ones digit of 16).
                  <br />
                  6 × 4 = 24, write down 4 and carry the 2.
                  <br />
                  6 × 2 + 2 (carried) = 14, write down 14.
                  <br />
                  So, 24 × 6 = 144.
                  <br />
                  <strong>Step 2:</strong> Multiply 24 by 1 (the tens digit of 16), and shift one place to the left.
                  <br />
                  1 × 4 = 4, write down 4.
                  <br />
                  1 × 2 = 2, write down 2.
                  <br />
                  So, 24 × 10 = 240.
                  <br />
                  <strong>Step 3:</strong> Add the partial products.
                  <br />
                  144 + 240 = 384.
                  <br />
                  <strong>Result: 24 × 16 = 384</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Calculate: 728 ÷ 8</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>728 ÷ 8</strong>
                  <br />
                  <strong>Step 1:</strong> Divide the first digit (7) by the divisor (8).
                  <br />
                  7 is less than 8, so we need to combine it with the next digit.
                  <br />
                  7 and 2 make 72.
                  <br />
                  72 ÷ 8 = 9 with a remainder of 0.
                  <br />
                  Write 9 above the 2.
                  <br />
                  <strong>Step 2:</strong> Bring down the next digit: 8.
                  <br />
                  8 ÷ 8 = 1 with a remainder of 0.
                  <br />
                  Write 1 above the 8.
                  <br />
                  <strong>Result: 728 ÷ 8 = 91</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>A bakery makes 156 cookies. If they package them in boxes of 12, how many full boxes can they make, and how many cookies will be left over?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  To find how many full boxes they can make, we need to divide the total number of cookies by the number of cookies per box.
                  <br />
                  <strong>156 ÷ 12</strong>
                  <br />
                  <strong>Step 1:</strong> Divide the first digit (1) by the divisor (12).
                  <br />
                  1 is less than 12, so we need to combine it with the next digit.
                  <br />
                  1 and 5 make 15.
                  <br />
                  15 is greater than 12, so we can divide.
                  <br />
                  15 ÷ 12 = 1 with a remainder of 3.
                  <br />
                  Write 1 above the 5, and carry the remainder 3 to the next digit.
                  <br />
                  <strong>Step 2:</strong> Combine the remainder with the next digit: 3 and 6 make 36.
                  <br />
                  36 ÷ 12 = 3 with a remainder of 0.
                  <br />
                  Write 3 above the 6.
                  <br />
                  <strong>Result: 156 ÷ 12 = 13 with a remainder of 0</strong>
                  <br />
                  The bakery can make 13 full boxes with 0 cookies left over.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered multiplication and division, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/fractions">Fractions</a> - Learn how to multiply and divide fractions.
              </li>
              <li>
                <a href="/topics/decimals">Decimals</a> - Understand how to work with decimal numbers.
              </li>
              <li>
                <a href="/topics/exponents">Exponents</a> - Explore repeated multiplication and powers.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MultiplicationDivision;