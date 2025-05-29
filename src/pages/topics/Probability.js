import React, { useEffect } from 'react';
import './TopicPage.css';

const Probability = () => {
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
          <h1 className="topic-title">Probability</h1>
          <p className="topic-description">
            Learn how to calculate the likelihood of events occurring and make predictions based on data.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Introduction to Probability</h2>
          <div className="topic-content">
            <p>
              Probability is the branch of mathematics that deals with the likelihood of events occurring. It provides a way to quantify uncertainty and make predictions based on available information.
            </p>
            <p>
              Probability is expressed as a number between 0 and 1 (or as a percentage between 0% and 100%):
            </p>
            <ul>
              <li>A probability of 0 means an event is impossible.</li>
              <li>A probability of 1 means an event is certain.</li>
              <li>A probability of 0.5 (or 50%) means an event has an equal chance of occurring or not occurring.</li>
            </ul>
            <div className="example-box">
              <h3>Key Probability Terms:</h3>
              <ul>
                <li><strong>Experiment:</strong> A process that leads to one of several possible outcomes.</li>
                <li><strong>Outcome:</strong> A possible result of an experiment.</li>
                <li><strong>Sample Space (S):</strong> The set of all possible outcomes of an experiment.</li>
                <li><strong>Event (E):</strong> A subset of the sample space, or a collection of outcomes.</li>
                <li><strong>Probability of an Event:</strong> The measure of the likelihood that the event will occur.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Basic Probability Concepts</h2>
          <div className="topic-content">
            <h3>Classical (Theoretical) Probability:</h3>
            <p>
              When all outcomes are equally likely, the probability of an event E is:
            </p>
            <p className="equation">
              P(E) = Number of favorable outcomes / Total number of possible outcomes
            </p>
            <div className="example-box">
              <h3>Example: Coin Toss</h3>
              <p>
                When tossing a fair coin, what is the probability of getting heads?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Sample Space (S) = {Heads, Tails}
                <br />
                Event (E) = {Heads}
                <br />
                P(E) = Number of favorable outcomes / Total number of possible outcomes = 1 / 2 = 0.5 or 50%
              </p>
            </div>
            
            <h3>Empirical (Experimental) Probability:</h3>
            <p>
              Based on observations or experiments, the probability of an event E is:
            </p>
            <p className="equation">
              P(E) = Number of times E occurred / Total number of trials
            </p>
            <div className="example-box">
              <h3>Example: Basketball Free Throws</h3>
              <p>
                A basketball player has made 80 out of 100 free throw attempts. What is the empirical probability that the player will make the next free throw?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                P(making a free throw) = Number of successful attempts / Total number of attempts = 80 / 100 = 0.8 or 80%
              </p>
            </div>
            
            <h3>Subjective Probability:</h3>
            <p>
              Based on personal judgment, experience, or belief about the likelihood of an event.
            </p>
            <div className="example-box">
              <h3>Example: Weather Forecast</h3>
              <p>
                A meteorologist says there is a 70% chance of rain tomorrow based on weather patterns and historical data.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Probability Rules</h2>
          <div className="topic-content">
            <h3>Basic Probability Rules:</h3>
            <ul>
              <li><strong>Rule 1:</strong> For any event E, 0 ≤ P(E) ≤ 1</li>
              <li><strong>Rule 2:</strong> The sum of probabilities of all possible outcomes in the sample space is 1: P(S) = 1</li>
              <li><strong>Rule 3:</strong> If E is an impossible event (empty set), then P(E) = 0</li>
              <li><strong>Rule 4:</strong> If E is a certain event (the entire sample space), then P(E) = 1</li>
            </ul>
            
            <h3>Complement Rule:</h3>
            <p>
              The complement of an event E, denoted by E' or E<sup>c</sup>, is the set of all outcomes in the sample space that are not in E. The probability of the complement is:
            </p>
            <p className="equation">
              P(E') = 1 - P(E)
            </p>
            <div className="example-box">
              <h3>Example: Complement Rule</h3>
              <p>
                If the probability of rain tomorrow is 0.3, what is the probability that it will not rain?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                P(no rain) = 1 - P(rain) = 1 - 0.3 = 0.7 or 70%
              </p>
            </div>
            
            <h3>Addition Rule:</h3>
            <p>
              For any two events A and B:
            </p>
            <p className="equation">
              P(A or B) = P(A) + P(B) - P(A and B)
            </p>
            <p>
              If A and B are mutually exclusive (they cannot occur simultaneously), then P(A and B) = 0, and:
            </p>
            <p className="equation">
              P(A or B) = P(A) + P(B)
            </p>
            <div className="example-box">
              <h3>Example: Addition Rule</h3>
              <p>
                In a standard deck of 52 cards, what is the probability of drawing a heart or a king?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                P(heart) = 13 / 52 = 1/4
                <br />
                P(king) = 4 / 52 = 1/13
                <br />
                P(heart and king) = 1 / 52 (there is only one king of hearts)
                <br />
                P(heart or king) = P(heart) + P(king) - P(heart and king) = 1/4 + 1/13 - 1/52 = 13/52 + 4/52 - 1/52 = 16/52 = 4/13 ≈ 0.308 or 30.8%
              </p>
            </div>
            
            <h3>Multiplication Rule:</h3>
            <p>
              For any two events A and B:
            </p>
            <p className="equation">
              P(A and B) = P(A) × P(B|A)
            </p>
            <p>
              Where P(B|A) is the conditional probability of B given that A has occurred.
            </p>
            <p>
              If A and B are independent (the occurrence of one does not affect the probability of the other), then P(B|A) = P(B), and:
            </p>
            <p className="equation">
              P(A and B) = P(A) × P(B)
            </p>
            <div className="example-box">
              <h3>Example: Multiplication Rule</h3>
              <p>
                What is the probability of getting two heads in a row when tossing a fair coin twice?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Since the coin tosses are independent events:
                <br />
                P(two heads) = P(head on first toss) × P(head on second toss) = 1/2 × 1/2 = 1/4 or 25%
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Conditional Probability</h2>
          <div className="topic-content">
            <p>
              Conditional probability is the probability of an event occurring given that another event has already occurred. It is denoted by P(B|A), which reads "the probability of B given A."
            </p>
            <p className="equation">
              P(B|A) = P(A and B) / P(A)
            </p>
            <div className="example-box">
              <h3>Example: Conditional Probability</h3>
              <p>
                In a class of 30 students, 12 are taking both mathematics and physics, 18 are taking mathematics, and 15 are taking physics. If a student is selected at random, what is the probability that the student is taking physics given that they are taking mathematics?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Let M = the event that the student is taking mathematics
                <br />
                Let P = the event that the student is taking physics
                <br />
                We want to find P(P|M)
                <br />
                P(M) = 18 / 30 = 3/5
                <br />
                P(M and P) = 12 / 30 = 2/5
                <br />
                P(P|M) = P(M and P) / P(M) = (2/5) / (3/5) = 2/3 ≈ 0.667 or 66.7%
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Independence</h2>
          <div className="topic-content">
            <p>
              Two events A and B are independent if the occurrence of one does not affect the probability of the other. Mathematically, A and B are independent if and only if:
            </p>
            <p className="equation">
              P(A and B) = P(A) × P(B)
            </p>
            <p>
              Equivalently, A and B are independent if and only if:
            </p>
            <p className="equation">
              P(B|A) = P(B) or P(A|B) = P(A)
            </p>
            <div className="example-box">
              <h3>Example: Testing for Independence</h3>
              <p>
                A card is drawn from a standard deck. Let A be the event that the card is a heart, and let B be the event that the card is a king. Are A and B independent?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                P(A) = 13 / 52 = 1/4
                <br />
                P(B) = 4 / 52 = 1/13
                <br />
                P(A and B) = 1 / 52 (there is only one king of hearts)
                <br />
                If A and B are independent, then P(A and B) = P(A) × P(B)
                <br />
                P(A) × P(B) = (1/4) × (1/13) = 1/52
                <br />
                Since P(A and B) = P(A) × P(B), events A and B are independent.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Bayes' Theorem</h2>
          <div className="topic-content">
            <p>
              Bayes' theorem is a formula for calculating conditional probabilities. It allows us to update our beliefs about an event based on new evidence.
            </p>
            <p className="equation">
              P(A|B) = [P(B|A) × P(A)] / P(B)
            </p>
            <p>
              An alternative form of Bayes' theorem uses the law of total probability:
            </p>
            <p className="equation">
              P(A|B) = [P(B|A) × P(A)] / [P(B|A) × P(A) + P(B|A') × P(A')]
            </p>
            <div className="example-box">
              <h3>Example: Bayes' Theorem</h3>
              <p>
                A medical test for a disease has the following characteristics:
                <br />
                - The test correctly identifies 95% of people who have the disease (sensitivity).
                <br />
                - The test correctly identifies 90% of people who do not have the disease (specificity).
                <br />
                - 2% of the population has the disease.
                <br />
                If a person tests positive, what is the probability that they actually have the disease?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Let D = the event that the person has the disease
                <br />
                Let T = the event that the person tests positive
                <br />
                We want to find P(D|T)
                <br />
                Given:
                <br />
                P(T|D) = 0.95 (sensitivity)
                <br />
                P(T|D') = 1 - P(T'|D') = 1 - 0.90 = 0.10 (false positive rate)
                <br />
                P(D) = 0.02 (prevalence)
                <br />
                Using Bayes' theorem:
                <br />
                P(D|T) = [P(T|D) × P(D)] / [P(T|D) × P(D) + P(T|D') × P(D')]
                <br />
                P(D|T) = [0.95 × 0.02] / [0.95 × 0.02 + 0.10 × 0.98]
                <br />
                P(D|T) = 0.019 / (0.019 + 0.098)
                <br />
                P(D|T) = 0.019 / 0.117
                <br />
                P(D|T) ≈ 0.162 or 16.2%
              </p>
              <p>
                This example illustrates the "base rate fallacy" - even though the test is quite accurate, the probability that a person who tests positive actually has the disease is relatively low because the disease is rare in the population.
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Counting Principles</h2>
          <div className="topic-content">
            <p>
              Counting principles are used to determine the number of possible outcomes in a sample space, which is essential for calculating probabilities.
            </p>
            <h3>Multiplication Principle:</h3>
            <p>
              If a task consists of a sequence of choices, where there are n₁ ways to make the first choice, n₂ ways to make the second choice, and so on, then the total number of ways to complete the task is n₁ × n₂ × ... × nₖ.
            </p>
            <div className="example-box">
              <h3>Example: Multiplication Principle</h3>
              <p>
                A restaurant offers 4 appetizers, 6 main courses, and 3 desserts. How many different three-course meals can be created?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                Number of possible meals = Number of appetizers × Number of main courses × Number of desserts
                <br />
                Number of possible meals = 4 × 6 × 3 = 72
              </p>
            </div>
            
            <h3>Permutations:</h3>
            <p>
              A permutation is an arrangement of objects in a specific order. The number of permutations of n distinct objects is:
            </p>
            <p className="equation">
              P(n) = n!
            </p>
            <p>
              The number of permutations of n distinct objects taken r at a time is:
            </p>
            <p className="equation">
              P(n,r) = n! / (n-r)!
            </p>
            <div className="example-box">
              <h3>Example: Permutations</h3>
              <p>
                In how many ways can 5 different books be arranged on a shelf?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                This is a permutation of 5 objects.
                <br />
                P(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120
              </p>
            </div>
            <div className="example-box">
              <h3>Example: Permutations (taken r at a time)</h3>
              <p>
                In how many ways can a president, vice president, and secretary be selected from a club of 10 members?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                This is a permutation of 10 objects taken 3 at a time.
                <br />
                P(10,3) = 10! / (10-3)! = 10! / 7! = 10 × 9 × 8 = 720
              </p>
            </div>
            
            <h3>Combinations:</h3>
            <p>
              A combination is a selection of objects without regard to order. The number of combinations of n distinct objects taken r at a time is:
            </p>
            <p className="equation">
              C(n,r) = n! / (r! × (n-r)!)
            </p>
            <div className="example-box">
              <h3>Example: Combinations</h3>
              <p>
                In how many ways can a committee of 3 people be formed from a group of 8 people?
              </p>
              <p>
                <strong>Solution:</strong>
                <br />
                This is a combination of 8 objects taken 3 at a time.
                <br />
                C(8,3) = 8! / (3! × (8-3)!) = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Probability Distributions</h2>
          <div className="topic-content">
            <p>
              A probability distribution is a function that describes the likelihood of obtaining the possible values of a random variable.
            </p>
            <h3>Discrete Probability Distributions:</h3>
            <p>
              For a discrete random variable X, the probability distribution assigns a probability to each possible value of X. The sum of all these probabilities must equal 1.
            </p>
            <div className="example-box">
              <h3>Example: Discrete Probability Distribution</h3>
              <p>
                A fair six-sided die is rolled. Let X be the number that appears on the die. The probability distribution of X is:
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>x</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>P(X = x)</td>
                    <td>1/6</td>
                    <td>1/6</td>
                    <td>1/6</td>
                    <td>1/6</td>
                    <td>1/6</td>
                    <td>1/6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>Continuous Probability Distributions:</h3>
            <p>
              For a continuous random variable X, the probability distribution is described by a probability density function (PDF). The probability that X falls within a specific interval is the area under the PDF over that interval.
            </p>
            <div className="example-box">
              <h3>Example: Continuous Probability Distribution</h3>
              <p>
                The normal distribution is a common continuous probability distribution. For a normally distributed random variable X with mean μ and standard deviation σ, the probability density function is:
              </p>
              <p className="equation">
                f(x) = (1 / (σ√(2π))) × e^(-(x-μ)²/(2σ²))
              </p>
            </div>
            
            <h3>Common Discrete Probability Distributions:</h3>
            <ul>
              <li><strong>Binomial Distribution:</strong> Models the number of successes in a fixed number of independent trials, each with the same probability of success.</li>
              <li><strong>Poisson Distribution:</strong> Models the number of events occurring in a fixed interval of time or space, assuming these events occur independently and at a constant average rate.</li>
              <li><strong>Geometric Distribution:</strong> Models the number of trials needed to achieve the first success in a sequence of independent trials.</li>
            </ul>
            
            <h3>Common Continuous Probability Distributions:</h3>
            <ul>
              <li><strong>Normal Distribution:</strong> A symmetric, bell-shaped distribution that is fully described by its mean and standard deviation.</li>
              <li><strong>Uniform Distribution:</strong> A distribution where all outcomes in a range are equally likely.</li>
              <li><strong>Exponential Distribution:</strong> Models the time between events in a Poisson process.</li>
            </ul>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>A box contains 5 red balls, 3 blue balls, and 2 green balls. Two balls are drawn without replacement. What is the probability that both balls are red?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the total number of balls.
                  <br />
                  Total = 5 + 3 + 2 = 10 balls
                </p>
                <p>
                  <strong>Step 2:</strong> Find the probability of drawing a red ball on the first draw.
                  <br />
                  P(first ball is red) = 5 / 10 = 1/2
                </p>
                <p>
                  <strong>Step 3:</strong> Find the probability of drawing a red ball on the second draw, given that the first ball was red.
                  <br />
                  After drawing a red ball, there are 4 red balls left out of 9 total balls.
                  <br />
                  P(second ball is red | first ball was red) = 4 / 9
                </p>
                <p>
                  <strong>Step 4:</strong> Use the multiplication rule to find the probability of both events occurring.
                  <br />
                  P(both balls are red) = P(first ball is red) × P(second ball is red | first ball was red)
                  <br />
                  P(both balls are red) = (1/2) × (4/9) = 4/18 = 2/9 ≈ 0.222 or 22.2%
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>A fair coin is tossed 4 times. What is the probability of getting exactly 3 heads?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Identify this as a binomial probability problem.
                  <br />
                  We have n = 4 independent trials (coin tosses), each with probability p = 1/2 of success (getting heads).
                  <br />
                  We want to find the probability of exactly k = 3 successes.
                </p>
                <p>
                  <strong>Step 2:</strong> Use the binomial probability formula:
                  <br />
                  P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
                  <br />
                  P(X = 3) = C(4,3) × (1/2)^3 × (1/2)^(4-3)
                  <br />
                  P(X = 3) = C(4,3) × (1/2)^3 × (1/2)^1
                  <br />
                  P(X = 3) = C(4,3) × (1/2)^4
                </p>
                <p>
                  <strong>Step 3:</strong> Calculate C(4,3).
                  <br />
                  C(4,3) = 4! / (3! × (4-3)!) = 4! / (3! × 1!) = 4 / 1 = 4
                </p>
                <p>
                  <strong>Step 4:</strong> Calculate the final probability.
                  <br />
                  P(X = 3) = 4 × (1/2)^4 = 4 × (1/16) = 4/16 = 1/4 = 0.25 or 25%
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>In a certain city, 60% of the days are sunny. What is the probability that, in a randomly selected 5-day period, at least 3 days will be sunny?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Identify this as a binomial probability problem.
                  <br />
                  We have n = 5 independent trials (days), each with probability p = 0.6 of success (being sunny).
                  <br />
                  We want to find the probability of at least k = 3 successes.
                </p>
                <p>
                  <strong>Step 2:</strong> The probability of at least 3 sunny days is the sum of the probabilities of exactly 3, exactly 4, and exactly 5 sunny days.
                  <br />
                  P(X ≥ 3) = P(X = 3) + P(X = 4) + P(X = 5)
                </p>
                <p>
                  <strong>Step 3:</strong> Calculate each probability using the binomial probability formula:
                  <br />
                  P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
                </p>
                <p>
                  <strong>Step 4:</strong> Calculate P(X = 3).
                  <br />
                  P(X = 3) = C(5,3) × (0.6)^3 × (0.4)^2
                  <br />
                  C(5,3) = 5! / (3! × 2!) = 10
                  <br />
                  P(X = 3) = 10 × (0.6)^3 × (0.4)^2 = 10 × 0.216 × 0.16 = 0.3456
                </p>
                <p>
                  <strong>Step 5:</strong> Calculate P(X = 4).
                  <br />
                  P(X = 4) = C(5,4) × (0.6)^4 × (0.4)^1
                  <br />
                  C(5,4) = 5! / (4! × 1!) = 5
                  <br />
                  P(X = 4) = 5 × (0.6)^4 × (0.4)^1 = 5 × 0.1296 × 0.4 = 0.2592
                </p>
                <p>
                  <strong>Step 6:</strong> Calculate P(X = 5).
                  <br />
                  P(X = 5) = C(5,5) × (0.6)^5 × (0.4)^0
                  <br />
                  C(5,5) = 5! / (5! × 0!) = 1
                  <br />
                  P(X = 5) = 1 × (0.6)^5 × 1 = 0.07776
                </p>
                <p>
                  <strong>Step 7:</strong> Calculate the final probability.
                  <br />
                  P(X ≥ 3) = 0.3456 + 0.2592 + 0.07776 = 0.68256 ≈ 0.683 or 68.3%
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've explored the basics of probability, you might want to dive deeper into these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/statistics">Statistics</a> - Learn how to analyze and interpret data using statistical methods.
              </li>
              <li>
                <a href="/topics/probability-distributions">Probability Distributions</a> - Explore different types of probability distributions and their applications.
              </li>
              <li>
                <a href="/topics/combinatorics">Combinatorics</a> - Study advanced counting techniques and their applications in probability.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Probability;