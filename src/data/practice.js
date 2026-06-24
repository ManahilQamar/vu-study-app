
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





},



}
    

 
export default practice;