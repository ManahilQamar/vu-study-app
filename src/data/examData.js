// ─────────────────────────────────────────────────────────────────
//  examData.js — Exam paper data
//  Save as: src/data/examData.js
//
//  Structure:
//  examData[SUBJECT_ID][PAPER_TYPE] = {
//    mcqs: [ { q, options, answer } ],       ← auto-checked
//    subjective: [ { q, marks } ],            ← manually attempted (MTH101, MTH202, PHY101 only)
//  }
//
//  PAPER_TYPE: 'mid' | 'final'
// ─────────────────────────────────────────────────────────────────

const examData = {

  // ──────────────────────────────────
  //  MTH101 — Calculus
  // ──────────────────────────────────
  MTH101: {
    mid: {
      title: 'MTH101 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,     // marks per MCQ
      mcqs: [
        { q: 'Which hierarchy from smallest to largest set is correct?', options: ['A. Natural → Integer → Rational → Real', 'B. Integer → Natural → Rational → Real', 'C. Natural → Rational → Integer → Real', 'D. Rational → Integer → Natural → Real'], answer: 'A. Natural → Integer → Rational → Real' },
        { q: 'The number zero (0) belongs to which set but NOT to natural numbers?', options: ['A. Rational numbers', 'B. Irrational numbers', 'C. Integers', 'D. Complex numbers'], answer: 'C. Integers' },
        { q: 'Who demonstrated the existence of irrational numbers in the 5th century BC?', options: ['A. Pythagoras', 'B. Descartes', 'C. Hippasus of Metapontum', 'D. Euclid'], answer: 'C. Hippasus of Metapontum' },
        { q: 'A rational number in decimal form will always:', options: ['A. Be a whole number', 'B. End or repeat in a pattern forever', 'C. Be an infinite non-repeating decimal', 'D. Be negative'], answer: 'B. End or repeat in a pattern forever' },
        { q: 'Analytic geometry and the coordinate line were developed by:', options: ['A. Pythagoras in ancient Greece', 'B. Hippasus in 5th century BC', 'C. Descartes in the 1600s', 'D. Newton in the 1700s'], answer: 'C. Descartes in the 1600s' },
        { q: 'When multiplying both sides of an inequality by a NEGATIVE number, the direction:', options: ['A. Stays the same', 'B. Reverses', 'C. Both sides become equal', 'D. Becomes undefined'], answer: 'B. Reverses' },
        { q: 'The closed interval [a, b] is defined as:', options: ['A. {x : a < x < b}', 'B. {x : a ≤ x < b}', 'C. {x : a < x ≤ b}', 'D. {x : a ≤ x ≤ b}'], answer: 'D. {x : a ≤ x ≤ b}' },
        { q: 'The absolute value |−a| equals:', options: ['A. −|a|', 'B. |a|', 'C. a', 'D. −a'], answer: 'B. |a|' },
        { q: '√(a²) for any real number a equals:', options: ['A. a', 'B. −a', 'C. |a|', 'D. a²'], answer: 'C. |a|' },
        { q: 'Solve |x − 3| = 4. What are the solutions?', options: ['A. x = 7 only', 'B. x = −1 only', 'C. x = 7 and x = −1', 'D. x = 1 and x = −7'], answer: 'C. x = 7 and x = −1' },
        { q: 'The interval (−∞, b] is classified as:', options: ['A. Finite and open', 'B. Infinite and open', 'C. Infinite and closed', 'D. Finite and closed'], answer: 'C. Infinite and closed' },
        { q: 'The Triangle Inequality states that for any real numbers a and b:', options: ['A. |a + b| = |a| + |b|', 'B. |a + b| ≥ |a| + |b|', 'C. |a + b| ≤ |a| + |b|', 'D. |a + b| < |a| − |b|'], answer: 'C. |a + b| ≤ |a| + |b|' },
        { q: 'If a < b and c < d, then:', options: ['A. a − c < b − d', 'B. a + c < b + d', 'C. ac < bd', 'D. a/c < b/d'], answer: 'B. a + c < b + d' },
        { q: 'The solution of |x − 3| < 4 in interval notation is:', options: ['A. (−7, 1)', 'B. (−1, 7)', 'C. [−1, 7]', 'D. (3, 4)'], answer: 'B. (−1, 7)' },
        { q: 'A nonnegative number is one that satisfies:', options: ['A. a > 0', 'B. a < 0', 'C. a ≥ 0', 'D. a ≤ 0'], answer: 'C. a ≥ 0' },
        { q: 'What does A ∩ B represent?', options: ['A. All elements in A or B', 'B. Elements in A but not B', 'C. Elements in both A and B', 'D. Elements in B but not A'], answer: 'C. Elements in both A and B' },
        { q: 'Which number is proven irrational by a right triangle with base and height equal to 1?', options: ['A. √3', 'B. π', 'C. √2', 'D. 1/3'], answer: 'C. √2' },
        { q: 'Multiplying both sides of an inequality by zero is:', options: ['A. Always allowed', 'B. Not allowed — it changes the solution set', 'C. Allowed for positive values only', 'D. Allowed only if x is unknown'], answer: 'B. Not allowed — it changes the solution set' },
        { q: 'The expression a < b < c means:', options: ['A. a < b only', 'B. b < c only', 'C. a < b AND b < c', 'D. a < c only'], answer: 'C. a < b AND b < c' },
        { q: 'The distance formula between two points A(a) and B(b) on a coordinate line is:', options: ['A. d = a − b', 'B. d = b − a', 'C. d = |b − a|', 'D. d = |a + b|'], answer: 'C. d = |b − a|' },
      ],
      subjective: [
        { q: 'Solve the inequality 2x − 5 < 7 and write the solution in interval notation. Show all steps.', marks: 5 },
        { q: 'Prove that √2 is an irrational number using the standard contradiction argument.', marks: 5 },
        { q: 'Solve for x: |3x + 6| = 12. Find all solutions and verify.', marks: 5 },
        { q: 'Using the Triangle Inequality, prove that |a − b| ≥ ||a| − |b|| for any real numbers a and b.', marks: 5 },
      ],
    },
    final: {
      title: 'MTH101 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [
        { q: 'Calculus is primarily the study of:', options: ['A. Shapes and geometry', 'B. Continuous rates of change of quantities', 'C. Discrete mathematics', 'D. Complex number theory'], answer: 'B. Continuous rates of change of quantities' },
        { q: 'The derivative of tⁿ is:', options: ['A. tⁿ⁺¹', 'B. n·tⁿ⁻¹', 'C. (n+1)·tⁿ', 'D. tⁿ⁻¹'], answer: 'B. n·tⁿ⁻¹' },
        { q: 'The derivative of a constant is:', options: ['A. 1', 'B. The constant itself', 'C. 0', 'D. Undefined'], answer: 'C. 0' },
        { q: 'Geometrically, the derivative at a point on x-t graph is the:', options: ['A. Area under curve', 'B. Slope of the tangent', 'C. Length of the curve', 'D. Intercept on x-axis'], answer: 'B. Slope of the tangent' },
        { q: 'The velocity of an object is defined as:', options: ['A. d²x/dt²', 'B. dx/dt', 'C. x/t', 'D. Δx only'], answer: 'B. dx/dt' },
        { q: 'The acceleration is defined as:', options: ['A. dx/dt', 'B. x/t²', 'C. d²x/dt²', 'D. Δv only'], answer: 'C. d²x/dt²' },
        { q: 'If x(t) = c₀ + c₁t + c₂t², then dx/dt equals:', options: ['A. c₁ + c₂t', 'B. c₁ + 2c₂t', 'C. 2c₂', 'D. c₀ + c₁'], answer: 'B. c₁ + 2c₂t' },
        { q: 'The symbol ∫ represents:', options: ['A. Differentiation', 'B. Summation', 'C. Integration', 'D. Limit'], answer: 'C. Integration' },
        { q: '∫x² dx equals:', options: ['A. 2x', 'B. x³', 'C. x³/3 + C', 'D. 3x³'], answer: 'C. x³/3 + C' },
        { q: 'The area under a curve from a to b is found by:', options: ['A. Differentiating the function', 'B. Evaluating the definite integral from a to b', 'C. Multiplying the function by (b − a)', 'D. Finding the slope at each point'], answer: 'B. Evaluating the definite integral from a to b' },
        { q: 'If f(x) = x³ − 3x + 2, then f\'(x) is:', options: ['A. 3x² − 3', 'B. x² − 3', 'C. 3x³ − 3', 'D. 3x + 2'], answer: 'A. 3x² − 3' },
        { q: 'Critical points occur where:', options: ['A. f(x) = 0', 'B. f\'(x) = 0 or f\'(x) is undefined', 'C. f\'\'(x) = 0 only', 'D. f(x) is maximum'], answer: 'B. f\'(x) = 0 or f\'(x) is undefined' },
        { q: 'If f\'\'(c) < 0, then at x = c the function has a:', options: ['A. Relative minimum', 'B. Inflection point', 'C. Relative maximum', 'D. Zero crossing'], answer: 'C. Relative maximum' },
        { q: 'The Fundamental Theorem of Calculus connects:', options: ['A. Algebra and trigonometry', 'B. Differentiation and integration', 'C. Sets and functions', 'D. Limits and sequences'], answer: 'B. Differentiation and integration' },
        { q: '∫₀² x dx equals:', options: ['A. 1', 'B. 2', 'C. 4', 'D. 8'], answer: 'B. 2' },
        { q: 'The chain rule states that if y = f(g(x)), then dy/dx equals:', options: ['A. f\'(x) · g\'(x)', 'B. f\'(g(x)) · g\'(x)', 'C. f(g\'(x))', 'D. f\'(x) + g\'(x)'], answer: 'B. f\'(g(x)) · g\'(x)' },
        { q: 'The product rule for differentiation of f(x)·g(x) is:', options: ['A. f\'(x) · g\'(x)', 'B. f(x) · g\'(x) − f\'(x) · g(x)', 'C. f\'(x) · g(x) + f(x) · g\'(x)', 'D. f(x) + g(x)'], answer: 'C. f\'(x) · g(x) + f(x) · g\'(x)' },
        { q: 'A function is increasing on an interval where:', options: ['A. f\'(x) < 0', 'B. f\'(x) = 0', 'C. f\'(x) > 0', 'D. f\'\'(x) > 0'], answer: 'C. f\'(x) > 0' },
        { q: 'Limit of (1/x) as x → ∞ is:', options: ['A. ∞', 'B. 1', 'C. 0', 'D. −1'], answer: 'C. 0' },
        { q: 'The quotient rule for d/dx [f(x)/g(x)] is:', options: ['A. [f\'g − fg\']/g²', 'B. [f\'g + fg\']/g²', 'C. f\'/g\'', 'D. [f′g − fg′]/g'], answer: 'A. [f\'g − fg\']/g²' },
      ],
      subjective: [
        { q: 'Find all relative extrema of f(x) = x³ − 6x² + 9x + 1 using the First and Second Derivative Tests. Show all steps.', marks: 8 },
        { q: 'Evaluate the definite integral ∫₁³ (2x² + 3x − 1) dx. Show all working.', marks: 7 },
        { q: 'A particle moves along a straight line with position function x(t) = t³ − 6t² + 9t. Find (a) velocity, (b) acceleration, (c) when the particle is at rest, (d) position at t = 2.', marks: 8 },
        { q: 'Find the area enclosed between y = x² and y = x. Show by finding intersection points, setting up the integral, and evaluating it.', marks: 7 },
      ],
    },
  },

  // ──────────────────────────────────
  //  MTH202 — Discrete Mathematics
  // ──────────────────────────────────
  MTH202: {
    mid: {
      title: 'MTH202 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'A statement (proposition) is:', options: ['A. A question', 'B. A command', 'C. A declarative sentence with true/false value', 'D. An opinion'], answer: 'C. A declarative sentence with true/false value' },
        { q: 'Which of the following is NOT a proposition?', options: ['A. 2 + 2 = 4', 'B. It is hot today', 'C. x + y = 12', 'D. Grass is green'], answer: 'C. x + y = 12' },
        { q: 'Symbol for conjunction (AND) is:', options: ['A. ∨', 'B. ∧', 'C. →', 'D. ~'], answer: 'B. ∧' },
        { q: 'p ∧ q is true when:', options: ['A. Only p is true', 'B. Either p or q is true', 'C. Both p and q are true', 'D. Both are false'], answer: 'C. Both p and q are true' },
        { q: 'p ∨ q is false when:', options: ['A. Both true', 'B. One true', 'C. Both false', 'D. None of the above'], answer: 'C. Both false' },
        { q: 'The conditional p → q is false only when:', options: ['A. p is true and q is true', 'B. p is false and q is false', 'C. p is true and q is false', 'D. p is false and q is true'], answer: 'C. p is true and q is false' },
        { q: 'The contrapositive of p → q is:', options: ['A. q → p', 'B. ~p → ~q', 'C. ~q → ~p', 'D. ~p ∨ q'], answer: 'C. ~q → ~p' },
        { q: '~(p ∧ q) is equivalent to (De Morgan):', options: ['A. ~p ∧ ~q', 'B. ~p ∨ ~q', 'C. p ∧ q', 'D. p ∨ q'], answer: 'B. ~p ∨ ~q' },
        { q: 'A tautology is a statement that is:', options: ['A. Always false', 'B. Always true', 'C. Sometimes true', 'D. Logically equivalent to its negation'], answer: 'B. Always true' },
        { q: 'p ∨ ~p is an example of:', options: ['A. Contradiction', 'B. Contingency', 'C. Tautology', 'D. Implication'], answer: 'C. Tautology' },
        { q: '~(p → q) is logically equivalent to:', options: ['A. ~p → ~q', 'B. p ∧ ~q', 'C. ~p ∨ q', 'D. p → q'], answer: 'B. p ∧ ~q' },
        { q: 'The Implication Law states p → q ≡:', options: ['A. ~p ∧ q', 'B. ~p ∨ q', 'C. p ∧ ~q', 'D. p ∨ ~q'], answer: 'B. ~p ∨ q' },
        { q: '"p only if q" means:', options: ['A. q → p', 'B. p → q', 'C. ~p → ~q', 'D. p ↔ q'], answer: 'B. p → q' },
        { q: 'The biconditional p ↔ q is true when:', options: ['A. p and q have opposite truth values', 'B. p and q have the same truth value', 'C. p is true and q is false', 'D. Always'], answer: 'B. p and q have the same truth value' },
        { q: '"p is necessary and sufficient for q" means:', options: ['A. p → q', 'B. q → p', 'C. p ↔ q', 'D. ~p → ~q'], answer: 'C. p ↔ q' },
        { q: 'A set is defined as:', options: ['A. A collection that may have repeats', 'B. A well-defined collection of distinct objects', 'C. Any list of numbers', 'D. A random group of items'], answer: 'B. A well-defined collection of distinct objects' },
        { q: 'The empty set is a subset of:', options: ['A. No set', 'B. Only itself', 'C. Every set', 'D. Only non-empty sets'], answer: 'C. Every set' },
        { q: '|∅| equals:', options: ['A. 1', 'B. 0', 'C. Undefined', 'D. Infinite'], answer: 'B. 0' },
        { q: 'A ∩ B consists of elements that belong to:', options: ['A. A or B', 'B. A and B both', 'C. A only', 'D. B only'], answer: 'B. A and B both' },
        { q: 'De Morgan\'s Law for sets: (A ∪ B)ᶜ equals:', options: ['A. Aᶜ ∪ Bᶜ', 'B. Aᶜ ∩ Bᶜ', 'C. A ∩ B', 'D. A ∪ B'], answer: 'B. Aᶜ ∩ Bᶜ' },
      ],
      subjective: [
        { q: 'Construct a truth table for (p ∧ q) → (p ∨ q) and determine whether it is a tautology.', marks: 5 },
        { q: 'Prove using laws of logic: ~(~p ∧ q) ≡ p ∨ ~q. State each law used.', marks: 5 },
        { q: 'Let A = {1,2,3,4,5}, B = {2,4,6}, C = {1,3,5,7}. Find: (i) A ∩ B (ii) A ∪ C (iii) B − A (iv) Aᶜ if U = {1,2,3,4,5,6,7,8}', marks: 5 },
        { q: 'Using a Venn diagram, verify De Morgan\'s Law: (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ', marks: 5 },
      ],
    },
    final: {
      title: 'MTH202 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [
    {
        "q": "There are 5 Chinese books and 6 English books, a Student wants to select one optional book for both subject, total number of choices will be?",
        "options": [
            "A. 15",
            "B. 11",
            "C. 30",
            "D. 10"
        ],
        "answer": "B. 11"
    },
    {
        "q": "While proofing by contraposition the equivalence ........is used.",
        "options": [
            "A. p → q ≡ ~q → ~p",
            "B. p → q ≡ q → p",
            "C. ~p → ~q ≡ q → p",
            "D. ~p → q ≡ ~q → p"
        ],
        "answer": "A. p → q ≡ ~q → ~p"
    },
    {
        "q": "A box contains 5 different colored light bulbs. Which of the followings is the number of ordered samples of size 3 with replacement ?",
        "options": [
            "A. 8",
            "B. 243",
            "C. 15",
            "D. 125"
        ],
        "answer": "D. 125"
    },
    {
        "q": "A proof by is based on the fact that either a statement is true or it is false but not both.",
        "options": [
            "A. mathematical induction",
            "B. contraposition",
            "C. superposition",
            "D. contradiction"
        ],
        "answer": "D. contradiction"
    },
    {
        "q": "In the proof by contradiction, we lead the assumption to",
        "options": [
            "A. contingency",
            "B. Absurdity",
            "C. tautology",
            "D. None of these."
        ],
        "answer": "B. Absurdity"
    },
    {
        "q": "Combination is used when we have to select 'k' elements from a set of 'n' elements with the following properties.",
        "options": [
            "A. Order does not matter and repetition is not allowed",
            "B. Order does not matter and repetition is allowed",
            "C. Order matters and repetition is allowed",
            "D. Order matters and repetition is not allowed."
        ],
        "answer": "A. Order does not matter and repetition is not allowed"
    },
    {
        "q": "A non- zero integer d divides an integer n if and only if there exists an integer k such that",
        "options": [
            "A. n = d k",
            "B. n = d - k",
            "C. n = d / k",
            "D. n = d + k"
        ],
        "answer": "A. n = d k"
    },
    {
        "q": "'Reductio ad absurdum' is another name of",
        "options": [
            "A. Direct Method of proof",
            "B. proof by contradiction",
            "C. None of these.",
            "D. proof by contrapositive"
        ],
        "answer": "B. proof by contradiction"
    },
    {
        "q": "For every prime number n, n + 2 is prime. Which of the following prime number disproves the above statement.",
        "options": [
            "A. n = 5",
            "B. n = 7",
            "C. n = 11",
            "D. n = 3"
        ],
        "answer": "B. n = 7"
    },
    {
        "q": "The sum of any rational number and any irrational number is irrational.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "A. True"
    },
    





   
    
 

     ],
      subjective: [
        { q: 'Let A = {1,2,3} and B = {a,b}. (i) List all elements of A×B. (ii) Define a relation R from A to B. (iii) Find the domain and range of R. (iv) Is R a function? Explain.', marks: 8 },
        { q: 'Prove by induction that 1 + 2 + 3 + ... + n = n(n+1)/2 for all positive integers n.', marks: 7 },
        { q: 'A sequence is defined by: a₁ = 2, aₙ = 3aₙ₋₁ + 1 for n ≥ 2. Find a₂, a₃, a₄, a₅. Find the sum of the first 5 terms.', marks: 7 },
        { q: 'Determine whether R = {(1,1),(2,2),(3,3),(1,2),(2,3),(1,3)} on A = {1,2,3} is: (i) Reflexive (ii) Symmetric (iii) Transitive (iv) An equivalence relation? Justify each answer.', marks: 8 },
      ],
    },
  },

  // ──────────────────────────────────
  //  PHY101 — Physics
  // ──────────────────────────────────
  PHY101: {
    mid: {
      title: 'PHY101 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'Physics is often called:', options: ['A. King of science', 'B. Mother of science', 'C. Queen of science', 'D. Branch of math'], answer: 'C. Queen of science' },
        { q: 'Fundamental dimensions are:', options: ['A. Time, Speed, Force', 'B. Length, Width, Height', 'C. Time, Length, Mass', 'D. Energy, Work, Power'], answer: 'C. Time, Length, Mass' },
        { q: 'Dimension of speed is:', options: ['A. L/T', 'B. LT', 'C. T/L', 'D. L²'], answer: 'A. L/T' },
        { q: 'Newton\'s First Law is also called the law of:', options: ['A. Acceleration', 'B. Action-Reaction', 'C. Inertia', 'D. Gravity'], answer: 'C. Inertia' },
        { q: 'Newton\'s Second Law states F_net =:', options: ['A. m/v', 'B. m·a', 'C. m·g', 'D. a/m'], answer: 'B. m·a' },
        { q: 'The SI unit of force is:', options: ['A. Joule', 'B. Watt', 'C. Newton', 'D. Pascal'], answer: 'C. Newton' },
        { q: 'Weight of a 10 kg object on Earth (g=9.8 m/s²) is:', options: ['A. 10 N', 'B. 98 N', 'C. 9.8 N', 'D. 0.98 N'], answer: 'B. 98 N' },
        { q: 'Newton\'s Third Law states that action and reaction forces:', options: ['A. Act on the same body', 'B. Cancel each other', 'C. Act on different bodies', 'D. Are in the same direction'], answer: 'C. Act on different bodies' },
        { q: 'Kinetic friction formula is:', options: ['A. fₖ = μₛ N', 'B. fₖ = μₖ N', 'C. fₖ = μₖ mg²', 'D. fₖ = μₛ mg²'], answer: 'B. fₖ = μₖ N' },
        { q: 'The angle of repose is given by:', options: ['A. α = tan⁻¹(μₖ)', 'B. α = sin⁻¹(μₛ)', 'C. α = tan⁻¹(μₛ)', 'D. α = cos⁻¹(μₛ)'], answer: 'C. α = tan⁻¹(μₛ)' },
        { q: 'Work done is defined as:', options: ['A. Force × time', 'B. Force × displacement × cosθ', 'C. Mass × acceleration', 'D. Force / displacement'], answer: 'B. Force × displacement × cosθ' },
        { q: 'Kinetic energy is given by:', options: ['A. mv', 'B. ½mv²', 'C. mgh', 'D. ½kx²'], answer: 'B. ½mv²' },
        { q: 'The work-energy principle states:', options: ['A. Work = force × distance', 'B. Net work = change in kinetic energy', 'C. Energy cannot be created', 'D. Power = work/time'], answer: 'B. Net work = change in kinetic energy' },
        { q: 'For an object in free fall, the acceleration due to gravity is approximately:', options: ['A. 8.9 m/s²', 'B. 9.8 m/s²', 'C. 10.8 m/s²', 'D. 11 m/s²'], answer: 'B. 9.8 m/s²' },
        { q: 'Momentum is defined as:', options: ['A. mass × acceleration', 'B. mass × velocity', 'C. force × time', 'D. work / time'], answer: 'B. mass × velocity' },
        { q: 'The angle for maximum range of a projectile is:', options: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 90°'], answer: 'B. 45°' },
        { q: 'Elastic potential energy stored in a spring is:', options: ['A. mgh', 'B. ½mv²', 'C. ½kx²', 'D. kx'], answer: 'C. ½kx²' },
        { q: 'Conservation of linear momentum holds when:', options: ['A. Velocity is constant', 'B. Net external force is zero', 'C. Kinetic energy is constant', 'D. Only during elastic collisions'], answer: 'B. Net external force is zero' },
        { q: 'For an Atwood machine (masses m₁ and m₂, m₂ > m₁), acceleration is:', options: ['A. (m₁+m₂)g/(m₁−m₂)', 'B. (m₂−m₁)g/(m₁+m₂)', 'C. (m₁−m₂)g', 'D. g/2'], answer: 'B. (m₂−m₁)g/(m₁+m₂)' },
        { q: 'Terminal velocity occurs when:', options: ['A. Weight becomes zero', 'B. Drag force equals weight', 'C. Acceleration is maximum', 'D. Velocity is zero'], answer: 'B. Drag force equals weight' },
      ],
      subjective: [
        { q: 'A car of mass 1200 kg accelerates from rest to 20 m/s in 8 seconds. (a) Find the acceleration. (b) Find the net force on the car. (c) If the coefficient of friction is 0.15, find the friction force and the applied engine force. (g = 9.8 m/s²)', marks: 5 },
        { q: 'A projectile is launched with initial speed 50 m/s at an angle of 30° above the horizontal. Find: (a) maximum height, (b) time of flight, (c) horizontal range. (g = 9.8 m/s²)', marks: 5 },
        { q: 'A spring with k = 500 N/m is compressed by 0.2 m. (a) Find the elastic potential energy stored. (b) When released, this energy converts to kinetic energy of a 0.5 kg block. Find the maximum speed of the block.', marks: 5 },
        { q: 'A 0.5 kg ball moving at 6 m/s collides elastically with a stationary 1.5 kg ball. Find the final velocities of both balls after the collision. Show all working.', marks: 5 },
      ],
    },
    final: {
      title: 'PHY101 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [


        {
        "q": "The wavelength of red light is 700 nm. Its frequency is",
        "options": [
            "A. 4.29*10^13 Hertz",
            "B. 4.29*10^15 Hertz",
            "C. 4.29*10^12 Hertz",
            "D. 4.29*10^14 Hertz"
        ],
        "answer": "D. 4.29*10^14 Hertz"
    },
    {
        "q": "If a charged particle moves at an angle of 60 degrees to the magnetic field, what is the angle between the resulting force and the direction of motion?",
        "options": [
            "A. 90 degrees",
            "B. 30 degrees",
            "C. 0 degrees",
            "D. 60 degrees"
        ],
        "answer": "A. 90 degrees"
    },
    {
        "q": "Electromagnetic waves do not transport:",
        "options": [
            "A. Momentum",
            "B. Information",
            "C. Charge",
            "D. Energy"
        ],
        "answer": "C. Charge"
    },
    {
        "q": "The amplitude modulation frequency ranges from:",
        "options": [
            "A. 540 kHz to 1400 kHz",
            "B. 540 kHz to 1600 kHz",
            "C. 540 kHz to 1000 kHz",
            "D. 520 kHz to 1600 kHz"
        ],
        "answer": "B. 540 kHz to 1600 kHz"
    },
    {
        "q": "When we accelerate the charge, which types of waves are produced?",
        "options": [
            "A. Electromagnetic waves",
            "B. Travelling waves",
            "C. Stationary waves",
            "D. Mechanical waves"
        ],
        "answer": "A. Electromagnetic waves"
    },
    {
        "q": "Which of the following types of electromagnetic radiation travels at the greatest speed in vacuum?",
        "options": [
            "A. Gamma rays",
            "B. X rays",
            "C. Radio waves",
            "D. All of these travel at the same speed"
        ],
        "answer": "D. All of these travel at the same speed"
    },
    {
        "q": "Work done between two points on equipotential surface is",
        "options": [
            "A. Maximum",
            "B. Infinite",
            "C. Negative",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "The reaction of an induction at 50 Hz is 10 Ω, its reactance at 100 Hz becomes",
        "options": [
            "A. 5 Ω",
            "B. 20 Ω",
            "C. 2.5 Ω",
            "D. 1 Ω"
        ],
        "answer": "B. 20 Ω"
    },
    {
        "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
        "options": [
            "A. When there is a strong electric field",
            "B. When there is a strong magnetic field",
            "C. When there is a constant magnetic field",
            "D. When there is a time-varying magnetic field"
        ],
        "answer": "D. When there is a time-varying magnetic field"
    },
    {
        "q": "In a parallel circuit with resistors R1 and R2, if R1 is much greater than R2, compare to the voltage across R1?",
        "options": [
            "A. Voltage across R2 is much greater",
            "B. Voltage across R1 is much greater",
            "C. Voltage across both resistors is the same",
            "D. Voltages can not be determined"
        ],
        "answer": "C. Voltage across both resistors is the same"
    },

 {
        "q": "The wavelength of red light is 700 nm. Its frequency is",
        "options": [
            "A. 4.29*10^13 Hertz",
            "B. 4.29*10^15 Hertz",
            "C. 4.29*10^12 Hertz",
            "D. 4.29*10^14 Hertz"
        ],
        "answer": "D. 4.29*10^14 Hertz"
    },
    {
        "q": "If a charged particle moves at an angle of 60 degrees to the magnetic field, what is the angle between the resulting force and the direction of motion?",
        "options": [
            "A. 90 degrees",
            "B. 30 degrees",
            "C. 0 degrees",
            "D. 60 degrees"
        ],
        "answer": "A. 90 degrees"
    },
    {
        "q": "Electromagnetic waves do not transport:",
        "options": [
            "A. Momentum",
            "B. Information",
            "C. Charge",
            "D. Energy"
        ],
        "answer": "C. Charge"
    },
    {
        "q": "The amplitude modulation frequency ranges from:",
        "options": [
            "A. 540 kHz to 1400 kHz",
            "B. 540 kHz to 1600 kHz",
            "C. 540 kHz to 1000 kHz",
            "D. 520 kHz to 1600 kHz"
        ],
        "answer": "B. 540 kHz to 1600 kHz"
    },
    {
        "q": "When we accelerate the charge, which types of waves are produced?",
        "options": [
            "A. Electromagnetic waves",
            "B. Travelling waves",
            "C. Stationary waves",
            "D. Mechanical waves"
        ],
        "answer": "A. Electromagnetic waves"
    },
    {
        "q": "Which of the following types of electromagnetic radiation travels at the greatest speed in vacuum?",
        "options": [
            "A. Gamma rays",
            "B. X rays",
            "C. Radio waves",
            "D. All of these travel at the same speed"
        ],
        "answer": "D. All of these travel at the same speed"
    },
    {
        "q": "Work done between two points on equipotential surface is",
        "options": [
            "A. Maximum",
            "B. Infinite",
            "C. Negative",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "The reaction of an induction at 50 Hz is 10 &, its reactance at 100 Hz becom",
        "options": [
            "A. 5&",
            "B. 20 1&",
            "C. 2.5 1&",
            "D. 1 1&"
        ],
        "answer": "B. 20 1&"
    },
    {
        "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
        "options": [
            "A. When there is a strong electric field",
            "B. When there is a strong magnetic field",
            "C. When there is a constant magnetic field",
            "D. When there is a time-varying magnetic field"
        ],
        "answer": "D. When there is a time-varying magnetic field"
    },
    {
        "q": "In a parallel circuit with resistors R1 and R2, if R1 is much greater than R compare to the voltage across R1 ?",
        "options": [
            "A. Voltage across R2 is much greater",
            "B. Voltage across R1 is much greater",
            "C. Voltage across both resistors is the same",
            "D. Voltages can not be determined"
        ],
        "answer": "C. Voltage across both resistors is the same"
    },



 ],
     subjective: [
    {
        q: "If you walk along the top of a fence, why does holding your arms out help you to keep your balance?",
        marks: 1
    },
    {
        q: "Charge is also said to be conserved. What does it mean? Explain.",
        marks: 2
    },
    {
        q: "When a car drives off a cliff, why does it rotate forward as it falls?",
        marks: 2
    },
    {
        q: "Why does a book sitting on a table never accelerate 'spontaneously' in response to the trillions of inter-atomic forces acting within it?",
        marks: 2
    },
    {
        q: "'Captain Planet' is somewhere between galaxies. When a gong sounds in a neighboring spaceship, Captain reacts to the sound. What is wrong with this scenario?",
        marks: 3
    },
    {
        q: "If you know the position vectors of a particle at two points along its path and also know the time it took to move from one point to the other, can you determine the particle's instantaneous velocity? Its average velocity? Explain",
        marks: 3
    },
    {
        q: "Steel will rupture if subjected to a shear stress of more than about 4.2 * 10^8 N/m^2. What sideward force is necessary to shear a steel bolt 1 cm in diameter?",
        marks: 5
    },
    {
        q: "A table-tennis ball is thrown at a stationary bowling ball. The table-tennis ball makes a one-dimensional elastic collision and bounces back along the same line. After the collision, compared to the bowling ball, the table-tennis ball has (a) a larger magnitude of momentum and more kinetic energy (b) a smaller magnitude of momentum and more kinetic energy (c) a larger magnitude of momentum and less kinetic energy (d) a smaller magnitude of momentum and less kinetic energy (e) the same magnitude of momentum and the same kinetic energy.",
        marks: 5
    }
]
    },
  },

  // ──────────────────────────────────
  //  CS101, ENG101, PAK101 — MCQs only
  // ──────────────────────────────────
  CS101: {
    mid: {
      title: 'CS101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: 'Computer Science is the discipline that mainly focuses on:', options: ['A. Only hardware design', 'B. Building scientific foundation for computing systems', 'C. Only programming languages', 'D. Only internet usage'], answer: 'B. Building scientific foundation for computing systems' },
        { q: 'Which of the following is NOT a component of computer hardware?', options: ['A. Keyboard', 'B. Operating System', 'C. Monitor', 'D. Mouse'], answer: 'B. Operating System' },
        { q: 'Computer software is best defined as:', options: ['A. Physical parts of computer', 'B. Set of instructions that tells computer what to do', 'C. Internet hardware', 'D. Computer cables'], answer: 'B. Set of instructions that tells computer what to do' },
        { q: 'Which one is an example of system software?', options: ['A. MS Word', 'B. Photoshop', 'C. Operating System', 'D. Game'], answer: 'C. Operating System' },
        { q: 'A computer network is used for:', options: ['A. Playing games only', 'B. Sharing resources between computers', 'C. Designing hardware', 'D. Installing software'], answer: 'B. Sharing resources between computers' },
        { q: 'An algorithm is:', options: ['A. Computer hardware', 'B. Set of instructions to solve a problem', 'C. Internet connection', 'D. Programming language'], answer: 'B. Set of instructions to solve a problem' },
        { q: 'DBMS stands for:', options: ['A. Data Backup Management System', 'B. Database Management System', 'C. Digital Binary Machine System', 'D. Data Basic Machine Software'], answer: 'B. Database Management System' },
        { q: 'Computer security ensures:', options: ['A. Speed only', 'B. Confidentiality, integrity, and availability', 'C. Only storage', 'D. Only internet access'], answer: 'B. Confidentiality, integrity, and availability' },
        { q: 'Which field is ranked #1 job in US according to Forbes?', options: ['A. Doctor', 'B. Software Developer', 'C. Teacher', 'D. Banker'], answer: 'B. Software Developer' },
        { q: 'Computer graphics deals with:', options: ['A. Writing programs', 'B. Generating images using computers', 'C. Networking computers', 'D. Data storage only'], answer: 'B. Generating images using computers' },
      ],
      subjective: [],
    },
    final: {
      title: 'CS101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'A robot is defined as:', options: ['A. A human-controlled machine only', 'B. A programmable machine capable of automatic actions', 'C. A computer software', 'D. A database system'], answer: 'B. A programmable machine capable of automatic actions' },
        { q: 'Information processing refers to:', options: ['A. Manual writing only', 'B. Manipulation of digital information by computers', 'C. Printing documents', 'D. Installing hardware'], answer: 'B. Manipulation of digital information by computers' },
        { q: 'Computer Science helps in:', options: ['A. Only gaming', 'B. Almost all professional fields', 'C. Only banking', 'D. Only education'], answer: 'B. Almost all professional fields' },
        { q: 'Software includes:', options: ['A. Only hardware parts', 'B. Operating system and applications', 'C. Only internet cables', 'D. Mouse and keyboard'], answer: 'B. Operating system and applications' },
        { q: 'Which of the following is a domain where Computer Science is used?', options: ['A. Only schools', 'B. Hospitals, banks, telecom, software industry', 'C. Only government offices', 'D. Only gaming'], answer: 'B. Hospitals, banks, telecom, software industry' },
        { q: 'Database is best described as:', options: ['A. Random files in computer', 'B. Organized collection of data for fast retrieval', 'C. Internet browser', 'D. Programming tool'], answer: 'B. Organized collection of data for fast retrieval' },
        { q: 'Computer programming is the process of:', options: ['A. Installing hardware', 'B. Designing and building executable programs', 'C. Browsing internet', 'D. Typing documents'], answer: 'B. Designing and building executable programs' },
        { q: 'Which resource is most commonly shared on a computer network today?', options: ['A. Printer only', 'B. Internet connection', 'C. Mouse', 'D. CPU'], answer: 'B. Internet connection' },
        { q: 'Computer hardware refers to:', options: ['A. Instructions for computer', 'B. Physical components of a computer', 'C. Internet connection', 'D. Software programs'], answer: 'B. Physical components of a computer' },
        { q: 'Which of the following is NOT a CS application area?', options: ['A. Freelancing', 'B. Pak Army systems', 'C. Cooking recipes', 'D. Hospitals systems'], answer: 'C. Cooking recipes' },
      ],
      subjective: [],
    },
  },

  ENG101: {
    mid: {
      title: 'ENG101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: '"Theatre" and "Theater" are:', options: ['A. Words with completely different meanings', 'B. The same word with different regional spellings', 'C. Both incorrect spellings', 'D. Slang words'], answer: 'B. The same word with different regional spellings' },
        { q: 'Which spelling is American English?', options: ['A. Theatre', 'B. Catalogue', 'C. Theater', 'D. Colour'], answer: 'C. Theater' },
        { q: 'The word "set" is known for:', options: ['A. Having very few meanings', 'B. Having one of the largest number of meanings in English', 'C. Being only a verb', 'D. Having no adjective form'], answer: 'B. Having one of the largest number of meanings in English' },
        { q: '"The boys like to play on the hard court." Here "play" means:', options: ['A. Perform music', 'B. Act in a drama', 'C. Take part in a game or sport', 'D. Use water'], answer: 'C. Take part in a game or sport' },
        { q: '"Amna will play the sitar." Here "play" means:', options: ['A. Take part in a game', 'B. Perform on a musical instrument', 'C. Act in a drama', 'D. Use a strategy'], answer: 'B. Perform on a musical instrument' },
        { q: 'The word "Guys" is labeled as:', options: ['A. Formal', 'B. Slang or informal', 'C. Technical', 'D. Academic'], answer: 'B. Slang or informal' },
        { q: 'What does "et cetera (etc.)" mean?', options: ['A. For example', 'B. And others / and so on', 'C. That is', 'D. Before experience'], answer: 'B. And others / and so on' },
        { q: 'What does "e.g." mean?', options: ['A. And so on', 'B. That is', 'C. For example', 'D. And others'], answer: 'C. For example' },
        { q: 'What does "coup d\'état" mean?', options: ['A. A peace agreement', 'B. A sudden forceful overthrow of a government', 'C. A democratic election', 'D. A legal court decision'], answer: 'B. A sudden forceful overthrow of a government' },
        { q: '"My roommate is hard up." The phrase "hard up" means:', options: ['A. Working very hard', 'B. Physically strong', 'C. Short of money', 'D. Very busy'], answer: 'C. Short of money' },
      ],
      subjective: [],
    },
    final: {
      title: 'ENG101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'What does "a priori" mean?', options: ['A. Based on experience', 'B. And so on', 'C. By itself', 'D. Based on reasoning before experience'], answer: 'D. Based on reasoning before experience' },
        { q: 'What does "et al." mean?', options: ['A. For example', 'B. And others (used in academic citations)', 'C. And so on', 'D. By itself'], answer: 'B. And others (used in academic citations)' },
        { q: 'What does "per se" mean?', options: ['A. For example', 'B. And others', 'C. By or in itself', 'D. Before experience'], answer: 'C. By or in itself' },
        { q: '"I don\'t get how you found the answer." Here "get" means:', options: ['A. Receive', 'B. Go somewhere', 'C. Understand', 'D. Buy'], answer: 'C. Understand' },
        { q: '"Prof. held forth for an hour." The phrase "held forth" means:', options: ['A. Kept quiet', 'B. Spoke at length', 'C. Walked forward', 'D. Listened carefully'], answer: 'B. Spoke at length' },
        { q: 'Which spelling is British English?', options: ['A. Catalog', 'B. Theater', 'C. Catalogue', 'D. Color'], answer: 'C. Catalogue' },
        { q: '"A week without water makes one weak" is a:', options: ['A. Metaphor', 'B. Simile', 'C. Play on words (pun)', 'D. Alliteration'], answer: 'C. Play on words (pun)' },
        { q: '"The gardener played the hose on the flower beds." Here "play" means:', options: ['A. Perform music', 'B. Direct a stream of water', 'C. Act in a drama', 'D. Use a game strategy'], answer: 'B. Direct a stream of water' },
        { q: 'The word "Cool" (meaning great/excellent) is labeled as:', options: ['A. Formal', 'B. Scientific', 'C. Slang or informal', 'D. Legal term'], answer: 'C. Slang or informal' },
        { q: '"It was a clever play that won the game." Here "play" means:', options: ['A. A drama', 'B. Music performance', 'C. A move or strategy in a game', 'D. Water direction'], answer: 'C. A move or strategy in a game' },
      ],
      subjective: [],
    },
  },

  PAK101: {
    mid: {
      title: 'PAK101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: 'Ideology is defined as:', options: ['A. Political system', 'B. Set of beliefs, values and ideals', 'C. Economic policy', 'D. Religious book'], answer: 'B. Set of beliefs, values and ideals' },
        { q: 'Philosophical explanation of Pakistan ideology was given by:', options: ['A. Sir Syed Ahmed Khan', 'B. Allama Iqbal', 'C. Liaquat Ali Khan', 'D. Gandhi'], answer: 'B. Allama Iqbal' },
        { q: 'Political leadership for Pakistan movement was provided by:', options: ['A. Allama Iqbal', 'B. Sir Syed', 'C. Quaid-i-Azam', 'D. Nehru'], answer: 'C. Quaid-i-Azam' },
        { q: 'Two Nation Theory is based on:', options: ['A. Geography', 'B. Language', 'C. Religion', 'D. Economy'], answer: 'C. Religion' },
        { q: 'Muslim nationhood is based on:', options: ['A. Territory', 'B. Race', 'C. Language', 'D. Faith (Islam)'], answer: 'D. Faith (Islam)' },
        { q: 'War of Independence took place in:', options: ['A. 1757', 'B. 1857', 'C. 1905', 'D. 1947'], answer: 'B. 1857' },
        { q: 'Sir Syed Ahmed Khan started:', options: ['A. Pakistan Movement', 'B. Aligarh Movement', 'C. Khilafat Movement', 'D. Swadeshi Movement'], answer: 'B. Aligarh Movement' },
        { q: 'Indian National Congress was founded in:', options: ['A. 1885', 'B. 1906', 'C. 1857', 'D. 1940'], answer: 'A. 1885' },
        { q: 'All India Muslim League was founded in:', options: ['A. Lahore', 'B. Karachi', 'C. Dhaka', 'D. Delhi'], answer: 'C. Dhaka' },
        { q: 'Objectives Resolution was passed in:', options: ['A. 1947', 'B. 1948', 'C. 1949', 'D. 1956'], answer: 'C. 1949' },
      ],
      subjective: [],
    },
    final: {
      title: 'PAK101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'Deen-e-Ilahi was introduced by:', options: ['A. Aurangzeb', 'B. Akbar', 'C. Shah Jahan', 'D. Babur'], answer: 'B. Akbar' },
        { q: 'Mahmud of Ghazna attacked India:', options: ['A. 5 times', 'B. 10 times', 'C. 17 times', 'D. 25 times'], answer: 'C. 17 times' },
        { q: 'Hindi-Urdu controversy started in:', options: ['A. 1857', 'B. 1867', 'C. 1885', 'D. 1906'], answer: 'B. 1867' },
        { q: 'Islam and Hinduism are considered:', options: ['A. Same systems', 'B. Two social orders', 'C. Political ideologies', 'D. Economic systems'], answer: 'B. Two social orders' },
        { q: 'Ideology of Pakistan developed through:', options: ['A. Sudden revolution', 'B. Evolutionary process', 'C. War only', 'D. Foreign influence'], answer: 'B. Evolutionary process' },
        { q: 'Muslim nationalism emphasizes:', options: ['A. Social justice', 'B. Equality', 'C. Religious tolerance', 'D. All of these'], answer: 'D. All of these' },
        { q: 'Ali Hujwiri and other Sufis:', options: ['A. Fought wars', 'B. Spread Islam through teachings', 'C. Built empires', 'D. Wrote laws'], answer: 'B. Spread Islam through teachings' },
        { q: 'Ideology provides:', options: ['A. Entertainment', 'B. Direction and worldview', 'C. Only laws', 'D. Only culture'], answer: 'B. Direction and worldview' },
        { q: 'Muhammad bin Qasim is known for:', options: ['A. Writing books', 'B. Conquering parts of India', 'C. Political leadership', 'D. Economic reforms'], answer: 'B. Conquering parts of India' },
        { q: 'Muslims demanded separate electorates because:', options: ['A. Economic issues', 'B. Religious differences', 'C. Cultural similarity', 'D. Language issue only'], answer: 'B. Religious differences' },
      ],
      subjective: [],
    },
  },
};

export default examData;