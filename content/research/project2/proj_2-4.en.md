---
title: 'Accelerating Molecular Dynamics Simulations Using GPUs'
date: 2025-10-07T12:04:37+09:00
order: 4
draft: false
description: ''
keywords: ''
pageName: ''
pageType: ''
categories: ['']
scriptfiles: ['']
---

## Accelerating Molecular Dynamics Simulations Using GPUs

Molecular dynamics (MD) simulations allow us to follow the motion of atoms and molecules in time, revealing structural dynamics and molecular interactions at an atomistic level. However, as biological systems increase in size and complexity, the computational demands quickly become prohibitive on conventional CPUs (central processing units), often requiring impractically long runtimes. To overcome these limitations and extend both the accessible system size and simulation timescale, GPUs (graphics processing units) have become indispensable.

While GPUs are generally slower than CPUs for individual operations, they excel in massive parallelism, executing orders of magnitude more calculations simultaneously. Problems that can be divided into thousands or millions of small, independent subproblems are ideally suited for GPU acceleration. In MD, this parallelism arises naturally in atomic interactions: each pairwise (or small group) interaction can be computed independently, making GPUs highly efficient for these tasks.

The GENESIS MD software implements this strategy as well. Early versions of GENESIS introduced hybrid CPU-GPU computing,<sup>1</sup> where computationally demanding non-bonded interactions are processed on GPUs while bonded interactions and long-range electrostatics are handled on CPUs. This hybrid approach, combined with optimizations such as multiple time-step integration and mixed-precision calculations, enabled large biomolecular systems to be simulated with high efficiency.

Recent work has further extended GENESIS to run on modern GPU-based supercomputers such as LUMI,<sup>2</sup> which combines AMD CPUs and GPUs. Here, performance gains were achieved by porting GPU kernels, optimizing communication between CPUs and GPUs, and tuning electrostatics calculations using the Particle Mesh Ewald (PME) method. Benchmarking demonstrated efficient scaling from tens of thousands to over 16 million atoms, achieving more than 200 nanoseconds of simulation per day on 1,024 nodes. These optimizations make it possible to study the stability and function of cellular-scale systems at atomistic resolution.

Together, these developments in GPU acceleration have transformed MD in GENESIS from being constrained to small proteins or short timescales into a practical tool for exploring the complex behavior of large, realistic biological systems.

{{< figure src="/images/research/proj_2-4.jpg" alt="System of 16M atoms" caption="" >}}

### References:

1. C. Kobayashi, J. Jung, Y. Matsunaga, T. Mori, T. Ando, K. Tamura, M. Kamiya, Y. Sugita. J. Comput. Chem. 2017, 38, 2193–2206. DOI: 10.1002/jcc.24874
1. D. Ugarte La Torre, J. Jung, Y. Sugita. In Proceedings of the International Conference on High Performance Computing in Asia-Pacific Region. 2025, 1-12. DOI: 10.1145/3712031.3712036