---
title: 'Ultra-Parallel Molecular Dynamics Software GENESISS'
date: 2025-10-07T12:04:37+09:00
order: 2
draft: false
description: ''
keywords: []
---

## Ultra-Parallel Molecular Dynamics Software GENESIS

Many molecular dynamics (MD) simulation software packages have been developed around the world. However, when using a large number of CPUs to apply conventional algorithms to large molecular systems, communication time between CPUs becomes a major limitation. In practice, simulations of a single protein were possible, but it was difficult to efficiently simulate complex biomolecular systems such as the cytoplasm, where many proteins and nucleic acids (DNA and RNA) coexist, together with solvent molecules like water and ions.

In particular, to fully utilize supercomputers with a very large number of CPUs, such as the K computer, it was necessary to develop new MD simulation software with advanced computational algorithms.

The interaction energy in molecular systems can be calculated using potential energy functions (force fields) based on physical laws such as Coulomb’s law. As shown in Fig. 1, molecular systems include both bonded and nonbonded interactions. In molecular dynamics, the forces (F) acting on each atom are calculated from these interactions, and the motion of molecules is simulated by solving Newton’s equation of motion, F = ma. Using this method, we can observe molecular motions faster than microseconds in relatively small systems with atomic-level resolution.

The software we developed, GENESIS (GENeralized Ensemble SImulation System), performs MD simulations not only for biomolecules such as proteins, nucleic acids, membranes, and glycans, but also for their large assemblies. In MD simulations, the most time-consuming part is the calculation of nonbonded interactions in the force field. Many approaches have been proposed to make this calculation more efficient. One approach is to develop special-purpose computers dedicated to MD simulations, which enable long-timescale simulations up to milliseconds. However, such systems often have limitations in the number of particles that can be simulated.

In contrast, the goal of GENESIS is to efficiently simulate very large molecular systems using general-purpose supercomputers such as the K computer and Fugaku. These modern supercomputers consist of tens of thousands of CPUs connected by high-speed networks. To use them efficiently, computations must be distributed across CPUs while minimizing communication between them. This requires parallel computing programs. For massively parallel systems like the K computer, a hybrid parallelization approach that combines MPI and OpenMP is effective. GENESIS is designed with this hybrid parallelization from the beginning.


GENESIS consists of two MD programs (ATDYN and SPDYN) and analysis tools. ATDYN uses an algorithm that parallelizes all pairwise particle interactions (atom decomposition). SPDYN uses a spatial decomposition method, where the simulation space is divided into small domains and cells, and interactions between particles in each domain and its neighboring cells are calculated in parallel. ATDYN is suitable for simulations of small peptides, coarse-grained models, and for developing or testing new algorithms. In contrast, the spatial decomposition method used in SPDYN (Fig. 2) significantly reduces communication because data exchange occurs mainly between neighboring domains. This allows much faster computation for large systems compared to atom decomposition.

Therefore, SPDYN is designed for large-scale all-atom simulations such as membrane proteins and cellular environments. It also introduces several new algorithms, including (1) the Inverse Lookup Table method, (2) the Midpoint cell method, and (3) the Volumetric decomposition FFT method. By combining these algorithms, we achieved performance of 17.5 ns/day for a system with about 11.7 million atoms, and 6.5 ns/day for a system with about 103.7 million atoms on the K computer (Fig. 3).

Another important feature of GENESIS is the implementation of efficient sampling algorithms such as Replica Exchange Molecular Dynamics (REMD). In REMD, multiple copies (replicas) of the system are simulated in parallel under different conditions, such as temperature, and parameters are exchanged at certain intervals (Fig. 4). This allows efficient sampling of different states. For example, protein structures at a wide range of temperatures can be explored in a single simulation. At low temperatures, simulations often remain near the initial structure, but by mixing high-temperature simulations, it becomes possible to explore different conformations. In GENESIS, REMD can exchange not only temperature but also other parameters such as pressure, surface tension, and restraint forces. While many efficient algorithms have been developed by researchers worldwide, GENESIS can also serve as a platform for developing new algorithms.

Molecular dynamics simulations of biomolecular systems are becoming increasingly important in life sciences, supported by advances in both dedicated MD computers and large-scale supercomputers. If it becomes possible to simulate larger systems over longer timescales, simulation results can be directly compared with experimental data. This will help us understand and control the functions of biomolecules, such as proteins, at atomic resolution in cellular environments. This is important not only for basic life science but also for practical applications such as drug discovery. GENESIS is expected to be widely used not only by its developers but also by universities, research institutes, and industry, contributing to both fundamental research and drug discovery.

{{< figure src="/images/research/proj_2-2.jpg" alt="" caption="Fig. 1. Interactions in molecular systems: In molecular dynamics simulations, atoms are treated as charged particles connected by springs. Interactions are divided into bonded interactions (bond stretching, angle bending, and dihedral torsions) and nonbonded interactions (van der Waals and Coulomb interactions)." >}}

### References:

<ul>
  <li>Jung, Mori, Kobayashi, Matsunaga, Yoda, Feig, Sugita, GENESIS: a hybrid-parallel and multi-scale molecular dynamics simulator with enhanced sampling algorithms for biomolecular andcellular simulations,WIREs Computational Molecular Science 5, 310-323 (2015)<br>
  <a href="https://doi.org/10.1002/wcms.1220" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/wcms.1220</a>
  </li>
</ul>
