
const practice = {

  MTH202: {

  23: {
    problems: [
      {
        q: 'Use mathematical induction to prove that 1 + 2 + 3 + … + n = n(n+1)/2 for all integers n ≥ 1.',
        hint: 'Basis step: verify for n=1. Inductive step: assume true for n=k, then prove for n=k+1 by adding (k+1) to both sides.',
        answer: 'Basis: n=1, LHS=1, RHS=1*2/2=1. Inductive: assume 1+…+k = k(k+1)/2. Then 1+…+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2. Hence true.'
      },
      {
        q: 'Prove by induction: 1 + 3 + 5 + … + (2n-1) = n² for all n ≥ 1.',
        hint: 'Basis n=1: LHS=1, RHS=1. Assume true for k, then add (2k+1) to both sides.',
        answer: 'Basis: n=1, 1=1². Assume 1+3+…+(2k-1)=k². Then add (2k+1): sum = k²+2k+1=(k+1)². True.'
      },
      {
        q: 'Prove by induction: 1 + 2 + 2² + … + 2ⁿ = 2ⁿ⁺¹ – 1 for all n ≥ 0.',
        hint: 'Basis n=0: 1=2¹-1. Assume true for k, then add 2ᵏ⁺¹ to both sides.',
        answer: 'Basis: n=0, LHS=1, RHS=2-1=1. Assume 1+…+2ᵏ=2ᵏ⁺¹-1. Add 2ᵏ⁺¹: sum=2ᵏ⁺¹-1+2ᵏ⁺¹=2ᵏ⁺²-1. True.'
      },
      {
        q: 'Prove by induction: 1² + 2² + 3² + … + n² = n(n+1)(2n+1)/6 for all n ≥ 1.',
        hint: 'Basis n=1: 1=1*2*3/6=1. Assume true for k, then add (k+1)² and simplify.',
        answer: 'Basis: n=1 gives 1. Assume true for k. Sum to k+1 = k(k+1)(2k+1)/6 + (k+1)² = (k+1)(k+2)(2k+3)/6. True.'
      },
      {
        q: 'Prove by induction that the sum of the first n positive odd integers is n².',
        hint: 'This is same as Q2, but you can rephrase. Basis n=1; assume for k; add (2k+1).',
        answer: 'Already proved in Q2. Answer: 1+3+…+(2n-1)=n².'
      }
    ]
  },
  24: {
    problems: [
      {
        q: 'Use induction to prove that n³ – n is divisible by 3 for all positive integers n.',
        hint: 'Basis n=1: 0 divisible by 3. Assume k³-k = 3m. Show (k+1)³-(k+1) = (k³-k)+3k²+3k = 3(m+k²+k).',
        answer: 'Basis: 1³-1=0. Assume k³-k=3m. Then (k+1)³-(k+1) = k³+3k²+3k+1 -k-1 = (k³-k)+3(k²+k) = 3(m+k²+k). Divisible by 3.'
      },
      {
        q: 'Prove by induction that 2²ⁿ – 1 is divisible by 3 for all n ≥ 1.',
        hint: 'Basis n=1: 4-1=3. Assume 2²ᵏ-1=3m. Then 2²⁽ᵏ⁺¹⁾-1 = 4·2²ᵏ -1 = 4(3m+1)-1 = 12m+3 = 3(4m+1).',
        answer: 'Basis: 2²-1=3. Assume 2²ᵏ-1=3m. Then 2²ᵏ⁺²-1 = 4·2²ᵏ -1 = 4(3m+1)-1 = 12m+3 = 3(4m+1). Divisible by 3.'
      },
      {
        q: 'Prove by induction that n(n+1) is divisible by 2 for all positive integers n.',
        hint: 'Basis n=1: 1*2=2. Assume k(k+1)=2m, then (k+1)(k+2)=k(k+1)+2(k+1)=2(m+k+1).',
        answer: 'Basis: 1·2=2. Assume k(k+1)=2m. Then (k+1)(k+2)=k(k+1)+2(k+1)=2(m+k+1). Divisible by 2.'
      },
      {
        q: 'Prove by induction that xⁿ – yⁿ is divisible by x – y for all integers n ≥ 1.',
        hint: 'Basis n=1: x-y. Assume xᵏ-yᵏ = (x-y)m. Then xᵏ⁺¹-yᵏ⁺¹ = x(xᵏ-yᵏ) + yᵏ(x-y) = (x-y)(xm + yᵏ).',
        answer: 'Basis: x¹-y¹=x-y. Assume xᵏ-yᵏ=(x-y)m. Then xᵏ⁺¹-yᵏ⁺¹ = xᵏ⁺¹ - xyᵏ + xyᵏ - yᵏ⁺¹ = x(xᵏ-yᵏ)+yᵏ(x-y) = (x-y)(xm + yᵏ). Divisible.'
      },
      {
        q: 'Prove by induction that 2n+1 < 2ⁿ for all integers n ≥ 3.',
        hint: 'Basis n=3: 7<8. Assume 2k+1<2ᵏ. Then 2(k+1)+1 = 2k+3 < 2ᵏ+2 < 2ᵏ+2ᵏ = 2ᵏ⁺¹ for k≥3.',
        answer: 'Basis: 2·3+1=7<8=2³. Assume 2k+1<2ᵏ. Then 2(k+1)+1=2k+3 < 2ᵏ+2 ≤ 2ᵏ+2ᵏ = 2ᵏ⁺¹ (since 2≤2ᵏ for k≥1). Hence true.'
      }
    ]
  },
  25: {
    problems: [
      {
        q: 'Prove directly: the sum of two odd integers is even.',
        hint: 'Let the odd integers be 2m+1 and 2n+1. Sum = 2(m+n+1).',
        answer: 'Let a=2m+1, b=2n+1. Then a+b=2m+2n+2=2(m+n+1), which is even.'
      },
      {
        q: 'Prove directly: the product of an even integer and an odd integer is even.',
        hint: 'Let even = 2k, odd = 2l+1. Product = 2k(2l+1) = 2[k(2l+1)].',
        answer: 'Let a=2k, b=2l+1. Then ab=2k(2l+1)=2(k(2l+1)), even.'
      },
      {
        q: 'Prove directly: the square of an even integer is even.',
        hint: 'Let n=2k, then n²=4k²=2(2k²).',
        answer: 'If n is even, n=2k, so n²=4k²=2(2k²), even.'
      },
      {
        q: 'Prove: if a|b and a|c then a|(b+c).',
        hint: 'By definition, b=ar, c=as. Then b+c = a(r+s).',
        answer: 'a|b ⇒ b=ar, a|c ⇒ c=as. Then b+c=a(r+s), so a divides b+c.'
      },
      {
        q: 'Disprove by counterexample: For all integers n, n² – n + 11 is prime.',
        hint: 'Find an n such that the expression is composite. Try n=11.',
        answer: 'For n=11, n²-n+11 = 121-11+11 = 121 = 11×11, not prime. Counterexample disproves.'
      }
    ]
  },
  26: {
    problems: [
      {
        q: 'Prove by contradiction that √2 is irrational.',
        hint: 'Assume √2 = a/b in lowest terms. Then a²=2b². Show a even, then b even, contradicting lowest terms.',
        answer: 'Assume √2=a/b (reduced). Then a²=2b² ⇒ a even ⇒ a=2k ⇒ 4k²=2b² ⇒ b²=2k² ⇒ b even. Contradiction to a,b coprime.'
      },
      {
        q: 'Prove by contradiction: if n² is even, then n is even.',
        hint: 'Assume n odd. Then n=2k+1 ⇒ n² odd, contradiction.',
        answer: 'Suppose n odd. n=2k+1 ⇒ n²=4k²+4k+1=2(2k²+2k)+1 odd, contradicting n² even. So n even.'
      },
      {
        q: 'Prove by contradiction: there is no greatest integer.',
        hint: 'Assume N is greatest. Then N+1 is an integer greater than N, contradiction.',
        answer: 'Suppose N is the greatest integer. Then N+1 is an integer and N+1>N, contradiction. So no greatest integer.'
      },
      {
        q: 'Prove by contradiction: the sum of a rational and an irrational number is irrational.',
        hint: 'Assume sum is rational. Then irrational = rational - rational = rational, contradiction.',
        answer: 'Let r rational, s irrational. Suppose r+s is rational. Then s = (r+s)-r is rational (difference of rationals). Contradiction.'
      },
      {
        q: 'Prove by contradiction that √2 + √3 is irrational.',
        hint: 'Assume √2+√3 = rational. Square to get 5+2√6 = rational² ⇒ √6 rational, contradiction.',
        answer: 'Suppose √2+√3 = r rational. Squaring: 5+2√6 = r² ⇒ √6 = (r²-5)/2 rational, but √6 is irrational. Contradiction.'
      }
    ]
  },
  27: {
    problems: [
      {
        q: 'State the pre-condition and post-condition for the division algorithm (given integers a≥0, d>0).',
        hint: 'Pre-condition: what is true before the algorithm runs? Post-condition: what is true after?',
        answer: 'Pre-condition: a is a nonnegative integer and d is a positive integer, r=a, q=0. Post-condition: q and r are nonnegative integers such that a = q·d + r and 0 ≤ r < d.'
      },
      {
        q: 'Define the loop invariant for the algorithm that computes product = m·x (where m≥0).',
        hint: 'The loop repeatedly adds x and increments i. Invariant: i = n and product = n·x after n iterations.',
        answer: 'Loop invariant I(n): i = n and product = n·x, where n is the number of iterations completed.'
      },
      {
        q: 'List the four properties required by the Loop Invariant Theorem to prove correctness of a while loop.',
        hint: 'They are: Basis Property, Inductive Property, Eventual Falsity of Guard, Correctness of Post-Condition.',
        answer: '1. Basis Property: pre-condition implies I(0) true. 2. Inductive Property: if guard and I(k) true then I(k+1) true after iteration. 3. Eventual Falsity of Guard: after finite iterations guard false. 4. Correctness of Post-Condition: if guard false and I(N) true, then post-condition holds.'
      },
      {
        q: 'Trace the division algorithm for input a=54, d=11. Show the values of r and q at each iteration.',
        hint: 'Initialize r=54, q=0. While r≥d, subtract d and increment q.',
        answer: 'Iteration 1: r=43, q=1; Iteration 2: r=32, q=2; Iteration 3: r=21, q=3; Iteration 4: r=10, q=4. Stop because r<11. Result: q=4, r=10; 54 = 11·4 + 10.'
      },
      {
        q: 'What is a predicate? Give an example.',
        hint: 'A predicate is a sentence containing variables that becomes a statement when values are substituted.',
        answer: 'A predicate is a sentence that contains variables and becomes a proposition when specific values are assigned. Example: P(x): x is a student at the Virtual University. When x = \'Aslam\', it becomes a statement.'
      }
    ]
  },
  28: {
    problems: [
      {
        q: 'Use the division algorithm to find the quotient and remainder when 54 is divided by 11.',
        hint: 'Divide 54 by 11: 11×4=44, remainder 10.',
        answer: '54 = 11·4 + 10, so quotient q=4, remainder r=10.'
      },
      {
        q: 'Use the Euclidean algorithm to find gcd(330, 156).',
        hint: 'Apply division repeatedly: 330 = 156·2 + 18; 156 = 18·8 + 12; 18 = 12·1 + 6; 12 = 6·2 + 0.',
        answer: '330 = 156·2 + 18; 156 = 18·8 + 12; 18 = 12·1 + 6; 12 = 6·2 + 0. The last nonzero remainder is 6, so gcd(330,156)=6.'
      },
      {
        q: 'State the lemma used in the proof of correctness of the Euclidean algorithm: if a = b·q + r, then gcd(a,b) = gcd(b,r).',
        hint: 'This is the key property: any common divisor of a and b also divides r, and vice versa.',
        answer: 'Lemma: For integers a,b with b>0, if a = q·b + r, then gcd(a,b) = gcd(b,r).'
      },
      {
        q: 'In the division algorithm loop, what is the guard condition?',
        hint: 'The loop continues while the remainder is at least the divisor.',
        answer: 'The guard is: r ≥ d.'
      },
      {
        q: 'Explain the loop invariant used to prove correctness of the division algorithm.',
        hint: 'The invariant states the relationship between r, q, a, d after n subtractions.',
        answer: 'Loop invariant I(n): r = a – n·d and n = q. It ensures that after n iterations, the current remainder is a minus n times d, and q equals n.'
      }
    ]
  },
  29: {
    problems: [
      {
        q: 'A student can choose a computer project from one of three lists containing 23, 15, and 19 projects. How many possible projects are there to choose from?',
        hint: 'Use the sum rule because the lists are disjoint.',
        answer: '23 + 15 + 19 = 57 projects.'
      },
      {
        q: 'How many bit strings of length 8 begin with a 1?',
        hint: 'The first bit is fixed; the remaining 7 bits can be 0 or 1.',
        answer: '1 × 2⁷ = 128 bit strings.'
      },
      {
        q: 'An automobile license plate has three letters followed by three digits. How many different plates are possible?',
        hint: 'Use product rule: 26 choices for each letter, 10 for each digit.',
        answer: '26×26×26×10×10×10 = 17,576,000 plates.'
      },
      {
        q: 'A variable name in a programming language must be either a letter or a letter followed by a digit. How many different variable names are possible?',
        hint: 'Count length 1 names (letters) and length 2 names (letter+digit) and add.',
        answer: 'Length 1: 26. Length 2: 26×10 = 260. Total = 26+260 = 286.'
      },
      {
        q: 'How many three-digit integers are divisible by 5?',
        hint: 'A number is divisible by 5 if it ends in 0 or 5. Count separately.',
        answer: 'End in 0: 9×10×1 = 90. End in 5: 9×10×1 = 90. Total = 90+90 = 180.'
      }
    ]
  },
  30: {
    problems: [
      {
        q: 'Compute P(8,3).',
        hint: 'Use formula P(n,k) = n!/(n-k)!.',
        answer: 'P(8,3) = 8!/(8-3)! = 8!/5! = 8×7×6 = 336.'
      },
      {
        q: 'How many 2-permutations are there of {W, X, Y, Z}? List them.',
        hint: 'P(4,2) = 4×3 = 12. They are all ordered pairs of distinct elements.',
        answer: 'P(4,2) = 12. They are: WX, WY, WZ, XW, XY, XZ, YW, YX, YZ, ZW, ZX, ZY.'
      },
      {
        q: 'Find n if P(n,2) = 72.',
        hint: 'P(n,2) = n(n-1) = 72. Solve quadratic n²-n-72=0.',
        answer: 'n(n-1)=72 ⇒ n²-n-72=0 ⇒ (n-9)(n+8)=0 ⇒ n=9 (positive).'
      },
      {
        q: 'How many ways can 5 of the letters of the word ALGORITHM be selected and written in a row?',
        hint: 'ALGORITHM has 9 distinct letters. We need 5-permutations.',
        answer: 'P(9,5) = 9×8×7×6×5 = 15120.'
      },
      {
        q: 'How many ways can a party of seven persons arrange themselves in a row of seven chairs?',
        hint: 'All seven are distinct; number of permutations of 7 items.',
        answer: 'P(7,7) = 7! = 5040.'
      }
    ]
  },
  31: {
    problems: [
      {
        q: 'Compute C(9,6).',
        hint: 'Use C(n,k) = n!/(k!(n-k)!).',
        answer: 'C(9,6) = 9!/(6!3!) = (9×8×7)/(3×2×1) = 84.'
      },
      {
        q: 'A student must answer 8 out of 10 questions. How many ways can they choose?',
        hint: 'This is combinations of 8 from 10.',
        answer: 'C(10,8) = C(10,2) = 45.'
      },
      {
        q: 'A computer programming team has 14 members (8 women, 6 men). How many groups of 7 can be chosen that contain 4 women and 3 men?',
        hint: 'Choose 4 women from 8 and 3 men from 6; use product rule.',
        answer: 'C(8,4) × C(6,3) = 70 × 20 = 1400.'
      },
      {
        q: 'How many 16-bit strings contain exactly 9 ones?',
        hint: 'Choose which 9 positions out of 16 are ones.',
        answer: 'C(16,9) = 11440.'
      },
      {
        q: 'How many groups of 7 can be chosen from 14 that contain at least one man?',
        hint: 'Total groups of 7 minus groups with no men (i.e., all 7 from 8 women).',
        answer: 'C(14,7) – C(8,7) = 3432 – 8 = 3424.'
      }
    ]
  },
  32: {
    problems: [
      {
        q: 'A camera shop stocks 10 different types of batteries. How many ways can a total inventory of 30 batteries be distributed among the 10 types?',
        hint: 'This is a k-selection (combinations with repetition) with n=10, k=30.',
        answer: 'C(30+10-1, 30) = C(39,30) = C(39,9) = 211915132.'
      },
      {
        q: 'How many ways can 9 toys be divided among 4 children if the youngest gets 3 and each other gets 2?',
        hint: 'This is an ordered partition: 9! / (3! 2! 2! 2!).',
        answer: '9!/(3!2!2!2!) = 7560.'
      },
      {
        q: 'How many distinct permutations can be formed from the letters of the word \'BENZENE\'?',
        hint: 'Count letters: B,E,N,Z,E,N,E → 7 letters with 3 E\'s and 2 N\'s.',
        answer: '7! / (3! 2!) = 5040/(6×2)=5040/12=420.'
      },
      {
        q: 'How many ways can 12 students be divided into 3 groups of 4 students each if the groups are for different subjects (English, History, Mathematics)?',
        hint: 'This is an ordered partition: 12!/(4!4!4!).',
        answer: '12!/(4!4!4!) = 34650.'
      },
      {
        q: 'How many different signals can be formed using 4 identical red flags and 2 identical blue flags in a vertical line?',
        hint: 'Permutations of 6 items with 4 identical and 2 identical.',
        answer: '6!/(4!2!) = 15.'
      }
    ]
  },
  33: {
    problems: [
      {
        q: 'Use a tree diagram to list all permutations of {a, b, c}.',
        hint: 'Start with each possible first element, then branch for second, then third.',
        answer: 'abc, acb, bac, bca, cab, cba. (Total 6).'
      },
      {
        q: 'Teams A and B play a tournament; the first to win two games wins. How many possible ways can the tournament occur?',
        hint: 'Draw tree diagram; sequences like AA, ABA, ABB, etc.',
        answer: '6 ways: AA, ABA, ABB, BAA, BAB, BB.'
      },
      {
        q: 'How many bit strings of length 4 do not have two consecutive 1s?',
        hint: 'Use tree diagram or count recursively. The valid strings are: 0000,0001,0010,0100,0101,1000,1001,1010.',
        answer: '8 bit strings.'
      },
      {
        q: 'Among 200 people, 150 either swim or jog or both. 85 swim and 60 swim and jog. How many jog?',
        hint: 'Use inclusion-exclusion: n(S∪J)=n(S)+n(J)-n(S∩J).',
        answer: '150 = 85 + n(J) - 60 ⇒ n(J) = 150 - 85 + 60 = 125.'
      },
      {
        q: 'Let A and B be subsets of U with n(A)=10, n(B)=15, n(A′)=12, n(A∩B)=8. Find n(A∪B′).',
        hint: 'First find n(U)=n(A)+n(A′)=22. Then n(B\A)=n(B)-n(A∩B)=7. Also A∪B′ = U \ (B\A), so n(A∪B′)=n(U)-n(B\A).',
        answer: 'n(U)=10+12=22; n(B\A)=15-8=7; n(A∪B′)=22-7=15.'
      }
    ]
  },
  34: {
    problems: [
      {
        q: 'How many integers from 1 through 1000 are multiples of 3 or multiples of 5?',
        hint: 'Count multiples of 3, multiples of 5, subtract multiples of 15 (intersection).',
        answer: '⌊1000/3⌋=333, ⌊1000/5⌋=200, ⌊1000/15⌋=66. Total = 333+200-66 = 467.'
      },
      {
        q: 'How many integers from 1 through 1000 are neither multiples of 3 nor multiples of 5?',
        hint: 'Total 1000 minus those divisible by 3 or 5 (from previous).',
        answer: '1000 - 467 = 533.'
      },
      {
        q: 'A survey of 100 students: 8 own a car, 20 own a motorcycle, 48 own a bicycle, 38 own none, no car and motorcycle. How many own a bicycle and either a car or a motorcycle?',
        hint: 'Use inclusion-exclusion: total with at least one = 62. Let x = (bicycle and car) + (bicycle and motorcycle). Then 62 = 8+20+48 - 0 - x + 0 ⇒ x=14.',
        answer: '14 students.'
      },
      {
        q: 'Show by the pigeonhole principle that among any 367 people, at least two have the same birthday.',
        hint: 'There are 366 possible birthdays (including Feb 29).',
        answer: 'With 367 people and 366 possible birthdays, by pigeonhole principle at least two share a birthday.'
      },
      {
        q: 'What is the minimum number of students required to be sure that at least six receive the same grade, if there are five possible grades?',
        hint: 'Use generalized pigeonhole: need smallest N such that ⌈N/5⌉ = 6.',
        answer: 'N = 5(6-1)+1 = 26.'
      }
    ]
  },
  35: {
    problems: [
      {
        q: 'What is the probability of getting a number greater than 4 when a fair die is tossed?',
        hint: 'Favorable outcomes: 5,6. Total outcomes: 6.',
        answer: 'P = 2/6 = 1/3.'
      },
      {
        q: 'What is the probability of getting a total of 8 or 9 when a pair of dice is tossed?',
        hint: 'Total outcomes 36. Count outcomes for sum 8: (2,6),(3,5),(4,4),(5,3),(6,2) =5. Sum 9: (3,6),(4,5),(5,4),(6,3)=4. Total 9 favorable.',
        answer: 'P = 9/36 = 1/4.'
      },
      {
        q: 'A card is drawn from a well-shuffled deck. What is the probability that it is either a spade or an ace?',
        hint: 'P(spade)=13/52, P(ace)=4/52, P(spade and ace)=1/52.',
        answer: 'P = 13/52 + 4/52 - 1/52 = 16/52 = 4/13.'
      },
      {
        q: 'What is the probability that a hand of five cards contains four cards of one kind?',
        hint: 'Number of favorable hands: choose the kind (13 ways), choose all 4 of that kind (1 way), choose the fifth card from remaining 48 (48 ways). Total hands C(52,5).',
        answer: 'P = (13 × C(4,4) × 48) / C(52,5) = (13×48)/2598960 ≈ 0.00024.'
      },
      {
        q: 'What is the probability that a randomly chosen positive two-digit number is a multiple of 6?',
        hint: 'Two-digit numbers from 10 to 99 (90 numbers). Multiples of 6 from 12 to 96: count = ⌊99/6⌋ - ⌊9/6⌋ = 16 - 1 = 15.',
        answer: 'P = 15/90 = 1/6.'
      }
    ]
  },
  
  36: {
    problems: [
      {
        q: "A bag contains 6 white, 5 black and 4 red balls. Find the probability of getting a white or a black ball in a single draw.",
        hint: "Use the sum rule for disjoint events. Total balls = 15. Probability = (6+5)/15.",
        answer: "P(white or black) = (6+5)/15 = 11/15."
      },
      {
        q: "A pair of dice is thrown. Find the probability of getting a total of 5 or 11.",
        hint: "Total outcomes = 36. Count favorable outcomes for sum 5 and sum 11 separately.",
        answer: "P(sum 5) = 4/36, P(sum 11) = 2/36. Since disjoint, P = 4/36+2/36 = 6/36 = 1/6."
      },
      {
        q: "Let A and B be events in a sample space S with P(A)=0.65, P(B)=0.30, P(A∩B)=0.15. Find (a) P(A∩B′) (b) P(A∪B) (c) P(A′∩B′).",
        hint: "Use P(A∩B′)=P(A)-P(A∩B), P(A∪B)=P(A)+P(B)-P(A∩B), and De Morgan's law.",
        answer: "(a) 0.65-0.15=0.50; (b) 0.65+0.30-0.15=0.80; (c) P((A∪B)′)=1-0.80=0.20."
      },
      {
        q: "A card is drawn from a well‑shuffled pack. What is the probability that it is either a spade or an ace?",
        hint: "Use P(spade)=13/52, P(ace)=4/52, P(spade∩ace)=1/52.",
        answer: "P = 13/52 + 4/52 - 1/52 = 16/52 = 4/13."
      },
      {
        q: "An integer is chosen at random from the first 100 positive integers. What is the probability that it is divisible by 6 or by 8?",
        hint: "Count multiples of 6, multiples of 8, and multiples of LCM(6,8)=24.",
        answer: "⌊100/6⌋=16, ⌊100/8⌋=12, ⌊100/24⌋=4. P = (16+12-4)/100 = 24/100 = 6/25."
      }
    ]
  },
  37: {
    problems: [
      {
        q: "Let A and B be events with P(A)=1/2, P(B)=1/3, P(A∩B)=1/4. Find (i) P(A|B) (ii) P(B|A) (iii) P(A∪B) (iv) P(A^c | B^c).",
        hint: "Use conditional probability formula, addition rule, and De Morgan's law.",
        answer: "(i) P(A|B)= (1/4)/(1/3)=3/4; (ii) P(B|A)= (1/4)/(1/2)=1/2; (iii) P(A∪B)=1/2+1/3-1/4=7/12; (iv) P(A^c|B^c)=P(A^c∩B^c)/P(B^c)= (1-7/12)/(2/3)= (5/12)/(2/3)=5/8."
      },
      {
        q: "Find P(B|A) if (i) A is a subset of B (ii) A and B are mutually exclusive.",
        hint: "If A⊆B then A∩B=A. If disjoint, A∩B=∅.",
        answer: "(i) P(B|A)=P(A∩B)/P(A)=P(A)/P(A)=1. (ii) P(B|A)=0/P(A)=0."
      },
      {
        q: "Let a pair of dice be tossed. If the sum is 7, find the probability that one of the dice is 2.",
        hint: "Let E be event 'a 2 appears', F be event 'sum is 7'. Count favorable pairs.",
        answer: "P(E|F) = P(E∩F)/P(F). E∩F = {(2,5),(5,2)}, so P(E∩F)=2/36, P(F)=6/36. Hence P = (2/36)/(6/36)=1/3."
      },
      {
        q: "A man visits a family with two children. One child, a boy, comes in. Find the probability that the other child is also a boy if (i) the other is known to be elder (ii) nothing is known about the other.",
        hint: "Sample space {bb,bg,gb,gg}. Define events A=both boys, B=younger is boy, C=one is boy.",
        answer: "(i) P(A|B)=P(A∩B)/P(B)= (1/4)/(2/4)=1/2. (ii) P(A|C)= (1/4)/(3/4)=1/3."
      },
      {
        q: "A lot contains 12 items of which 4 are defective. Three items are drawn one after another without replacement. What is the probability that all three are non‑defective?",
        hint: "Use multiplication rule: P(first non-def) * P(second non-def | first) * P(third non-def | first two).",
        answer: "(8/12)*(7/11)*(6/10) = 14/55."
      }
    ]
  },
  38: {
    problems: [
      {
        q: "A box contains 12 items of which three are defective. A sample of three items is selected. If X denotes the number of defective items in the sample, find the distribution of X.",
        hint: "X can be 0,1,2,3. Use combinations: P(X=k) = C(3,k)C(9,3-k)/C(12,3).",
        answer: "P(X=0)=84/220, P(X=1)=108/220, P(X=2)=27/220, P(X=3)=1/220."
      },
      {
        q: "What is the expectation of the number of heads when three fair coins are tossed?",
        hint: "X ~ Binomial(3, 1/2). E(X)=np=3*(1/2).",
        answer: "E(X) = 3*(1/2) = 1.5. Alternatively, distribution: 0(1/8)+1(3/8)+2(3/8)+3(1/8)=1.5."
      },
      {
        q: "A player tosses two fair coins. He wins Rs.1 if one head appears, Rs.2 if two heads appear, loses Rs.5 if no heads appear. Determine the expected value of the game.",
        hint: "Let X be the winnings. P(two heads)=1/4, P(one head)=1/2, P(no heads)=1/4.",
        answer: "E(X) = 2*(1/4) + 1*(1/2) - 5*(1/4) = 0.5 + 0.5 - 1.25 = -0.25 (unfavourable)."
      },
      {
        q: "A coin is weighted so that P(H)=3/4, P(T)=1/4. Tossed three times. Let X be the number of heads. (a) Find the distribution of X. (b) Find E(X).",
        hint: "X ~ Binomial(3, 3/4). P(X=k)=C(3,k)(3/4)^k(1/4)^(3-k).",
        answer: "(a) P(X=0)=1/64, P(X=1)=9/64, P(X=2)=27/64, P(X=3)=27/64. (b) E(X)=3*(3/4)=9/4=2.25."
      },
      {
        q: "A pair of fair dice is thrown. Let X denote the maximum of the two numbers. (a) Find the distribution of X. (b) Find the mean, variance and standard deviation.",
        hint: "X takes values 1 to 6. Count outcomes where max = k: (2k-1) pairs.",
        answer: "(a) P(X=k)=(2k-1)/36 for k=1,...,6. (b) μ = Σ k(2k-1)/36 = 161/36 ≈4.47; E(X²)= Σ k²(2k-1)/36 = 791/36 ≈21.97; Var= E(X²)-μ² ≈ 21.97 - 19.98 ≈1.99; σ≈1.41."
      }
    ]
  },
  39: {
    problems: [
      {
        q: "Draw all simple graphs with four vertices {u, v, w, x} and two edges, one of which is {u, v}.",
        hint: "Fix one edge {u,v}. Choose the second edge from the remaining 5 possible pairs.",
        answer: "There are 5 such graphs (the second edge can be {u,w}, {u,x}, {v,w}, {v,x}, or {w,x})."
      },
      {
        q: "Suppose a graph has vertices of degrees 1, 1, 4, 4 and 6. How many edges does the graph have?",
        hint: "Sum of degrees = 2*(number of edges).",
        answer: "Total degree = 1+1+4+4+6 = 16. Number of edges = 16/2 = 8."
      },
      {
        q: "In a group of 15 people, is it possible for each person to have exactly 3 friends?",
        hint: "Model as a graph with 15 vertices each of degree 3. Sum of degrees = 45, odd, impossible.",
        answer: "No, because the sum of degrees would be 15*3=45, which is odd, contradicting the handshaking theorem."
      },
      {
        q: "For the complete graph Kₙ, find (i) the degree of each vertex (ii) the total degree (iii) the number of edges.",
        hint: "Each vertex is connected to all other n-1 vertices.",
        answer: "(i) deg(v)=n-1; (ii) total degree = n(n-1); (iii) edges = n(n-1)/2."
      },
      {
        q: "Draw two 3‑regular graphs with six vertices.",
        hint: "3‑regular means each vertex has degree 3. Examples: K₃,₃ and a triangular prism.",
        answer: "Two such graphs are K₃,₃ (complete bipartite with parts of size 3) and the triangular prism (two triangles connected by matching edges)."
      }
    ]
  },
  40: {
    problems: [
      {
        q: "Determine whether the following graph (with vertices v0..v9 and edges as given in the lecture) has an Euler circuit.",
        hint: "Check degrees of all vertices. An Euler circuit exists iff all degrees are even and graph is connected.",
        answer: "No, because deg(v1)=5 (odd)."
      },
      {
        q: "Find a Hamiltonian circuit for the graph shown in the lecture (vertices a,b,c,d,e,f,g,h).",
        hint: "A Hamiltonian circuit visits every vertex exactly once and returns to start.",
        answer: "One Hamiltonian circuit is: a – b – d – e – f – c – g – h – a."
      },
      {
        q: "Show that the following graph (with vertices a..g) does not have a Hamiltonian circuit.",
        hint: "Use the necessary condition: any Hamiltonian circuit gives a subgraph where every vertex has degree 2. If a vertex has high degree, removing edges to make degree 2 may isolate others.",
        answer: "Vertex c has degree 5. To have a Hamiltonian circuit, c must have degree 2, so 3 incident edges must be removed. But then some neighbours (like b, g, f, d) would have degree less than 2, impossible. Hence no Hamiltonian circuit."
      },
      {
        q: "State the condition for a graph to have an Euler path (not necessarily circuit).",
        hint: "An Euler path exists if the graph is connected and exactly two vertices have odd degree.",
        answer: "A connected graph has an Euler path from vertex u to v iff u and v have odd degree and all other vertices have even degree."
      },
      {
        q: "Define Euler circuit and Hamiltonian circuit.",
        hint: "Euler circuit uses every edge exactly once; Hamiltonian circuit uses every vertex exactly once.",
        answer: "An Euler circuit is a circuit that contains every edge of the graph exactly once (and every vertex at least once). A Hamiltonian circuit is a simple circuit that contains every vertex of the graph exactly once."
      }
    ]
  },
  41: {
    problems: [
      {
        q: "Find a graph that has the following adjacency matrix: [[0,2,0],[2,1,0],[0,0,1]].",
        hint: "The matrix gives the number of edges between vertices. Diagonal entries are loops.",
        answer: "Vertices v1, v2, v3. There are 2 parallel edges between v1 and v2, a loop at v2, and a loop at v3. No edge between v1-v3 or v2-v3."
      },
      {
        q: "Find the directed graph corresponding to the adjacency matrix [[1,0,1,2],[0,0,1,0],[0,2,1,1],[0,1,1,0]].",
        hint: "Rows are tails, columns are heads. Entry a_ij = number of arrows from i to j.",
        answer: "Draw vertices v1..v4. There are loops at v1 and v3; two arrows from v1 to v4; one from v1 to v3; one from v2 to v3; two from v3 to v2; one from v3 to v4; one from v4 to v2; one from v4 to v3; etc."
      },
      {
        q: "Let A = [[1,1,2],[1,0,1],[2,1,0]] be the adjacency matrix of a graph G with vertices v1,v2,v3. Find (a) the number of walks of length 2 from v2 to v3 (b) the number of walks of length 3 from v1 to v3.",
        hint: "Compute A² and A³. The (i,j) entry gives the number of walks of that length.",
        answer: "A² = [[6,3,3],[3,2,2],[3,2,5]]. So from v2 to v3 (row2,col3) = 2. A³ = A²*A = [[15,9,15],[9,5,8],[15,8,8]]. From v1 to v3 (row1,col3) = 15."
      },
      {
        q: "What is the incidence matrix of a simple graph? Give an example.",
        hint: "Rows are vertices, columns are edges. Entry 1 if vertex incident to edge, else 0.",
        answer: "For a graph with vertices v1..v4 and edges e1..e5, the incidence matrix has 1's for endpoints, 0 otherwise. (Example given in lecture.)"
      },
      {
        q: "If A is the adjacency matrix of a graph, what does the (i,j) entry of A^n represent?",
        hint: "It counts walks of length n.",
        answer: "The (i,j) entry of A^n equals the number of walks of length n from vertex i to vertex j."
      }
    ]
  },
  42: {
    problems: [
      {
        q: "Determine whether the graphs G and G’ (with 5 vertices each, G has 7 edges, G’ has 6 edges) are isomorphic.",
        hint: "Isomorphic graphs must have the same number of edges.",
        answer: "No, because G has 7 edges while G’ has only 6 edges."
      },
      {
        q: "Determine whether the graphs G and G’ (5 vertices, G has a vertex of degree 5, G’ has no vertex of degree 5) are isomorphic.",
        hint: "Isomorphic graphs must have the same degree sequence.",
        answer: "No, because G has a vertex of degree 5, but G’ has no such vertex."
      },
      {
        q: "Find all non‑isomorphic simple graphs with three vertices.",
        hint: "List all possible edges among 3 vertices (max 3 edges). Count up to isomorphism.",
        answer: "There are 4 non‑isomorphic graphs: (1) no edges, (2) one edge, (3) two edges (path of length 2), (4) three edges (triangle)."
      },
      {
        q: "Find all non‑isomorphic simple connected graphs with three vertices.",
        hint: "Connected graphs on 3 vertices must have at least 2 edges.",
        answer: "There are 2: (1) path of length 2 (two edges), (2) triangle (three edges)."
      },
      {
        q: "Find all non‑isomorphic simple connected graphs with four vertices.",
        hint: "List all connected graphs on 4 vertices up to isomorphism.",
        answer: "There are 6: (1) tree with 3 edges (4 possible trees, but only 2 non‑isomorphic: path and star? Actually there are 2 non‑isomorphic trees on 4 vertices: path P4 and star K1,3) plus graphs with 4,5,6 edges. The complete list: P4, star, cycle C4, triangle with a pendant edge, K4 minus an edge, and K4. So 6 graphs."
      }
    ]
  },
  43: {
    problems: [
      {
        q: "Show that the graph Q3 (the 3‑cube) is planar by drawing it without edge crossings.",
        hint: "Redraw the cube as two squares connected by matching edges.",
        answer: "A plane drawing of Q3 exists; one way is to draw an outer square and an inner square with corresponding vertices connected, and no crossings."
      },
      {
        q: "Show that K₃,₃ is not planar.",
        hint: "Assume a planar drawing and derive a contradiction using Euler's formula or by arguing that any drawing forces a crossing.",
        answer: "K₃,₃ has 6 vertices and 9 edges. In any planar embedding, faces must have length at least 4, so 4f ≤ 2e = 18 ⇒ f ≤ 4.5 ⇒ f ≤ 4. But Euler: f = e - v + 2 = 9 - 6 + 2 = 5, contradiction. Hence non‑planar."
      },
      {
        q: "Show that K₅ is non‑planar.",
        hint: "K₅ has 5 vertices, 10 edges. Use Euler's formula: f = e - v + 2 = 10 - 5 + 2 = 7. In a planar simple graph, each face has degree at least 3, so 3f ≤ 2e ⇒ 21 ≤ 20, contradiction.",
        answer: "Assume planar. Euler gives f = 7. Each face must have at least 3 edges, so 3f ≤ 2e ⇒ 21 ≤ 20, impossible. Hence non‑planar."
      },
      {
        q: "A connected planar simple graph has 30 edges. If a plane drawing has 20 faces, how many vertices does it have?",
        hint: "Use Euler's formula: f = e - v + 2.",
        answer: "20 = 30 - v + 2 ⇒ v = 30 - 20 + 2 = 12 vertices."
      },
      {
        q: "What is the chromatic number of the graphs G and H shown in the lecture?",
        hint: "Chromatic number is the least number of colors needed. G can be colored with 3, H needs 4.",
        answer: "χ(G)=3, χ(H)=4."
      }
    ]
  },
  44: {
    problems: [
      {
        q: "Explain why a tree with 12 vertices and 15 edges does not exist.",
        hint: "A tree with n vertices has exactly n-1 edges.",
        answer: "A tree with 12 vertices must have 11 edges, not 15."
      },
      {
        q: "Find all non‑isomorphic trees with four vertices.",
        hint: "Trees on 4 vertices have 3 edges. Possible degree sequences: (3,1,1,1) and (2,2,1,1).",
        answer: "Two non‑isomorphic trees: the star K1,3 and the path P4."
      },
      {
        q: "Consider the rooted tree with root v0 (shown in lecture). (a) What is the level of v8? (b) Height of the tree? (c) Children of v10? (d) Siblings of v1? (e) Descendants of v12?",
        hint: "Level is distance from root. Height is max level. Children are one level below. Siblings share parent. Descendants are below.",
        answer: "(a) level of v8 = 3. (b) height = 5. (c) children of v10: v14, v15, v16. (d) siblings of v1: v3, v4, v5. (e) descendants of v12: v17, v18, v19."
      },
      {
        q: "Explain why a full binary tree with nine vertices and five internal vertices does not exist.",
        hint: "A full binary tree with k internal vertices has 2k+1 total vertices.",
        answer: "If k=5, total vertices = 2*5+1 = 11, not 9. Or if total=9, k=4, not 5."
      },
      {
        q: "Draw a full binary tree with seven vertices.",
        hint: "A full binary tree with 7 vertices has 3 internal vertices and 4 leaves.",
        answer: "Root with two children; each child has two leaves (or one child with two leaves and the other with one? Actually full means every internal has exactly 2 children, so with 7 vertices, root has 2 children, each of those has 2 leaves, total 1+2+4=7. So draw a root with left and right, each with two leaves."
      }
    ]
  },
  45: {
    problems: [
      {
        q: "Use Kruskal's algorithm to find a minimal spanning tree for the weighted graph given in the lecture (edges with weights: 1,2,3,4,5,6,7,8,9,10). Give the order of edges added.",
        hint: "Sort edges by weight, add if no cycle is formed.",
        answer: "Order: {a,b} (1), {e,f} (2), {e,d} (3), {c,d} (4), {g,f} (6), {b,c} (7). (Assuming the graph from lecture.)"
      },
      {
        q: "Use Prim's algorithm starting at vertex a to find a minimal spanning tree for the same weighted graph. Give the order of edges added.",
        hint: "Start with vertex a, repeatedly add the cheapest edge connecting the current tree to a new vertex.",
        answer: "Order: {a,b} (1), {b,c} (7), {c,d} (4), {d,e} (3), {e,f} (2), {f,g} (6)."
      },
      {
        q: "Find the number of spanning trees of the graph G using Kirchhoff's theorem (given adjacency matrix).",
        hint: "Form the matrix M (degree on diagonal, -1 for edges), delete any row and column, compute determinant.",
        answer: "For the graph in the lecture (a 4-vertex graph), the number of spanning trees is 8."
      },
      {
        q: "For the weighted graph with edges (weights 1,2,3,6), find all spanning trees and identify the minimal one.",
        hint: "List all spanning trees (there are 3) and sum their weights.",
        answer: "Tree T1: edges {1,2,6} weight=9? Actually the weights given in lecture: graph with edges of weights 1,2,3,6. The three spanning trees are: (1,2,6) weight 9? Wait, the example had three trees with weights 14,11,15. Minimal is 11. So answer: T2 is minimal with weight 11."
      },
      {
        q: "How many non‑isomorphic spanning trees does the simple graph (with 4 vertices forming a cycle plus a diagonal) have?",
        hint: "Draw all spanning trees (they are all trees on 4 vertices) and identify isomorphic classes.",
        answer: "There are 8 spanning trees total, but only 2 non‑isomorphic types: one path P4 (appears 4 times) and one star K1,3 (appears 4 times)."
      }
    ]
  },

  },
  MTH101: {
   // ============================================================
// MTH101 - LECTURES 1 TO 22: NUMERICAL PROBLEMS

  1: {
    problems: [
      {
        q: 'Solve the inequality: 3x + 7 > 2x - 9.',
        hint: 'Isolate x on one side by subtracting 2x and subtracting 7.',
        answer: '3x + 7 > 2x - 9 → x > -16. Solution: (-16, ∞)'
      },
      {
        q: 'Solve the inequality: 7 ≤ 2 - 5x < 9.',
        hint: 'Subtract 2 from all parts, then divide by -5 (reverse inequality signs).',
        answer: '7 ≤ 2 - 5x < 9 → 5 ≤ -5x < 7 → -1 ≥ x > -7/5 → -7/5 < x ≤ -1. Solution: (-7/5, -1]'
      },
      {
        q: 'Write the set {x : 2 < x ≤ 5} in interval notation and graph it on a number line.',
        hint: 'Use parentheses for open endpoints and brackets for closed endpoints.',
        answer: '(2, 5]'
      },
      {
        q: 'Solve the inequality: -2x + 5 ≤ 11.',
        hint: 'Subtract 5 from both sides, then divide by -2 (reverse inequality sign).',
        answer: '-2x + 5 ≤ 11 → -2x ≤ 6 → x ≥ -3. Solution: [-3, ∞)'
      },
      {
        q: 'Find the solution set of: 4 < 2x - 6 < 10.',
        hint: 'Add 6 to all parts, then divide by 2.',
        answer: '4 < 2x - 6 < 10 → 10 < 2x < 16 → 5 < x < 8. Solution: (5, 8)'
      }
    ]
  },

  // ============================================================
  // LECTURE 2 - Absolute Value
  // ============================================================
  2: {
    problems: [
      {
        q: 'Solve: |x - 3| = 4.',
        hint: 'Set x-3 = 4 and x-3 = -4.',
        answer: 'x = 7 or x = -1'
      },
      {
        q: 'Solve: |3x - 2| = |5x + 4|.',
        hint: 'Either 3x-2 = 5x+4 or 3x-2 = -(5x+4).',
        answer: '3x-2 = 5x+4 → -2x=6 → x=-3. 3x-2 = -5x-4 → 8x=-2 → x=-1/4. Solutions: x = -3, -1/4'
      },
      {
        q: 'Solve: |x - 3| < 4.',
        hint: '-4 < x-3 < 4. Add 3 throughout.',
        answer: '-1 < x < 7. Solution: (-1, 7)'
      },
      {
        q: 'Solve: |x + 4| ≥ 2.',
        hint: 'x+4 ≤ -2 or x+4 ≥ 2.',
        answer: 'x ≤ -6 or x ≥ -2. Solution: (-∞, -6] ∪ [-2, ∞)'
      },
      {
        q: 'Solve: |2x + 1| = 7.',
        hint: 'Set 2x+1 = 7 and 2x+1 = -7.',
        answer: '2x+1=7 → x=3. 2x+1=-7 → x=-4. Solutions: x=3, -4'
      }
    ]
  },

  // ============================================================
  // LECTURE 3 - Coordinate Planes and Graphs
  // ============================================================
  3: {
    problems: [
      {
        q: 'Find the x and y intercepts of the graph: 3x + 2y = 6.',
        hint: 'Set y=0 for x-intercept, set x=0 for y-intercept.',
        answer: 'x-intercept: y=0 → 3x=6 → x=2. y-intercept: x=0 → 2y=6 → y=3.'
      },
      {
        q: 'Test the graph of y = 1/x for symmetry about the x-axis, y-axis, and origin.',
        hint: 'Replace x with -x, y with -y, and check if equation remains the same.',
        answer: 'About x-axis: replace y with -y → -y=1/x → y=-1/x (not same). About y-axis: replace x with -x → y=-1/x (not same). About origin: replace x with -x, y with -y → -y = -1/x → y=1/x (same). Symmetric about origin.'
      },
      {
        q: 'Sketch the graph of y = x². Find its intercepts and symmetry.',
        hint: 'Find x-intercept (set y=0) and y-intercept (set x=0). Check symmetry.',
        answer: 'x-intercept: x=0 (0,0). y-intercept: (0,0). Symmetric about y-axis (since (-x)²=x²).'
      },
      {
        q: 'Find the x-intercept and y-intercept of y = x² - 4.',
        hint: 'Set y=0 for x-intercepts, set x=0 for y-intercept.',
        answer: 'y-intercept: (0,-4). x-intercepts: x²-4=0 → x=±2 → (2,0) and (-2,0).'
      },
      {
        q: 'Test the graph of y = x² for symmetry.',
        hint: 'Check if replacing x with -x gives the same equation.',
        answer: 'y = (-x)² = x², so symmetric about y-axis.'
      }
    ]
  },

  // ============================================================
  // LECTURE 4 - Lines
  // ============================================================
  4: {
    problems: [
      {
        q: 'Find the slope of the line through (6, 2) and (9, 8).',
        hint: 'm = (y₂-y₁)/(x₂-x₁).',
        answer: 'm = (8-2)/(9-6) = 6/3 = 2'
      },
      {
        q: 'Find the slope of the line through (2, 9) and (4, 3).',
        hint: 'm = (y₂-y₁)/(x₂-x₁).',
        answer: 'm = (3-9)/(4-2) = -6/2 = -3'
      },
      {
        q: 'Write the equation of the line through (2, 3) with slope -3/2 in point-slope form.',
        hint: 'Use y - y₁ = m(x - x₁).',
        answer: 'y - 3 = (-3/2)(x - 2)'
      },
      {
        q: 'Find the slope and y-intercept of the line: 8x + 5y = 20.',
        hint: 'Solve for y to get y = mx + b.',
        answer: '5y = -8x + 20 → y = -8/5 x + 4. Slope = -8/5, y-intercept = 4.'
      },
      {
        q: 'Find the equation of the line through (-2, -1) and (3, 4).',
        hint: 'Find slope first, then use point-slope form.',
        answer: 'm = (4-(-1))/(3-(-2)) = 5/5 = 1. y+1 = 1(x+2) → y = x + 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 5 - Distance; Circles; Quadratic Equations
  // ============================================================
  5: {
    problems: [
      {
        q: 'Find the distance between (-2, 3) and (1, 7).',
        hint: 'd = √[(x₂-x₁)² + (y₂-y₁)²].',
        answer: 'd = √[(1-(-2))² + (7-3)²] = √[3²+4²] = √25 = 5'
      },
      {
        q: 'Find the midpoint of the line segment joining (3, -4) and (7, 2).',
        hint: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).',
        answer: '( (3+7)/2, (-4+2)/2 ) = (5, -1)'
      },
      {
        q: 'Find the equation of the circle with center (-5, 3) and radius 4.',
        hint: 'Use (x-h)² + (y-k)² = r².',
        answer: '(x+5)² + (y-3)² = 16'
      },
      {
        q: 'Find the center and radius of the circle: x² + y² - 8x + 2y + 8 = 0.',
        hint: 'Complete the square for x and y terms.',
        answer: '(x²-8x+16) + (y²+2y+1) = -8+16+1 → (x-4)² + (y+1)² = 9. Center: (4,-1), radius: 3.'
      },
      {
        q: 'Find the vertex of the parabola: y = x² - 2x - 2.',
        hint: 'x-coordinate = -b/(2a).',
        answer: 'a=1, b=-2. x = -(-2)/(2) = 1. y = 1 - 2 - 2 = -3. Vertex: (1,-3).'
      }
    ]
  },

  // ============================================================
  // LECTURE 6 - Functions
  // ============================================================
  6: {
    problems: [
      {
        q: 'Find the domain of f(x) = 1/(x² - 4).',
        hint: 'Denominator cannot be zero.',
        answer: 'x² - 4 ≠ 0 → x ≠ ±2. Domain: (-∞, -2) ∪ (-2, 2) ∪ (2, ∞).'
      },
      {
        q: 'Find the range of f(x) = x².',
        hint: 'x² is always non-negative.',
        answer: '[0, ∞)'
      },
      {
        q: 'If f(x) = x² + 1, find f(3), f(-2), and f(a+1).',
        hint: 'Substitute the given values into the function.',
        answer: 'f(3) = 10, f(-2) = 5, f(a+1) = (a+1)² + 1 = a² + 2a + 2.'
      },
      {
        q: 'Find the domain of f(x) = √(x-3).',
        hint: 'The expression inside square root must be ≥ 0.',
        answer: 'x-3 ≥ 0 → x ≥ 3. Domain: [3, ∞)'
      },
      {
        q: 'If f(x) = 2x + 1 and g(x) = x², find (f∘g)(x) and (g∘f)(x).',
        hint: '(f∘g)(x) = f(g(x)), (g∘f)(x) = g(f(x)).',
        answer: '(f∘g)(x) = 2(x²) + 1 = 2x² + 1. (g∘f)(x) = (2x+1)² = 4x² + 4x + 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 7 - Operations on Functions
  // ============================================================
  7: {
    problems: [
      {
        q: 'If f(x) = x² and g(x) = x+1, find (f+g)(x), (f-g)(x), (f·g)(x), and (f/g)(x).',
        hint: 'Use definitions of function operations.',
        answer: '(f+g)(x) = x²+x+1, (f-g)(x)=x²-x-1, (f·g)(x)=x³+x², (f/g)(x)=x²/(x+1), x≠-1.'
      },
      {
        q: 'If f(x) = x³ and g(x) = x+4, find (f∘g)(x) and (g∘f)(x).',
        hint: 'Substitute g(x) into f and vice versa.',
        answer: '(f∘g)(x) = (x+4)³, (g∘f)(x) = x³ + 4.'
      },
      {
        q: 'Decompose h(x) = (x²+1)¹⁰ into f(g(x)).',
        hint: 'Choose an inside function and an outside function.',
        answer: 'f(x) = x¹⁰, g(x) = x²+1. Then h(x) = f(g(x)).'
      },
      {
        q: 'Find the domain of (f+g)(x) if f(x) = √x and g(x) = 1/x.',
        hint: 'Domain is intersection of domains of f and g.',
        answer: 'Domain of f: [0,∞). Domain of g: (-∞,0)∪(0,∞). Intersection: (0,∞).'
      },
      {
        q: 'If f(x) = 1/x and g(x) = x², find (f/g)(x) and its domain.',
        hint: '(f/g)(x) = f(x)/g(x). Domain excludes g(x)=0.',
        answer: '(f/g)(x) = (1/x)/x² = 1/x³, x ≠ 0.'
      }
    ]
  },

  // ============================================================
  // LECTURE 8 - Graphs of Functions
  // ============================================================
  8: {
    problems: [
      {
        q: 'Describe the transformations to graph y = |x-3| + 2 from y = |x|.',
        hint: 'Consider shifts (translations).',
        answer: 'Shift right by 3 units, then shift up by 2 units.'
      },
      {
        q: 'Sketch the graph of f(x) = |x|. State its domain and range.',
        hint: 'V-shaped graph with vertex at origin.',
        answer: 'Domain: (-∞, ∞). Range: [0, ∞).'
      },
      {
        q: 'Graph the piecewise function: f(x) = { 1 if x ≤ 2; x+2 if x > 2 }.',
        hint: 'Graph y=1 for x≤2 and y=x+2 for x>2.',
        answer: 'A horizontal line at y=1 up to x=2 (including point), then a line y=x+2 starting from x=2 (open circle at (2,4) because x>2).'
      },
      {
        q: 'Describe the transformation: y = -f(x) from y = f(x).',
        hint: 'Reflection about which axis?',
        answer: 'Reflection about the x-axis.'
      },
      {
        q: 'Sketch the graph of y = x² - 4x + 5 by completing the square.',
        hint: 'Complete square: y = (x-2)² + 1. This is y=x² shifted right 2 and up 1.',
        answer: 'Vertex at (2,1), opens upward.'
      }
    ]
  },

  // ============================================================
  // LECTURE 9 - Limits (Intuitive Introduction)
  // ============================================================
  9: {
    problems: [
      {
        q: 'Evaluate lim_{x→0} sin x / x.',
        hint: 'Standard limit.',
        answer: '1'
      },
      {
        q: 'Evaluate lim_{x→0} (1 - cos x)/x.',
        hint: 'Standard limit.',
        answer: '0'
      },
      {
        q: 'Evaluate lim_{x→0} 1/x².',
        hint: 'As x→0, denominator →0, positive.',
        answer: '+∞'
      },
      {
        q: 'Evaluate lim_{x→0} sin(1/x).',
        hint: 'Oscillates between -1 and 1.',
        answer: 'Does not exist (oscillates).'
      },
      {
        q: 'Evaluate lim_{x→∞} 1/x.',
        hint: 'As x gets very large, 1/x approaches 0.',
        answer: '0'
      }
    ]
  },

  // ============================================================
  // LECTURE 10 - Limits (Computational Techniques)
  // ============================================================
  10: {
    problems: [
      {
        q: 'Evaluate lim_{x→2} (x² - 4)/(x - 2).',
        hint: 'Factor numerator: (x-2)(x+2). Cancel (x-2).',
        answer: 'lim_{x→2} (x+2) = 4'
      },
      {
        q: 'Evaluate lim_{x→3} (x² - 9)/(x - 3).',
        hint: 'Factor numerator as (x-3)(x+3).',
        answer: 'lim_{x→3} (x+3) = 6'
      },
      {
        q: 'Evaluate lim_{x→∞} (3x² + 2x)/(5x² - 1).',
        hint: 'Divide numerator and denominator by x².',
        answer: 'lim_{x→∞} (3 + 2/x)/(5 - 1/x²) = 3/5'
      },
      {
        q: 'Evaluate lim_{x→0} (sin 3x)/x.',
        hint: 'Rewrite as 3 * sin(3x)/(3x).',
        answer: '3 * 1 = 3'
      },
      {
        q: 'Evaluate lim_{x→0} (1 - cos x)/x².',
        hint: 'Use identity 1-cos x = 2 sin²(x/2). Or known limit = 1/2.',
        answer: '1/2'
      }
    ]
  },

  // ============================================================
  // LECTURE 11 - Limits (Rigorous Approach)
  // ============================================================
  11: {
    problems: [
      {
        q: 'Prove lim_{x→2} (3x - 5) = 1 using ε-δ definition.',
        hint: 'Given ε>0, need to find δ such that |(3x-5)-1| < ε whenever 0<|x-2|<δ.',
        answer: '|3x-6| < ε → 3|x-2| < ε → |x-2| < ε/3. Choose δ = ε/3.'
      },
      {
        q: 'Prove lim_{x→1} (2x + 3) = 5 using ε-δ definition.',
        hint: 'Given ε>0, find δ such that |(2x+3)-5| < ε.',
        answer: '|2x-2| < ε → 2|x-1| < ε → |x-1| < ε/2. Choose δ = ε/2.'
      },
      {
        q: 'Show that lim_{x→0} f(x) does not exist for f(x) = {1 if x>0, -1 if x<0}.',
        hint: 'Show left and right limits differ.',
        answer: 'Right limit = 1, Left limit = -1. Since they are not equal, limit does not exist.'
      },
      {
        q: 'Prove lim_{x→3} (x²) = 9 using ε-δ definition.',
        hint: '|x²-9| = |x-3||x+3|. Bound |x+3| near x=3.',
        answer: 'Let δ ≤ 1, then |x-3|<1 → 2<x<4 → |x+3|<7. So |x²-9| < 7|x-3| < ε → |x-3| < ε/7. Choose δ = min(1, ε/7).'
      },
      {
        q: 'Prove lim_{x→a} c = c using ε-δ definition.',
        hint: '|c - c| = 0 < ε for any δ.',
        answer: 'For any ε>0, choose any δ>0 (e.g., δ=1). Then if 0<|x-a|<δ, |c-c|=0<ε.'
      }
    ]
  },

  // ============================================================
  // LECTURE 12 - Continuity
  // ============================================================
  12: {
    problems: [
      {
        q: 'Find the value of c that makes the function continuous at x=2: f(x) = { x²-4)/(x-2) if x≠2, c if x=2 }.',
        hint: 'Compute the limit as x→2 and set c equal to it.',
        answer: 'lim_{x→2} (x²-4)/(x-2) = lim_{x→2} (x+2) = 4. So c = 4.'
      },
      {
        q: 'Show that f(x) = x² - 2x + 1 is continuous everywhere.',
        hint: 'Polynomials are continuous everywhere.',
        answer: 'Since f is a polynomial, it is continuous for all real numbers.'
      },
      {
        q: 'Find the discontinuity of f(x) = (x²-9)/(x-3) and classify it.',
        hint: 'Factor and cancel to see if limit exists.',
        answer: 'f(x) = x+3 for x≠3. Limit as x→3 is 6, but f(3) undefined. Removable discontinuity at x=3.'
      },
      {
        q: 'Show that the equation x³ - x - 1 = 0 has a root between 1 and 2 using IVT.',
        hint: 'Let f(x)=x³-x-1. Evaluate f(1) and f(2).',
        answer: 'f(1) = 1-1-1 = -1. f(2) = 8-2-1 = 5. Since f(1)<0 and f(2)>0, and f is continuous, by IVT there is a root in (1,2).'
      },
      {
        q: 'Find the intervals of continuity for f(x) = (x²-4)/(x²-5x+6).',
        hint: 'Factor denominator and find where it is zero.',
        answer: 'Denominator: x²-5x+6 = (x-2)(x-3). Discontinuities at x=2 and x=3. Continuous on (-∞,2), (2,3), (3,∞).'
      }
    ]
  },

  // ============================================================
  // LECTURE 13 - Limits and Continuity of Trigonometric Functions
  // ============================================================
  13: {
    problems: [
      {
        q: 'Evaluate lim_{x→0} sin(5x)/x.',
        hint: 'Rewrite as 5 * sin(5x)/(5x).',
        answer: '5 * 1 = 5'
      },
      {
        q: 'Evaluate lim_{x→0} tan x / x.',
        hint: 'tan x = sin x / cos x.',
        answer: 'lim_{x→0} (sin x / x) * (1/cos x) = 1 * 1 = 1'
      },
      {
        q: 'Evaluate lim_{x→0} x² sin(1/x).',
        hint: 'Use Squeeze theorem: -x² ≤ x² sin(1/x) ≤ x².',
        answer: 'Since -x² and x² go to 0, the limit is 0.'
      },
      {
        q: 'Evaluate lim_{x→0} (1 - cos(2x))/x².',
        hint: 'Use 1-cosθ = 2 sin²(θ/2). Or known limit: lim_{θ→0} (1-cos θ)/θ² = 1/2.',
        answer: 'Let θ=2x. (1-cos2x)/x² = (1-cos2x)/(2x)² * 4 = 4 * (1-cosθ)/θ² → 4*(1/2) = 2.'
      },
      {
        q: 'Determine continuity of f(x) = sin x at x=π/2.',
        hint: 'sin x is continuous everywhere.',
        answer: 'Continuous at π/2.'
      }
    ]
  },

  // ============================================================
  // LECTURE 14 - Tangent Lines and Rates of Change
  // ============================================================
  14: {
    problems: [
      {
        q: 'Find the average rate of change of f(x) = x² + 1 over [3, 5].',
        hint: 'Average rate = [f(5)-f(3)]/(5-3).',
        answer: '[26 - 10]/2 = 16/2 = 8'
      },
      {
        q: 'Find the instantaneous rate of change of f(x) = x² + 1 at x = -4.',
        hint: 'Instantaneous rate = lim_{h→0} [f(-4+h)-f(-4)]/h.',
        answer: 'lim_{h→0} [(-4+h)²+1 - 17]/h = lim_{h→0} [16 -8h + h² +1 -17]/h = lim_{h→0} (-8h+h²)/h = lim_{h→0} (-8+h) = -8.'
      },
      {
        q: 'Find the slope of the tangent line to f(x) = x² at x = 3.',
        hint: 'Derivative at x=3: f\'(3) = 2*3 = 6.',
        answer: '6'
      },
      {
        q: 'Find the equation of the tangent line to f(x) = x² at x = 3.',
        hint: 'Point (3,9), slope 6. Use point-slope form.',
        answer: 'y - 9 = 6(x - 3) → y = 6x - 9.'
      },
      {
        q: 'Find the average rate of change of f(x) = √x over [1, 4].',
        hint: '[f(4)-f(1)]/(4-1) = (2-1)/3.',
        answer: '1/3'
      }
    ]
  },

  // ============================================================
  // LECTURE 15 - The Derivative
  // ============================================================
  15: {
    problems: [
      {
        q: 'Find the derivative of f(x) = x² + 1 using the definition.',
        hint: 'f\'(x) = lim_{h→0} [f(x+h)-f(x)]/h.',
        answer: 'lim_{h→0} [((x+h)²+1)-(x²+1)]/h = lim_{h→0} (2xh+h²)/h = lim_{h→0} (2x+h) = 2x.'
      },
      {
        q: 'Find the derivative of f(x) = √x using the definition.',
        hint: 'Rationalize the numerator.',
        answer: 'lim_{h→0} [√(x+h)-√x]/h = lim_{h→0} [ (x+h-x) / (h(√(x+h)+√x)) ] = lim_{h→0} 1/(√(x+h)+√x) = 1/(2√x).'
      },
      {
        q: 'Find the derivative of f(x) = 3x + 2 using the definition.',
        hint: 'f(x+h) = 3x+3h+2.',
        answer: 'lim_{h→0} [3x+3h+2 - (3x+2)]/h = lim_{h→0} 3h/h = 3.'
      },
      {
        q: 'Is f(x) = |x| differentiable at x=0?',
        hint: 'Check left and right derivatives.',
        answer: 'Right derivative = 1, Left derivative = -1. Not differentiable at 0 (corner).'
      },
      {
        q: 'Find f\'(2) for f(x) = x² using the derivative definition.',
        hint: 'f\'(2) = lim_{h→0} [(2+h)² - 4]/h.',
        answer: 'lim_{h→0} (4+4h+h²-4)/h = lim_{h→0} (4+h) = 4.'
      }
    ]
  },

  // ============================================================
  // LECTURE 16 - Techniques of Differentiation
  // ============================================================
  16: {
    problems: [
      {
        q: 'Differentiate f(x) = x⁵.',
        hint: 'Power rule: d/dx[xⁿ] = nxⁿ⁻¹.',
        answer: '5x⁴'
      },
      {
        q: 'Differentiate f(x) = 3x⁸.',
        hint: 'Constant multiple rule.',
        answer: '24x⁷'
      },
      {
        q: 'Differentiate f(x) = x⁴ + x³.',
        hint: 'Sum rule.',
        answer: '4x³ + 3x²'
      },
      {
        q: 'Differentiate f(x) = (x²+1)(x³-1) using product rule.',
        hint: 'f\' = (2x)(x³-1) + (x²+1)(3x²).',
        answer: '2x⁴ - 2x + 3x⁴ + 3x² = 5x⁴ + 3x² - 2x.'
      },
      {
        q: 'Differentiate f(x) = (3x)/(5x²) using quotient rule.',
        hint: 'Simplify first: 3x/(5x²) = 3/(5x) = (3/5)x⁻¹. Derivative = -3/(5x²).',
        answer: '-3/(5x²)'
      }
    ]
  },

  // ============================================================
  // LECTURE 17 - Derivatives of Trigonometric Functions
  // ============================================================
  17: {
    problems: [
      {
        q: 'Differentiate f(x) = sin x.',
        hint: 'Derivative of sin x is cos x.',
        answer: 'cos x'
      },
      {
        q: 'Differentiate f(x) = cos x.',
        hint: 'Derivative of cos x is -sin x.',
        answer: '-sin x'
      },
      {
        q: 'Differentiate f(x) = tan x.',
        hint: 'Derivative of tan x is sec² x.',
        answer: 'sec² x'
      },
      {
        q: 'Differentiate f(x) = sec x.',
        hint: 'Derivative of sec x is sec x tan x.',
        answer: 'sec x tan x'
      },
      {
        q: 'Differentiate f(x) = sin x + cos x.',
        hint: 'Sum rule.',
        answer: 'cos x - sin x'
      }
    ]
  },

  // ============================================================
  // LECTURE 18 - The Chain Rule
  // ============================================================
  18: {
    problems: [
      {
        q: 'Differentiate f(x) = (x²+1)²³ using chain rule.',
        hint: 'Let u = x²+1. d/dx = 23u²² * (2x).',
        answer: '46x(x²+1)²²'
      },
      {
        q: 'Differentiate f(x) = sin(2x) using chain rule.',
        hint: 'Let u = 2x. d/dx = cos(2x) * 2.',
        answer: '2cos(2x)'
      },
      {
        q: 'Differentiate f(x) = cos(3x+1).',
        hint: 'Derivative of cos u is -sin u, times du/dx.',
        answer: '-3 sin(3x+1)'
      },
      {
        q: 'Differentiate f(x) = (2x+3)⁵.',
        hint: 'Let u = 2x+3. Derivative = 5u⁴ * 2 = 10(2x+3)⁴.',
        answer: '10(2x+3)⁴'
      },
      {
        q: 'Differentiate f(x) = tan(x²+1).',
        hint: 'Derivative of tan u is sec² u, times du/dx.',
        answer: '2x sec²(x²+1)'
      }
    ]
  },

  // ============================================================
  // LECTURE 19 - Implicit Differentiation
  // ============================================================
  19: {
    problems: [
      {
        q: 'Find dy/dx for xy = 1 using implicit differentiation.',
        hint: 'Differentiate both sides w.r.t x: x dy/dx + y = 0.',
        answer: 'dy/dx = -y/x'
      },
      {
        q: 'Find dy/dx for x² + y² = 25.',
        hint: '2x + 2y dy/dx = 0.',
        answer: 'dy/dx = -x/y'
      },
      {
        q: 'Find dy/dx for 5y² + sin y = x².',
        hint: '10y dy/dx + cos y dy/dx = 2x.',
        answer: 'dy/dx = 2x/(10y + cos y)'
      },
      {
        q: 'Find the slope of the tangent to x² + y² = 25 at (3, 4).',
        hint: 'dy/dx = -x/y. Substitute x=3, y=4.',
        answer: 'dy/dx = -3/4'
      },
      {
        q: 'Find dy/dx for x³ + y³ = 6xy.',
        hint: '3x² + 3y² dy/dx = 6y + 6x dy/dx.',
        answer: 'dy/dx = (6y - 3x²)/(3y² - 6x) = (2y - x²)/(y² - 2x)'
      }
    ]
  },

  // ============================================================
  // LECTURE 20 - Derivatives of Logarithmic and Exponential Functions
  // ============================================================
  20: {
    problems: [
      {
        q: 'Differentiate f(x) = ln x.',
        hint: 'Derivative of ln x is 1/x.',
        answer: '1/x'
      },
      {
        q: 'Differentiate f(x) = e^x.',
        hint: 'Derivative of e^x is e^x.',
        answer: 'e^x'
      },
      {
        q: 'Differentiate f(x) = ln(x²+1).',
        hint: '1/(x²+1) * 2x = 2x/(x²+1).',
        answer: '2x/(x²+1)'
      },
      {
        q: 'Differentiate f(x) = e^{2x}.',
        hint: 'e^{2x} * 2 = 2e^{2x}.',
        answer: '2e^{2x}'
      },
      {
        q: 'Differentiate f(x) = log₂ x.',
        hint: 'Derivative of log_b x is 1/(x ln b).',
        answer: '1/(x ln 2)'
      },
      {
        q: 'Differentiate f(x) = x^x using logarithmic differentiation.',
        hint: 'ln y = x ln x. Differentiate: (1/y) dy/dx = ln x + 1. So dy/dx = x^x (ln x + 1).',
        answer: 'x^x (ln x + 1)'
      }
    ]
  },

  // ============================================================
  // LECTURE 21 - Applications of Differentiation
  // ============================================================
  21: {
    problems: [
      {
        q: 'Oil spilled from a ruptured tanker spreads in a circular pattern. The radius increases at 2 ft/s. How fast is the area increasing when radius is 60 ft?',
        hint: 'A = πr². dA/dt = 2πr dr/dt.',
        answer: 'dA/dt = 2π(60)(2) = 240π ft²/s'
      },
      {
        q: 'A 5 ft ladder leans against a wall. The base moves away at 2 ft/s. How fast is the top moving down when base is 4 ft from wall?',
        hint: 'x²+y²=25. 2x dx/dt + 2y dy/dt = 0.',
        answer: 'x=4 → y=3. dy/dt = -(x/y) dx/dt = -(4/3)(2) = -8/3 ft/s (moving down).'
      },
      {
        q: 'Find the intervals where f(x) = x² - 4x + 3 is increasing and decreasing.',
        hint: 'f\'(x) = 2x - 4. Set >0 for increasing, <0 for decreasing.',
        answer: 'f\'(x)=2(x-2). Increasing on (2,∞), decreasing on (-∞,2).'
      },
      {
        q: 'Determine the concavity of f(x) = x² - 4x + 3.',
        hint: 'f\'\'(x) = 2 > 0. Concave up everywhere.',
        answer: 'Concave up on (-∞,∞).'
      },
      {
        q: 'Find the intervals where f(x) = x³ - 3x is increasing and decreasing.',
        hint: 'f\'(x) = 3x² - 3 = 3(x-1)(x+1).',
        answer: 'f\'(x)>0 when x<-1 or x>1 (increasing). f\'(x)<0 when -1<x<1 (decreasing).'
      }
    ]
  },

  // ============================================================
  // LECTURE 22 - Relative Extrema
  // ============================================================
  22: {
    problems: [
      {
        q: 'Find the critical points of f(x) = x³ - 3x.',
        hint: 'f\'(x) = 3x² - 3 = 0 → x² = 1.',
        answer: 'x = 1 and x = -1'
      },
      {
        q: 'Use the first derivative test to find relative extrema of f(x) = x³ - 3x.',
        hint: 'Test sign of f\' around critical points.',
        answer: 'At x=-1: f\' changes + to - → relative maximum. At x=1: f\' changes - to + → relative minimum.'
      },
      {
        q: 'Use the second derivative test for f(x) = x³ - 3x.',
        hint: 'f\'\'(x) = 6x. f\'\'(-1) = -6 < 0 → max. f\'\'(1) = 6 > 0 → min.',
        answer: 'Relative max at x=-1, relative min at x=1.'
      },
      {
        q: 'Find the relative extrema of f(x) = x⁴ - 2x².',
        hint: 'f\'(x) = 4x³ - 4x = 4x(x-1)(x+1). Critical points: x=0, ±1. Use second derivative test.',
        answer: 'f\'\'(x)=12x²-4. f\'\'(0) = -4 < 0 → max. f\'\'(1)=8>0 → min. f\'\'(-1)=8>0 → min.'
      },
      {
        q: 'Find the critical points of f(x) = 3x^{5/3} - 15x^{2/3}.',
        hint: 'f\'(x)=5x^{2/3} - 10x^{-1/3} = 5x^{-1/3}(x-2). Critical points where f\'=0 or undefined.',
        answer: 'f\'=0 → x=2. f\' undefined → x=0. Critical points: x=0, 2.'
      }
    ]
  },

  23: {
    problems: [
      {
        q: 'Find the absolute maximum and minimum values of \`f(x) = x³ - 6x² + 9x + 2\` on the interval [0, 4].',
        hint: 'Find critical points by setting f\'(x)=0, then evaluate at critical points and endpoints.',
        answer: 'f\'(x) = 3x² - 12x + 9 = 3(x-1)(x-3) → x=1,3. f(0)=2, f(1)=6, f(3)=2, f(4)=6. Max = 6 at x=1 and x=4. Min = 2 at x=0 and x=3.'
      },
      {
        q: 'Find the dimensions of a rectangle with perimeter 200 m that has maximum area.',
        hint: 'Let sides be x and y. 2x + 2y = 200 → y = 100 - x. Area A = x(100-x). Maximize A.',
        answer: 'A = 100x - x², A\' = 100 - 2x = 0 → x = 50. y = 50. Square with side 50 m, area = 2500 m².'
      },
      {
        q: 'A farmer wants to fence a rectangular field with 500 m of fencing. One side of the field is along a river (no fence needed). Find the dimensions for maximum area.',
        hint: 'Let width = x, length = y. Fencing: 2x + y = 500 → y = 500 - 2x. Area A = x(500-2x).',
        answer: 'A = 500x - 2x², A\' = 500 - 4x = 0 → x = 125. y = 500 - 250 = 250. Dimensions: 125 m × 250 m.'
      },
      {
        q: 'A box with an open top is to be made from a 12 inch by 12 inch square piece of cardboard by cutting equal squares from the corners. Find the dimensions for maximum volume.',
        hint: 'Volume V = x(12-2x)², 0 ≤ x ≤ 6. Find critical points.',
        answer: 'V = 4x³ - 48x² + 144x. V\' = 12x² - 96x + 144 = 12(x-2)(x-6). Critical: x=2, x=6. V(2) = 2(8)² = 128 in³. Max at x=2. Dimensions: 8×8×2 inches.'
      },
      {
        q: 'Find the absolute maximum and minimum of \`f(x) = 2x³ - 15x² + 36x\` on [1, 5].',
        hint: 'Find critical points, evaluate at critical points and endpoints.',
        answer: 'f\'(x) = 6x² - 30x + 36 = 6(x-2)(x-3). Critical: x=2,3. f(1)=23, f(2)=28, f(3)=27, f(5)=55. Max = 55 at x=5. Min = 23 at x=1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 24 - Newton's Method, Rolle's Theorem, MVT
  // ============================================================
  24: {
    problems: [
      {
        q: 'Use Newton\'s method to approximate the solution of \`x² = 5\` (find √5). Start with \`x₁ = 2\`.',
        hint: 'f(x) = x² - 5, f\'(x) = 2x. Apply formula \`x_{n+1} = x_n - (x_n² - 5)/(2x_n)\`.',
        answer: 'x₂ = 2 - (4-5)/4 = 2.25. x₃ = 2.25 - (5.0625-5)/4.5 = 2.2361. x₄ ≈ 2.23607. So √5 ≈ 2.23607.'
      },
      {
        q: 'Verify Rolle\'s Theorem for \`f(x) = x² - 4x\` on [0, 4]. Find the point c.',
        hint: 'Check f(0) = f(4) = 0. Find f\'(x) and solve f\'(c) = 0.',
        answer: 'f(0)=0, f(4)=0. f\'(x)=2x-4. f\'(c)=0 → 2c-4=0 → c=2. c is in (0,4).'
      },
      {
        q: 'Verify MVT for \`f(x) = x³\` on [1, 2]. Find c.',
        hint: 'f\'(c) = [f(2)-f(1)]/(2-1). f\'(x)=3x².',
        answer: '[8-1]/1 = 7. 3c² = 7 → c² = 7/3 → c = √(7/3) ≈ 1.5275, in (1,2).'
      },
      {
        q: 'Use Newton\'s method to approximate the solution of \`x = cos(x)\`. Start with \`x₁ = 0.5\`.',
        hint: 'f(x) = x - cos(x), f\'(x) = 1 + sin(x).',
        answer: 'x₂ = 0.5 - (0.5 - cos(0.5))/(1+sin(0.5)) = 0.5 - (0.5-0.8776)/1.4794 = 0.7552. x₃ = 0.7391. x₄ = 0.7391. Solution ≈ 0.7391.'
      },
      {
        q: 'Find the point c guaranteed by MVT for \`f(x) = √x\` on [1, 4].',
        hint: 'f\'(x) = 1/(2√x). f\'(c) = [f(4)-f(1)]/(4-1).',
        answer: '[2-1]/3 = 1/3. 1/(2√c) = 1/3 → 2√c = 3 → √c = 1.5 → c = 2.25.'
      }
    ]
  },

  // ============================================================
  // LECTURE 25 - Integration (Antiderivatives)
  // ============================================================
  25: {
    problems: [
      {
        q: 'Find \`∫ (4x³ - 2x + 5) dx\`.',
        hint: 'Use power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1).',
        answer: '4∫x³dx - 2∫x dx + 5∫dx = 4(x⁴/4) - 2(x²/2) + 5x + C = x⁴ - x² + 5x + C'
      },
      {
        q: 'Find \`∫ (sin x + cos x) dx\`.',
        hint: 'Use ∫sin x dx = -cos x and ∫cos x dx = sin x.',
        answer: '∫sin x dx + ∫cos x dx = -cos x + sin x + C'
      },
      {
        q: 'Find \`∫ (3/x²) dx\`.',
        hint: 'Rewrite as 3x⁻², use power rule.',
        answer: '3∫x⁻²dx = 3(x⁻¹/-1) + C = -3/x + C'
      },
      {
        q: 'Find the antiderivative of f(x) = 2x + 3 that passes through (1, 5).',
        hint: 'First find general antiderivative, then use point to find C.',
        answer: 'F(x) = x² + 3x + C. F(1) = 1 + 3 + C = 5 → C = 1. So F(x) = x² + 3x + 1.'
      },
      {
        q: 'Find \`∫ (x³ - 4x² + 7) dx\`.',
        hint: 'Apply power rule to each term.',
        answer: 'x⁴/4 - 4x³/3 + 7x + C'
      }
    ]
  },

  // ============================================================
  // LECTURE 26 - Integration by Substitution
  // ============================================================
  26: {
    problems: [
      {
        q: 'Evaluate \`∫ (2x + 3)⁵ dx\` using substitution.',
        hint: 'Let u = 2x + 3, du = 2dx.',
        answer: 'u = 2x+3, dx = du/2. ∫ u⁵ · (du/2) = 1/2 · u⁶/6 + C = (2x+3)⁶/12 + C'
      },
      {
        q: 'Evaluate \`∫ x(x² + 1)⁴ dx\`.',
        hint: 'Let u = x² + 1, du = 2x dx → x dx = du/2.',
        answer: '1/2 ∫ u⁴ du = 1/2 · u⁵/5 + C = (x²+1)⁵/10 + C'
      },
      {
        q: 'Evaluate \`∫ e^(5x) dx\`.',
        hint: 'Let u = 5x, du = 5dx.',
        answer: 'u = 5x, dx = du/5. ∫ e^u · du/5 = 1/5 e^u + C = 1/5 e^(5x) + C'
      },
      {
        q: 'Evaluate \`∫ sin(3x) dx\`.',
        hint: 'Let u = 3x, du = 3dx.',
        answer: 'u = 3x, dx = du/3. ∫ sin u · du/3 = -1/3 cos u + C = -1/3 cos(3x) + C'
      },
      {
        q: 'Evaluate \`∫ (x²+1)³ · 2x dx\`.',
        hint: 'Let u = x²+1, du = 2x dx.',
        answer: '∫ u³ du = u⁴/4 + C = (x²+1)⁴/4 + C'
      },
      {
        q: 'Evaluate \`∫ 1/(2x+1) dx\`.',
        hint: 'Let u = 2x+1, du = 2dx.',
        answer: 'u = 2x+1, dx = du/2. ∫ 1/u · du/2 = 1/2 ln|u| + C = 1/2 ln|2x+1| + C'
      }
    ]
  },

  // ============================================================
  // LECTURE 27 - Sigma Notation
  // ============================================================
  27: {
    problems: [
      {
        q: 'Write \`1² + 2² + 3² + 4² + 5²\` in sigma notation.',
        hint: 'Identify the pattern: each term is k² where k goes from 1 to 5.',
        answer: '∑_{k=1}^5 k²'
      },
      {
        q: 'Evaluate \`∑_{k=1}^4 k³\`.',
        hint: 'Use formula: ∑k³ = [n(n+1)/2]².',
        answer: 'n=4: [4×5/2]² = 10² = 100. Check: 1+8+27+64 = 100.'
      },
      {
        q: 'Evaluate \`∑_{k=1}^5 (2k + 1)\`.',
        hint: 'Use ∑(2k+1) = 2∑k + ∑1.',
        answer: '2(5×6/2) + 5 = 2(15) + 5 = 35. Terms: 3+5+7+9+11 = 35.'
      },
      {
        q: 'Find the sum \`∑_{k=1}^{10} k²\`.',
        hint: 'Use formula: ∑k² = n(n+1)(2n+1)/6.',
        answer: '10×11×21/6 = 2310/6 = 385.'
      },
      {
        q: 'Express \`∑_{k=3}^7 k²\` with lower limit 1.',
        hint: 'Let j = k-2, so k = j+2. As k goes from 3 to 7, j goes from 1 to 5.',
        answer: '∑_{j=1}^5 (j+2)²'
      }
    ]
  },

  // ============================================================
  // LECTURE 28 - Area as Limit (Riemann Sums)
  // ============================================================
  28: {
    problems: [
      {
        q: 'Use a Riemann sum with right endpoints to approximate the area under \`f(x) = x\` on [0, 2] with n=4.',
        hint: 'Δx = 2/4 = 0.5. Right endpoints: 0.5, 1.0, 1.5, 2.0. Sum = Σ f(x_k)Δx.',
        answer: 'Δx = 0.5. x_k* = 0.5, 1.0, 1.5, 2.0. Sum = (0.5+1.0+1.5+2.0)×0.5 = 5.0×0.5 = 2.5. Actual area = 2.'
      },
      {
        q: 'Use a Riemann sum with left endpoints to approximate the area under \`f(x) = x²\` on [0, 2] with n=4.',
        hint: 'Δx = 0.5. Left endpoints: 0, 0.5, 1.0, 1.5.',
        answer: 'Sum = (0² + 0.5² + 1² + 1.5²)×0.5 = (0 + 0.25 + 1 + 2.25)×0.5 = 3.5×0.5 = 1.75. Actual area = 8/3 ≈ 2.67.'
      },
      {
        q: 'Find the area under \`f(x) = x\` on [1, 3] using the definition (limit of Riemann sums).',
        hint: 'Δx = 2/n. Right endpoints: x_k* = 1 + k(2/n).',
        answer: 'Sum = Σ (1 + 2k/n)(2/n) = (2/n)Σ1 + (4/n²)Σk = (2/n)(n) + (4/n²)(n(n+1)/2) = 2 + 2(n+1)/n → 4. Area = 4 (trapezoid: height 2, bases 1 and 3 → 4).'
      },
      {
        q: 'Calculate the Riemann sum for \`f(x) = x²\` on [0, 2] with n=4 using midpoints.',
        hint: 'Δx = 0.5. Midpoints: 0.25, 0.75, 1.25, 1.75.',
        answer: 'Sum = (0.25² + 0.75² + 1.25² + 1.75²)×0.5 = (0.0625 + 0.5625 + 1.5625 + 3.0625)×0.5 = 5.25×0.5 = 2.625.'
      },
      {
        q: 'Show that the area under \`f(x) = x²\` on [0, 1] is 1/3 using Riemann sums.',
        hint: 'Use right endpoints: x_k* = k/n, Δx = 1/n.',
        answer: 'Σ (k/n)²(1/n) = (1/n³)Σk² = (1/n³)(n(n+1)(2n+1)/6) = (n+1)(2n+1)/(6n²) → 2/6 = 1/3.'
      }
    ]
  },

  // ============================================================
  // LECTURE 29 - Definite Integral
  // ============================================================
  29: {
    problems: [
      {
        q: 'Given \`∫_1^3 f(x) dx = 4\` and \`∫_3^5 f(x) dx = 7\`, find \`∫_1^5 f(x) dx\` and \`∫_3^1 f(x) dx\`.',
        hint: 'Use interval additivity and reversing limits.',
        answer: '∫_1^5 = ∫_1^3 + ∫_3^5 = 4+7 = 11. ∫_3^1 = -∫_1^3 = -4.'
      },
      {
        q: 'Evaluate \`∫_0^2 (3x² - 2) dx\` using the properties of definite integrals.',
        hint: 'Split into 3∫x²dx - 2∫dx.',
        answer: '3∫_0^2 x²dx - 2∫_0^2 dx = 3(8/3) - 2(2) = 8 - 4 = 4.'
      },
      {
        q: 'If \`∫_0^2 f(x) dx = 5\` and \`∫_0^2 g(x) dx = 3\`, find \`∫_0^2 [2f(x) - 3g(x)] dx\`.',
        hint: 'Use constant multiple and sum/difference properties.',
        answer: '2∫_0^2 f(x) dx - 3∫_0^2 g(x) dx = 2(5) - 3(3) = 10 - 9 = 1.'
      },
      {
        q: 'Show that \`∫_0^1 x dx = 1/2\` using the definition (not the formula).',
        hint: 'Use Riemann sum with right endpoints: Δx = 1/n, x_k* = k/n.',
        answer: 'Σ (k/n)(1/n) = (1/n²)Σk = (1/n²)(n(n+1)/2) = (n+1)/(2n) → 1/2.'
      },
      {
        q: 'Evaluate \`∫_0^1 (x² + 2x) dx\` using the power rule for integrals.',
        hint: '∫x²dx = x³/3, ∫2x dx = x².',
        answer: '[x³/3 + x²]_0^1 = (1/3 + 1) - 0 = 4/3.'
      }
    ]
  },

  // ============================================================
  // LECTURE 30 - First Fundamental Theorem of Calculus
  // ============================================================
  30: {
    problems: [
      {
        q: 'Evaluate \`∫_1^2 (2x + 3) dx\` using FTC.',
        hint: 'Find antiderivative: F(x) = x² + 3x.',
        answer: '[x²+3x]_1^2 = (4+6) - (1+3) = 10 - 4 = 6.'
      },
      {
        q: 'Evaluate \`∫_0^π sin x dx\`.',
        hint: 'Antiderivative of sin x is -cos x.',
        answer: '[-cos x]_0^π = -cos π - (-cos 0) = -(-1) - (-1) = 1 + 1 = 2.'
      },
      {
        q: 'Find the average value of \`f(x) = x²\` on [0, 2].',
        hint: 'f_avg = 1/(b-a) ∫_a^b f(x) dx.',
        answer: 'f_avg = 1/2 ∫_0^2 x² dx = 1/2 [x³/3]_0^2 = 1/2 (8/3) = 4/3.'
      },
      {
        q: 'Find the point c guaranteed by MVT for integrals for \`f(x) = x²\` on [0, 2].',
        hint: '∫_0^2 x² dx = 8/3. By MVT, 8/3 = c²·(2) → c² = 4/3 → c = 2/√3.',
        answer: 'c = 2/√3 ≈ 1.155, which is in [0,2].'
      },
      {
        q: 'Evaluate \`∫_1^3 (x³ - 2x) dx\`.',
        hint: 'Antiderivative: x⁴/4 - x².',
        answer: '[x⁴/4 - x²]_1^3 = (81/4 - 9) - (1/4 - 1) = (81/4 - 36/4) - (1/4 - 4/4) = 45/4 - (-3/4) = 48/4 = 12.'
      }
    ]
  },

  // ============================================================
  // LECTURE 31 - Evaluating Definite Integrals by Substitution
  // ============================================================
  31: {
    problems: [
      {
        q: 'Evaluate \`∫_0^1 2x(x²+1)³ dx\` using substitution.',
        hint: 'Let u = x²+1, du = 2x dx. New limits: u=1 to u=2.',
        answer: '∫_1^2 u³ du = [u⁴/4]_1^2 = 16/4 - 1/4 = 15/4.'
      },
      {
        q: 'Evaluate \`∫_0^{π/2} sin² x cos x dx\`.',
        hint: 'Let u = sin x, du = cos x dx. Limits: u=0 to u=1.',
        answer: '∫_0^1 u² du = [u³/3]_0^1 = 1/3.'
      },
      {
        q: 'Evaluate \`∫_0^1 x/(x²+1) dx\`.',
        hint: 'Let u = x²+1, du = 2x dx. x dx = du/2. Limits: u=1 to u=2.',
        answer: '1/2 ∫_1^2 1/u du = 1/2 [ln|u|]_1^2 = 1/2 ln 2.'
      },
      {
        q: 'Evaluate \`∫_0^2 x²√(x³+1) dx\`.',
        hint: 'Let u = x³+1, du = 3x² dx. x² dx = du/3. Limits: u=1 to u=9.',
        answer: '1/3 ∫_1^9 √u du = 1/3 [2u^{3/2}/3]_1^9 = 2/9(27 - 1) = 52/9.'
      },
      {
        q: 'Evaluate \`∫_0^1 e^x √(1+e^x) dx\`.',
        hint: 'Let u = 1+e^x, du = e^x dx. Limits: u=2 to u=1+e.',
        answer: '∫_2^{1+e} u^{1/2} du = [2u^{3/2}/3]_2^{1+e} = 2/3[(1+e)^{3/2} - 2√2].'
      }
    ]
  },

  // ============================================================
  // LECTURE 32 - Second Fundamental Theorem of Calculus
  // ============================================================
  32: {
    problems: [
      {
        q: 'Find \`d/dx [∫_1^x (t² + 1) dt]\`.',
        hint: 'Direct application of Second FTC: derivative = integrand at x.',
        answer: 'x² + 1'
      },
      {
        q: 'Find \`d/dx [∫_0^{x²} cos t dt]\`.',
        hint: 'Use general form: f(g(x))·g\'(x) where f(t)=cos t, g(x)=x².',
        answer: 'cos(x²)·2x'
      },
      {
        q: 'Find \`F\'(x)\` if \`F(x) = ∫_1^x t³ dt\` and then evaluate \`F\'(2)\`.',
        hint: 'F\'(x) = x³. Then substitute x=2.',
        answer: 'F\'(x) = x³. F\'(2) = 8.'
      },
      {
        q: 'Find \`d/dx [∫_0^{√x} e^{t²} dt]\`.',
        hint: 'f(t) = e^{t²}, g(x) = √x, g\'(x) = 1/(2√x).',
        answer: 'e^{(√x)²} · 1/(2√x) = e^x / (2√x)'
      },
      {
        q: 'If \`F(x) = ∫_1^x (t² - 2t + 1) dt\`, find \`F\'(2)\`.',
        hint: 'F\'(x) = x² - 2x + 1. Then substitute x=2.',
        answer: 'F\'(2) = 4 - 4 + 1 = 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 33 - Area Between Curves
  // ============================================================
  33: {
    problems: [
      {
        q: 'Find the area between \`y = x+1\` and \`y = x²\` on [0, 2].',
        hint: 'f(x) = x+1 is above g(x) = x². Area = ∫_0^2 [(x+1)-x²] dx.',
        answer: '∫_0^2 (x+1-x²) dx = [x²/2 + x - x³/3]_0^2 = (2+2-8/3) - 0 = 4 - 8/3 = 4/3.'
      },
      {
        q: 'Find the area enclosed by \`y = x²\` and \`y = 2x - x²\`.',
        hint: 'Intersection: x² = 2x - x² → 2x² - 2x = 0 → 2x(x-1)=0 → x=0,1.',
        answer: 'A = ∫_0^1 [(2x-x²) - x²] dx = ∫_0^1 (2x-2x²) dx = [x² - 2x³/3]_0^1 = 1 - 2/3 = 1/3.'
      },
      {
        q: 'Find the area between \`y = √x\` and \`y = x²\` from x=0 to x=1.',
        hint: 'f(x) = √x is above g(x) = x² on [0,1].',
        answer: 'A = ∫_0^1 (√x - x²) dx = [2x^{3/2}/3 - x³/3]_0^1 = 2/3 - 1/3 = 1/3.'
      },
      {
        q: 'Find the area enclosed by \`x = y²\` and \`x = y+2\`.',
        hint: 'Intersection: y² = y+2 → y²-y-2=0 → (y-2)(y+1)=0 → y=-1,2.',
        answer: 'A = ∫_{-1}^2 [(y+2)-y²] dy = [y²/2 + 2y - y³/3]_{-1}^2 = (2+4-8/3) - (1/2-2+1/3) = 10/3 - (-7/6) = 20/6 + 7/6 = 27/6 = 9/2.'
      },
      {
        q: 'Find the area between \`y = sin x\` and \`y = cos x\` from x=0 to x=π/4.',
        hint: 'On [0, π/4], cos x ≥ sin x. A = ∫_0^{π/4} (cos x - sin x) dx.',
        answer: '[sin x + cos x]_0^{π/4} = (√2/2 + √2/2) - (0 + 1) = √2 - 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 34 - Volume by Slicing; Disks and Washers
  // ============================================================
  34: {
    problems: [
      {
        q: 'Find the volume of the solid generated by revolving \`y = x²\` from x=0 to x=1 about the x-axis.',
        hint: 'Use disk method: V = π∫_0^1 (x²)² dx = π∫_0^1 x⁴ dx.',
        answer: 'V = π [x⁵/5]_0^1 = π/5.'
      },
      {
        q: 'Find the volume of the solid generated by revolving \`y = √x\` from x=0 to x=4 about the x-axis.',
        hint: 'V = π∫_0^4 (√x)² dx = π∫_0^4 x dx.',
        answer: 'V = π [x²/2]_0^4 = π(16/2) = 8π.'
      },
      {
        q: 'Find the volume of the sphere of radius r by revolving \`y = √(r²-x²)\` about x-axis.',
        hint: 'V = π∫_{-r}^r (r²-x²) dx.',
        answer: 'V = π [r²x - x³/3]_{-r}^r = π[(r³ - r³/3) - (-r³ + r³/3)] = π[2r³/3 - (-2r³/3)] = 4πr³/3.'
      },
      {
        q: 'Find the volume using washer method: region between \`y = x\` and \`y = x²\` on [0,1] revolved about x-axis.',
        hint: 'Outer: y=x, Inner: y=x². V = π∫_0^1 (x² - x⁴) dx.',
        answer: 'V = π [x³/3 - x⁵/5]_0^1 = π(1/3 - 1/5) = 2π/15.'
      },
      {
        q: 'Find the volume generated by revolving \`y = sin x\` from x=0 to x=π about x-axis.',
        hint: 'V = π∫_0^π sin²x dx.',
        answer: 'V = π [x/2 - sin2x/4]_0^π = π(π/2) = π²/2.'
      }
    ]
  },

  // ============================================================
  // LECTURE 35 - Volume by Cylindrical Shells
  // ============================================================
  35: {
    problems: [
      {
        q: 'Use the shell method to find the volume generated by revolving \`y = x²\` on [0,1] about the y-axis.',
        hint: 'V = 2π∫_0^1 x·x² dx = 2π∫_0^1 x³ dx.',
        answer: 'V = 2π [x⁴/4]_0^1 = 2π(1/4) = π/2.'
      },
      {
        q: 'Find the volume generated by revolving the region between \`y = x\` and \`y = x²\` on [0,1] about the y-axis.',
        hint: 'V = 2π∫_0^1 x(x - x²) dx = 2π∫_0^1 (x² - x³) dx.',
        answer: 'V = 2π [x³/3 - x⁴/4]_0^1 = 2π(1/3 - 1/4) = 2π/12 = π/6.'
      },
      {
        q: 'Use shells to find the volume of the solid formed by revolving \`y = √x\` on [0,4] about the y-axis.',
        hint: 'V = 2π∫_0^4 x·√x dx = 2π∫_0^4 x^{3/2} dx.',
        answer: 'V = 2π [2x^{5/2}/5]_0^4 = 2π(2·32/5) = 128π/5.'
      },
      {
        q: 'Find the volume generated by revolving \`y = sin x\` on [0,π] about the y-axis.',
        hint: 'V = 2π∫_0^π x sin x dx. Use integration by parts.',
        answer: 'V = 2π[-x cos x + sin x]_0^π = 2π[(π) + 0] = 2π².'
      },
      {
        q: 'Use shells to find the volume of the solid formed by revolving the region under \`y = 1/x\` on [1,2] about the y-axis.',
        hint: 'V = 2π∫_1^2 x·(1/x) dx = 2π∫_1^2 1 dx.',
        answer: 'V = 2π [x]_1^2 = 2π(2-1) = 2π.'
      }
    ]
  },

 36: {
    problems: [
      {
        q: 'Find the arc length of \`y = x\` from x=0 to x=3.',
        hint: 'Use L = ∫√(1 + (dy/dx)²) dx. dy/dx = 1.',
        answer: 'L = ∫_0^3 √(1+1²) dx = ∫_0^3 √2 dx = 3√2 ≈ 4.24'
      },
      {
        q: 'Find the arc length of \`y = x^{3/2}\` from x=0 to x=4.',
        hint: 'dy/dx = (3/2)x^{1/2}. L = ∫_0^4 √(1 + (9/4)x) dx.',
        answer: 'L = ∫_0^4 √(1 + 9x/4) dx = (8/27)[(1+9x/4)^{3/2}]_0^4 = (8/27)[10^{3/2} - 1] ≈ 8.63'
      },
      {
        q: 'Find the arc length of \`y = x²\` from x=0 to x=1.',
        hint: 'dy/dx = 2x. L = ∫_0^1 √(1 + 4x²) dx.',
        answer: 'L = [x/2√(1+4x²) + 1/4 ln(2x+√(1+4x²))]_0^1 = √5/2 + 1/4 ln(2+√5) ≈ 1.478'
      },
      {
        q: 'Find the arc length of \`y = (2/3)(x²+1)^{3/2}\` from x=0 to x=1.',
        hint: 'dy/dx = 2x√(x²+1). L = ∫_0^1 √(1 + 4x²(x²+1)) dx = ∫_0^1 (2x²+1) dx.',
        answer: 'L = [2x³/3 + x]_0^1 = 2/3 + 1 = 5/3 ≈ 1.667'
      },
      {
        q: 'Find the arc length of \`x = y²\` from y=0 to y=2.',
        hint: 'dx/dy = 2y. L = ∫_0^2 √(1 + 4y²) dy.',
        answer: 'L = [y/2√(1+4y²) + 1/4 ln(2y+√(1+4y²))]_0^2 = √17 + 1/4 ln(4+√17) ≈ 4.646'
      }
    ]
  },

  // ============================================================
  // LECTURE 37 - Area of a Surface of Revolution
  // ============================================================
  37: {
    problems: [
      {
        q: 'Find the surface area generated by revolving \`y = x\` from x=0 to x=2 about the x-axis.',
        hint: 'S = 2π∫ f(x)√(1+[f\']²) dx. f(x)=x, f\'=1.',
        answer: 'S = 2π∫_0^2 x√2 dx = 2π√2 [x²/2]_0^2 = 4π√2 ≈ 17.77'
      },
      {
        q: 'Find the surface area generated by revolving \`y = √x\` from x=0 to x=4 about the x-axis.',
        hint: 'f(x)=√x, f\'=1/(2√x). S = 2π∫_0^4 √x·√(1+1/(4x)) dx.',
        answer: 'S = 2π∫_0^4 √(x+1/4) dx = 2π[(2/3)(x+1/4)^{3/2}]_0^4 = (4π/3)[(17/4)^{3/2} - (1/4)^{3/2}] ≈ 20.42'
      },
      {
        q: 'Find the surface area generated by revolving \`y = sin x\` from x=0 to x=π about the x-axis.',
        hint: 'S = 2π∫_0^π sin x √(1+cos²x) dx. Let u = cos x.',
        answer: 'S = 2π∫_{-1}^1 √(1+u²) du = 2π[u/2√(1+u²) + 1/2 ln(u+√(1+u²))]_{-1}^1 = 2π[√2 + ln(1+√2)] ≈ 14.42'
      },
      {
        q: 'Find the surface area of a sphere of radius r using the surface area formula.',
        hint: 'Revolve y = √(r²-x²) about x-axis. S = 2π∫_{-r}^r √(r²-x²)·r/√(r²-x²) dx.',
        answer: 'S = 2π∫_{-r}^r r dx = 2πr(2r) = 4πr²'
      },
      {
        q: 'Find the surface area generated by revolving \`y = e^x\` from x=0 to x=1 about x-axis.',
        hint: 'S = 2π∫_0^1 e^x√(1+e^{2x}) dx. This integral is not elementary.',
        answer: 'S = 2π∫_0^1 e^x√(1+e^{2x}) dx = π[e^x√(1+e^{2x}) + ln(e^x+√(1+e^{2x}))]_0^1 ≈ 14.42 (numerical)'
      }
    ]
  },

  // ============================================================
  // LECTURE 38 - Work and Definite Integral
  // ============================================================
  38: {
    problems: [
      {
        q: 'A force of 20 N is applied to move an object 5 m. How much work is done?',
        hint: 'W = F × d.',
        answer: 'W = 20 × 5 = 100 J'
      },
      {
        q: 'A spring has spring constant k = 50 N/m. How much work is done to stretch it from its natural length to 0.3 m?',
        hint: 'W = ½kx².',
        answer: 'W = ½(50)(0.3)² = 25 × 0.09 = 2.25 J'
      },
      {
        q: 'A spring is stretched from 0.1 m to 0.4 m. If k = 100 N/m, find the work done.',
        hint: 'W = ½k(x₂² - x₁²).',
        answer: 'W = ½(100)(0.4² - 0.1²) = 50(0.16 - 0.01) = 50(0.15) = 7.5 J'
      },
      {
        q: 'A force F(x) = 3x² N acts on an object from x=0 to x=2 m. Find the work done.',
        hint: 'W = ∫_0^2 F(x) dx = ∫_0^2 3x² dx.',
        answer: 'W = [x³]_0^2 = 8 J'
      },
      {
        q: 'A cylindrical tank of radius 2 m and height 5 m is filled with water. How much work is required to pump all the water over the top? (ρ = 1000 kg/m³, g = 9.8 m/s²)',
        hint: 'Divide water into layers. Work = ∫ ρg · (volume of layer) · (distance to top) dy.',
        answer: 'W = ∫_0^5 1000×9.8×π(2)²×(5-y) dy = 39200π∫_0^5 (5-y) dy = 39200π[5y - y²/2]_0^5 = 39200π(25 - 12.5) = 39200π(12.5) = 490000π ≈ 1,539,380 J'
      }
    ]
  },

  // ============================================================
  // LECTURE 39 - Improper Integral
  // ============================================================
  39: {
    problems: [
      {
        q: 'Evaluate \`∫_1^∞ 1/x² dx\`.',
        hint: 'Rewrite as \`lim_{b→∞} ∫_1^b x^{-2} dx\`.',
        answer: '∫_1^b x^{-2} dx = [-1/x]_1^b = -1/b + 1. lim_{b→∞} = 1. Converges to 1.'
      },
      {
        q: 'Evaluate \`∫_1^∞ 1/x dx\`.',
        hint: 'Rewrite as \`lim_{b→∞} ∫_1^b 1/x dx\`.',
        answer: '∫_1^b 1/x dx = [ln x]_1^b = ln b. lim_{b→∞} ln b = ∞. Diverges.'
      },
      {
        q: 'Evaluate \`∫_0^1 1/√x dx\`.',
        hint: 'This is an improper integral with vertical asymptote at x=0. Rewrite as \`lim_{a→0^+} ∫_a^1 x^{-1/2} dx\`.',
        answer: '∫_a^1 x^{-1/2} dx = [2√x]_a^1 = 2 - 2√a. lim_{a→0^+} = 2. Converges to 2.'
      },
      {
        q: 'Evaluate \`∫_0^∞ e^{-x} dx\`.',
        hint: 'Rewrite as \`lim_{b→∞} ∫_0^b e^{-x} dx\`.',
        answer: '∫_0^b e^{-x} dx = [-e^{-x}]_0^b = -e^{-b} + 1. lim_{b→∞} = 1. Converges to 1.'
      },
      {
        q: 'Evaluate \`∫_{-∞}^0 e^{x} dx\`.',
        hint: 'Rewrite as \`lim_{a→-∞} ∫_a^0 e^x dx\`.',
        answer: '∫_a^0 e^x dx = [e^x]_a^0 = 1 - e^a. lim_{a→-∞} e^a = 0. Converges to 1.'
      },
      {
        q: 'For what values of p does \`∫_1^∞ 1/x^p dx\` converge?',
        hint: 'Evaluate the integral and check when the limit is finite.',
        answer: 'If p > 1: ∫_1^b x^{-p} dx = [x^{1-p}/(1-p)]_1^b → converges. If p = 1: diverges (ln b). If p < 1: diverges. So converges for p > 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 40 - L'Hopital's Rule
  // ============================================================
  40: {
    problems: [
      {
        q: 'Evaluate \`lim_{x→0} sin x / x\` using L\'Hopital\'s Rule.',
        hint: 'This is 0/0 form. Differentiate numerator and denominator separately.',
        answer: 'lim_{x→0} sin x / x = lim_{x→0} cos x / 1 = 1'
      },
      {
        q: 'Evaluate \`lim_{x→0} (1 - cos x) / x²\`.',
        hint: '0/0 form. Apply L\'Hopital\'s Rule twice.',
        answer: 'First: lim sin x / 2x (still 0/0). Second: lim cos x / 2 = 1/2'
      },
      {
        q: 'Evaluate \`lim_{x→∞} x² / e^x\`.',
        hint: '∞/∞ form. Apply L\'Hopital\'s Rule.',
        answer: 'lim 2x / e^x (still ∞/∞). Again: lim 2 / e^x = 0'
      },
      {
        q: 'Evaluate \`lim_{x→∞} ln x / x\`.',
        hint: '∞/∞ form. Apply L\'Hopital\'s Rule.',
        answer: 'lim (1/x) / 1 = 0'
      },
      {
        q: 'Evaluate \`lim_{x→0} (e^x - 1) / x\`.',
        hint: '0/0 form. Apply L\'Hopital\'s Rule.',
        answer: 'lim e^x / 1 = 1'
      },
      {
        q: 'Evaluate \`lim_{x→0} x ln x\`.',
        hint: 'This is 0·∞ form. Rewrite as \`lim ln x / (1/x)\` which is ∞/∞ form.',
        answer: 'lim ln x / (1/x) = lim (1/x) / (-1/x²) = lim (-x) = 0'
      },
      {
        q: 'Evaluate \`lim_{x→0^+} x^x\`.',
        hint: 'This is 0^0 form. Let y = x^x, take ln y = x ln x.',
        answer: 'lim_{x→0^+} x ln x = 0 (from previous problem). So lim y = e^0 = 1.'
      }
    ]
  },

  // ============================================================
  // LECTURE 41 - Sequences
  // ============================================================
  41: {
    problems: [
      {
        q: 'Find the limit of the sequence \`a_n = (n+1)/n\`.',
        hint: 'Divide numerator and denominator by n.',
        answer: 'lim (n+1)/n = lim (1 + 1/n) = 1'
      },
      {
        q: 'Find the limit of the sequence \`a_n = n²/(n²+1)\`.',
        hint: 'Divide numerator and denominator by n².',
        answer: 'lim n²/(n²+1) = lim 1/(1+1/n²) = 1'
      },
      {
        q: 'Find the limit of the sequence \`a_n = (-1)^n/n\`.',
        hint: 'The sequence oscillates but the magnitude goes to 0.',
        answer: 'Since |a_n| = 1/n → 0, the sequence converges to 0.'
      },
      {
        q: 'Determine whether the sequence \`a_n = n/(n+1)\` is increasing.',
        hint: 'Check if a_{n+1} > a_n or a_{n+1} - a_n > 0.',
        answer: 'a_{n+1} - a_n = (n+1)/(n+2) - n/(n+1) = ((n+1)² - n(n+2))/((n+2)(n+1)) = (n²+2n+1 - n²-2n)/((n+2)(n+1)) = 1/((n+2)(n+1)) > 0. So increasing.'
      },
      {
        q: 'Find the limit of the sequence \`a_n = 3 + 2/n²\`.',
        hint: 'As n → ∞, 2/n² → 0.',
        answer: 'lim_{n→∞} (3 + 2/n²) = 3'
      },
      {
        q: 'Write the first four terms of the sequence \`a_n = n² - n\`.',
        hint: 'Substitute n = 1, 2, 3, 4.',
        answer: 'a₁ = 0, a₂ = 2, a₃ = 6, a₄ = 12'
      }
    ]
  },

  // ============================================================
  // LECTURE 42 - Infinite Series
  // ============================================================
  42: {
    problems: [
      {
        q: 'Find the sum of the geometric series \`1 + 1/2 + 1/4 + 1/8 + ...\`.',
        hint: 'a = 1, r = 1/2. Sum = a/(1-r).',
        answer: 'S = 1/(1 - 1/2) = 2'
      },
      {
        q: 'Find the sum of the geometric series \`Σ_{k=1}^∞ (1/3)^{k-1}\`.',
        hint: 'a = 1, r = 1/3.',
        answer: 'S = 1/(1 - 1/3) = 3/2'
      },
      {
        q: 'Find the sum of the geometric series \`Σ_{k=1}^∞ 2(1/4)^{k-1}\`.',
        hint: 'a = 2, r = 1/4.',
        answer: 'S = 2/(1 - 1/4) = 2/(3/4) = 8/3'
      },
      {
        q: 'Determine whether the series \`Σ_{k=1}^∞ 1/k\` converges or diverges.',
        hint: 'This is the harmonic series.',
        answer: 'Diverges.'
      },
      {
        q: 'Determine whether the series \`Σ_{k=1}^∞ 1/k²\` converges or diverges.',
        hint: 'This is a p-series with p = 2.',
        answer: 'Converges (p > 1).'
      },
      {
        q: 'Find the sum of the series \`Σ_{k=0}^∞ (1/2)^k\`.',
        hint: 'a = 1, r = 1/2.',
        answer: 'S = 1/(1 - 1/2) = 2'
      },
      {
        q: 'Find the first four partial sums of \`Σ_{k=1}^∞ 1/2^k\`.',
        hint: 'S_n = Σ_{k=1}^n 1/2^k.',
        answer: 'S₁ = 1/2, S₂ = 3/4, S₃ = 7/8, S₄ = 15/16'
      }
    ]
  },

  // ============================================================
  // LECTURE 43 - Additional Convergence Tests
  // ============================================================
  43: {
    problems: [
      {
        q: 'Use the Comparison Test to determine if \`Σ 1/(k²+1)\` converges.',
        hint: 'Compare with \`Σ 1/k²\` (convergent p-series).',
        answer: '1/(k²+1) < 1/k². Since \`Σ 1/k²\` converges, \`Σ 1/(k²+1)\` converges.'
      },
      {
        q: 'Use the Ratio Test to determine if \`Σ 1/k!\` converges.',
        hint: 'ρ = lim |u_{k+1}/u_k| = lim 1/(k+1).',
        answer: 'ρ = lim 1/(k+1) = 0 < 1. Converges absolutely.'
      },
      {
        q: 'Use the Ratio Test to determine if \`Σ k/2^k\` converges.',
        hint: 'ρ = lim |u_{k+1}/u_k| = lim (k+1)/2^{k+1} · 2^k/k = lim (k+1)/(2k).',
        answer: 'ρ = lim (k+1)/(2k) = 1/2 < 1. Converges absolutely.'
      },
      {
        q: 'Use the Root Test to determine if \`Σ (2/3)^k\` converges.',
        hint: 'ρ = lim |u_k|^{1/k} = lim (2/3) = 2/3.',
        answer: 'ρ = 2/3 < 1. Converges absolutely.'
      },
      {
        q: 'Use the Limit Comparison Test to determine if \`Σ 1/(k²-1)\` converges.',
        hint: 'Compare with \`Σ 1/k²\`. lim (1/(k²-1))/(1/k²) = lim k²/(k²-1) = 1.',
        answer: 'Since the limit is finite and positive, and \`Σ 1/k²\` converges, \`Σ 1/(k²-1)\` converges.'
      },
      {
        q: 'Determine if the p-series \`Σ 1/√k\` converges or diverges.',
        hint: 'p = 1/2 in \`Σ 1/k^p\`.',
        answer: 'p = 1/2 < 1, so diverges.'
      }
    ]
  },

  // ============================================================
  // LECTURE 44 - Alternating Series and Conditional Convergence
  // ============================================================
  44: {
    problems: [
      {
        q: 'Determine if the alternating series \`Σ (-1)^{k+1}/k\` converges.',
        hint: 'Use the Alternating Series Test.',
        answer: 'Terms 1/k are decreasing and go to 0. Converges conditionally (alternating harmonic series).'
      },
      {
        q: 'Determine if the alternating series \`Σ (-1)^{k+1}/k²\` converges absolutely.',
        hint: 'Check absolute convergence: \`Σ 1/k²\` converges.',
        answer: 'Absolutely convergent (p-series with p=2).'
      },
      {
        q: 'Determine if the alternating series \`Σ (-1)^{k+1} k/(k+1)\` converges.',
        hint: 'Check if terms go to 0.',
        answer: 'lim k/(k+1) = 1 ≠ 0. Diverges (nth term test).'
      },
      {
        q: 'Find the error bound for approximating \`Σ (-1)^{k+1}/k\` by S₄.',
        hint: '|S - S₄| < a₅ = 1/5.',
        answer: 'Error < 1/5 = 0.2'
      },
      {
        q: 'Find the radius of convergence of \`Σ x^k\`.',
        hint: 'Geometric series converges when |x| < 1.',
        answer: 'R = 1'
      },
      {
        q: 'Find the radius of convergence of \`Σ x^k/k!\`.',
        hint: 'Use Ratio Test: ρ = lim |x/(k+1)| = 0.',
        answer: 'R = ∞ (converges for all x)'
      },
      {
        q: 'Find the radius of convergence of \`Σ k x^k\`.',
        hint: 'Use Ratio Test: ρ = lim |(k+1)x/k| = |x|.',
        answer: 'R = 1 (converges for |x| < 1)'
      }
    ]
  },

  // ============================================================
  // LECTURE 45 - Taylor and Maclaurin Series
  // ============================================================
  45: {
    problems: [
      {
        q: 'Find the Maclaurin series of \`e^x\` up to the x³ term.',
        hint: 'e^x = 1 + x + x²/2! + x³/3! + ...',
        answer: 'e^x = 1 + x + x²/2 + x³/6 + ...'
      },
      {
        q: 'Find the Maclaurin series of \`sin x\` up to the x⁵ term.',
        hint: 'sin x = x - x³/3! + x⁵/5! - ...',
        answer: 'sin x = x - x³/6 + x⁵/120 - ...'
      },
      {
        q: 'Find the Maclaurin series of \`cos x\` up to the x⁴ term.',
        hint: 'cos x = 1 - x²/2! + x⁴/4! - ...',
        answer: 'cos x = 1 - x²/2 + x⁴/24 - ...'
      },
      {
        q: 'Find the Taylor series of \`f(x) = e^x\` at a = 1 up to the x³ term.',
        hint: 'Taylor series: Σ f^{(k)}(1)(x-1)^k/k!. f^{(k)}(x) = e^x, f^{(k)}(1) = e.',
        answer: 'e^x = e[1 + (x-1) + (x-1)²/2 + (x-1)³/6 + ...]'
      },
      {
        q: 'Find the Maclaurin series of \`1/(1-x)\` and its radius of convergence.',
        hint: '1/(1-x) = Σ x^k for |x| < 1.',
        answer: '1/(1-x) = 1 + x + x² + x³ + ... , R = 1'
      },
      {
        q: 'Find the Maclaurin series of \`ln(1+x)\` up to the x³ term.',
        hint: 'ln(1+x) = x - x²/2 + x³/3 - x⁴/4 + ...',
        answer: 'ln(1+x) = x - x²/2 + x³/3 - ...'
      },
      {
        q: 'Use the Maclaurin series of \`e^x\` to approximate \`e^{0.1}\` using three terms.',
        hint: 'e^{0.1} ≈ 1 + 0.1 + (0.1)²/2.',
        answer: 'e^{0.1} ≈ 1 + 0.1 + 0.005 = 1.105 (Actual ≈ 1.10517)'
      }
    ]
  },
},

 
  PHY101: {
    1: {
      problems: [
        {
          q: 'Convert 72 km/h into m/s.',
          hint: '1 km/h = 1000m/3600s. Multiply 72 by that conversion factor.',
          answer: '72 km/h × (1000/3600) = 20 m/s',
        },
        {
          q: 'Find the dimension of "Force" in terms of M, L, T, given Force = mass × acceleration.',
          hint: 'Acceleration has dimension L/T². Multiply by mass dimension M.',
          answer: 'Force = M × (L/T²) = MLT⁻²',
        },
        {
          q: 'A car travels 150 km in 2.5 hours. Calculate its average speed in m/s.',
          hint: 'First find speed in km/h, then convert to m/s.',
          answer: '150/2.5 = 60 km/h = 60×1000/3600 = 16.67 m/s',
        },
      ],
    },

   
    23: {
      problems: [
        {
          q: 'Two point charges q₁ = 4 μC and q₂ = 6 μC are separated by a distance of 0.3 m. Calculate the magnitude of the electrostatic force between them. (k = 9×10⁹ N·m²/C²)',
          hint: 'Use Coulomb\u2019s Law: F = k q₁q₂ / r². Convert μC to C before substituting (1 μC = 10⁻⁶ C).',
          answer: 'F = (9×10⁹)(4×10⁻⁶)(6×10⁻⁶)/(0.3)² = (9×10⁹)(24×10⁻¹²)/0.09 = 216×10⁻³/0.09 ≈ 2.4 N',
        },
        {
          q: 'A uniformly charged ring has radius R = 0.05 m and total charge q = 2×10⁻⁸ C. Find the electric field on the axis at a distance z = 0.12 m from the centre of the ring. (k = 9×10⁹ N·m²/C²)',
          hint: 'Use Eᵤ = kqz / (z² + R²)^(3/2). Calculate z² + R² first, then raise to the power 3/2.',
          answer: 'z²+R² = 0.0144+0.0025 = 0.0169, (0.0169)^1.5 ≈ 0.002197. E = (9×10⁹)(2×10⁻⁸)(0.12)/0.002197 ≈ 9.83×10³ N/C ≈ 9830 N/C',
        },
        {
          q: 'A uniformly charged disk of radius R = 0.1 m carries a surface charge density σ = 5×10⁻⁶ C/m². Find the electric field at a point on the axis very close to the disk surface (z << R). (ε₀ = 8.85×10⁻¹² C²/N·m²)',
          hint: 'When z << R, the disk behaves like an infinite sheet of charge: E = σ/(2ε₀).',
          answer: 'E = σ/(2ε₀) = (5×10⁻⁶)/(2×8.85×10⁻¹²) = (5×10⁻⁶)/(1.77×10⁻¹¹) ≈ 2.82×10⁵ N/C',
        },
        {
          q: 'An infinite line of charge has a linear charge density λ = 3×10⁻⁶ C/m. Find the electric field at a perpendicular distance r = 0.2 m from the line. (ε₀ = 8.85×10⁻¹² C²/N·m²)',
          hint: 'Use the formula E = λ / (2πε₀r). Calculate the denominator (2πε₀r) first.',
          answer: '2πε₀r = 2×3.1416×8.85×10⁻¹²×0.2 ≈ 1.112×10⁻¹¹. E = (3×10⁻⁶)/(1.112×10⁻¹¹) ≈ 2.70×10⁵ N/C',
        },
        {
          q: 'An infinite sheet of charge has a surface charge density σ = 8×10⁻⁶ C/m². Calculate the electric field at any point near the sheet. (ε₀ = 8.85×10⁻¹² C²/N·m²)',
          hint: 'For an infinite sheet, the field is given by E = σ / (2ε₀), and is independent of distance from the sheet.',
          answer: 'E = σ/(2ε₀) = (8×10⁻⁶)/(2×8.85×10⁻¹²) = (8×10⁻⁶)/(1.77×10⁻¹¹) ≈ 4.52×10⁵ N/C',
        },
        {
          q: 'A spherical shell of radius R = 0.15 m carries a total charge q = 5×10⁻⁸ C. Find the electric field at a point 0.4 m from the centre of the shell (outside the shell). (k = 9×10⁹ N·m²/C²)',
          hint: 'For points outside a uniformly charged spherical shell, treat it as a point charge at the centre: E = kq/r².',
          answer: 'E = (9×10⁹)(5×10⁻⁸)/(0.4)² = 450/0.16 ≈ 2812.5 N/C',
        },
        {
          q: 'For the same spherical shell as above (R = 0.15 m, q = 5×10⁻⁸ C), find the electric field at a point 0.05 m from the centre (inside the shell). Explain your reasoning.',
          hint: 'Think about how much charge is enclosed by a Gaussian surface drawn at radius 0.05 m, which is less than the shell\u2019s radius R.',
          answer: 'Since 0.05 m < R = 0.15 m, the point is INSIDE the shell. No charge is enclosed by a Gaussian sphere of this radius, so by Gauss\u2019s Law, E = 0.',
        },
        {
          q: 'Two infinite parallel plates carry equal and opposite surface charge densities of magnitude σ = 2×10⁻⁶ C/m². Find the electric field in the region between the plates. (ε₀ = 8.85×10⁻¹² C²/N·m²)',
          hint: 'For two oppositely charged infinite parallel plates, the field between them is E = σ/ε₀ (note: no factor of 2, unlike a single sheet).',
          answer: 'E = σ/ε₀ = (2×10⁻⁶)/(8.85×10⁻¹²) ≈ 2.26×10⁵ N/C',
        },
        {
          q: 'A charge of q = 2×10⁻⁶ C is placed in a uniform electric field of magnitude E = 5×10⁴ N/C. Calculate the force experienced by the charge.',
          hint: 'Use the relation F = qE directly.',
          answer: 'F = qE = (2×10⁻⁶)(5×10⁴) = 0.1 N',
        },
        {
          q: 'Two point charges q₁ = 3×10⁻⁶ C and q₂ = −5×10⁻⁶ C are separated by r = 0.25 m. Calculate the electric potential energy of this two-charge system. (k = 9×10⁹ N·m²/C²)',
          hint: 'Use U(r) = k q₁q₂ / r. Remember the sign of the answer depends on the signs of the two charges.',
          answer: 'U = (9×10⁹)(3×10⁻⁶)(−5×10⁻⁶)/0.25 = (9×10⁹)(−15×10⁻¹²)/0.25 = −0.135/0.25 = −0.54 J',
        },
      ],
    },

24:{
     problems: [
      {
        q: 'Two point charges q₁ = 2 μC and q₂ = 5 μC are placed 0.2 m apart in air. Calculate the magnitude of the electrostatic force between them. (k = 9 × 10⁹ N·m²/C²)',
        hint: 'Coulomb\'s Law: F = k q₁q₂ / r². μC ko C mein convert karo (1 μC = 10⁻⁶ C).',
        answer: 'F = (9×10⁹)(2×10⁻⁶)(5×10⁻⁶) / (0.2)² = (90×10⁻³) / 0.04 = 2.25 N'
      },
      {
        q: 'What is the electric potential at the midpoint of the two charges q₁ = 2 μC and q₂ = 5 μC separated by 0.2 m? (k = 9 × 10⁹)',
        hint: 'Midpoint par distance dono charges se 0.1 m hai. V = V₁ + V₂ (Scalar addition).',
        answer: 'V = k(2×10⁻⁶)/0.1 + k(5×10⁻⁶)/0.1 = (9×10⁹)(7×10⁻⁶)/0.1 = 63×10³/0.1 = 6.3×10⁵ V'
      },
      {
        q: 'An electric field does 15 J of work in moving a charge of 5 μC from point A to point B. If the potential at A is 100 V, what is the potential at B?',
        hint: 'W = q(V_A - V_B). Is equation se V_B ki value nikaalo.',
        answer: '15 = (5×10⁻⁶)(100 - V_B) => 100 - V_B = 15/(5×10⁻⁶) = 3×10⁶ => V_B = 100 - 3,000,000 = -2,999,900 V ≈ -3.0×10⁶ V'
      },
      {
        q: 'Calculate the kinetic energy (in eV and Joules) of an electron accelerated from rest through a potential difference of 200 V. (e = 1.6×10⁻¹⁹ C)',
        hint: 'KE = qV. Electron ka charge "e" hai. 1 eV = 1.6×10⁻¹⁹ J.',
        answer: 'KE (in eV) = 200 eV. KE (in J) = 200 × 1.6×10⁻¹⁹ = 3.2×10⁻¹⁷ J'
      },
      {
        q: 'An electric dipole has charges ±4 μC separated by 2 cm. Calculate the potential at a point on the axial line at a distance of 10 cm from the center of the dipole. (k = 9×10⁹)',
        hint: 'Dipole moment p = qd. Axial potential V = kp/r². d = 0.02 m, r = 0.10 m.',
        answer: 'p = (4×10⁻⁶)(0.02) = 8×10⁻⁸ C·m. V = (9×10⁹)(8×10⁻⁸)/(0.1)² = 720 / 0.01 = 72,000 V'
      },
      {
        q: 'A uniformly charged ring of radius R = 0.05 m has a total charge Q = 3×10⁻⁸ C. Find the electric potential at a point on its axis, 0.12 m from the center. (k = 9×10⁹)',
        hint: 'Use V = kQ / √(R² + z²). z = 0.12 m.',
        answer: 'V = (9×10⁹)(3×10⁻⁸) / √(0.05² + 0.12²) = 270 / √(0.0025 + 0.0144) = 270 / √0.0169 = 270 / 0.13 = 2076.9 V ≈ 2.08×10³ V'
      },
      {
        q: 'A uniformly charged disk of radius 0.1 m has surface charge density σ = 3×10⁻⁶ C/m². Find the potential at a point on the axis at z = 0.04 m from the disk. (ε₀ = 8.85×10⁻¹²)',
        hint: 'Use V = σ/(2ε₀) * (√(R²+z²) - z).',
        answer: 'V = (3×10⁻⁶)/(2×8.85×10⁻¹²) * (√(0.01+0.0016) - 0.04) = 1.695×10⁵ * (√0.0116 - 0.04) = 1.695×10⁵ * (0.1077 - 0.04) = 1.695×10⁵ * 0.0677 ≈ 11,476 V'
      },
      {
        q: 'Two conducting spheres of radii 0.02 m and 0.08 m are connected by a wire. The total charge on the system is 10 μC. Find the charge on each sphere.',
        hint: 'Same potential: q₁/R₁ = q₂/R₂. Also q₁ + q₂ = 10 μC.',
        answer: 'q₁/0.02 = q₂/0.08 => q₂ = 4q₁. q₁ + 4q₁ = 10 μC => 5q₁ = 10 μC => q₁ = 2 μC, q₂ = 8 μC'
      },
      {
        q: 'Three point charges q₁ = 1 μC, q₂ = -2 μC, and q₃ = 3 μC are placed at the corners of an equilateral triangle of side 0.1 m. Find the total electrostatic potential energy of the system. (k = 9×10⁹)',
        hint: 'U = U₁₂ + U₁₃ + U₂₃. Sab distances 0.1 m hain.',
        answer: 'U₁₂ = k(1e-6)(-2e-6)/0.1 = -0.18 J. U₁₃ = k(1e-6)(3e-6)/0.1 = 0.27 J. U₂₃ = k(-2e-6)(3e-6)/0.1 = -0.54 J. Total = -0.18 + 0.27 - 0.54 = -0.45 J'
      },
      {
        q: 'In a uniform electric field, the potential at point A is 80 V and at point B is 20 V. The distance between A and B along the field is 0.3 m. What is the magnitude of the electric field?',
        hint: 'E = ΔV / d. (Positive magnitude)',
        answer: 'E = (80 - 20) / 0.3 = 60 / 0.3 = 200 V/m (or N/C)'
      }
    ]
  },

25:{
     problems: [
      {
        q: 'A parallel plate capacitor has plates of area 0.04 m² separated by 0.002 m. Calculate its capacitance in air. (ε₀ = 8.85×10⁻¹² F/m)',
        hint: 'Use C = ε₀ A / d.',
        answer: 'C = (8.85×10⁻¹² × 0.04) / 0.002 = 3.54×10⁻¹⁰ / 0.002 = 1.77×10⁻¹⁰ F = 177 pF'
      },
      {
        q: 'A 5 μF capacitor is charged to 50 V. How much charge is stored on it?',
        hint: 'Use Q = CV.',
        answer: 'Q = 5×10⁻⁶ × 50 = 2.5×10⁻⁴ C = 250 μC'
      },
      {
        q: 'A 10 μF capacitor is charged to 100 V. How much energy is stored in it?',
        hint: 'Use U = ½ CV².',
        answer: 'U = ½ × 10×10⁻⁶ × (100)² = 0.5 × 10×10⁻⁶ × 10000 = 0.05 J'
      },
      {
        q: 'Three capacitors of 1 μF, 2 μF, and 3 μF are connected in parallel. Find the equivalent capacitance.',
        hint: 'Parallel: C_eq = C₁ + C₂ + C₃.',
        answer: 'C_eq = 1 + 2 + 3 = 6 μF'
      },
      {
        q: 'Three capacitors of 1 μF, 2 μF, and 3 μF are connected in series. Find the equivalent capacitance.',
        hint: 'Series: 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃.',
        answer: '1/C_eq = 1/1 + 1/2 + 1/3 = 1 + 0.5 + 0.333 = 1.833 → C_eq = 0.545 μF'
      },
      {
        q: 'Two capacitors of 4 μF and 6 μF are connected in series to a 12 V battery. Find (a) the equivalent capacitance, (b) the charge on each capacitor, (c) the voltage across each capacitor.',
        hint: 'Series: 1/C_eq = 1/C₁ + 1/C₂; Q = C_eq V; V₁ = Q/C₁, V₂ = Q/C₂.',
        answer: '1/C_eq = 1/4 + 1/6 = 5/12 → C_eq = 2.4 μF. Q = 2.4×10⁻⁶ × 12 = 28.8 μC. V₁ = 28.8/4 = 7.2 V, V₂ = 28.8/6 = 4.8 V.'
      },
      {
        q: 'A parallel plate capacitor with air between plates has capacitance 100 pF. If a dielectric of constant 5 is inserted between the plates, what is the new capacitance?',
        hint: 'C = εᵣ C₀.',
        answer: 'C = 5 × 100 = 500 pF'
      },
      {
        q: 'A capacitor has plates of area 0.1 m² separated by 0.001 m with a dielectric of constant 4 between them. Find the capacitance. (ε₀ = 8.85×10⁻¹² F/m)',
        hint: 'C = εᵣ ε₀ A / d.',
        answer: 'C = 4 × 8.85×10⁻¹² × 0.1 / 0.001 = 3.54×10⁻⁹ F = 3.54 nF'
      },
      {
        q: 'A current of 3 A flows through a wire for 2 minutes. How much charge flows through the wire?',
        hint: 'Q = I × t (time in seconds).',
        answer: 'Q = 3 × (2 × 60) = 3 × 120 = 360 C'
      },
      {
        q: 'A wire has 5×10²⁸ free electrons per cubic meter. The wire has cross-sectional area 2×10⁻⁶ m² and carries a current of 1 A. Calculate the drift velocity of electrons. (e = 1.6×10⁻¹⁹ C)',
        hint: 'v_d = I / (n A e).',
        answer: 'v_d = 1 / (5×10²⁸ × 2×10⁻⁶ × 1.6×10⁻¹⁹) = 1 / (16×10³) = 6.25×10⁻⁵ m/s = 0.0625 mm/s'
      }
    ]
},

26:{
      problems: [
      {
        q: 'A current of 5 A flows through a wire for 3 minutes. How much charge flows through the wire?',
        hint: 'Q = I × t (time in seconds).',
        answer: 'Q = 5 × (3 × 60) = 5 × 180 = 900 C'
      },
      {
        q: 'A resistor of 20 Ω is connected across a 12 V battery. Calculate the current flowing through it.',
        hint: 'Use Ohm\'s Law: I = V/R.',
        answer: 'I = 12/20 = 0.6 A'
      },
      {
        q: 'Two resistors of 3 Ω and 6 Ω are connected in series to a 9 V battery. Find (a) equivalent resistance, (b) current, (c) voltage across each resistor.',
        hint: 'Series: R_eq = R₁ + R₂; I = V/R_eq; V₁ = IR₁, V₂ = IR₂.',
        answer: 'R_eq = 3 + 6 = 9 Ω. I = 9/9 = 1 A. V₁ = 1×3 = 3 V, V₂ = 1×6 = 6 V.'
      },
      {
        q: 'Two resistors of 3 Ω and 6 Ω are connected in parallel to a 9 V battery. Find (a) equivalent resistance, (b) total current, (c) current through each resistor.',
        hint: 'Parallel: 1/R_eq = 1/R₁ + 1/R₂; I_total = V/R_eq; I₁ = V/R₁, I₂ = V/R₂.',
        answer: '1/R_eq = 1/3 + 1/6 = 1/2 → R_eq = 2 Ω. I_total = 9/2 = 4.5 A. I₁ = 9/3 = 3 A, I₂ = 9/6 = 1.5 A.'
      },
      {
        q: 'A 100 Ω resistor dissipates power at 25 W. Calculate (a) the current through it, (b) the voltage across it.',
        hint: 'P = I²R → I = √(P/R); V = IR.',
        answer: 'I = √(25/100) = √0.25 = 0.5 A. V = 0.5 × 100 = 50 V.'
      },
      {
        q: 'A battery of EMF 12 V and internal resistance 1 Ω is connected to a 5 Ω external resistor. Calculate (a) the current, (b) the terminal voltage.',
        hint: 'I = ε/(R+r); V_terminal = ε - Ir = IR.',
        answer: 'I = 12/(5+1) = 2 A. V_terminal = 12 - 2×1 = 10 V (or 2×5 = 10 V).'
      },
      {
        q: 'An RC circuit has R = 2 kΩ and C = 10 μF. Calculate the time constant.',
        hint: 'τ = RC. R in ohms, C in farads.',
        answer: 'τ = 2000 × 10×10⁻⁶ = 0.02 s = 20 ms'
      },
      {
        q: 'A capacitor is charged to 100 V and then discharged through a 10 kΩ resistor. If the time constant is 0.5 s, find the capacitance.',
        hint: 'τ = RC → C = τ/R.',
        answer: 'C = 0.5 / 10000 = 5×10⁻⁵ F = 50 μF'
      },
      {
        q: 'A wire has 8.5×10²⁸ free electrons per cubic meter. The wire has cross-sectional area 1×10⁻⁶ m² and carries a current of 2 A. Calculate the drift velocity. (e = 1.6×10⁻¹⁹ C)',
        hint: 'v_d = I/(n A e).',
        answer: 'v_d = 2 / (8.5×10²⁸ × 1×10⁻⁶ × 1.6×10⁻¹⁹) = 2 / (1.36×10⁴) = 1.47×10⁻⁴ m/s = 0.147 mm/s'
      },
      {
        q: 'Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Find the equivalent resistance.',
        hint: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃.',
        answer: '1/R_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1 → R_eq = 1 Ω'
      }
    ]
},

27:{
  problems: [
      {
        q: 'A proton moves with speed 2×10⁶ m/s perpendicular to a magnetic field of 0.5 T. Find the radius of its circular path. (m_p = 1.67×10⁻²⁷ kg, e = 1.6×10⁻¹⁹ C)',
        hint: 'r = mv/(qB).',
        answer: 'r = (1.67×10⁻²⁷ × 2×10⁶) / (1.6×10⁻¹⁹ × 0.5) = (3.34×10⁻²¹) / (8×10⁻²⁰) = 0.04175 m = 4.18 cm'
      },
      {
        q: 'An electron (mass 9.11×10⁻³¹ kg, charge 1.6×10⁻¹⁹ C) moves in a circular orbit of radius 0.01 m in a magnetic field of 0.1 T. What is its speed?',
        hint: 'r = mv/(qB) → v = rqB/m.',
        answer: 'v = 0.01 × 1.6×10⁻¹⁹ × 0.1 / 9.11×10⁻³¹ = 1.6×10⁻²² / 9.11×10⁻³¹ = 1.76×10⁸ m/s'
      },
      {
        q: 'A straight wire of length 0.25 m carries a current of 4 A in a uniform magnetic field of 0.6 T. The wire makes an angle of 30° with the field. Find the force on the wire.',
        hint: 'F = I L B sinθ.',
        answer: 'F = 4 × 0.25 × 0.6 × sin30° = 4 × 0.25 × 0.6 × 0.5 = 0.3 N'
      },
      {
        q: 'A rectangular loop of sides 0.1 m and 0.2 m carries a current of 2 A. What is its magnetic moment?',
        hint: 'μ = I A, A = length × width.',
        answer: 'A = 0.1 × 0.2 = 0.02 m². μ = 2 × 0.02 = 0.04 A·m²'
      },
      {
        q: 'An infinite straight wire carries a current of 10 A. Calculate the magnetic field at a distance of 0.05 m from the wire. (μ₀ = 4π×10⁻⁷ T·m/A)',
        hint: 'B = μ₀ I / (2πr).',
        answer: 'B = (4π×10⁻⁷ × 10) / (2π × 0.05) = (4π×10⁻⁶) / (0.1π) = 4×10⁻⁵ T = 40 μT'
      },
      {
        q: 'A solenoid has 1000 turns per meter and carries a current of 2 A. Find the magnetic field inside the solenoid. (μ₀ = 4π×10⁻⁷)',
        hint: 'B = μ₀ n I.',
        answer: 'B = 4π×10⁻⁷ × 1000 × 2 = 8π×10⁻⁴ = 2.51×10⁻³ T'
      },
      {
        q: 'A thick wire of radius R = 0.01 m carries a total current of 5 A uniformly. Calculate the magnetic field at a distance r = 0.005 m from the center (inside the wire). (μ₀ = 4π×10⁻⁷)',
        hint: 'B_inside = μ₀ I r / (2π R²).',
        answer: 'B = (4π×10⁻⁷ × 5 × 0.005) / (2π × (0.01)²) = (4π×10⁻⁷ × 0.025) / (2π × 1×10⁻⁴) = (10⁻⁸π) / (2π×10⁻⁴) = 5×10⁻⁵ T'
      },
      {
        q: 'For the same wire in problem 7, find the magnetic field at r = 0.02 m (outside the wire).',
        hint: 'B_outside = μ₀ I / (2πr).',
        answer: 'B = (4π×10⁻⁷ × 5) / (2π × 0.02) = (20π×10⁻⁷) / (0.04π) = 5×10⁻⁵ T'
      },
      {
        q: 'A velocity selector has electric field E = 1000 N/C and magnetic field B = 0.5 T. What speed of particles will pass undeflected?',
        hint: 'v = E/B.',
        answer: 'v = 1000 / 0.5 = 2000 m/s'
      },
      {
        q: 'A proton enters a magnetic field of 0.2 T with a speed of 3×10⁵ m/s perpendicular to the field. Find the angular frequency of its circular motion. (q = 1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg)',
        hint: 'ω = qB/m.',
        answer: 'ω = (1.6×10⁻¹⁹ × 0.2) / 1.67×10⁻²⁷ = 3.2×10⁻²⁰ / 1.67×10⁻²⁷ = 1.92×10⁷ rad/s'
      }
    ]
},


28:{
  problems: [
      {
        q: 'A circular loop of radius 0.1 m is placed in a uniform magnetic field of 0.2 T perpendicular to the loop. Calculate the magnetic flux through the loop.',
        hint: 'Φ = BA = B × πr².',
        answer: 'A = π × (0.1)² = 0.0314 m². Φ = 0.2 × 0.0314 = 0.00628 Wb = 6.28 mWb'
      },
      {
        q: 'A coil of 200 turns has a magnetic flux of 0.05 Wb through it. If the flux changes to 0.02 Wb in 0.1 s, find the average induced EMF.',
        hint: 'ε = -N × ΔΦ/Δt.',
        answer: 'ΔΦ = 0.02 - 0.05 = -0.03 Wb. ε = -200 × (-0.03)/0.1 = 200 × 0.3 = 60 V'
      },
      {
        q: 'A rod of length 0.5 m moves at 10 m/s perpendicular to a magnetic field of 0.4 T. What is the motional EMF?',
        hint: 'ε = BLv.',
        answer: 'ε = 0.4 × 0.5 × 10 = 2 V'
      },
      {
        q: 'A flexible loop of radius 12 cm is in a magnetic field of 0.15 T. The loop is closed, collapsing its area to zero in 0.20 s. Find the average induced EMF.',
        hint: 'ε = -ΔΦ/Δt = -B(ΔA)/Δt.',
        answer: 'Initial A = π(0.12)² = 0.0452 m². ΔΦ = -B×A = -0.15×0.0452 = -0.00678 Wb. ε = -(-0.00678)/0.20 = 0.0339 V ≈ 0.034 V'
      },
      {
        q: 'A circular loop of radius 0.3 m is in a magnetic field that changes from 0.3 T to -0.2 T in 1.5 s. Find the induced EMF.',
        hint: 'ε = -ΔΦ/Δt = -B(ΔA)/Δt.',
        answer: 'A = π(0.3)² = 0.2827 m². Initial Φ = 0.3×0.2827 = 0.0848 Wb. Final Φ = -0.2×0.2827 = -0.0565 Wb. ΔΦ = -0.0565 - 0.0848 = -0.1413 Wb. ε = -(-0.1413)/1.5 = 0.0942 V ≈ 0.095 V'
      },
      {
        q: 'A metal rod of length 0.2 m moves on two parallel rails with speed 5 m/s in a magnetic field of 0.3 T. The rails are connected by a resistor of 2 Ω. Find (a) the induced EMF, (b) the induced current.',
        hint: 'ε = BLv, I = ε/R.',
        answer: '(a) ε = 0.3 × 0.2 × 5 = 0.3 V. (b) I = 0.3/2 = 0.15 A'
      },
      {
        q: 'For the rod in problem 6, calculate (a) the force required to move it, (b) the power dissipated in the resistor.',
        hint: 'F = ILB, P = I²R.',
        answer: '(a) F = 0.15 × 0.2 × 0.3 = 0.009 N. (b) P = (0.15)² × 2 = 0.045 W'
      },
      {
        q: 'A 100-turn coil of area 0.02 m² is rotated in a uniform magnetic field of 0.1 T. If the coil makes one complete rotation in 0.5 s, what is the maximum induced EMF?',
        hint: 'ε_max = N B A ω, where ω = 2π/T.',
        answer: 'ω = 2π/0.5 = 12.57 rad/s. ε_max = 100 × 0.1 × 0.02 × 12.57 = 2.51 V'
      },
      {
        q: 'A square loop of side 0.05 m is pulled out of a magnetic field of 0.2 T with speed 2 m/s. The loop has resistance 0.5 Ω. Find the induced current.',
        hint: 'ε = BLv (L = side), I = ε/R.',
        answer: 'ε = 0.2 × 0.05 × 2 = 0.02 V. I = 0.02/0.5 = 0.04 A'
      },
      {
        q: 'The magnetic flux through a coil is given by Φ = (2t² + 3t) Wb. Find the induced EMF at t = 2 s.',
        hint: 'ε = -dΦ/dt = -(4t + 3).',
        answer: 'dΦ/dt = 4t + 3. At t = 2: dΦ/dt = 4(2) + 3 = 11 V. ε = -11 V (magnitude = 11 V)'
      }
    ]
  },

29: {
   problems: [
      {
        q: 'A sinusoidal AC voltage has peak value 100 V. Calculate (a) RMS voltage, (b) peak-to-peak voltage.',
        hint: 'V_rms = V₀/√2, V_pp = 2V₀.',
        answer: '(a) V_rms = 100/√2 = 70.7 V. (b) V_pp = 2×100 = 200 V'
      },
      {
        q: 'An AC source has frequency 50 Hz and peak voltage 220 V. Write the voltage as a function of time.',
        hint: 'V(t) = V₀ sin(2πft).',
        answer: 'V(t) = 220 sin(100πt) V'
      },
      {
        q: 'A transformer has 200 turns in primary and 800 turns in secondary. If input voltage is 120 V, find (a) output voltage, (b) turns ratio.',
        hint: 'Vₛ/Vₚ = Nₛ/Nₚ.',
        answer: '(a) Vₛ = 120 × (800/200) = 480 V. (b) Turns ratio = 4:1 (step-up)'
      },
      {
        q: 'A solenoid has 1000 turns, length 0.2 m, and cross-sectional area 0.01 m². Calculate its inductance. (μ₀ = 4π×10⁻⁷ H/m)',
        hint: 'L = μ₀ N² A / l.',
        answer: 'L = 4π×10⁻⁷ × (1000)² × 0.01 / 0.2 = 4π×10⁻⁷ × 10⁶ × 0.01 / 0.2 = 6.28×10⁻² H = 62.8 mH'
      },
      {
        q: 'An inductor of 0.5 H carries a current of 2 A. How much energy is stored in its magnetic field?',
        hint: 'U = ½ L I².',
        answer: 'U = ½ × 0.5 × 2² = 1 J'
      },
      {
        q: 'An RL circuit has R = 100 Ω and L = 0.2 H. Calculate (a) the time constant, (b) the current after one time constant if ε = 10 V.',
        hint: 'τ = L/R, I = (ε/R)(1 - e^{-t/τ}).',
        answer: '(a) τ = 0.2/100 = 0.002 s = 2 ms. (b) I = (10/100)(1 - e^{-1}) = 0.1 × 0.632 = 0.0632 A'
      },
      {
        q: 'An LC circuit has L = 0.1 H and C = 10 μF. Calculate the oscillation frequency.',
        hint: 'ω = 1/√(LC), f = ω/(2π).',
        answer: 'ω = 1/√(0.1 × 10×10⁻⁶) = 1/√(10⁻⁶) = 1000 rad/s. f = 1000/(2π) = 159.2 Hz'
      },
      {
        q: 'A 100 mH inductor is connected to a 50 Hz AC source. Calculate the inductive reactance.',
        hint: 'X_L = ωL = 2πfL.',
        answer: 'X_L = 2π × 50 × 0.1 = 31.4 Ω'
      },
      {
        q: 'A 10 μF capacitor is connected to a 50 Hz AC source. Calculate the capacitive reactance.',
        hint: 'X_C = 1/(ωC) = 1/(2πfC).',
        answer: 'X_C = 1/(2π × 50 × 10×10⁻⁶) = 1/(0.00314) = 318.3 Ω'
      },
      {
        q: 'In an AC circuit, R = 50 Ω, X_L = 30 Ω, and X_C = 10 Ω. Calculate the impedance Z.',
        hint: 'Z = √(R² + (X_L - X_C)²).',
        answer: 'Z = √(50² + (30-10)²) = √(2500 + 400) = √2900 = 53.85 Ω'
      }
    ]
},

30: {
   problems: [
      {
        q: 'Calculate the speed of light from Maxwell\'s equations. (μ₀ = 4π×10⁻⁷, ε₀ = 8.85×10⁻¹²)',
        hint: 'c = 1/√(μ₀ε₀).',
        answer: 'c = 1/√(4π×10⁻⁷ × 8.85×10⁻¹²) = 1/√(1.112×10⁻¹⁷) = 3.0×10⁸ m/s'
      },
      {
        q: 'A radio wave has a frequency of 100 MHz. Calculate its wavelength. (c = 3×10⁸ m/s)',
        hint: 'λ = c/f.',
        answer: 'λ = 3×10⁸ / (100×10⁶) = 3 m'
      },
      {
        q: 'A microwave has a wavelength of 5 cm. Calculate its frequency.',
        hint: 'f = c/λ.',
        answer: 'f = 3×10⁸ / 0.05 = 6×10⁹ Hz = 6 GHz'
      },
      {
        q: 'An FM radio station broadcasts at 90 MHz. What is the wavelength of its signal?',
        hint: 'λ = c/f.',
        answer: 'λ = 3×10⁸ / (90×10⁶) = 3.33 m'
      },
      {
        q: 'The electric field amplitude of an EM wave is 100 N/C. Calculate the magnetic field amplitude. (c = 3×10⁸ m/s)',
        hint: 'B₀ = E₀/c.',
        answer: 'B₀ = 100 / (3×10⁸) = 3.33×10⁻⁷ T'
      },
      {
        q: 'A dipole antenna radiates 100 W of power. What is the power at a distance where the intensity is 1/4 of the original?',
        hint: 'I ∝ 1/r² → if r doubles, I becomes 1/4.',
        answer: 'Power = 100/4 = 25 W'
      },
      {
        q: 'An EM wave has frequency 5×10¹⁴ Hz. Calculate its wavelength in nanometers.',
        hint: 'λ = c/f. 1 nm = 10⁻⁹ m.',
        answer: 'λ = 3×10⁸ / (5×10¹⁴) = 6×10⁻⁷ m = 600 nm'
      },
      {
        q: 'The intensity of sunlight at Earth\'s surface is about 1000 W/m². If the electric field amplitude is E₀, what is the magnetic field amplitude? (Assume I = ½ c ε₀ E₀²)',
        hint: 'Solve for E₀ first, then B₀ = E₀/c.',
        answer: 'E₀ = √(2I/(cε₀)) = √(2000/(3×10⁸×8.85×10⁻¹²)) = 868 N/C. B₀ = 868/(3×10⁸) = 2.89×10⁻⁶ T'
      },
      {
        q: 'An AM radio station broadcasts at 800 kHz. What is the wavelength of its signal?',
        hint: 'λ = c/f.',
        answer: 'λ = 3×10⁸ / (800×10³) = 375 m'
      },
      {
        q: 'An antenna produces EM waves with electric field E = 50 sin(2π×10⁸ t) V/m. What is the frequency and wavelength of the wave?',
        hint: 'ω = 2πf, λ = c/f.',
        answer: 'ω = 2π×10⁸ → f = 10⁸ Hz = 100 MHz. λ = 3×10⁸ / 10⁸ = 3 m'
      }
    ]
},



31: {
   problems: [
      {
        q: 'Light takes 8 minutes to reach from the Sun to Earth. Calculate the distance from Sun to Earth. (c = 3×10⁸ m/s)',
        hint: 'd = c × t, convert minutes to seconds.',
        answer: 't = 8 × 60 = 480 s. d = 3×10⁸ × 480 = 1.44×10¹¹ m = 1.44×10⁸ km'
      },
      {
        q: 'A laser beam takes 2.56 s to travel from Earth to Moon and back. Calculate the distance to the Moon.',
        hint: 'd = c × t/2 (round trip time).',
        answer: 't_one_way = 2.56/2 = 1.28 s. d = 3×10⁸ × 1.28 = 3.84×10⁸ m = 384,000 km'
      },
      {
        q: 'Calculate the speed of light in water. (n_water = 1.33, c = 3×10⁸ m/s)',
        hint: 'v = c/n.',
        answer: 'v = 3×10⁸ / 1.33 = 2.26×10⁸ m/s'
      },
      {
        q: 'A ray of light enters water (n=1.33) from air (n=1) at an angle of 45°. Find the angle of refraction.',
        hint: 'n₁ sinθ₁ = n₂ sinθ₂.',
        answer: '1 × sin45° = 1.33 × sinθ₂ → sinθ₂ = 0.707/1.33 = 0.532 → θ₂ = 32.1°'
      },
      {
        q: 'What is the critical angle for light going from glass (n=1.5) to air (n=1)?',
        hint: 'θ_c = sin⁻¹(n₂/n₁).',
        answer: 'θ_c = sin⁻¹(1/1.5) = sin⁻¹(0.667) = 41.8°'
      },
      {
        q: 'What is the critical angle for light going from diamond (n=2.42) to air (n=1)?',
        hint: 'θ_c = sin⁻¹(n₂/n₁).',
        answer: 'θ_c = sin⁻¹(1/2.42) = sin⁻¹(0.413) = 24.4°'
      },
      {
        q: 'A photon has energy 3×10⁻¹⁹ J. Calculate its momentum. (c = 3×10⁸ m/s)',
        hint: 'p = U/c.',
        answer: 'p = 3×10⁻¹⁹ / 3×10⁸ = 1×10⁻²⁷ kg·m/s'
      },
      {
        q: 'A beam of light of energy 1 J is completely absorbed by a surface. What is the momentum transferred to the surface?',
        hint: 'p = U/c for complete absorption.',
        answer: 'p = 1 / (3×10⁸) = 3.33×10⁻⁹ N·s'
      },
      {
        q: 'A beam of light of energy 1 J is completely reflected by a surface. What is the momentum transferred to the surface?',
        hint: 'p = 2U/c for complete reflection.',
        answer: 'p = 2 / (3×10⁸) = 6.67×10⁻⁹ N·s'
      },
      {
        q: 'In Fizeau\'s experiment, the cogwheel has 100 teeth, rotates at 100 Hz, and the distance to mirror is 3 km. Calculate the speed of light. (Hint: For first return, θ = π/100)',
        hint: 'c = 2Lω/θ, ω = 2πf.',
        answer: 'ω = 2π×100 = 628.3 rad/s. θ = 2π/200 = π/100 = 0.0314 rad. c = 2×3000×628.3/0.0314 = 1.2×10⁸ m/s (approximate)'
      }
    ]
},

// ============================================================
// LECTURES 32-40: NUMERICAL PROBLEMS
// Format: lectureData[lecture].problems
// ============================================================

  // ============================================================
  // LECTURE 32 - Interaction of Light with Matter
  // ============================================================
  32: {
    title: 'Interaction of Light with Matter',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'The surface temperature of a star is 6000 K. At what wavelength does it emit most strongly? (Wien constant b = 2.9×10⁻³ m·K)',
        hint: 'Use Wien\'s law: λ_max = b/T. Convert to nanometers if needed.',
        answer: 'λ_max = 2.9×10⁻³ / 6000 = 4.83×10⁻⁷ m = 483 nm (visible blue-green)'
      },
      {
        q: 'The Sun\'s radius is 7×10⁸ m and surface temperature 5800 K. Calculate its total power output. (σ = 5.67×10⁻⁸ W/m²K⁴)',
        hint: 'P = σ A T⁴, where A = 4πR².',
        answer: 'A = 4π(7×10⁸)² = 6.16×10¹⁸ m². P = 5.67×10⁻⁸ × 6.16×10¹⁸ × (5800)⁴ = 3.9×10²⁶ W'
      },
      {
        q: 'A blackbody at 300 K emits radiation. What is the peak wavelength? (b = 2.9×10⁻³ m·K)',
        hint: 'λ_max = b/T.',
        answer: 'λ_max = 2.9×10⁻³ / 300 = 9.67×10⁻⁶ m = 9.67 μm (infrared)'
      },
      {
        q: 'A star has peak wavelength 290 nm. What is its surface temperature? (b = 2.9×10⁻³ m·K)',
        hint: 'T = b/λ_max.',
        answer: 'T = 2.9×10⁻³ / (290×10⁻⁹) = 10,000 K'
      },
      {
        q: 'The Earth\'s surface temperature is approximately 288 K. If it radiates as a blackbody, what is the total power per unit area emitted? (σ = 5.67×10⁻⁸ W/m²K⁴)',
        hint: 'P/A = σT⁴.',
        answer: 'P/A = 5.67×10⁻⁸ × (288)⁴ = 5.67×10⁻⁸ × 6.88×10⁹ = 390 W/m²'
      },
      {
        q: 'A tungsten filament at 3000 K emits radiation. At what wavelength is the emission maximum? (b = 2.9×10⁻³ m·K)',
        hint: 'λ_max = b/T.',
        answer: 'λ_max = 2.9×10⁻³ / 3000 = 9.67×10⁻⁷ m = 967 nm (near infrared)'
      }
    ]
  },

  // ============================================================
  // LECTURE 33 - Interference and Diffraction
  // ============================================================
  33: {
    title: 'Interference and Diffraction',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'In a double-slit experiment, slit separation is 0.02 mm and screen distance is 1.5 m. The third bright fringe is 4.5 cm from the center. Find the wavelength of light.',
        hint: 'Use y_m = mλL/d. Solve for λ.',
        answer: 'λ = (y_m × d) / (m × L) = (0.045 × 0.02×10⁻³) / (3 × 1.5) = 2.0×10⁻⁷ m = 200 nm'
      },
      {
        q: 'A single slit of width 0.05 mm is illuminated by light of wavelength 600 nm. Find the angle of the first diffraction minimum.',
        hint: 'Use a sinθ = mλ with m = 1 for first minimum.',
        answer: 'sinθ = λ/a = 600×10⁻⁹ / 0.05×10⁻³ = 0.012 → θ = 0.69°'
      },
      {
        q: 'In a double-slit experiment, the slit separation is 0.1 mm and the wavelength of light is 500 nm. The screen is 2 m away. Calculate the fringe spacing (distance between adjacent bright fringes).',
        hint: 'Δy = λL/d.',
        answer: 'Δy = (500×10⁻⁹ × 2) / (0.1×10⁻³) = 0.01 m = 1 cm'
      },
      {
        q: 'A diffraction grating has 5000 lines/cm. What is the slit spacing d?',
        hint: 'd = 1/(number of lines per meter).',
        answer: 'd = 1/(5000/0.01) = 1/500,000 = 2×10⁻⁶ m = 2 μm'
      },
      {
        q: 'Using the diffraction grating from problem 4, at what angle will the first-order maximum (m=1) be observed for light of wavelength 500 nm?',
        hint: 'Use d sinθ = mλ.',
        answer: 'sinθ = (1 × 500×10⁻⁹) / (2×10⁻⁶) = 0.25 → θ = 14.5°'
      },
      {
        q: 'A thin film of oil (n = 1.5) on water appears green (λ = 550 nm) in reflected light. What is the minimum thickness of the oil film? (Assume phase change at both surfaces)',
        hint: 'For constructive interference: 2nt = mλ. For minimum thickness, m=1.',
        answer: 't = λ/(2n) = 550×10⁻⁹/(2×1.5) = 1.83×10⁻⁷ m = 183 nm'
      },
      {
        q: 'In a double-slit experiment, the fringe spacing is 2 mm. If the wavelength is doubled and the slit separation is halved, what is the new fringe spacing?',
        hint: 'Δy ∝ λ/d. New Δy = old × (λ_new/λ_old) × (d_old/d_new).',
        answer: 'New Δy = 2 × 2 × 2 = 8 mm'
      },
      {
        q: 'A single slit of width 0.02 mm produces a diffraction pattern. If the first minimum occurs at θ = 1.5°, calculate the wavelength of light used.',
        hint: 'a sinθ = λ (for first minimum, m=1).',
        answer: 'λ = 0.02×10⁻³ × sin1.5° = 0.02×10⁻³ × 0.0262 = 5.24×10⁻⁷ m = 524 nm'
      }
    ]
  },

  // ============================================================
  // LECTURE 34 - Particle Nature of Light
  // ============================================================
  34: {
    title: 'The Particle Nature of Light',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'The work function of sodium is 2.3 eV. What is the maximum kinetic energy of photoelectrons when light of wavelength 400 nm is incident? (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'E_photon = hc/λ; K_max = E_photon - W.',
        answer: 'E_photon = (6.63×10⁻³⁴ × 3×10⁸)/(400×10⁻⁹) = 4.97×10⁻¹⁹ J = 3.10 eV. K_max = 3.10 - 2.3 = 0.80 eV'
      },
      {
        q: 'What is the de Broglie wavelength of a 0.05 kg ball moving at 10 m/s? (h = 6.63×10⁻³⁴ J·s)',
        hint: 'λ = h/p = h/(mv).',
        answer: 'λ = 6.63×10⁻³⁴ / (0.05 × 10) = 1.33×10⁻³³ m'
      },
      {
        q: 'A photon has energy 2.5 eV. Calculate its wavelength in nanometers. (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'E = hc/λ → λ = hc/E.',
        answer: 'E = 2.5 × 1.6×10⁻¹⁹ = 4.0×10⁻¹⁹ J. λ = (6.63×10⁻³⁴ × 3×10⁸)/(4.0×10⁻¹⁹) = 4.97×10⁻⁷ m = 497 nm'
      },
      {
        q: 'The threshold frequency for a metal is 5×10¹⁴ Hz. What is the work function in eV? (h = 4.14×10⁻¹⁵ eV·s)',
        hint: 'W = hν₀.',
        answer: 'W = 4.14×10⁻¹⁵ × 5×10¹⁴ = 2.07 eV'
      },
      {
        q: 'Light of wavelength 300 nm falls on a metal with work function 2.0 eV. Calculate the maximum speed of emitted photoelectrons. (m_e = 9.11×10⁻³¹ kg)',
        hint: 'First find K_max = hc/λ - W, then v = √(2K/m).',
        answer: 'E_photon = (6.63×10⁻³⁴ × 3×10⁸)/(300×10⁻⁹) = 6.63×10⁻¹⁹ J = 4.14 eV. K_max = 4.14 - 2.0 = 2.14 eV = 3.42×10⁻¹⁹ J. v = √(2×3.42×10⁻¹⁹/9.11×10⁻³¹) = 8.67×10⁵ m/s'
      },
      {
        q: 'In Compton scattering, X-rays of wavelength 0.1 nm are scattered at 90°. What is the change in wavelength? (λ_c = 2.43×10⁻¹² m)',
        hint: 'Δλ = λ_c (1 - cosθ).',
        answer: 'Δλ = 2.43×10⁻¹² × (1 - cos90°) = 2.43×10⁻¹² × 1 = 2.43×10⁻¹² m'
      },
      {
        q: 'Calculate the momentum of a photon with wavelength 500 nm. (h = 6.63×10⁻³⁴ J·s)',
        hint: 'p = h/λ.',
        answer: 'p = 6.63×10⁻³⁴ / 500×10⁻⁹ = 1.33×10⁻²⁷ kg·m/s'
      }
    ]
  },

  // ============================================================
  // LECTURE 35 - Geometrical Optics
  // ============================================================
  35: {
    title: 'Geometrical Optics',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'An object is placed 20 cm from a concave mirror of focal length 10 cm. Find the image distance and nature of the image.',
        hint: 'Use 1/f = 1/d_o + 1/d_i. Solve for d_i.',
        answer: '1/10 = 1/20 + 1/d_i → 1/d_i = 1/10 - 1/20 = 1/20 → d_i = 20 cm. Image is real, inverted, same size (m = -d_i/d_o = -1).'
      },
      {
        q: 'A convex lens of focal length 12 cm is used to produce a virtual image of an object placed 6 cm from the lens. Find the image distance and magnification.',
        hint: '1/f = 1/d_o + 1/d_i. For virtual image, d_i is negative.',
        answer: '1/12 = 1/6 + 1/d_i → 1/d_i = 1/12 - 1/6 = -1/12 → d_i = -12 cm. m = -d_i/d_o = -(-12)/6 = +2 (upright, magnified)'
      },
      {
        q: 'A concave mirror has radius of curvature 40 cm. An object is placed 30 cm from the mirror. Find the image distance and magnification.',
        hint: 'f = R/2 = 20 cm. Use 1/f = 1/d_o + 1/d_i.',
        answer: '1/20 = 1/30 + 1/d_i → 1/d_i = 1/20 - 1/30 = 1/60 → d_i = 60 cm. m = -60/30 = -2 (real, inverted, magnified)'
      },
      {
        q: 'An object is placed 15 cm from a convex mirror of focal length 10 cm. Find the image distance and nature.',
        hint: 'For convex mirror, f is negative: f = -10 cm. Use mirror equation.',
        answer: '1/(-10) = 1/15 + 1/d_i → 1/d_i = -1/10 - 1/15 = -5/30 = -1/6 → d_i = -6 cm. Virtual, upright, diminished (m = -(-6)/15 = +0.4)'
      },
      {
        q: 'A convex lens has radii of curvature 20 cm and 30 cm, and refractive index 1.5. Calculate its focal length.',
        hint: 'Use lens maker\'s formula: 1/f = (n-1)(1/R₁ - 1/R₂). Sign convention: R₁ = +20 cm, R₂ = -30 cm.',
        answer: '1/f = (1.5-1)(1/0.20 - 1/(-0.30)) = 0.5(5 + 3.33) = 0.5 × 8.33 = 4.165 → f = 0.24 m = 24 cm'
      },
      {
        q: 'A lens has power +5 D. What is its focal length?',
        hint: 'P = 1/f (f in meters).',
        answer: 'f = 1/5 = 0.2 m = 20 cm (convex lens, converging)'
      },
      {
        q: 'A convex lens forms a real image of an object placed 25 cm from it. The image is formed 50 cm from the lens. Calculate the focal length and magnification.',
        hint: '1/f = 1/d_o + 1/d_i; m = -d_i/d_o.',
        answer: '1/f = 1/25 + 1/50 = 3/50 → f = 50/3 = 16.7 cm. m = -50/25 = -2 (inverted, magnified)'
      }
    ]
  },

  // ============================================================
  // LECTURE 36 - Heat I
  // ============================================================
  36: {
    title: 'Heat - I',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'A 0.5 kg metal block at 30°C is dropped into 1.12 kg water at 20°C. Final temperature is 20.4°C. Find the specific heat of the metal. (c_water = 4186 J/kg·K)',
        hint: 'Heat lost by metal = Heat gained by water. Use Q = mcΔT.',
        answer: 'c_metal = (m_w c_w (T_f - T_iw)) / (m_m (T_im - T_f)) = (1.12×4186×(20.4-20)) / (0.5×(30-20.4)) = (1.12×4186×0.4) / (0.5×9.6) = 1875.3 / 4.8 = 390.7 J/kg·K'
      },
      {
        q: 'A copper rod of length 2 m is heated from 20°C to 80°C. Calculate the increase in length. (α_copper = 17×10⁻⁶ /°C)',
        hint: 'ΔL = α L₀ ΔT.',
        answer: 'ΔL = 17×10⁻⁶ × 2 × (80-20) = 17×10⁻⁶ × 2 × 60 = 2.04×10⁻³ m = 2.04 mm'
      },
      {
        q: 'How much heat is required to raise the temperature of 2 kg of water from 20°C to 100°C? (c_water = 4186 J/kg·K)',
        hint: 'Q = mcΔT.',
        answer: 'Q = 2 × 4186 × (100-20) = 2 × 4186 × 80 = 669,760 J = 669.76 kJ'
      },
      {
        q: 'A 200 g piece of iron (c = 450 J/kg·K) at 200°C is dropped into 500 g water at 20°C. Find the final temperature.',
        hint: 'Heat lost by iron = Heat gained by water. Use Q = mcΔT.',
        answer: 'm_i c_i (200 - T_f) = m_w c_w (T_f - 20). 0.2×450×(200-T_f) = 0.5×4186×(T_f-20). 90(200-T_f) = 2093(T_f-20). 18000 - 90T_f = 2093T_f - 41860. 59860 = 2183T_f → T_f = 27.4°C'
      },
      {
        q: 'An iron rod has length 1.5 m at 0°C. What is its length at 100°C? (α_iron = 12×10⁻⁶ /°C)',
        hint: 'L = L₀(1 + αΔT).',
        answer: 'L = 1.5(1 + 12×10⁻⁶ × 100) = 1.5(1 + 0.0012) = 1.5018 m'
      },
      {
        q: 'A glass window has area 2 m² at 20°C. What is its area at 40°C? (α_glass = 9×10⁻⁶ /°C)',
        hint: 'ΔA = 2α A₀ ΔT (area expansion).',
        answer: 'ΔA = 2 × 9×10⁻⁶ × 2 × 20 = 7.2×10⁻⁴ m². A_final = 2.00072 m²'
      }
    ]
  },

  // ============================================================
  // LECTURE 37 - Heat II (Thermodynamics)
  // ============================================================
  37: {
    title: 'Heat - II (Thermodynamics)',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'A gas expands from 0.1 m³ to 0.3 m³ at constant pressure 2×10⁵ Pa. Find the work done by the gas.',
        hint: 'W = PΔV.',
        answer: 'W = 2×10⁵ × (0.3-0.1) = 2×10⁵ × 0.2 = 4×10⁴ J'
      },
      {
        q: '2 moles of an ideal gas at 300 K expand isothermally from 1 L to 4 L. Calculate the work done. (R = 8.314 J/mol·K)',
        hint: 'W = nRT ln(V₂/V₁).',
        answer: 'W = 2 × 8.314 × 300 × ln(4/1) = 4988.4 × 1.386 = 6914 J'
      },
      {
        q: 'A heat engine operates between 500 K and 300 K. What is its maximum possible efficiency?',
        hint: 'ε_Carnot = 1 - T_C/T_H.',
        answer: 'ε = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%'
      },
      {
        q: 'A gas is compressed adiabatically. The initial temperature is 300 K and volume is 2 m³. If the final volume is 1 m³ and γ = 5/3, find the final temperature.',
        hint: 'Use TV^(γ-1) = constant → T₂/T₁ = (V₁/V₂)^(γ-1).',
        answer: 'T₂ = 300 × (2/1)^(2/3) = 300 × 1.587 = 476 K'
      },
      {
        q: 'A gas absorbs 500 J of heat and does 200 J of work. What is the change in internal energy?',
        hint: 'ΔE = Q + W (sign: Q positive if added, W positive if done on system). Since gas does work, W = -200 J.',
        answer: 'ΔE = 500 + (-200) = 300 J'
      },
      {
        q: 'What is the efficiency of a Carnot engine operating between 100°C and 27°C?',
        hint: 'Convert to Kelvin: T_H = 373 K, T_C = 300 K. ε = 1 - T_C/T_H.',
        answer: 'ε = 1 - 300/373 = 1 - 0.804 = 0.196 = 19.6%'
      },
      {
        q: 'An engine absorbs 1000 J of heat and rejects 600 J to the cold reservoir. Calculate (a) work done, (b) efficiency.',
        hint: 'W = Q_in - Q_out. ε = W/Q_in.',
        answer: 'W = 1000 - 600 = 400 J. ε = 400/1000 = 0.4 = 40%'
      }
    ]
  },

  // ============================================================
  // LECTURE 38 - Heat III (Kinetic Theory)
  // ============================================================
  38: {
    title: 'Heat - III (Kinetic Theory & Phase Changes)',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'Calculate the RMS speed of oxygen molecules at 300 K. (Molar mass of O₂ = 32 g/mol = 0.032 kg/mol, R = 8.314 J/mol·K)',
        hint: 'v_rms = √(3RT/M).',
        answer: 'v_rms = √(3 × 8.314 × 300 / 0.032) = √(7482.6/0.032) = √233,831 = 483.6 m/s'
      },
      {
        q: 'Calculate the average kinetic energy of a gas molecule at 300 K. (k_B = 1.38×10⁻²³ J/K)',
        hint: 'K_avg = (3/2) k_B T.',
        answer: 'K_avg = 1.5 × 1.38×10⁻²³ × 300 = 6.21×10⁻²¹ J'
      },
      {
        q: 'How much heat is required to melt 2 kg of ice at 0°C? (L_f = 3.34×10⁵ J/kg)',
        hint: 'Q = mL_f.',
        answer: 'Q = 2 × 3.34×10⁵ = 6.68×10⁵ J = 668 kJ'
      },
      {
        q: 'How much heat is required to convert 1 kg of water at 100°C to steam at 100°C? (L_v = 2.26×10⁶ J/kg)',
        hint: 'Q = mL_v.',
        answer: 'Q = 1 × 2.26×10⁶ = 2.26×10⁶ J = 2.26 MJ'
      },
      {
        q: 'Calculate the most probable speed of nitrogen molecules at 300 K. (M_N2 = 28 g/mol = 0.028 kg/mol, k_B = 1.38×10⁻²³ J/K)',
        hint: 'v_mp = √(2kT/m) where m = M/N_A. Or v_mp = √(2RT/M).',
        answer: 'v_mp = √(2 × 8.314 × 300 / 0.028) = √(4988.4/0.028) = √178,157 = 422 m/s'
      },
      {
        q: 'A 0.5 kg copper block at 100°C is placed in 1 kg water at 20°C. Find the final temperature. (c_Cu = 387 J/kg·K, c_water = 4186 J/kg·K)',
        hint: 'Heat lost by copper = Heat gained by water.',
        answer: '0.5×387×(100-T) = 1×4186×(T-20). 193.5(100-T) = 4186(T-20). 19350 - 193.5T = 4186T - 83720. 103070 = 4379.5T → T = 23.5°C'
      }
    ]
  },

  // ============================================================
  // LECTURE 39 - Special Relativity I
  // ============================================================
  39: {
    title: 'Special Relativity - I',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'A spaceship moves at 0.8c. How much time does 1 hour on the ship correspond to on Earth? (c = 3×10⁸ m/s)',
        hint: 'Δt = γ Δt₀, where γ = 1/√(1 - v²/c²).',
        answer: 'γ = 1/√(1 - 0.8²) = 1/√0.36 = 5/3. Δt = (5/3) × 1 h = 1.67 h = 1 h 40 min'
      },
      {
        q: 'A rod is 1 m long at rest. What is its length when moving at 0.6c along its length? (c = 3×10⁸ m/s)',
        hint: 'L = L₀/γ, γ = 1/√(1 - v²/c²).',
        answer: 'γ = 1/√(1 - 0.6²) = 1/0.8 = 1.25. L = 1/1.25 = 0.8 m'
      },
      {
        q: 'Calculate the Lorentz factor γ for a particle moving at 0.99c.',
        hint: 'γ = 1/√(1 - v²/c²).',
        answer: 'γ = 1/√(1 - 0.99²) = 1/√(1 - 0.9801) = 1/√0.0199 = 1/0.141 = 7.09'
      },
      {
        q: 'A muon has a lifetime of 2.2 μs in its rest frame. If it travels at 0.95c, what is its lifetime as measured on Earth?',
        hint: 'Δt = γ Δt₀. γ = 1/√(1 - 0.95²).',
        answer: 'γ = 1/√(1 - 0.9025) = 1/√0.0975 = 3.20. Δt = 3.20 × 2.2 = 7.04 μs'
      },
      {
        q: 'Calculate the relativistic momentum of a 1 kg object moving at 0.5c. (c = 3×10⁸ m/s)',
        hint: 'p = γ m v. γ = 1/√(1 - 0.5²).',
        answer: 'γ = 1/√0.75 = 1.155. p = 1.155 × 1 × (0.5×3×10⁸) = 1.155 × 1.5×10⁸ = 1.73×10⁸ kg·m/s'
      },
      {
        q: 'What is the rest energy of a proton? (m_p = 1.67×10⁻²⁷ kg, c = 3×10⁸ m/s)',
        hint: 'E₀ = mc².',
        answer: 'E₀ = 1.67×10⁻²⁷ × (3×10⁸)² = 1.67×10⁻²⁷ × 9×10¹⁶ = 1.50×10⁻¹⁰ J = 938 MeV'
      },
      {
        q: 'A particle has total energy E = 2mc². What is its speed?',
        hint: 'E = γmc² → γ = 2. Then γ = 1/√(1 - v²/c²) → v = c√(1 - 1/γ²).',
        answer: 'γ = 2 → v = c√(1 - 1/4) = c√0.75 = 0.866c'
      }
    ]
  },

  // ============================================================
  // LECTURE 40 - Special Relativity II
  // ============================================================
  40: {
    title: 'Special Relativity - II',
    summary: `... (summary text here) ...`,
    questions: `... (MCQs here) ...`,
    problems: [
      {
        q: 'If 1 kg of matter is completely converted to energy, how many Joules are released? (c = 3×10⁸ m/s)',
        hint: 'E = mc².',
        answer: 'E = 1 × (3×10⁸)² = 9×10¹⁶ J'
      },
      {
        q: 'A star moving away from Earth shows a redshift. If the observed frequency is 90% of the emitted frequency, what is the star\'s speed? (Assume non-relativistic approximation)',
        hint: 'For receding source, ν_obs = ν_emit(1 - v/c).',
        answer: 'ν_obs/ν_emit = 0.9 = 1 - v/c → v/c = 0.1 → v = 0.1c = 3×10⁷ m/s'
      },
      {
        q: 'Calculate the energy equivalent of 1 atomic mass unit (1 u = 1.66×10⁻²⁷ kg). Express in MeV. (c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'E = mc². Convert J to eV then MeV.',
        answer: 'E = 1.66×10⁻²⁷ × 9×10¹⁶ = 1.494×10⁻¹⁰ J. In eV: 1.494×10⁻¹⁰ / 1.6×10⁻¹⁹ = 9.34×10⁸ eV = 934 MeV'
      },
      {
        q: 'A nucleus of mass 235 u fissions into two fragments of total mass 232.9 u. Calculate the energy released. (1 u = 931.5 MeV/c²)',
        hint: 'Δm = initial mass - final mass. Energy = Δm × 931.5 MeV.',
        answer: 'Δm = 235 - 232.9 = 2.1 u. Energy = 2.1 × 931.5 = 1956 MeV ≈ 1.96 GeV'
      },
      {
        q: 'Two events occur at the same place but 1 second apart in frame S. What is their separation in time in a frame moving at 0.6c?',
        hint: 'Δt\' = γ(Δt - vΔx/c²). Since Δx = 0, Δt\' = γΔt.',
        answer: 'γ = 1/√(1 - 0.36) = 1.25. Δt\' = 1.25 × 1 = 1.25 s'
      },
      {
        q: 'Calculate the spacetime interval for events with Δt = 2 s and Δx = 4×10⁸ m. (c = 3×10⁸ m/s)',
        hint: 's² = (cΔt)² - (Δx)².',
        answer: 's² = (3×10⁸×2)² - (4×10⁸)² = (6×10⁸)² - (4×10⁸)² = 3.6×10¹⁷ - 1.6×10¹⁷ = 2.0×10¹⁷ m². s = 4.47×10⁸ m (timelike, s² > 0)'
      }
    ]
  },

41: {
   problems: [
      {
        q: 'The work function of sodium is 2.3 eV. What is the maximum kinetic energy of photoelectrons when light of wavelength 400 nm is incident? (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'E_photon = hc/λ; K_max = E_photon - W.',
        answer: 'E_photon = (6.63×10⁻³⁴ × 3×10⁸)/(400×10⁻⁹) = 4.97×10⁻¹⁹ J = 3.10 eV. K_max = 3.10 - 2.3 = 0.80 eV'
      },
      {
        q: 'What is the de Broglie wavelength of a 0.05 kg ball moving at 10 m/s? (h = 6.63×10⁻³⁴ J·s)',
        hint: 'λ = h/p = h/(mv).',
        answer: 'λ = 6.63×10⁻³⁴ / (0.05 × 10) = 1.33×10⁻³³ m'
      },
      {
        q: 'A photon has energy 2.5 eV. Calculate its wavelength in nanometers. (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'E = hc/λ → λ = hc/E.',
        answer: 'E = 2.5 × 1.6×10⁻¹⁹ = 4.0×10⁻¹⁹ J. λ = (6.63×10⁻³⁴ × 3×10⁸)/(4.0×10⁻¹⁹) = 4.97×10⁻⁷ m = 497 nm'
      },
      {
        q: 'The threshold frequency for a metal is 5×10¹⁴ Hz. What is the work function in eV? (h = 4.14×10⁻¹⁵ eV·s)',
        hint: 'W = hν₀.',
        answer: 'W = 4.14×10⁻¹⁵ × 5×10¹⁴ = 2.07 eV'
      },
      {
        q: 'Light of wavelength 300 nm falls on a metal with work function 2.0 eV. Calculate the maximum speed of emitted photoelectrons. (m_e = 9.11×10⁻³¹ kg)',
        hint: 'First find K_max = hc/λ - W, then v = √(2K/m).',
        answer: 'E_photon = (6.63×10⁻³⁴ × 3×10⁸)/(300×10⁻⁹) = 6.63×10⁻¹⁹ J = 4.14 eV. K_max = 4.14 - 2.0 = 2.14 eV = 3.42×10⁻¹⁹ J. v = √(2×3.42×10⁻¹⁹/9.11×10⁻³¹) = 8.67×10⁵ m/s'
      },
      {
        q: 'In Compton scattering, X-rays of wavelength 0.1 nm are scattered at 90°. What is the change in wavelength? (λ_c = 2.43×10⁻¹² m)',
        hint: 'Δλ = λ_c (1 - cosθ).',
        answer: 'Δλ = 2.43×10⁻¹² × (1 - cos90°) = 2.43×10⁻¹² × 1 = 2.43×10⁻¹² m'
      },
      {
        q: 'Calculate the momentum of a photon with wavelength 500 nm. (h = 6.63×10⁻³⁴ J·s)',
        hint: 'p = h/λ.',
        answer: 'p = 6.63×10⁻³⁴ / 500×10⁻⁹ = 1.33×10⁻²⁷ kg·m/s'
      },
      {
        q: 'An electron has de Broglie wavelength 0.1 nm. Calculate its speed. (m_e = 9.11×10⁻³¹ kg)',
        hint: 'λ = h/(mv) → v = h/(mλ).',
        answer: 'v = 6.63×10⁻³⁴ / (9.11×10⁻³¹ × 0.1×10⁻⁹) = 6.63×10⁻³⁴ / 9.11×10⁻⁴¹ = 7.28×10⁶ m/s'
      },
      {
        q: 'In a double-slit experiment with electrons, the slit separation d = 2 μm and screen distance D = 1 m. If the de Broglie wavelength of electrons is 0.1 nm, calculate the fringe spacing Δy.',
        hint: 'Δy = λD/d.',
        answer: 'Δy = (0.1×10⁻⁹ × 1) / (2×10⁻⁶) = 5×10⁻⁵ m = 50 μm'
      },
      {
        q: 'Using the uncertainty principle, if the position of an electron is known to within 0.01 nm, what is the minimum uncertainty in its momentum? (ℏ = 1.055×10⁻³⁴ J·s)',
        hint: 'Δx Δp ≥ ℏ/2.',
        answer: 'Δp ≥ ℏ/(2Δx) = 1.055×10⁻³⁴ / (2 × 0.01×10⁻⁹) = 1.055×10⁻³⁴ / 2×10⁻¹¹ = 5.27×10⁻²⁴ kg·m/s'
      }
    ]
},


42:{
  problems: [
      {
        q: 'Calculate the energy of a photon with frequency 5×10¹⁴ Hz. (h = 6.63×10⁻³⁴ J·s)',
        hint: 'E = hν.',
        answer: 'E = 6.63×10⁻³⁴ × 5×10¹⁴ = 3.315×10⁻¹⁹ J'
      },
      {
        q: 'A photon has wavelength 500 nm. Calculate its frequency. (c = 3×10⁸ m/s)',
        hint: 'ν = c/λ.',
        answer: 'ν = 3×10⁸ / 500×10⁻⁹ = 6×10¹⁴ Hz'
      },
      {
        q: 'Calculate the energy of a photon with wavelength 400 nm. (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s)',
        hint: 'E = hc/λ.',
        answer: 'E = (6.63×10⁻³⁴ × 3×10⁸) / 400×10⁻⁹ = 4.97×10⁻¹⁹ J = 3.10 eV'
      },
      {
        q: 'What is the de Broglie wavelength of an electron moving at 2×10⁶ m/s? (m_e = 9.11×10⁻³¹ kg, h = 6.63×10⁻³⁴ J·s)',
        hint: 'λ = h/(mv).',
        answer: 'λ = 6.63×10⁻³⁴ / (9.11×10⁻³¹ × 2×10⁶) = 6.63×10⁻³⁴ / 1.822×10⁻²⁴ = 3.64×10⁻¹⁰ m = 0.364 nm'
      },
      {
        q: 'A particle is confined to a box of width 1 nm. Calculate the minimum kinetic energy using the uncertainty principle. (ℏ = 1.055×10⁻³⁴ J·s, m_e = 9.11×10⁻³¹ kg)',
        hint: 'Δx ≈ a = 1 nm. Δp ≥ ℏ/(2Δx). K = (Δp)²/(2m).',
        answer: 'Δp = 1.055×10⁻³⁴ / (2 × 1×10⁻⁹) = 5.27×10⁻²⁶ kg·m/s. K = (5.27×10⁻²⁶)² / (2 × 9.11×10⁻³¹) = 2.78×10⁻⁵¹ / 1.82×10⁻³⁰ = 1.53×10⁻²¹ J = 0.0096 eV'
      },
      {
        q: 'Calculate the zero-point energy of a harmonic oscillator with frequency 10¹⁵ Hz. (ℏ = 1.055×10⁻³⁴ J·s)',
        hint: 'E₀ = ½ℏω, ω = 2πf.',
        answer: 'ω = 2π × 10¹⁵ = 6.28×10¹⁵ rad/s. E₀ = 0.5 × 1.055×10⁻³⁴ × 6.28×10¹⁵ = 3.31×10⁻¹⁹ J = 2.07 eV'
      },
      {
        q: 'The energy levels of a quantum harmonic oscillator are given by E_n = (n+½)ℏω. What is the energy difference between n=1 and n=0?',
        hint: 'ΔE = E₁ - E₀ = ℏω.',
        answer: 'E₁ = (1+½)ℏω = 3/2ℏω, E₀ = ½ℏω. ΔE = ℏω'
      },
      {
        q: 'Calculate the energy of the n=2 state of hydrogen. (E₁ = -13.6 eV)',
        hint: 'E_n = -13.6/n² eV.',
        answer: 'E₂ = -13.6/4 = -3.4 eV'
      },
      {
        q: 'What is the energy difference between n=3 and n=2 states of hydrogen? (E₁ = -13.6 eV)',
        hint: 'ΔE = E_high - E_low = -13.6/n_high² - (-13.6/n_low²).',
        answer: 'E₃ = -13.6/9 = -1.51 eV, E₂ = -13.6/4 = -3.4 eV. ΔE = -1.51 - (-3.4) = 1.89 eV'
      },
      {
        q: 'Using the uncertainty principle, if the energy of a state has uncertainty ΔE = 1 eV, what is the minimum lifetime of the state? (ℏ = 6.58×10⁻¹⁶ eV·s)',
        hint: 'ΔE·Δt ≥ ℏ/2 → Δt ≥ ℏ/(2ΔE).',
        answer: 'Δt = 6.58×10⁻¹⁶ / (2 × 1) = 3.29×10⁻¹⁶ s'
      }
    ]
},

43: {
   problems: [
      {
        q: 'Calculate the radius of the n=2 orbit in hydrogen. (a₀ = 0.529 Å)',
        hint: 'r_n = a₀ × n².',
        answer: 'r₂ = 0.529 × 4 = 2.116 Å'
      },
      {
        q: 'What is the energy of the n=3 state of hydrogen? (E₁ = -13.6 eV)',
        hint: 'E_n = -13.6/n² eV.',
        answer: 'E₃ = -13.6/9 = -1.51 eV'
      },
      {
        q: 'Calculate the energy difference between n=3 and n=2 states of hydrogen.',
        hint: 'ΔE = E_high - E_low = -13.6/n_high² - (-13.6/n_low²).',
        answer: 'E₃ = -1.51 eV, E₂ = -3.4 eV. ΔE = -1.51 - (-3.4) = 1.89 eV'
      },
      {
        q: 'What is the wavelength of a photon emitted when an electron transitions from n=3 to n=2 in hydrogen? (R_H = 1.097×10⁷ m⁻¹)',
        hint: '1/λ = R_H(1/n_f² - 1/n_i²).',
        answer: '1/λ = 1.097×10⁷(1/4 - 1/9) = 1.097×10⁷(5/36) = 1.524×10⁶ m⁻¹. λ = 6.56×10⁻⁷ m = 656 nm (red)'
      },
      {
        q: 'Calculate the wavelength of the Hα line (n=3 to n=2). (R_H = 1.097×10⁷ m⁻¹)',
        hint: '1/λ = R_H(1/n_f² - 1/n_i²).',
        answer: '1/λ = 1.097×10⁷(1/4 - 1/9) = 1.097×10⁷(5/36) = 1.524×10⁶ m⁻¹. λ = 6.56×10⁻⁷ m = 656 nm'
      },
      {
        q: 'What is the ionization energy of hydrogen in Joules? (1 eV = 1.6×10⁻¹⁹ J)',
        hint: 'Ionization energy = 13.6 eV.',
        answer: 'E = 13.6 × 1.6×10⁻¹⁹ = 2.176×10⁻¹⁸ J'
      },
      {
        q: 'Calculate the speed of an electron in the n=1 orbit of hydrogen. (ke² = 2.307×10⁻²⁸ J·m, ℏ = 1.055×10⁻³⁴ J·s)',
        hint: 'ν_n = ke²/(nℏ).',
        answer: 'ν₁ = 2.307×10⁻²⁸ / 1.055×10⁻³⁴ = 2.187×10⁶ m/s'
      },
      {
        q: 'How much energy is required to excite a hydrogen atom from n=1 to n=2?',
        hint: 'ΔE = E₂ - E₁ = -3.4 - (-13.6) = 10.2 eV.',
        answer: '10.2 eV'
      },
      {
        q: 'What is the maximum number of electrons that can occupy the n=3 shell?',
        hint: 'Maximum electrons = 2n².',
        answer: '2 × 3² = 18 electrons'
      },
      {
        q: 'Calculate the energy of a photon with wavelength 486 nm (Balmer Hβ line). (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s)',
        hint: 'E = hc/λ.',
        answer: 'E = (6.63×10⁻³⁴ × 3×10⁸) / 486×10⁻⁹ = 1.989×10⁻²⁵ / 4.86×10⁻⁷ = 4.09×10⁻¹⁹ J = 2.56 eV'
      }
    ]
},


44: {
  problems: [
      {
        q: 'Calculate the radius of a nucleus with mass number A = 64. (r₀ = 1.2 fm)',
        hint: 'r = r₀ A^(1/3).',
        answer: 'r = 1.2 × 64^(1/3) = 1.2 × 4 = 4.8 fm'
      },
      {
        q: 'What is the radius of a Uranium-238 nucleus? (r₀ = 1.2 fm, A = 238)',
        hint: 'r = r₀ A^(1/3).',
        answer: 'r = 1.2 × 238^(1/3) = 1.2 × 6.20 = 7.44 fm'
      },
      {
        q: 'Calculate the mass defect of a helium-4 nucleus. (m_p = 1.007825 u, m_n = 1.008665 u, m_He = 4.002603 u)',
        hint: 'Δm = 2m_p + 2m_n - m_He.',
        answer: 'Δm = 2(1.007825) + 2(1.008665) - 4.002603 = 2.01565 + 2.01733 - 4.002603 = 0.030377 u'
      },
      {
        q: 'What is the binding energy of helium-4? (1 u = 931.5 MeV)',
        hint: 'BE = Δm × 931.5 MeV.',
        answer: 'BE = 0.030377 × 931.5 = 28.30 MeV'
      },
      {
        q: 'The binding energy per nucleon of helium-4 is: (A = 4)',
        hint: 'BE/nucleon = BE/A.',
        answer: 'BE/nucleon = 28.30/4 = 7.075 MeV/nucleon'
      },
      {
        q: 'A radioactive sample initially has 1000 nuclei. After one half-life, how many nuclei remain?',
        hint: 'After one half-life, half of the nuclei decay.',
        answer: '1000/2 = 500 nuclei'
      },
      {
        q: 'A sample has activity 200 Bq. After 3 half-lives, what is the activity?',
        hint: 'After n half-lives: A = A₀/2ⁿ.',
        answer: 'A = 200/2³ = 200/8 = 25 Bq'
      },
      {
        q: 'The half-life of a radioactive isotope is 10 hours. What is its decay constant?',
        hint: 'λ = 0.693/T₁/₂.',
        answer: 'λ = 0.693/10 = 0.0693 h⁻¹'
      },
      {
        q: 'What is the half-life of an isotope with decay constant λ = 0.1386 h⁻¹?',
        hint: 'T₁/₂ = 0.693/λ.',
        answer: 'T₁/₂ = 0.693/0.1386 = 5 hours'
      },
      {
        q: 'A sample of 1000 radioactive nuclei decays to 125 nuclei. How many half-lives have passed?',
        hint: 'N/N₀ = 125/1000 = 1/8 = (1/2)³. So 3 half-lives.',
        answer: '3 half-lives'
      },
      {
        q: 'Carbon-14 has half-life 5730 years. What fraction of Carbon-14 remains after 11,460 years?',
        hint: '11,460 years = 2 × 5730 years = 2 half-lives.',
        answer: 'Fraction = (1/2)² = 1/4 = 25%'
      },
      {
        q: 'A sample of Radon-222 (half-life 3.8 days) initially has 20,000 atoms. How many Radon atoms remain after 7.6 days?',
        hint: '7.6 days = 2 half-lives.',
        answer: '20,000 × (1/2)² = 20,000 × 1/4 = 5,000 atoms'
      },
      {
        q: 'Uranium-238 has half-life 4.5×10⁹ years. What is its decay constant?',
        hint: 'λ = 0.693/T₁/₂.',
        answer: 'λ = 0.693/(4.5×10⁹) = 1.54×10⁻¹⁰ years⁻¹'
      },
      {
        q: 'A radioactive source has activity 10 Bq. How many decays occur in 1 minute?',
        hint: 'Decays = Activity × time (in seconds).',
        answer: '10 Bq = 10 decays/s. In 60 s: 10 × 60 = 600 decays'
      },
      {
        q: 'Calculate the energy released in the fission of U-235 if the mass defect is 0.2 u. (1 u = 931.5 MeV)',
        hint: 'E = Δm × 931.5 MeV.',
        answer: 'E = 0.2 × 931.5 = 186.3 MeV'
      }
    ]

},

45: {
   problems: [
      {
        q: 'The Sun\'s luminosity is 3.83×10²⁶ W. How much mass is converted to energy each second? (c = 3×10⁸ m/s)',
        hint: 'Use E = mc² → m = E/c².',
        answer: 'm = 3.83×10²⁶ / (3×10⁸)² = 3.83×10²⁶ / 9×10¹⁶ = 4.26×10⁹ kg/s ≈ 4.3 million tons/s'
      },
      {
        q: 'Calculate the Sun\'s surface area. (R_sun = 7×10⁸ m)',
        hint: 'A = 4πR².',
        answer: 'A = 4π × (7×10⁸)² = 4π × 4.9×10¹⁷ = 6.16×10¹⁸ m²'
      },
      {
        q: 'Using Stefan-Boltzmann law, calculate the Sun\'s power output. (T_sun = 5800 K, R_sun = 7×10⁸ m, σ = 5.67×10⁻⁸ W/m²K⁴)',
        hint: 'P = σ A T⁴, A = 4πR².',
        answer: 'A = 6.16×10¹⁸ m². P = 5.67×10⁻⁸ × 6.16×10¹⁸ × (5800)⁴ = 3.9×10²⁶ W'
      },
      {
        q: 'The Sun converts 4×10⁹ kg of mass to energy each second. How much energy is released per second? (c = 3×10⁸ m/s)',
        hint: 'E = mc².',
        answer: 'E = 4×10⁹ × (3×10⁸)² = 4×10⁹ × 9×10¹⁶ = 3.6×10²⁶ J/s'
      },
      {
        q: 'Calculate the surface temperature of Earth assuming it is a blackbody. (T_sun = 5800 K, R_sun = 7×10⁸ m, Earth\'s orbit radius = 1.5×10¹¹ m)',
        hint: 'T_Earth = T_sun × √(R_sun/(2R_orbit)).',
        answer: 'T_Earth = 5800 × √(7×10⁸ / (2 × 1.5×10¹¹)) = 5800 × √(7×10⁸ / 3×10¹¹) = 5800 × √(0.00233) = 5800 × 0.0483 = 280 K (≈ 7°C)'
      },
      {
        q: 'If the Earth\'s temperature is 290 K, how much power per unit area does it radiate? (σ = 5.67×10⁻⁸ W/m²K⁴)',
        hint: 'P/A = σT⁴.',
        answer: 'P/A = 5.67×10⁻⁸ × (290)⁴ = 5.67×10⁻⁸ × 7.07×10⁹ = 400 W/m²'
      },
      {
        q: 'The core temperature of the Sun is 15 million K. What is the average kinetic energy of particles in the core? (k_B = 1.38×10⁻²³ J/K)',
        hint: 'K_avg = (3/2) k_B T.',
        answer: 'K_avg = 1.5 × 1.38×10⁻²³ × 15×10⁶ = 3.105×10⁻¹⁶ J ≈ 1940 eV'
      },
      {
        q: 'If the Sun\'s mass is 2×10³⁰ kg and radius 7×10⁸ m, calculate its average density.',
        hint: 'ρ = M/V, V = 4/3 πR³.',
        answer: 'V = 4/3 × π × (7×10⁸)³ = 1.44×10²⁷ m³. ρ = 2×10³⁰ / 1.44×10²⁷ = 1389 kg/m³ ≈ 1.4 g/cm³'
      },
      {
        q: 'A helium-4 nucleus has mass 4.002603 u. Four protons have mass 4.031300 u. Calculate the mass defect. (1 u = 1.66×10⁻²⁷ kg)',
        hint: 'Δm = 4m_p - m_He.',
        answer: 'Δm = 4.031300 - 4.002603 = 0.028697 u = 0.028697 × 1.66×10⁻²⁷ = 4.76×10⁻²⁹ kg'
      },
      {
        q: 'Calculate the energy released in the fusion of four protons into helium-4. (1 u = 931.5 MeV)',
        hint: 'E = Δm × 931.5 MeV.',
        answer: 'E = 0.028697 × 931.5 = 26.73 MeV ≈ 25 MeV (as given in lecture)'
      },
      {
        q: 'If the Sun has 10 billion years of hydrogen fuel and has already burned for 4.6 billion years, how much time is left?',
        hint: 'Remaining = Total - Already consumed.',
        answer: '10 - 4.6 = 5.4 billion years'
      },
      {
        q: 'CO₂ concentration in atmosphere is now 360 ppm, up from 227 ppm in 1750. Calculate the percentage increase.',
        hint: 'Percentage increase = ((New - Old)/Old) × 100%.',
        answer: '((360 - 227)/227) × 100 = (133/227) × 100 = 58.6% increase'
      },
      {
        q: 'The Sun\'s surface temperature is 5800 K. At what wavelength does it emit most strongly? (b = 2.9×10⁻³ m·K)',
        hint: 'λ_max = b/T.',
        answer: 'λ_max = 2.9×10⁻³ / 5800 = 5.0×10⁻⁷ m = 500 nm (yellow-green)'
      },
      {
        q: 'A blackbody sphere of radius 0.05 m at 300 K radiates how much power? (σ = 5.67×10⁻⁸ W/m²K⁴)',
        hint: 'P = σ A T⁴, A = 4πR².',
        answer: 'A = 4π(0.05)² = 0.0314 m². P = 5.67×10⁻⁸ × 0.0314 × (300)⁴ = 5.67×10⁻⁸ × 0.0314 × 8.1×10⁹ = 14.4 W'
      }
    ]
}





// Export for use in website
// If using ES modules: export default lectureData;
// If using CommonJS: module.exports = lectureData;




},



}
    

 
export default practice;