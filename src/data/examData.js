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
        {
        "q": "Question content is missing in the PDF for Q1.",
        "options": [
            "A. (not available)",
            "B. (not available)",
            "C. (not available)",
            "D. (not available)"
        ],
        "answer": "A. (not available)"
    },
    {
        "q": "Which of the following statements is true about ∫₀¹ (sinx + cosx) dx?",
        "options": [
            "A. ∫₀¹ (sinx+cosx)dx = [sinx]₁₀ + [cosx]₁₀",
            "B. ∫₀¹ (sinx+cosx)dx = [sinx]₁₀ - [cosx]₁₀",
            "C. ∫₀¹ (sinx+cosx)dx = [cosx]₁₀ + [sinx]₁₀",
            "D. None"
        ],
        "answer": "C. ∫₀¹ (sinx+cosx)dx = [cosx]₁₀ + [sinx]₁₀"
    },
    {
        "q": "If the function and limits of definite integral are the same and variable of integration are changed, i.e. ∫ₐᵇ f(x)dx = ∫ₐᵇ f(t)dt, then the answer would be:",
        "options": [
            "A. do not changed",
            "B. changed"
        ],
        "answer": "A. do not changed"
    },
    {
        "q": "In integration of f(x) = x(x² - 3)⁴, let u = x² - 3, then du =",
        "options": [
            "A. dx",
            "B. x",
            "C. 2x",
            "D. 2x dx"
        ],
        "answer": "D. 2x dx"
    },
    {
        "q": "Which of the following statements is true?",
        "options": [
            "A. ∫₀¹ (4sinx + 3sec²x) dx = 3∫₀¹ 4sinx dx + 4∫₀¹ 3sec²x dx",
            "B. None",
            "C. ∫₀¹ (2cosx - 5tan²x) dx = ∫₀¹ 5tan²x dx - ∫₀¹ 2cosx dx",
            "D. ∫₀¹ 7cosx dx = 7[sinx]₁₀"
        ],
        "answer": "D. ∫₀¹ 7cosx dx = 7[sinx]₁₀"
    },
    {
        "q": "Which of the following is the definite integral of f(x) = x² from x = 1 to x = 2?",
        "options": [
            "A. 8/3",
            "B. 7/3",
            "C. None of these.",
            "D. 7"
        ],
        "answer": "B. 7/3"
    },
    {
        "q": "The integral of a constant function is 0.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "A. False"
    },
    {
        "q": "The integral of f(x) = sin(x + 1) from x = 0 to x = 1 is:",
        "options": [
            "A. sin(1) - sin(2)",
            "B. cos(2) - 1",
            "C. cos(1) - cos(2)",
            "D. cos(2) - cos(1)"
        ],
        "answer": "C. cos(1) - cos(2)"
    },
    {
        "q": "The Volume of a cylindrical shell can be expressed as:",
        "options": [
            "A. V = (area of cross section) × (thickness)",
            "B. V = (area of cross section) × (height)"
        ],
        "answer": "A. V = (area of cross section) × (thickness)"
    },
    {
        "q": "Area lying between the parabola y² = 4ax and its latus rectum is:",
        "options": [
            "A. 4/3 a",
            "B. 8/3 a",
            "C. 8/3 a²",
            "D. None of these"
        ],
        "answer": "C. 8/3 a²"
    },

    {
        "q": "If the definite integral of f(x) = sec²x over the interval [0, a] is equal to '1' then what will be the value of the definite integral of f(x) = (sec²x) + 3 over the same interval?",
        "options": [
            "A. 4",
            "B. -1-3a",
            "C. 1-3a",
            "D. 1+3a"
        ],
        "answer": "D. 1+3a"
    },
    {
        "q": "If f(x) = x and g(x) = x + 1 are integrable functions over the interval [a, b] for a < b, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫ₐᵇ f(x) dx = ∫ₐᵇ g(x) dx",
            "B. ∫ₐᵇ f(x) dx ≠ ∫ₐᵇ g(x) dx",
            "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx",
            "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
        ],
        "answer": "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx"
    },
    {
        "q": "If the definite integral of f(x) = Sin x over the interval [-a, 0] is equal to -2 then what will be the value of the definite integral of f(x) = (Sin x) + 1 over the same interval?",
        "options": [
            "A. -2 + a",
            "B. 2 - a",
            "C. -2 - a",
            "D. -1"
        ],
        "answer": "A. -2 + a"
    },
    {
        "q": "If f(x) = x and g(x) = 2x are integrable functions over the interval [0, a] for a > 0, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫₀ᵃ f(x) dx > ∫₀ᵃ g(x) dx",
            "B. ∫₀ᵃ f(x) dx < ∫₀ᵃ g(x) dx",
            "C. ∫₀ᵃ f(x) dx = ∫₀ᵃ g(x) dx",
            "D. ∫₀ᵃ f(x) dx ≠ ∫₀ᵃ g(x) dx"
        ],
        "answer": "B. ∫₀ᵃ f(x) dx < ∫₀ᵃ g(x) dx"
    },
    {
        "q": "The expressions (x² + x), (x² + x + 5), (x² + x - 3) have the same ....",
        "options": [
            "A. Derivative",
            "B. Anti-derivative"
        ],
        "answer": "A. Derivative"
    },
    {
        "q": "The area of the region bounded by the curves y = √x, y = 1, and x = 4 is:",
        "options": [
            "A. 0",
            "B. 1/2",
            "C. None of these",
            "D. 5/3"
        ],
        "answer": "D. 5/3"
    },
    {
        "q": "The value of ∫₋₁^∞ dx/x² is:",
        "options": [
            "A. 1",
            "B. 3",
            "C. 0",
            "D. Diverges (Correct answer missing from options)"
        ],
        "answer": "D. Diverges (Correct answer missing from options)"
    },
    {
        "q": "Question content is missing from the PDF for Q8.",
        "options": [
            "A. (not available)",
            "B. (not available)",
            "C. (not available)",
            "D. (not available)"
        ],
        "answer": "A. (not available)"
    },
    {
        "q": "Use cylindrical shells to find the volume of the solid generated when the region 'R' enclosed between y = 2x + 1 and y = -2x - 3 in the interval [1,3] is revolved about the y-axis is ______.",
        "options": [
            "A. V = ∫₁³ 2πx((2x+1)+(-2x-3)) dx",
            "B. V = ∫₁³ 2πx((2x+1)-(-2x-3)) dx"
        ],
        "answer": "B. V = ∫₁³ 2πx((2x+1)-(-2x-3)) dx"
    },
    {
        "q": "If f(x) = x and g(x) = x - 1 are integrable functions over the interval [a, b] for a < b, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫ₐᵇ f(x) dx = ∫ₐᵇ g(x) dx",
            "B. ∫ₐᵇ f(x) dx ≠ ∫ₐᵇ g(x) dx",
            "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx",
            "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
        ],
        "answer": "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
    }





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
    


    {
        "q": "A sub graph of a graph G that contains every vertex of G and is a tree is called",
        "options": [
            "A. Trivial tree",
            "B. empty tree",
            "C. Spanning tree"
        ],
        "answer": "C. Spanning tree"
    },
    {
        "q": "A vertex of degree greater than 1 in a tree is called",
        "options": [
            "A. Branch vertex",
            "B. Terminal vertex",
            "C. Ancestor"
        ],
        "answer": "A. Branch vertex"
    },
    {
        "q": "A circuit that consist of a single vertex is called",
        "options": [
            "A. Trivial",
            "B. Tree",
            "C. Empty"
        ],
        "answer": "A. Trivial"
    },
    {
        "q": "If a graph is a tree then",
        "options": [
            "A. it has 2 spanning trees",
            "B. it has only 1 spanning tree",
            "C. it has 4 spanning trees",
            "D. it has 5 spanning trees"
        ],
        "answer": "B. it has only 1 spanning tree"
    },
    {
        "q": "If f(x) = 2x + 1, g(x) = x² - 1 then f ∘ g(x) =",
        "options": [
            "A. x² - 1",
            "B. 2x² - 1",
            "C. 2x³ - 1"
        ],
        "answer": "B. 2x² - 1"
    },
    {
        "q": "Let f is defined recursively by f(0)=3, f(x+1)=2f(x)+3 then f(1) =",
        "options": [
            "A. 9",
            "B. 10",
            "C. 18",
            "D. 21"
        ],
        "answer": "A. 9"
    },
    {
        "q": "1+2+3+...+n = n(n+1)/2 for all integers n≥1 then P(k) is",
        "options": [
            "A. 1+2+3+...+k = k(k+1)/2",
            "B. 1+2+3+...+n = n(n+1)/2",
            "C. 1+2+3+...+(k+1) = (k+1)(k+2)/2",
            "D. 1+2+3+...+(k-1) = k(k-1)/2"
        ],
        "answer": "A. 1+2+3+...+k = k(k+1)/2"
    },
    {
        "q": "The word refers to a step-by-step method for performing some action.",
        "options": [
            "A. Series",
            "B. Relation",
            "C. Algorithm",
            "D. Function"
        ],
        "answer": "C. Algorithm"
    },
    {
        "q": "An arrangement of objects without the consideration of order is called",
        "options": [
            "A. Permutation",
            "B. Combination",
            "C. Selection",
            "D. None of these"
        ],
        "answer": "B. Combination"
    },
    {
        "q": "A procedure that yields a given set of possible outcomes is called",
        "options": [
            "A. Event",
            "B. Outcome",
            "C. Experiment"
        ],
        "answer": "C. Experiment"
    },
    {
        "q": "Any two spanning trees for a graph",
        "options": [
            "A. Does not contain same number of edges",
            "B. Have the same degree of corresponding edges",
            "C. contain same number of edges",
            "D. May or may not contain same number of edges"
        ],
        "answer": "C. contain same number of edges"
    },
    {
        "q": "Rephrase the following statement in bi-conditional form: 'If you get up early in the morning, you will be healthy'",
        "options": [
            "A. You will be healthy if and only if you get up early in the morning",
            "B. If you will be healthy then you will get up early in the morning",
            "C. None of these"
        ],
        "answer": "A. You will be healthy if and only if you get up early in the morning"
    },
    {
        "q": "The indirect proof of a statement p → q involves",
        "options": [
            "A. Considering q and then try to reach p",
            "B. Considering p and ~q are true and try to reach contradiction",
            "C. Considering p and then try to reach q",
            "D. Considering ~p and then try to reach q"
        ],
        "answer": "B. Considering p and ~q are true and try to reach contradiction"
    },
    {
        "q": "What is the contra positive of the given statement: 'If square root of every prime number is irrational then square root of 2 is irrational.'",
        "options": [
            "A. If square root of 2 is not irrational then square root of every prime number is not irrational.",
            "B. If square root of 2 is irrational then square root of every prime number is not irrational.",
            "C. If square root of 2 is not irrational then square root of every prime number is irrational.",
            "D. If square root of every prime number is not irrational then square root of 2 is not irrational."
        ],
        "answer": "A. If square root of 2 is not irrational then square root of every prime number is not irrational."
    },
    {
        "q": "Which of the following law is used to show: p ↔ q ≡ q ↔ p",
        "options": [
            "A. Implication Law",
            "B. Commutative law",
            "C. Exportation Law",
            "D. None of these"
        ],
        "answer": "B. Commutative law"
    },
    {
        "q": "If p = It is red, q = It is hot. Then 'It is not red but hot' is denoted by p ∧ ~q.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "B. False"
    },
    {
        "q": "A circuit with two input signals and one output signal is called",
        "options": [
            "A. NOT-gate (or inverter)",
            "B. AND-gate",
            "C. None of these"
        ],
        "answer": "B. AND-gate"
    },
    {
        "q": "The direct proof of a statement p → q involves",
        "options": [
            "A. considering q and then try to reach p",
            "B. considering p and then try to reach q",
            "C. considering p and ~q and try to reach contradiction",
            "D. None of these"
        ],
        "answer": "B. considering p and then try to reach q"
    },
    {
        "q": "The contradiction proof of a statement p → q involves",
        "options": [
            "A. Considering p and then try to reach q",
            "B. Considering ~q and then try to reach ~p",
            "C. Considering p and ~q are true and try to reach contradiction",
            "D. None of these"
        ],
        "answer": "C. Considering p and ~q are true and try to reach contradiction"
    },
    {
        "q": "The list of the degrees of the vertices of a graph in non-increasing order is called",
        "options": [
            "A. Isomorphic Invariant",
            "B. Degree Sequence",
            "C. Order of Graph",
            "D. Length of Circuit"
        ],
        "answer": "B. Degree Sequence"
    },
    {
        "q": "A vertex of degree 1 in a tree is called",
        "options": [
            "A. Terminal vertex",
            "B. Internal vertex"
        ],
        "answer": "A. Terminal vertex"
    },
    {
        "q": "Complete graph is planar if",
        "options": [
            "A. n = 4",
            "B. n > 4",
            "C. n ≤ 4"
        ],
        "answer": "C. n ≤ 4"
    },
    {
        "q": "The logical expression p ∨ q will be read as",
        "options": [
            "A. p or q",
            "B. p and q",
            "C. p × q",
            "D. p - q"
        ],
        "answer": "A. p or q"
    },
    {
        "q": "How many ways are there to select a first prize winner, a second prize winner and a third prize winner from 100 different people who have entered in a contest.",
        "options": [
            "A. P(97,3)",
            "B. P(100,3)",
            "C. P(100,97)",
            "D. None of these"
        ],
        "answer": "B. P(100,3)"
    },
    {
        "q": "The value of (n+1)!/(n-1)! is",
        "options": [
            "A. 0",
            "B. n(n-1)",
            "C. n² + n",
            "D. can not be determined"
        ],
        "answer": "C. n² + n"
    },
    {
        "q": "To find the number of unordered partitions, we have to count the ... partitions and then divide it by suitable number to erase the order in partitions.",
        "options": [
            "A. unordered",
            "B. ordered",
            "C. random",
            "D. None of these"
        ],
        "answer": "B. ordered"
    },
    {
        "q": "The same element can never appear ... in a set.",
        "options": [
            "A. twice",
            "B. once",
            "C. thrice"
        ],
        "answer": "A. twice"
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

    {
        "q": "An erect object is in front of a convex mirror a distance greater than the focal length. The image is:",
        "options": [
            "A. Real, inverted, and smaller than the object",
            "B. Real, inverted, and larger than the object",
            "C. Virtual, erect, and smaller than the object",
            "D. Virtual, inverted, and larger than the object"
        ],
        "answer": "C. Virtual, erect, and smaller than the object"
    },
    {
        "q": "Total flux through a closed surface depends on:",
        "options": [
            "A. Shape of surface",
            "B. Charge and - NC",
            "C. Charge enclosed",
            "D. Medium only"
        ],
        "answer": "C. Charge enclosed"
    },
    {
        "q": "A charge Q is moving with a velocity (v) parallel to a magnetic field (B). Force on the charge due to magnetic field is:",
        "options": [
            "A. Constant",
            "B. Minimum",
            "C. Maximum",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "Which electromagnetic radiation transmits the highest photon energy?",
        "options": [
            "A. Ultraviolet radiations",
            "B. Infrared rays",
            "C. Microwaves",
            "D. Gamma rays"
        ],
        "answer": "D. Gamma rays"
    },
    {
        "q": "The resolving power of a telescope can be increased by:",
        "options": [
            "A. decreasing the lens diameters",
            "B. increasing the lens diameters",
            "C. increasing the objective focal length and decreasing the eyepiece focal length",
            "D. inserting a correction lens between objective and eyepiece"
        ],
        "answer": "B. increasing the lens diameters"
    },
    {
        "q": "The speed of light in free space is:",
        "options": [
            "A. Less than that in air",
            "B. Unpredictable",
            "C. Constant",
            "D. Variable"
        ],
        "answer": "C. Constant"
    },
    {
        "q": "In special relativity, the factor γ is defined as:",
        "options": [
            "A. 1 - (v/c)²",
            "B. 1 / (1 + (v/c)²)",
            "C. 1 / sqrt(1 - (v/c)²)",
            "D. 1 - (v/c)²"
        ],
        "answer": "C. 1 / sqrt(1 - (v/c)²)"
    },
    {
        "q": "Polarization of light is defined as:",
        "options": [
            "A. The process of light aligning with Earth's magnetic field.",
            "B. The process of light vibrating in a specific direction.",
            "C. The process of light passing through a polar bear.",
            "D. The process of light changing its color."
        ],
        "answer": "B. The process of light vibrating in a specific direction."
    },
    {
        "q": "Which of the following is the difference between sound and light waves:",
        "options": [
            "A. sound is not subject to diffraction",
            "B. sound does not require energy for its origin",
            "C. sound is a longitudinal wave rather than a transverse wave",
            "D. sound is a torsional wave rather than a longitudinal wave"
        ],
        "answer": "C. sound is a longitudinal wave rather than a transverse wave"
    },
    {
        "q": "In an electrical circuit with constant resistance, if the voltage source is doubled, what happens to the power delivered to the circuit?",
        "options": [
            "A. The power is quadrupled.",
            "B. The power remains the same.",
            "C. The power is halved.",
            "D. The power is doubled."
        ],
        "answer": "A. The power is quadrupled."
    },
    {
        "q": "The temperature of the ice throughout the melting process when it is continuously heated by a small gas flame is:",
        "options": [
            "A. Remains constant initially and then increases.",
            "B. Increases until it turns into liquid water.",
            "C. Remains constant.",
            "D. Rises gradually."
        ],
        "answer": "C. Remains constant."
    },
    {
        "q": "Radio waves and light waves are",
        "options": [
            "A. Electromagnetic and longitudinal both",
            "B. Electromagnetic and transverse both",
            "C. Transverse waves",
            "D. Longitudinal waves"
        ],
        "answer": "B. Electromagnetic and transverse both"
    },
    {
        "q": "If the area of the plates increase by 6 times, and the distance between plates is reduced to half, the capacitance will be",
        "options": [
            "A. increased by 12 times",
            "B. decreased by 12 times",
            "C. increased by 3 times",
            "D. decreased by 3 times"
        ],
        "answer": "A. increased by 12 times"
    },
    {
        "q": "A stationary charge placed in a magnetic field will experience:",
        "options": [
            "A. An electric force.",
            "B. Both electric and magnetic forces.",
            "C. A magnetic force.",
            "D. No force."
        ],
        "answer": "D. No force."
    },
    {
        "q": "If an electron of charge is accelerated through a potential difference V, it will acquire energy",
        "options": [
            "A. V/2",
            "B. E/2",
            "C. 2V",
            "D. Ve"
        ],
        "answer": "D. Ve"
    },
    {
        "q": "Which of the following statements is false about the properties of electromagnetic waves?",
        "options": [
            "A. Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave.",
            "B. The energy of the electromagnetic wave is divided equally between electric and magnetic fields.",
            "C. These waves do not require any material medium for propagation.",
            "D. Both electric and magnetic field vectors attain their maximum and minimum at the same place and at the same time."
        ],
        "answer": "A. Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave."
    },
    {
        "q": "How does the total current behave when it is divided between two resistors in an electrical circuit?",
        "options": [
            "A. Decreases",
            "B. Remains constant",
            "C. Becomes zero",
            "D. Increases"
        ],
        "answer": "B. Remains constant"
    },
    {
        "q": "The units of Stefan Boltzmann constant are",
        "options": [
            "A. W m⁻² K⁻⁴",
            "B. W m⁻² K⁻⁴",
            "C. W m⁻² K⁻⁴",
            "D. W m⁻² K⁻⁴"
        ],
        "answer": "A. W m⁻² K⁻⁴"
    },
    {
        "q": "Which of the following statement best describes heat capacity?",
        "options": [
            "A. Amount of heat required to rise the temperature by 1 oC.",
            "B. Heat needed to melt a substance.",
            "C. Resistance of a body to temperature change.",
            "D. The ability of a body to retain heat."
        ],
        "answer": "A. Amount of heat required to rise the temperature by 1 oC."
    },
    {
        "q": "How could the unit of potential difference, the volt, also be written?",
        "options": [
            "A. J/C",
            "B. C/J",
            "C. A/s",
            "D. C/A"
        ],
        "answer": "A. J/C"
    }



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
        {
        "q": "Meaning of a statement in natural language depends on its:",
        "options": [
            "A. Grammar",
            "B. Context",
            "C. Formatting",
            "D. Style"
        ],
        "answer": "B. Context"
    },
    {
        "q": "Data mining is practiced on data collections, called data warehouses.",
        "options": [
            "A. vibrant",
            "B. forceful",
            "C. static",
            "D. dynamic"
        ],
        "answer": "D. dynamic"
    },
    {
        "q": "Ethics and legality are essential in many industries including:",
        "options": [
            "A. All of these",
            "B. Doctors",
            "C. Government officer",
            "D. Teachers"
        ],
        "answer": "A. All of these"
    },
    {
        "q": "In hash file, if a disproportionate number of keys happen to hash to the same bucket, it may cause",
        "options": [
            "A. faster search",
            "B. even distribution",
            "C. efficient retrieval",
            "D. clustering"
        ],
        "answer": "D. clustering"
    },
    {
        "q": "The Turing test result of program DOCTOR developed by Joseph Weizenbaum was:",
        "options": [
            "A. Failed",
            "B. No result",
            "C. Ambiguous",
            "D. Passed"
        ],
        "answer": "D. Passed"
    },
    {
        "q": "In hash file, the key used to identify an employee's record is the ______.",
        "options": [
            "A. employee's position",
            "B. department",
            "C. name",
            "D. identification number"
        ],
        "answer": "D. identification number"
    },
    {
        "q": "A track that leads to a simulation oriented methodology:",
        "options": [
            "A. Theoretical",
            "B. Intelligent",
            "C. Proper",
            "D. Engineering"
        ],
        "answer": "D. Engineering"
    },
    {
        "q": "Copyright can be applied on:",
        "options": [
            "A. All of these",
            "B. Music",
            "C. Dramatic works",
            "D. Artistic work"
        ],
        "answer": "A. All of these"
    },
    {
        "q": "Ethical issues are related to:",
        "options": [
            "A. Linguistics principles",
            "B. Moral principles",
            "C. AI principles",
            "D. Behaviour principles"
        ],
        "answer": "B. Moral principles"
    },
    {
        "q": "Usual way of protecting software is:",
        "options": [
            "A. Company monogram",
            "B. Copyright",
            "C. Patent",
            "D. Rules"
        ],
        "answer": "B. Copyright"
    },


    {
        "q": "In Encryption, a digital signature is actually a ____",
        "options": [
            "A. server",
            "B. bit pattern",
            "C. protocol",
            "D. array of characters"
        ],
        "answer": "B. bit pattern"
    },
    {
        "q": "The traditional ways of protecting information to control its access before Encryption was using ______",
        "options": [
            "A. Passwords",
            "B. Image processing",
            "C. Digital Signatures",
            "D. Finger prints"
        ],
        "answer": "A. Passwords"
    },
    {
        "q": "By using ______ we can have a secure version of the applications.",
        "options": [
            "A. 3G",
            "B. Encryption techniques",
            "C. XML",
            "D. Spam filters"
        ],
        "answer": "B. Encryption techniques"
    },
    {
        "q": "In Pakistan, the Federal Investigation Agency (FIA) act was passed in the year ______",
        "options": [
            "A. 1974",
            "B. 1975",
            "C. 1976",
            "D. 1977"
        ],
        "answer": "A. 1974"
    },
    {
        "q": "In Pakistan, the Prevention of Electronic Crimes Ordinance was passed in the year ______",
        "options": [
            "A. 2007",
            "B. 2009",
            "C. 2010",
            "D. 2008"
        ],
        "answer": "A. 2007"
    },
    {
        "q": "In context of legal approaches to network security, one of the main issue is ______",
        "options": [
            "A. lack of skilled persons in this area",
            "B. lack of data",
            "C. International law that makes Illegal in one country and legal in another country",
            "D. slow technological development"
        ],
        "answer": "C. International law that makes Illegal in one country and legal in another country"
    },


  {
    "q": "The correct syntax of while loop is:",
    "options": [
      "A. while()\n{\nif(condition)\n{\n//statements\n}",
      "B. while(condition);\n{\n//statements\n}",
      "C. while(condition)\n{\n//statements\n}",
      "D. {\n//statements\n}while(condition)"
    ],
    "answer": "C. while(condition)\n{\n//statements\n}"
  },
  {
    "q": "What will be the output of the following code?\nint marks = 72;\nif(marks >= 90)\n cout<<\"Eligible for scholarship\";\nelse\n cout<<\"Not eligible for scholarship\";",
    "options": [
      "A. Runtime error",
      "B. Eligible for scholarship",
      "C. Not eligible for scholarship",
      "D. Might be eligible"
    ],
    "answer": "C. Not eligible for scholarship"
  },
  {
    "q": "Which control structure is used to repeat a sequence of instructions?",
    "options": [
      "A. Condition",
      "B. Statement",
      "C. Loop",
      "D. Pseudocode"
    ],
    "answer": "C. Loop"
  },
  {
    "q": "What will be the output of the following pseudocode?\nint marks = 75;\nif (marks >= 33)\n Output (\"Pass\")\nelse\n Output (\"Fail\")",
    "options": [
      "A. 75",
      "B. Fail",
      "C. 33",
      "D. Pass"
    ],
    "answer": "D. Pass"
  },
  {
    "q": "Which operator is used for assignment in C++?",
    "options": [
      "A. +",
      "B. ;",
      "C. =",
      "D. =="
    ],
    "answer": "C. ="
  },
  {
    "q": "Pseudocode is an informal notational system.",
    "options": [
      "A. Program Instructions",
      "B. Pseudocode",
      "C. Method",
      "D. Model"
    ],
    "answer": "B. Pseudocode"
  },
  {
    "q": "A collection of primitives and rules to combine them is called:",
    "options": [
      "A. Programming Language",
      "B. Programming Instructions",
      "C. Programming Code",
      "D. Programming Model"
    ],
    "answer": "A. Programming Language"
  },
  {
    "q": "Semantics refers to the ____ of the primitive.",
    "options": [
      "A. Properties",
      "B. Meaning",
      "C. Symbolic Representation",
      "D. Characteristics"
    ],
    "answer": "B. Meaning"
  },
  {
    "q": "In formal programming language the algorithms can be expressed at a conceptually ____ level than in machine language.",
    "options": [
      "A. ground",
      "B. lower",
      "C. higher",
      "D. medium"
    ],
    "answer": "C. higher"
  },
  {
    "q": "An algorithm is a method for solving a problem in a ____ order.",
    "options": [
      "A. symmetric",
      "B. systematic",
      "C. static",
      "D. semantic"
    ],
    "answer": "B. systematic"
  },
  {
    "q": "The standard formula for converting Celsius to Fahrenheit is:",
    "options": [
      "A. F = 32C + (5/9)",
      "B. F = (9/5)C + 32",
      "C. F = 32C + (9/5)",
      "D. F = (5/9)C + 32"
    ],
    "answer": "B. F = (9/5)C + 32"
  },
  {
    "q": "A formal representation of an algorithm is a:",
    "options": [
      "A. Process Model",
      "B. Process Design",
      "C. Analysis",
      "D. Program"
    ],
    "answer": "D. Program"
  },
  {
    "q": "An algorithm must have a well-established structure in terms of the order of its ____.",
    "options": [
      "A. Execution",
      "B. Termination",
      "C. Return",
      "D. Analysis"
    ],
    "answer": "A. Execution"
  },
  {
    "q": "An algorithm must have well-defined boundaries and must execute and finish, therefore, its execution must lead to an ____.",
    "options": [
      "A. Statement",
      "B. Condition",
      "C. Start",
      "D. End"
    ],
    "answer": "D. End"
  },
  {
    "q": "Which of the following is NOT a characteristic of a good algorithm?",
    "options": [
      "A. Terminating Process",
      "B. Unstructured",
      "C. Executable",
      "D. Unambiguous"
    ],
    "answer": "B. Unstructured"
  },
  {
    "q": "Algorithm is simply a ____ that define how a task is ____.",
    "options": [
      "A. set of steps, performed",
      "B. a single step, performed",
      "C. set of steps, halted",
      "D. a single step, halted"
    ],
    "answer": "A. set of steps, performed"
  },
  {
    "q": "Researchers believe that imagination and creativity are forms of ____.",
    "options": [
      "A. machine cycle",
      "B. human cognition only",
      "C. algorithm execution",
      "D. single giant step"
    ],
    "answer": "C. algorithm execution"
  },
  {
    "q": "Which of the following is NOT part of the algorithm to convert KM to Meters?",
    "options": [
      "A. Add 1000 to the output",
      "B. Take input of KM's",
      "C. Multiply the input with 1000",
      "D. Display the result"
    ],
    "answer": "A. Add 1000 to the output"
  },
  {
    "q": "In Encryption, a digital signature is actually a ____",
    "options": [
      "A. server",
      "B. bit pattern",
      "C. protocol",
      "D. array of characters"
    ],
    "answer": "B. bit pattern"
  },
  {
    "q": "The traditional ways of protecting information to control its access before Encryption was using ______",
    "options": [
      "A. Passwords",
      "B. Image processing",
      "C. Digital Signatures",
      "D. Finger prints"
    ],
    "answer": "A. Passwords"
  },
  {
    "q": "By using ______ we can have a secure version of the applications.",
    "options": [
      "A. 3G",
      "B. Encryption techniques",
      "C. XML",
      "D. Spam filters"
    ],
    "answer": "B. Encryption techniques"
  },
  {
    "q": "In Pakistan, the Federal Investigation Agency (FIA) act was passed in the year ______",
    "options": [
      "A. 1974",
      "B. 1975",
      "C. 1976",
      "D. 1977"
    ],
    "answer": "A. 1974"
  },
  {
    "q": "In Pakistan, the Prevention of Electronic Crimes Ordinance was passed in the year ______",
    "options": [
      "A. 2007",
      "B. 2009",
      "C. 2010",
      "D. 2008"
    ],
    "answer": "A. 2007"
  },
  {
    "q": "In context of legal approaches to network security, one of the main issue is ______",
    "options": [
      "A. lack of skilled persons in this area",
      "B. lack of data",
      "C. International law that makes Illegal in one country and legal in another country",
      "D. slow technological development"
    ],
    "answer": "C. International law that makes Illegal in one country and legal in another country"
  },

    {
        "q": "Which of the following is correct in context of content filtering?",
        "options": [
            "A. It allows all content to pass through without restrictions.",
            "B. It only filters content related to malware.",
            "C. It is not part of Internet firewalls.",
            "D. It matches strings of characters to allow content through."
        ],
        "answer": "D. It matches strings of characters to allow content through."
    },
    {
        "q": "Which of the following significantly increases the chances of fraudulent activity?",
        "options": [
            "A. Gaming addiction",
            "B. Terrorism",
            "C. Identity theft",
            "D. Cyber bullying"
        ],
        "answer": "C. Identity theft"
    },
    {
        "q": "In MS Word, from the Paragraph group, what can you adjust regarding line?",
        "options": [
            "A. Line thickness.",
            "B. Line colour.",
            "C. Line numbering.",
            "D. Line spacing within a paragraph."
        ],
        "answer": "D. Line spacing within a paragraph."
    },
    {
        "q": "What does the Bullet Library allow you to do in Microsoft Word?",
        "options": [
            "A. Add bullets to a list.",
            "B. Change the font style.",
            "C. Adjust paragraph spacing.",
            "D. Insert images."
        ],
        "answer": "A. Add bullets to a list."
    },
    {
        "q": "In MS Word, we have to write an equation with 2 as a number and 3 as its power. Which option is suitable for this purpose?",
        "options": [
            "A. Superscript",
            "B. Case",
            "C. Font size",
            "D. Subscript"
        ],
        "answer": "A. Superscript"
    },
    {
        "q": "In MS Word, we can set line spacing from group",
        "options": [
            "A. Font",
            "B. Clipboard",
            "C. Insert",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },
    {
        "q": "Most famous word processor is:",
        "options": [
            "A. Wordpad",
            "B. MS-word",
            "C. Notepad",
            "D. MS-Excel"
        ],
        "answer": "B. MS-word"
    },
    {
        "q": "In MS Word, shortcut key of paste is",
        "options": [
            "A. Alt+p",
            "B. Ctrl+v",
            "C. Ctrl+p",
            "D. Alt+v"
        ],
        "answer": "B. Ctrl+v"
    },
    {
        "q": "Ctrl+z is used for:",
        "options": [
            "A. Save",
            "B. Undo",
            "C. Load",
            "D. Redo"
        ],
        "answer": "B. Undo"
    },
    {
        "q": "In MS Word, we can apply bullets from home ribbon group called",
        "options": [
            "A. Styles",
            "B. Clipboard",
            "C. Font",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },

    {
        "q": "In Microsoft word, which command can you use if you change your mind again and want to reapply a previously undone action?",
        "options": [
            "A. Undo",
            "B. Quick Print",
            "C. Redo",
            "D. Save"
        ],
        "answer": "C. Redo"
    },
    {
        "q": "In MS Word, Paste option is a part of home ribbon group called",
        "options": [
            "A. Insert",
            "B. Clipboard",
            "C. Font",
            "D. Paragraph"
        ],
        "answer": "B. Clipboard"
    },
    {
        "q": "Which of the following is often integrated with content filters in the context of the internet?",
        "options": [
            "A. Antivirus software",
            "B. Email servers",
            "C. Search engines",
            "D. Internet firewalls"
        ],
        "answer": "D. Internet firewalls"
    },
    {
        "q": "How is content filtering used to implement company policies?",
        "options": [
            "A. By filtering out websites unrelated to work.",
            "B. By allowing unlimited access to all websites.",
            "C. By blocking internet access for employees.",
            "D. By promoting unrestricted usage of social media sites."
        ],
        "answer": "A. By filtering out websites unrelated to work."
    },
    {
        "q": "In MS Word, where you can find options to add bullet lists, number lists, or outlines to a document?",
        "options": [
            "A. In the Header and Footer group",
            "B. In the Font dialog window",
            "C. In the Spell-check settings",
            "D. Within the Paragraph group"
        ],
        "answer": "D. Within the Paragraph group"
    },
    {
        "q": "In MS Word, the option of justify is in group",
        "options": [
            "A. Clipboard",
            "B. Font",
            "C. Insert",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },
    {
        "q": "In MS Word, what are the types of commands included in the Font group?",
        "options": [
            "A. Alignment commands",
            "B. Sorting commands",
            "C. Printing commands",
            "D. Formatting commands"
        ],
        "answer": "D. Formatting commands"
    },
    {
        "q": "What is the significance of the Home ribbon in MS Word?",
        "options": [
            "A. It is one of the most important ribbons.",
            "B. It contains decorative elements for documents.",
            "C. It is one of the least used ribbons.",
            "D. It only contains the clipboard group."
        ],
        "answer": "A. It is one of the most important ribbons."
    },
    {
        "q": "In Microsoft Word, what is the goal behind placing commands within groups and tabs?",
        "options": [
            "A. To hide commands from users",
            "B. To discourage software usage",
            "C. To minimize the number of mouse clicks",
            "D. To confuse users"
        ],
        "answer": "C. To minimize the number of mouse clicks"
    },
    {
        "q": "How can you open the Paragraph dialog window in MS Word?",
        "options": [
            "A. By using the Dialog expander arrow.",
            "B. By clicking the Format button.",
            "C. By right-clicking in the document.",
            "D. By pressing Ctrl+P."
        ],
        "answer": "A. By using the Dialog expander arrow."
    }




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
        
   
  {
    "q": "An outline, with its indention and numbering system helps you to the way each idea is related to the others.",
    "options": [
      "A. support",
      "B. visualize",
      "C. rectify",
      "D. exploit"
    ],
    "answer": "B. visualize"
  },
  {
    "q": "The abbreviation 'i.e.' means",
    "options": [
      "A. which is",
      "B. there is",
      "C. this is",
      "D. that is"
    ],
    "answer": "D. that is"
  },
  {
    "q": "Select the correct punctuated option which best describes the sentence. Because I am a teacher, I am a teacher.",
    "options": [
      "A. divine their",
      "B. divine; so",
      "C. divine, so",
      "D. This sentence is correct"
    ],
    "answer": "VERIFY - Question/Options are corrupted. Original MCQ required."
  },
  {
    "q": "Choose the best option. I am a teacher, so I am a teacher.",
    "options": [
      "A. (option missing)",
      "B. fairly",
      "C. considerably",
      "D. wholly"
    ],
    "answer": "VERIFY - Question/Options are corrupted. Original MCQ required."
  },
  {
    "q": "Outlining and Brainstorming are the best ways to map out and organize your essay.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True"
  },
  {
    "q": "In composition, a method of organization in which actions or events are presented as they occur in time is called",
    "options": [
      "A. comparison and contrast",
      "B. order of importance",
      "C. cause and effect",
      "D. chronological order"
    ],
    "answer": "D. chronological order"
  },
  {
    "q": "You arrived two days ago. You are going to leave next Sunday. By the time you leave, you nine days here.",
    "options": [
      "A. will have spent",
      "B. spent",
      "C. spend",
      "D. have spent"
    ],
    "answer": "A. will have spent"
  },
  {
    "q": "Choose the closest meaning of 'see into':",
    "options": [
      "A. to witness departure",
      "B. to attend to",
      "C. to find out the true nature of something",
      "D. to detect"
    ],
    "answer": "C. to find out the true nature of something"
  },
  {
    "q": "Which of the following methods of organization is used in the given sentence? Consequently, people suffered from parasites. The water was impure in the village.",
    "options": [
      "A. Chronological order",
      "B. Cause and effect",
      "C. Listing order",
      "D. Comparison and contrast"
    ],
    "answer": "B. Cause and effect"
  },
  {
    "q": "An outline is basically an organization of related ideas.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True"
  },

    {
        "q": "He is never late. He always comes time.",
        "options": [
            "A. in",
            "B. on",
            "C. at",
            "D. of"
        ],
        "answer": "B. on"
    },
    {
        "q": "means to organize/write events in the order of their occurrence in time.",
        "options": [
            "A. Cause and effect",
            "B. All of the above",
            "C. Chronological order",
            "D. Compare and contrast"
        ],
        "answer": "C. Chronological order"
    },
    {
        "q": "The abbreviation 'i.e.' means",
        "options": [
            "A. that is",
            "B. this is",
            "C. there is",
            "D. which is"
        ],
        "answer": "A. that is"
    },
    {
        "q": "Cheating is dishonesty; it hinders students from learning.",
        "options": [
            "A. in contrast",
            "B. moreover",
            "C. instead",
            "D. although"
        ],
        "answer": "B. moreover"
    },
    {
        "q": "An outline, with its indention and numbering system helps you to the way each idea is related to the others.",
        "options": [
            "A. visualize",
            "B. support",
            "C. exploit",
            "D. rectify"
        ],
        "answer": "A. visualize"
    },
    {
        "q": "The professor discussed the sleeping habits of elephants, she did not explain the topic in detail.",
        "options": [
            "A. Also",
            "B. However",
            "C. In contrast",
            "D. Therefore"
        ],
        "answer": "B. However"
    },
    {
        "q": "Where is he? I for him since three o'clock!",
        "options": [
            "A. was waiting",
            "B. wrote",
            "C. am waiting",
            "D. have been waiting"
        ],
        "answer": "D. have been waiting"
    },
    {
        "q": "use an outline to help make their writing clear.",
        "options": [
            "A. All poets",
            "B. All editors",
            "C. All essayists",
            "D. All writers"
        ],
        "answer": "D. All writers"
    },
    {
        "q": "An introduction has four purposes: introduction, background, plan and",
        "options": [
            "A. main theme",
            "B. thesis statement",
            "C. interest",
            "D. attention"
        ],
        "answer": "B. thesis statement"
    },
    {
        "q": "The abbreviation 'b/w' means",
        "options": [
            "A. between",
            "B. Beethoven",
            "C. by the way",
            "D. by the worth"
        ],
        "answer": "A. between"
    },






        ],
      subjective: [],
    },
  },

  PAK301: {
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
           {
        "q": "When was the Political Parties Act introduced in Pakistan?",
        "options": [
            "A. 1960",
            "B. 1966",
            "C. 1964",
            "D. 1962"
        ],
        "answer": "D. 1962"
    },
    {
        "q": "Who abrogated the Constitution of 1956 on 7th October, 1958?",
        "options": [
            "A. Malik Ghulam Muhammad",
            "B. Yahya Khan",
            "C. Iskander Mirza",
            "D. Ayub Khan"
        ],
        "answer": "C. Iskander Mirza"
    },
    {
        "q": "What principle was followed for the representation of provinces in the National Assembly under the 1956 Constitution?",
        "options": [
            "A. Parity-based representation",
            "B. Area-based representation",
            "C. Political Party-based representation",
            "D. Population-based representation"
        ],
        "answer": "A. Parity-based representation"
    },
    {
        "q": "Who dissolved the First Constituent Assembly of Pakistan?",
        "options": [
            "A. Liaquat Ali Khan",
            "B. Iskandar Mirza",
            "C. Ghulam Muhammad",
            "D. Ayub Khan"
        ],
        "answer": "C. Ghulam Muhammad"
    },
    {
        "q": "Which constitution of Pakistan had 234 articles and 6 schedules, outlining the framework for governance and power management?",
        "options": [
            "A. Constitution of 1962",
            "B. Constitution of 1973",
            "C. Interim constitution of 1947",
            "D. Constitution of 1956"
        ],
        "answer": "D. Constitution of 1956"
    },
    {
        "q": "When was the first BPC Report presented to the Constituent Assembly of Pakistan?",
        "options": [
            "A. 1953",
            "B. 1950",
            "C. 1952",
            "D. 1951"
        ],
        "answer": "B. 1950"
    },
    {
        "q": "According to 1962 constitution, Advisory Council for Islamic Ideology was",
        "options": [
            "A. A Recommendary body",
            "B. An Executive body",
            "C. A Supervisory body",
            "D. A Legislative body"
        ],
        "answer": "A. A Recommendary body"
    },
    {
        "q": "Under which Act, the First Constituent Assembly of Pakistan came into being?",
        "options": [
            "A. Indian Council Act, 1935",
            "B. Indian Council Act, 1942",
            "C. Indian Independence Act, 1947",
            "D. Government of India Act, 1935"
        ],
        "answer": "C. Indian Independence Act, 1947"
    },
    {
        "q": "When was the First BPC (Basic Principles Committee) Report presented to the Constituent Assembly of Pakistan?",
        "options": [
            "A. 1950",
            "B. 1949",
            "C. 1951",
            "D. 1952"
        ],
        "answer": "A. 1950"
    },
    {
        "q": "Who abrogated the Constitution of 1962 on March 25, 1969?",
        "options": [
            "A. Zulfiqar Ali Bhutto",
            "B. Iskander Mirza",
            "C. General Ayub Khan",
            "D. General Yahya Khan"
        ],
        "answer": "D. General Yahya Khan"
    },

    {
        "q": "Kharif crops are sown in in Pakistan.",
        "options": [
            "A. January-February",
            "B. September-October",
            "C. July-August",
            "D. May-June"
        ],
        "answer": "C. July-August"
    },
    {
        "q": "Water Logging and Salinity is one of the problems of",
        "options": [
            "A. Irrigation",
            "B. Mining",
            "C. Agriculture",
            "D. Industry"
        ],
        "answer": "C. Agriculture"
    },
    {
        "q": "According to the 1973 Constitution, half of the senators are elected after every:",
        "options": [
            "A. 6 Years",
            "B. 5 Years",
            "C. 4 Years",
            "D. 3 Years"
        ],
        "answer": "D. 3 Years"
    },
    {
        "q": "Under which article, the Objectives Resolution became the permanent part of Constitution of 1973?",
        "options": [
            "A. 1-A of 8th Amendment",
            "B. 2-A of 8th Amendment",
            "C. 3-A of 8th Amendment",
            "D. 4-A of 8th Amendment"
        ],
        "answer": "B. 2-A of 8th Amendment"
    },
    {
        "q": "Who became the first civilian Chief Martial Law administrator?",
        "options": [
            "A. Dr. Moeen Qureshi",
            "B. Zulfiqar Ali Bhutto",
            "C. Benazir Bhutto",
            "D. Nawaz Sharif"
        ],
        "answer": "B. Zulfiqar Ali Bhutto"
    },
    {
        "q": "Mohallah Salat Committees were formed under the rule of",
        "options": [
            "A. General Pervez Musharraf",
            "B. General Yahya Khan",
            "C. General Ayub Khan",
            "D. General Zia-ul-Haq"
        ],
        "answer": "D. General Zia-ul-Haq"
    },
    {
        "q": "How much area is covered by forests in Pakistan?",
        "options": [
            "A. 7%",
            "B. 5%",
            "C. 8%",
            "D. 6%"
        ],
        "answer": "B. 5%"
    },
    {
        "q": "When Local Bodies elections were conducted during Zia-ul-Haq regime in Pakistan?",
        "options": [
            "A. 1977",
            "B. 1979",
            "C. 1978",
            "D. 1976"
        ],
        "answer": "B. 1979"
    },
    {
        "q": "Total area of Pakistan was in 1947.",
        "options": [
            "A. 769,000 km2",
            "B. 698,000 km2",
            "C. 850,000 km2",
            "D. 796,095 km2"
        ],
        "answer": "D. 796,095 km2"
    },
    {
        "q": "In the general elections of 1970, how many seats did the Pakistan Peoples Party win?",
        "options": [
            "A. 98",
            "B. 89",
            "C. 92",
            "D. 81"
        ],
        "answer": "D. 81"
    },


    {
        "q": "Total area of Pakistan was in 1947.",
        "options": [
            "A. 850,000 km2",
            "B. 796,095 km2",
            "C. 698,000 km2",
            "D. 769,000 km2"
        ],
        "answer": "B. 796,095 km2"
    },
    {
        "q": "According to the 1973 Constitution, the upper house of the Parliament is called :",
        "options": [
            "A. National Assembly",
            "B. Cabinet",
            "C. Provincial Assembly",
            "D. Senate"
        ],
        "answer": "D. Senate"
    },
    {
        "q": "Thal, Cholistan and Thar deserts are located in of Indus Plain.",
        "options": [
            "A. North East",
            "B. North West",
            "C. South West",
            "D. South East"
        ],
        "answer": "D. South East"
    },
    {
        "q": "After how many years did Pakistan get its first Constitution?",
        "options": [
            "A. 5 years",
            "B. 11 years",
            "C. 7 years",
            "D. 9 years"
        ],
        "answer": "D. 9 years"
    },
    {
        "q": "Durand Line between Pakistan and Afghanistan was drawn in",
        "options": [
            "A. November 1893",
            "B. November 1894",
            "C. November 1892",
            "D. November 1895"
        ],
        "answer": "A. November 1893"
    },
    {
        "q": "Which is the highest peak of Pakistan?",
        "options": [
            "A. K-2",
            "B. Sia Kangri Peak",
            "C. Broad Peak",
            "D. Kilik Peak"
        ],
        "answer": "A. K-2"
    },
    {
        "q": "Ghulam Muhammad was the:",
        "options": [
            "A. Fourth Governor General of Pakistan",
            "B. Second Governor General of Pakistan",
            "C. First Governor General of Pakistan",
            "D. Third Governor General of Pakistan"
        ],
        "answer": "D. Third Governor General of Pakistan"
    },
    {
        "q": "Under the 1973 Constitution of Pakistan, the Financial Bill is presented in the",
        "options": [
            "A. Senate",
            "B. National Assembly",
            "C. Cabinet",
            "D. Legislative Council"
        ],
        "answer": "B. National Assembly"
    },
    {
        "q": "How much area is covered by forests in Pakistan?",
        "options": [
            "A. 5%",
            "B. 7%",
            "C. 6%",
            "D. 8%"
        ],
        "answer": "A. 5%"
    },
    {
        "q": "Mohallah Salat Committees were formed under the rule of",
        "options": [
            "A. General Ayub Khan",
            "B. General Zia-ul-Haq",
            "C. General Yahya Khan",
            "D. General Pervez Musharraf"
        ],
        "answer": "B. General Zia-ul-Haq"
    }



],
      subjective: [],
    },
  },
};

export default examData;