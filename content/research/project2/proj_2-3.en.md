---
title: 'Parallelization of Coarse-Grained Molecular Dynamics Using Non-Uniform Spatial Decomposition'
date: 2025-10-07T12:04:37+09:00
order: 3
draft: false
description: ''
keywords: []
---

## Parallelization of Coarse-Grained Molecular Dynamics Using Non-Uniform Spatial Decomposition

Molecular dynamics (MD) simulations using coarse-grained (CG) models reduce computational cost by representing multiple atoms as a single particle, thereby reducing the degrees of freedom. In CG models with residue-level resolution, several atoms in an amino acid are treated as one particle. These models have been widely used for long-timescale simulations of large biomolecular systems.
In such simulations, implicit solvent models are often used. In these models, solvent molecules such as water and ions are not explicitly included as particles, but their effects are incorporated into the physical model. As a result, regions containing many biomolecules, such as proteins, have a high particle density, while other regions have a low density. It has been difficult to efficiently perform parallel MD simulations for such systems with highly non-uniform particle distributions.

In this study, we developed a new domain decomposition method with dynamic load balancing to efficiently simulate biomolecular systems with non-uniform particle distributions. This method has been implemented as the CGDYN program in the molecular dynamics software GENESIS. In the new domain decomposition method, the simulation space is recursively divided into two regions so that each domain contains approximately the same number of particles (Fig. 1a).
During the simulation, molecular structures such as proteins may change significantly, and the relative positions of multiple molecules may also vary. As a result, the spatial density distribution can change rapidly. In such cases, CGDYN automatically adjusts the domain decomposition to maintain load balance and avoid performance degradation (Fig. 1b).

We evaluated the performance of CGDYN with the new dynamic domain decomposition method using two supercomputers, Fugaku and RIKEN Hokusai-BigWaterfall. We compared CGDYN with two other approaches: SPDYN-like, which uses uniform domain decomposition, and ATDYN, which does not use domain decomposition. The results show that CGDYN achieves higher performance than the other two methods, with 3 to 30 times better performance than ATDYN (Fig. 2). In addition, CGDYN provides nearly the same performance for both high-density and low-density systems, demonstrating that the load balancing method is effective regardless of particle density. Compared to SPDYN-like, CGDYN achieved up to 7.5 times faster simulations (Fig. 2). Furthermore, comparisons with other MD software on Fugaku also confirmed the high performance of CGDYN.

As an application of CGDYN, we simulated the fusion process of protein condensates (droplets). We constructed a very large system consisting of 16,647 intrinsically disordered proteins and observed the process in which more than 50 small droplets merge into a single large droplet with a diameter of 0.1 μm (Fig. 3).
The results show that the decrease in the number of droplets is not caused only by direct fusion. Some small droplets dissolve, and their proteins diffuse into the dilute phase before being absorbed into larger droplets (Fig. 3). This process is similar to Ostwald ripening, which arises from the competition between surface tension and molecular kinetic energy. Although Ostwald ripening of droplets can be directly observed using optical microscopy, to our knowledge, this study is the first to observe such behavior using MD simulations with a residue-level coarse-grained model.

The methods and software developed in this study are expected to provide deeper insight into biomolecular condensates. They will also serve as an important computational platform for understanding mesoscale biological phenomena through long-timescale simulations of large molecular systems.

{{< figure src="/images/research/proj_2-3-1.jpg" alt="" caption="Fig. 1. Load balancing algorithm in GENESIS CGDYN" >}}
(a) Conceptual illustration of domain decomposition. The simulation space is recursively divided so that each domain contains approximately the same number of particles.
(b) Conceptual illustration of dynamic load balancing. At t = 0, the system has highly non-uniform particle density, so more domains are assigned to high-density regions. After t = 9×10⁶ steps, the density becomes more uniform, and the domain decomposition is adjusted accordingly.

{{< figure src="/images/research/proj_2-3-2.jpg" alt="" caption="Fig. 2. Performance improvement demonstrated by benchmark calculations of GENESIS CGDYN" >}}
Comparison of CGDYN with SPDYN-like (uniform domain decomposition) and ATDYN (no domain decomposition). The scaling of computational performance with increasing number of nodes is shown.

{{< figure src="/images/research/proj_2-3-3.jpg" alt="" caption="Fig. 3. Simulation of fusion processes in very large protein droplets" >}}
As time (t) progresses, some small droplets dissolve, and their proteins diffuse into the dilute phase before being absorbed into larger droplets.

## References:

<ul>
  <li>Jung, Tan, Sugita, GENESIS CGDYN: large-scale coarse-grained MD simulation with dynamic load balancing for heterogeneous biomolecular systems, Nature Communications 15, 3370 (2024)<br>
  <a href="https://doi.org/10.1038/s41467-024-47654-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41467-024-47654-1</a>
  </li>
</ul>
