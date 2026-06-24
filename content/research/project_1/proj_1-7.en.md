---
title: 'Free Energy Perturbation Calculations'
date: 2025-10-07T12:04:37+09:00
order: 5
draft: false
description: ''
keywords: []
---

## Free Energy Perturbation Calculations

### Free Energy Perturbation Method

The free energy perturbation (FEP) method is an approach used to calculate changes in free energy by treating differences such as amino acid mutations or variations in ligands bound to proteins as “perturbations.”
In this method, the initial and final states are connected by introducing virtual intermediate states in the computer, allowing the molecular system to be transformed gradually.
Because these intermediate states do not correspond to physically existing states, the FEP method is also referred to as an “alchemical” approach.

### Acceleration of Calculations Using the Modified Hamiltonian Method

In the "dual topology" approach, instead of transforming the entire molecule, only the coordinates and energies of the parts that change are modified during the calculation.
This strategy enables the evaluation of free energy changes while keeping the computational cost relatively low.
However, when Coulomb interactions are treated using the Ewald method, interactions between distant atoms are calculated in reciprocal space.
In conventional dual topology approaches, this reciprocal-space calculation requires two energy evaluations per time step.
In GENESIS, when CPU-GPU hybrid calculations are employed, reciprocal-space calculations are executed on the CPU, making this part a bottleneck that limits the overall computational performance.
Therefore, to further accelerate FEP calculations, the development of a new method that reduces the reciprocal-space calculation to a single evaluation per time step has been highly desirable.

Focusing on a key feature of the FEP method—that arbitrary states can be defined as intermediate states—we have developed a modified Hamiltonian approach in which quantities such as charges included in the Hamiltonian are scaled in a computationally convenient manner<sup>1</sup>.
By using this method, the number of long-range interaction calculations can be reduced to one per time step, while maintaining the accuracy of conventional FEP calculations.
As a result, we demonstrated that calculations in reciprocal space can be accelerated by 38%, and the overall simulation by 23%.

Furthermore, GENESIS provides additional techniques to improve computational accuracy and stability such as the “hybrid topology method” and “soft-core potentials”.
By using the reversible reference system propagation algorithm (r-RESPA), the reciprocal-space calculations can be further reduced.
By combining these approaches with the “Hamiltonian replica exchange” technique, it is also possible to enhance the efficiency of structural sampling.
Through the integrated use of these methods, fast and stable FEP calculations can be achieved.

### Ligand Binding Analysis Using the gREST+FEP Method

Accurate prediction of ligand binding affinity to proteins is crucial for “in silico” drug discovery, where computational approaches are used to reduce the cost and time of drug development.
When the binding structure between a protein and a ligand is known from experimental techniques such as X-ray crystallography, the FEP method enables highly accurate calculation of binding affinities.
However, in many cases the binding structure is not available, or even when it is known, a ligand may adopt multiple possible binding poses.
In such situations, a computational approach that can simultaneously predict the correct binding pose and accurately evaluate the binding affinity has been strongly desired.

To address this challenge, we developed the gREST+FEP method, which combines the FEP method with generalized replica exchange with solute tempering (gREST)<sup>2</sup>.
In the gREST method, multiple replicas are prepared in which the ligand molecule is assigned different temperatures, and these temperatures are exchanged during MD simulations.
This approach exploits the large thermal fluctuations of the ligand at high temperatures to efficiently explore stable binding poses at physiological temperature.
To prevent the high-temperature ligand from dissociating from the protein, an auxiliary potential energy term known as a “flat-bottom potential” is introduced.
In the gREST+FEP framework, (1) plausible binding poses are first identified using the gREST method, and (2) the binding affinity of each pose is then evaluated with high accuracy using the FEP method.
This two-step strategy enables a unified and consistent prediction of both binding poses and binding affinities.

We applied the gREST+FEP method to predict the binding affinities of 10 ligands to FK506 binding protein (FKBP).
Notably, no prior information about the ligand binding poses was provided in these calculations. Despite this stringent condition, the binding affinities obtained with gREST+FEP showed excellent agreement with experimental values.
The predictive accuracy significantly outperformed that of conventional docking calculations, which are widely used in drug discovery research.

These results demonstrate that the gREST+FEP method can simultaneously achieve high accuracy in both binding pose prediction and binding affinity evaluation.
We expect that this method will be broadly applied to in silico drug discovery and contribute to a substantial reduction in the cost and time required for drug development.

### References:

<ol>
  <li>Oshima, H.; Sugita, Y. Modified Hamiltonian in FEP Calculations for Reducing the Computational Cost of Electrostatic Interactions. <i>J. Chem. Inf. Model.</i> 2022, 62 (11), 2846–2856. DOI:<a href="https://doi.org/10.1021/acs.jcim.1c01532" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jcim.1c01532</a></li>
  <li>Oshima, H.; Re, S.; Sugita, Y. Prediction of Protein–Ligand Binding Pose and Affinity Using the gREST+FEP Method. <i>J. Chem. Inf. Model.</i> 2020, 60 (11), 5382–5394. DOI:<a href="https://doi.org/10.1021/acs.jcim.0c00338" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jcim.0c00338</a></li>
</ol>

