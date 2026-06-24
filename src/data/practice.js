
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
// Export for use in website
// If using ES modules: export default lectureData;
// If using CommonJS: module.exports = lectureData;




},



}
    

 
export default practice;