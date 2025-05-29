import React, { useEffect } from 'react';
import './TopicPage.css';

const Statistics = () => {
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
          <h1 className="topic-title">Statistics</h1>
          <p className="topic-description">
            Learn how to collect, analyze, interpret, and present data to discover patterns and trends.
          </p>
        </header>

        <section className="topic-section">
          <h2 className="section-title">Introduction to Statistics</h2>
          <div className="topic-content">
            <p>
              Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It helps us make sense of large amounts of information and draw meaningful conclusions from data.
            </p>
            <p>
              There are two main branches of statistics:
            </p>
            <ul>
              <li><strong>Descriptive Statistics:</strong> Methods for summarizing and describing data through numerical calculations, tables, and graphs.</li>
              <li><strong>Inferential Statistics:</strong> Methods for using sample data to make generalizations or predictions about a larger population.</li>
            </ul>
            <div className="example-box">
              <h3>Key Statistical Terms:</h3>
              <ul>
                <li><strong>Population:</strong> The entire group of individuals or objects about which information is desired.</li>
                <li><strong>Sample:</strong> A subset of the population selected for study.</li>
                <li><strong>Variable:</strong> A characteristic or attribute that can be measured or categorized.</li>
                <li><strong>Data:</strong> The actual values or observations collected for variables.</li>
                <li><strong>Parameter:</strong> A numerical value that describes a characteristic of a population.</li>
                <li><strong>Statistic:</strong> A numerical value that describes a characteristic of a sample.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Types of Data</h2>
          <div className="topic-content">
            <p>
              Understanding the type of data you're working with is crucial for choosing appropriate statistical methods.
            </p>
            <h3>Qualitative vs. Quantitative Data:</h3>
            <ul>
              <li><strong>Qualitative (Categorical) Data:</strong> Data that can be sorted into categories based on some characteristic or attribute.
                <ul>
                  <li><strong>Nominal:</strong> Categories with no inherent order (e.g., colors, gender, blood types).</li>
                  <li><strong>Ordinal:</strong> Categories with a natural order (e.g., education levels, satisfaction ratings).</li>
                </ul>
              </li>
              <li><strong>Quantitative (Numerical) Data:</strong> Data that represent amounts or quantities that can be measured.
                <ul>
                  <li><strong>Discrete:</strong> Data that can only take specific values, usually counts (e.g., number of children, number of cars).</li>
                  <li><strong>Continuous:</strong> Data that can take any value within a range (e.g., height, weight, time).</li>
                </ul>
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Identifying Data Types</h3>
              <p>
                Classify each of the following as qualitative or quantitative, and identify the specific type:
              </p>
              <ul>
                <li>Number of students in a class: <strong>Quantitative (Discrete)</strong></li>
                <li>Colors of cars in a parking lot: <strong>Qualitative (Nominal)</strong></li>
                <li>Time to complete a marathon: <strong>Quantitative (Continuous)</strong></li>
                <li>Customer satisfaction rating (1-5 stars): <strong>Qualitative (Ordinal)</strong></li>
                <li>Temperature in degrees Celsius: <strong>Quantitative (Continuous)</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Data Collection Methods</h2>
          <div className="topic-content">
            <p>
              The way data is collected can significantly impact the validity and reliability of statistical analyses.
            </p>
            <h3>Common Data Collection Methods:</h3>
            <ul>
              <li><strong>Surveys and Questionnaires:</strong> Gathering information by asking questions to a group of individuals.</li>
              <li><strong>Observations:</strong> Directly watching and recording behaviors or events.</li>
              <li><strong>Experiments:</strong> Manipulating variables under controlled conditions to observe their effects.</li>
              <li><strong>Existing Data Sources:</strong> Using data that has already been collected for other purposes.</li>
            </ul>
            <h3>Sampling Methods:</h3>
            <ul>
              <li><strong>Random Sampling:</strong> Each member of the population has an equal chance of being selected.</li>
              <li><strong>Stratified Sampling:</strong> The population is divided into subgroups (strata), and samples are taken from each stratum.</li>
              <li><strong>Cluster Sampling:</strong> The population is divided into clusters, and entire clusters are randomly selected.</li>
              <li><strong>Systematic Sampling:</strong> Selecting every kth member from the population after a random start.</li>
              <li><strong>Convenience Sampling:</strong> Selecting readily available individuals (not random).</li>
            </ul>
            <div className="example-box">
              <h3>Example: Sampling Methods</h3>
              <p>
                A researcher wants to study the opinions of students at a university with 20,000 students.
              </p>
              <ul>
                <li><strong>Random Sampling:</strong> Using a computer to randomly select 500 students from the entire student body.</li>
                <li><strong>Stratified Sampling:</strong> Dividing students by year (freshman, sophomore, junior, senior) and randomly selecting 125 students from each year.</li>
                <li><strong>Cluster Sampling:</strong> Randomly selecting 20 classes from all classes offered and surveying all students in those classes.</li>
                <li><strong>Systematic Sampling:</strong> Arranging all 20,000 students alphabetically and selecting every 40th student (20,000 ÷ 500 = 40).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Organizing and Displaying Data</h2>
          <div className="topic-content">
            <p>
              Organizing and visualizing data helps identify patterns, trends, and outliers.
            </p>
            <h3>Tables for Organizing Data:</h3>
            <ul>
              <li><strong>Frequency Tables:</strong> Show how often each value or category occurs.</li>
              <li><strong>Relative Frequency Tables:</strong> Show the proportion or percentage of each value or category.</li>
              <li><strong>Cumulative Frequency Tables:</strong> Show the running total of frequencies.</li>
              <li><strong>Two-way Tables:</strong> Show the relationship between two categorical variables.</li>
            </ul>
            <h3>Graphs for Displaying Data:</h3>
            <ul>
              <li><strong>For Categorical Data:</strong>
                <ul>
                  <li>Bar Charts</li>
                  <li>Pie Charts</li>
                  <li>Pareto Charts</li>
                </ul>
              </li>
              <li><strong>For Numerical Data:</strong>
                <ul>
                  <li>Histograms</li>
                  <li>Stem-and-Leaf Plots</li>
                  <li>Box Plots (Box-and-Whisker Plots)</li>
                  <li>Scatter Plots (for two variables)</li>
                  <li>Line Graphs (for time series data)</li>
                </ul>
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Creating a Frequency Table</h3>
              <p>
                The following data represents the number of pets owned by 20 different families: 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 2, 1, 0, 2, 1, 2, 3, 1, 2
              </p>
              <p>
                <strong>Frequency Table:</strong>
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Number of Pets</th>
                    <th>Frequency</th>
                    <th>Relative Frequency</th>
                    <th>Cumulative Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>3</td>
                    <td>0.15 (15%)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>6</td>
                    <td>0.30 (30%)</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>7</td>
                    <td>0.35 (35%)</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>0.15 (15%)</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td>0.05 (5%)</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Measures of Central Tendency</h2>
          <div className="topic-content">
            <p>
              Measures of central tendency are values that represent the "center" or "middle" of a data set.
            </p>
            <h3>Common Measures of Central Tendency:</h3>
            <ul>
              <li><strong>Mean (Average):</strong> The sum of all values divided by the number of values.
                <br />
                Mean = (x₁ + x₂ + ... + xₙ) / n = Σx / n
              </li>
              <li><strong>Median:</strong> The middle value when the data is arranged in order.
                <ul>
                  <li>For an odd number of values: The middle value.</li>
                  <li>For an even number of values: The average of the two middle values.</li>
                </ul>
              </li>
              <li><strong>Mode:</strong> The value that occurs most frequently.
                <ul>
                  <li>A data set can have no mode, one mode (unimodal), or multiple modes (bimodal, multimodal).</li>
                </ul>
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Finding Measures of Central Tendency</h3>
              <p>
                Find the mean, median, and mode for the following data set: 4, 7, 2, 9, 4, 11, 7, 4, 8
              </p>
              <p>
                <strong>Mean:</strong>
                <br />
                Mean = (4 + 7 + 2 + 9 + 4 + 11 + 7 + 4 + 8) / 9 = 56 / 9 ≈ 6.22
              </p>
              <p>
                <strong>Median:</strong>
                <br />
                First, arrange the data in order: 2, 4, 4, 4, 7, 7, 8, 9, 11
                <br />
                Since there are 9 values (odd), the median is the 5th value: 7
              </p>
              <p>
                <strong>Mode:</strong>
                <br />
                The value 4 appears three times, which is more than any other value.
                <br />
                Mode = 4
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Measures of Dispersion</h2>
          <div className="topic-content">
            <p>
              Measures of dispersion describe how spread out the data is from the center.
            </p>
            <h3>Common Measures of Dispersion:</h3>
            <ul>
              <li><strong>Range:</strong> The difference between the maximum and minimum values.
                <br />
                Range = Maximum value - Minimum value
              </li>
              <li><strong>Variance:</strong> The average of the squared differences from the mean.
                <br />
                Population Variance (σ²) = Σ(x - μ)² / N
                <br />
                Sample Variance (s²) = Σ(x - x̄)² / (n - 1)
              </li>
              <li><strong>Standard Deviation:</strong> The square root of the variance.
                <br />
                Population Standard Deviation (σ) = √σ²
                <br />
                Sample Standard Deviation (s) = √s²
              </li>
              <li><strong>Interquartile Range (IQR):</strong> The difference between the third quartile (Q3) and the first quartile (Q1).
                <br />
                IQR = Q3 - Q1
              </li>
            </ul>
            <div className="example-box">
              <h3>Example: Finding Measures of Dispersion</h3>
              <p>
                Find the range, variance, and standard deviation for the following sample data: 4, 7, 2, 9, 4, 11, 7, 4, 8
              </p>
              <p>
                <strong>Range:</strong>
                <br />
                Range = Maximum value - Minimum value = 11 - 2 = 9
              </p>
              <p>
                <strong>Variance:</strong>
                <br />
                First, find the mean: x̄ = 56 / 9 ≈ 6.22
                <br />
                Then, calculate the squared differences from the mean:
                <br />
                (4 - 6.22)² + (7 - 6.22)² + (2 - 6.22)² + (9 - 6.22)² + (4 - 6.22)² + (11 - 6.22)² + (7 - 6.22)² + (4 - 6.22)² + (8 - 6.22)²
                <br />
                = 4.92² + 0.78² + 4.22² + 2.78² + 4.92² + 4.78² + 0.78² + 4.92² + 1.78²
                <br />
                = 24.21 + 0.61 + 17.81 + 7.73 + 24.21 + 22.85 + 0.61 + 24.21 + 3.17
                <br />
                = 125.41
                <br />
                Sample Variance (s²) = 125.41 / (9 - 1) = 125.41 / 8 ≈ 15.68
              </p>
              <p>
                <strong>Standard Deviation:</strong>
                <br />
                Sample Standard Deviation (s) = √s² = √15.68 ≈ 3.96
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Probability</h2>
          <div className="topic-content">
            <p>
              Probability is the measure of the likelihood that an event will occur. It is expressed as a number between 0 (impossible) and 1 (certain).
            </p>
            <h3>Basic Probability Concepts:</h3>
            <ul>
              <li><strong>Experiment:</strong> A process that leads to one of several possible outcomes.</li>
              <li><strong>Sample Space (S):</strong> The set of all possible outcomes of an experiment.</li>
              <li><strong>Event (E):</strong> A subset of the sample space.</li>
              <li><strong>Probability of an Event:</strong> P(E) = Number of favorable outcomes / Total number of possible outcomes</li>
            </ul>
            <h3>Probability Rules:</h3>
            <ul>
              <li><strong>Complement Rule:</strong> P(E') = 1 - P(E)</li>
              <li><strong>Addition Rule:</strong>
                <ul>
                  <li>For mutually exclusive events: P(A or B) = P(A) + P(B)</li>
                  <li>For non-mutually exclusive events: P(A or B) = P(A) + P(B) - P(A and B)</li>
                </ul>
              </li>
              <li><strong>Multiplication Rule:</strong>
                <ul>
                  <li>For independent events: P(A and B) = P(A) × P(B)</li>
                  <li>For dependent events: P(A and B) = P(A) × P(B|A)</li>
                </ul>
              </li>
              <li><strong>Conditional Probability:</strong> P(B|A) = P(A and B) / P(A)</li>
            </ul>
            <div className="example-box">
              <h3>Example: Calculating Probability</h3>
              <p>
                A standard deck of cards contains 52 cards: 13 cards in each of 4 suits (hearts, diamonds, clubs, spades). Hearts and diamonds are red; clubs and spades are black.
              </p>
              <p>
                <strong>Question 1:</strong> What is the probability of drawing a heart?
                <br />
                P(heart) = Number of hearts / Total number of cards = 13 / 52 = 1/4 = 0.25
              </p>
              <p>
                <strong>Question 2:</strong> What is the probability of drawing a red card or a king?
                <br />
                P(red) = 26 / 52 = 1/2
                <br />
                P(king) = 4 / 52 = 1/13
                <br />
                P(red and king) = 2 / 52 = 1/26 (there are 2 red kings)
                <br />
                P(red or king) = P(red) + P(king) - P(red and king) = 1/2 + 1/13 - 1/26 = 13/26 + 2/26 - 1/26 = 14/26 = 7/13 ≈ 0.538
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Normal Distribution</h2>
          <div className="topic-content">
            <p>
              The normal distribution (also known as the Gaussian distribution or bell curve) is a continuous probability distribution that is symmetric around its mean.
            </p>
            <h3>Properties of the Normal Distribution:</h3>
            <ul>
              <li>It is symmetric around the mean.</li>
              <li>The mean, median, and mode are all equal.</li>
              <li>The total area under the curve is 1.</li>
              <li>It is completely determined by its mean (μ) and standard deviation (σ).</li>
              <li>About 68% of the data falls within one standard deviation of the mean.</li>
              <li>About 95% of the data falls within two standard deviations of the mean.</li>
              <li>About 99.7% of the data falls within three standard deviations of the mean (the "68-95-99.7 rule" or "empirical rule").</li>
            </ul>
            <h3>Standard Normal Distribution (Z-distribution):</h3>
            <p>
              The standard normal distribution has a mean of 0 and a standard deviation of 1. We can convert any normal random variable X to a standard normal random variable Z using the formula:
            </p>
            <p className="equation">
              Z = (X - μ) / σ
            </p>
            <div className="example-box">
              <h3>Example: Using the Normal Distribution</h3>
              <p>
                The heights of adult women in a certain population are normally distributed with a mean of 65 inches and a standard deviation of 3.5 inches.
              </p>
              <p>
                <strong>Question 1:</strong> What percentage of women are taller than 70 inches?
                <br />
                First, convert 70 inches to a z-score:
                <br />
                Z = (70 - 65) / 3.5 = 5 / 3.5 ≈ 1.43
                <br />
                Using a standard normal table or calculator, we find that P(Z > 1.43) ≈ 0.0764 or about 7.64%.
              </p>
              <p>
                <strong>Question 2:</strong> What is the height of a woman who is at the 90th percentile?
                <br />
                The 90th percentile corresponds to a z-score of about 1.28 (from a standard normal table).
                <br />
                Now, convert this z-score back to the original scale:
                <br />
                X = μ + Z × σ = 65 + 1.28 × 3.5 = 65 + 4.48 = 69.48 inches
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Correlation and Regression</h2>
          <div className="topic-content">
            <p>
              Correlation and regression are used to analyze the relationship between two numerical variables.
            </p>
            <h3>Correlation:</h3>
            <p>
              Correlation measures the strength and direction of the linear relationship between two variables. The correlation coefficient (r) ranges from -1 to 1:
            </p>
            <ul>
              <li>r = 1: Perfect positive correlation</li>
              <li>r = -1: Perfect negative correlation</li>
              <li>r = 0: No correlation</li>
            </ul>
            <p>
              The formula for the Pearson correlation coefficient is:
            </p>
            <p className="equation">
              r = Σ[(x - x̄)(y - ȳ)] / √[Σ(x - x̄)² × Σ(y - ȳ)²]
            </p>
            <h3>Linear Regression:</h3>
            <p>
              Linear regression finds the line of best fit that minimizes the sum of squared differences between the observed and predicted values. The equation of the regression line is:
            </p>
            <p className="equation">
              ŷ = a + bx
            </p>
            <p>
              Where:
            </p>
            <ul>
              <li>ŷ is the predicted value of y</li>
              <li>a is the y-intercept</li>
              <li>b is the slope</li>
              <li>x is the value of the independent variable</li>
            </ul>
            <p>
              The slope (b) can be calculated as:
            </p>
            <p className="equation">
              b = r × (s_y / s_x)
            </p>
            <p>
              Where r is the correlation coefficient, s_y is the standard deviation of y, and s_x is the standard deviation of x.
            </p>
            <p>
              The y-intercept (a) can be calculated as:
            </p>
            <p className="equation">
              a = ȳ - b × x̄
            </p>
            <div className="example-box">
              <h3>Example: Correlation and Regression</h3>
              <p>
                The following data shows the number of hours studied (x) and the exam score (y) for 5 students:
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Hours Studied (x)</th>
                    <th>Exam Score (y)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>85</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>90</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Step 1:</strong> Calculate the means.
                <br />
                x̄ = (1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3
                <br />
                ȳ = (65 + 70 + 80 + 85 + 90) / 5 = 390 / 5 = 78
              </p>
              <p>
                <strong>Step 2:</strong> Calculate the correlation coefficient.
                <br />
                (Calculations omitted for brevity, but using the formula would give r ≈ 0.987)
              </p>
              <p>
                <strong>Step 3:</strong> Calculate the regression line.
                <br />
                The slope (b) ≈ 6.5
                <br />
                The y-intercept (a) = ȳ - b × x̄ = 78 - 6.5 × 3 = 78 - 19.5 = 58.5
                <br />
                So, the regression line is: ŷ = 58.5 + 6.5x
              </p>
              <p>
                <strong>Step 4:</strong> Use the regression line to make predictions.
                <br />
                For example, if a student studies for 6 hours, the predicted exam score would be:
                <br />
                ŷ = 58.5 + 6.5 × 6 = 58.5 + 39 = 97.5
              </p>
            </div>
          </div>
        </section>

        <section className="topic-section practice-section">
          <h2 className="section-title">Practice Problems</h2>
          <div className="practice-problems">
            <div className="problem-card">
              <h3>Problem 1</h3>
              <p>Find the mean, median, and mode for the following data set: 15, 12, 18, 15, 20, 15, 12, 18, 15</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Mean:</strong>
                  <br />
                  Mean = (15 + 12 + 18 + 15 + 20 + 15 + 12 + 18 + 15) / 9 = 140 / 9 ≈ 15.56
                </p>
                <p>
                  <strong>Median:</strong>
                  <br />
                  First, arrange the data in order: 12, 12, 15, 15, 15, 15, 18, 18, 20
                  <br />
                  Since there are 9 values (odd), the median is the 5th value: 15
                </p>
                <p>
                  <strong>Mode:</strong>
                  <br />
                  The value 15 appears four times, which is more than any other value.
                  <br />
                  Mode = 15
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 2</h3>
              <p>A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If you randomly select one marble from the bag, what is the probability of selecting a red or green marble?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Find the total number of marbles.
                  <br />
                  Total = 5 + 3 + 2 = 10 marbles
                </p>
                <p>
                  <strong>Step 2:</strong> Find the probability of selecting a red marble.
                  <br />
                  P(red) = 5 / 10 = 1/2 = 0.5
                </p>
                <p>
                  <strong>Step 3:</strong> Find the probability of selecting a green marble.
                  <br />
                  P(green) = 2 / 10 = 1/5 = 0.2
                </p>
                <p>
                  <strong>Step 4:</strong> Find the probability of selecting a red or green marble.
                  <br />
                  Since these events are mutually exclusive (you can't select a marble that is both red and green), we use the addition rule:
                  <br />
                  P(red or green) = P(red) + P(green) = 0.5 + 0.2 = 0.7
                </p>
              </div>
            </div>
            
            <div className="problem-card">
              <h3>Problem 3</h3>
              <p>The weights of packages shipped by a company are normally distributed with a mean of 15 pounds and a standard deviation of 2 pounds. What percentage of packages weigh more than 18 pounds?</p>
              <button className="btn btn-primary show-solution-btn">Show Solution</button>
              <div className="solution">
                <p>
                  <strong>Step 1:</strong> Convert 18 pounds to a z-score.
                  <br />
                  Z = (X - μ) / σ = (18 - 15) / 2 = 3 / 2 = 1.5
                </p>
                <p>
                  <strong>Step 2:</strong> Find the probability P(Z > 1.5).
                  <br />
                  Using a standard normal table or calculator, we find that P(Z > 1.5) ≈ 0.0668 or about 6.68%.
                </p>
                <p>
                  Therefore, approximately 6.68% of packages weigh more than 18 pounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <h2 className="section-title">Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you've explored the basics of statistics, you might want to dive deeper into these related topics:
            </p>
            <ul className="related-topics">
              <li>
                <a href="/topics/probability-distributions">Probability Distributions</a> - Learn about different types of probability distributions and their applications.
              </li>
              <li>
                <a href="/topics/hypothesis-testing">Hypothesis Testing</a> - Understand how to test claims about populations using sample data.
              </li>
              <li>
                <a href="/topics/data-analysis">Data Analysis</a> - Explore techniques for analyzing and interpreting complex data sets.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Statistics;