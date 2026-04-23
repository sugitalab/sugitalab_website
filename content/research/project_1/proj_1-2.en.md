---
title: 'Accurate Temperature and Pressure Evaluation in Molecular Dynamics'
date: 2025-08-26T10:46:14+09:00
order: 2
draft: false
description: ''
keywords: []
---

## Accurate Temperature and Pressure Evaluation in Molecular Dynamics


In both classical dynamics and molecular dynamics (MD) simulations, fundamental thermodynamic properties like temperature and pressure are derived from the kinetic energy of the system. However, a key challenge in MD arises when using a large integration time step, which can introduce significant errors in these calculations. Unlike classical dynamics, which assumes an infinitesimal time step, MD simulations use discrete, finite time steps. This can cause the kinetic energy calculated from particle velocities to deviate from the true kinetic energy, leading to inaccurate temperature and pressure estimations.

To address this issue, GENESIS uses a more sophisticated approach. Temperature is derived from the product of momentum and the time derivative of coordinates, and it can be converted into kinetic energy. A direct application of this formula in MD with a large time step results in inaccuracies. By using a Taylor expansion to compare the molecular dynamics update step with the ideal classical motion, GENESIS can more accurately express the time derivative of coordinates. This allows for the calculation of a more precise temperature by combining two different types of kinetic energies that individually underestimate or overestimate the true value.

Similarly, GENESIS accurately evaluates pressure based on the virial theorem, which combines the virial with the kinetic energy. By applying the same rigorous comparison between the Taylor expansion of coordinates and momenta and the MD integration, the software obtains a more accurate pressure value.

This refined methodology for calculating temperature and pressure allows GENESIS to maintain similar structural and dynamical properties for simulations with time steps ranging from 2 fs to 5 fs, providing reliable results even with larger, more computationally efficient time steps (Fig. 1). This is a significant improvement over conventional methods where increasing the time step leads to a loss of accuracy.

{{< figure src="/images/research/proj_1-2.jpg" alt="Area per lipid distribution" caption="Fig. 1. Aread per lipid distribution with temperature evaluation using conventional (left) and GENESIS (right)." >}}

### References:

1. Jaewoon Jung, Chigusa Kobayashi, and Yuji Sugita, J. Chem. Phys. 148, 164109 (2018)
1.  Jaewoon Jung, Chigusa Kobayashi, and Yuji Sugita, J. Chem. Theory. Comput. 15, 84-94 2019)
1. Jaewoon Jung and Yuji Sugita, J. Chem. Phys. 153, 234115 (2020)
1. Jaewoon Jung, Kento Kasahara, Chigusa Kobayashi, Hiraku Oshima, Takaharu Mori, and Yuji Sugita,  J. Chem. Theory. Comput. 17, 5312-5321 (2021)
