
const practice = {
  MTH101: {
    1: {
      problems: [
        {
          q: 'Solve the inequality: 2x − 5 < 7. Write the solution in interval notation.',
          hint: 'Add 5 to both sides, then divide by 2.',
          answer: '2x − 5 < 7 → 2x < 12 → x < 6. Solution: (−∞, 6)',
        },
        {
          q: 'Determine whether the number √3 is rational or irrational, and explain why.',
          hint: 'Think about whether √3 can be written as a ratio of two integers.',
          answer: '√3 is irrational. It cannot be expressed as p/q for integers p, q. Its decimal expansion is infinite and non-repeating.',
        },
        {
          q: 'Write the interval (−2, 5] in set-builder notation, and state whether it is open, closed, or half-open.',
          hint: 'Check whether each endpoint is included or excluded.',
          answer: '{x : −2 < x ≤ 5}. It is a half-open (half-closed) interval — open at −2, closed at 5.',
        },
        {
          q: 'If a < b and c is a negative number, what is the relationship between ac and bc? Explain using the order properties.',
          hint: 'Recall what happens to an inequality when both sides are multiplied by a negative number.',
          answer: 'Since c is negative, multiplying a < b by c reverses the inequality: ac > bc.',
        },
      ],
    },
    2: {
      problems: [
        {
          q: 'Solve for x: |2x + 3| = 9',
          hint: 'Split into two cases: 2x+3 = 9 and 2x+3 = −9.',
          answer: '2x+3=9 → x=3. 2x+3=−9 → x=−6. Solutions: x = 3 and x = −6',
        },
        {
          q: 'Solve the inequality |x − 4| < 6 and write the answer in interval notation.',
          hint: 'Use the rule −k < x−a < k.',
          answer: '−6 < x−4 < 6 → −2 < x < 10. Interval: (−2, 10)',
        },
        {
          q: 'Use the Triangle Inequality to explain whether |5 + (−3)| ≤ |5| + |−3| is true, showing both sides.',
          hint: 'Calculate both sides separately and compare.',
          answer: '|5+(−3)| = |2| = 2. |5|+|−3| = 5+3 = 8. Since 2 ≤ 8, the Triangle Inequality holds.',
        },
        {
          q: 'Find the distance between points A(−7) and B(4) on a coordinate line.',
          hint: 'Use the distance formula d = |b − a|.',
          answer: 'd = |4 − (−7)| = |11| = 11',
        },
      ],
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

    // ─────────────────────────────────────────────────────────────────
//  PHY101 — Lecture 23 Numerical Practice Problems
//  ADD this inside PHY101: { ... } in practice.js, as:
//  23: { problems: [...] }
// ─────────────────────────────────────────────────────────────────

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

    
  },


};
 
export default practice;