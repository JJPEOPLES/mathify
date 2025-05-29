import React, { useEffect } from 'react';
import './TopicPage.css';

const AdditionSubtraction = () => {
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
          <h1 className="topic-title">Addition and Subtraction</h1>
          <p className="topic-description">
            Master the fundamental operations of addition and subtraction, the building blocks of mathematics.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Understanding Addition</h2>
          <div className="topic-content">
            <p>
              Addition is the process of combining two or more numbers to find their sum. It's one of the first 
              mathematical operations we learn and forms the foundation for many other concepts.
            </p>
            <p>
              The symbol for addition is the plus sign (+). When we add numbers, we're essentially counting how many 
              items we have in total.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                If you have 5 apples and someone gives you 3 more apples, how many apples do you have in total?
              </p>
              <p>
                <strong>5 + 3 = 8</strong>
              </p>
              <p>
                You now have 8 apples in total.
              </p>
            </div>
            
            <h3>Properties of Addition</h3>
            <p>Addition has several important properties:</p>
            <ul>
              <li>
                <strong>Commutative Property:</strong> The order of the numbers doesn't matter.
                <br />
                Example: 5 + 3 = 3 + 5
              </li>
              <li>
                <strong>Associative Property:</strong> How you group the numbers doesn't matter.
                <br />
                Example: (2 + 3) + 4 = 2 + (3 + 4)
              </li>
              <li>
                <strong>Identity Property:</strong> Adding zero to any number gives the same number.
                <br />
                Example: 7 + 0 = 7
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Understanding Subtraction</h2>
          <div className="topic-content">
            <p>
              Subtraction is the process of taking one number away from another to find their difference. It's the 
              opposite operation of addition.
            </p>
            <p>
              The symbol for subtraction is the minus sign (-). When we subtract, we're finding out how many items 
              remain after some are taken away.
            </p>
            <div className="example-box">
              <h3>Example:</h3>
              <p>
                If you have 10 candies and you eat 4 of them, how many candies do you have left?
              </p>
              <p>
                <strong>10 - 4 = 6</strong>
              </p>
              <p>
                You have 6 candies left.
              </p>
            </div>
            
            <h3>Properties of Subtraction</h3>
            <p>Unlike addition, subtraction does not have the commutative or associative properties:</p>
            <ul>
              <li>
                <strong>Not Commutative:</strong> The order of the numbers matters.
                <br />
                Example: 8 - 3 ≠ 3 - 8 (8 - 3 = 5, but 3 - 8 = -5)
              </li>
              <li>
                <strong>Not Associative:</strong> How you group the numbers matters.
                <br />
                Example: (10 - 5) - 2 ≠ 10 - (5 - 2) ((10 - 5) - 2 = 3, but 10 - (5 - 2) = 7)
              </li>
              <li>
                <strong>Identity Property:</strong> Subtracting zero from any number gives the same number.
                <br />
                Example: 7 - 0 = 7
              </li>
            </ul>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Addition and Subtraction with Larger Numbers</h2>
          <div className="topic-content">
            <p>
              When adding or subtracting larger numbers, it's helpful to use place value and work from right to left.
            </p>
            
            <h3>Addition with Carrying</h3>
            <div className="example-box">
              <h4>Example: 358 + 267</h4>
              <p>
                <strong>Step 1:</strong> Add the ones place: 8 + 7 = 15. Write down 5 and carry the 1 to the tens place.
                <br />
                <strong>Step 2:</strong> Add the tens place: 1 (carried) + 5 + 6 = 12. Write down 2 and carry the 1 to the hundreds place.
                <br />
                <strong>Step 3:</strong> Add the hundreds place: 1 (carried) + 3 + 2 = 6.
                <br />
                <strong>Result: 625</strong>
              </p>
            </div>
            
            <h3>Subtraction with Borrowing</h3>
            <div className="example-box">
              <h4>Example: 532 - 278</h4>
              <p>
                <strong>Step 1:</strong> Subtract the ones place: 2 - 8. Since 2 is smaller than 8, borrow 1 from the tens place. 
                Now we have 12 - 8 = 4.
                <br />
                <strong>Step 2:</strong> Subtract the tens place: 2 (after borrowing) - 7. Since 2 is smaller than 7, borrow 1 from the hundreds place. 
                Now we have 12 - 7 = 5.
                <br />
                <strong>Step 3:</strong> Subtract the hundreds place: 4 (after borrowing) - 2 = 2.
                <br />
                <strong>Result: 254</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Calculate: 347 + 589</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>347 + 589</strong>
                  <br />
                  <strong>Step 1:</strong> Add the ones place: 7 + 9 = 16. Write down 6 and carry the 1.
                  <br />
                  <strong>Step 2:</strong> Add the tens place: 1 (carried) + 4 + 8 = 13. Write down 3 and carry the 1.
                  <br />
                  <strong>Step 3:</strong> Add the hundreds place: 1 (carried) + 3 + 5 = 9.
                  <br />
                  <strong>Result: 936</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>Calculate: 823 - 457</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>823 - 457</strong>
                  <br />
                  <strong>Step 1:</strong> Subtract the ones place: 3 - 7. Since 3 is smaller than 7, borrow 1 from the tens place. 
                  Now we have 13 - 7 = 6.
                  <br />
                  <strong>Step 2:</strong> Subtract the tens place: 1 (after borrowing) - 5. Since 1 is smaller than 5, borrow 1 from the hundreds place. 
                  Now we have 11 - 5 = 6.
                  <br />
                  <strong>Step 3:</strong> Subtract the hundreds place: 7 (after borrowing) - 4 = 3.
                  <br />
                  <strong>Result: 366</strong>
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>If you have $245 and spend $178, how much money do you have left?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  To find how much money is left, we need to subtract the amount spent from the initial amount.
                  <br />
                  <strong>$245 - $178</strong>
                  <br />
                  <strong>Step 1:</strong> Subtract the ones place: 5 - 8. Since 5 is smaller than 8, borrow 1 from the tens place. 
                  Now we have 15 - 8 = 7.
                  <br />
                  <strong>Step 2:</strong> Subtract the tens place: 3 (after borrowing) - 7. Since 3 is smaller than 7, borrow 1 from the hundreds place. 
                  Now we have 13 - 7 = 6.
                  <br />
                  <strong>Step 3:</strong> Subtract the hundreds place: 1 (after borrowing) - 1 = 0.
                  <br />
                  <strong>Result: $67</strong>
                  <br />
                  You have $67 left.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've mastered addition and subtraction, you might want to explore these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/multiplication-division">Multiplication and Division</a> - Learn the next fundamental operations in mathematics.
              </li>
              <li>
                <a href="/topics/fractions">Fractions</a> - Understand how to work with parts of whole numbers.
              </li>
              <li>
                <a href="/topics/negative-numbers">Negative Numbers</a> - Explore numbers less than zero and how they work with addition and subtraction.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdditionSubtraction;