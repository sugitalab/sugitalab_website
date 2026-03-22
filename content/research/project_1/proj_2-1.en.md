---
title: '計算科学による分子動力学の高速化'
date: 2025-10-07T12:04:37+09:00
order: 1
draft: false
description: ''
keywords: []
---

## 計算科学による分子動力学の高速化

### Lookup Table Approach in GENESIS

In molecular dynamics (MD) simulations, the most computationally expensive part involves energy and force evaluation in nonbonded interactions, such as electrostatic and van der Waals. These depend on the distance between every pair of particles.

A conventional method to speed up these calculations is to use a lookup table. Instead of calculating the interaction energy and force from scratch for every pair of particles at every single time step, we can pre-calculate these values for a range of distances and store them in a table. During the simulation, we just "look up" the value that corresponds to a given distance. This is
much faster than performing complex mathematical operations like square roots and exponential functions.

However, the problem with a simple lookup table is that it can still be inefficient. To be accurate, the table needs a huge number of data points, especially for short distances where forces change very rapidly. This requires a lot of memory and can be slow to access.

In GENESIS, insread of creating a table based on distance squared (r2), we create a table based on the inverse distance squared (1/r2). With the new table, the energy and force can be evaluated as the linear function of 1/r2, and we can use few data points for the medium and long-range pairwise distances (Fig. 1).

By making the table more efficient and defining energy and force as a linear function of 1/r2, we could create a lookup table that is both compact and highly accurate, especially for the short-range interactions that are the most critical for correct simulation results. This method leads to faster nonbonded calculations, which in turn accelerates the entire molecular dynamics simulation
without sacrificing accuracy.

{{< figure src="/images/research/proj_2-1-1.jpg" alt="" caption="Fig. 4Performance on K, Trinity, LUMI, and Fugaku." >}}

### References

Jaewoon Jung, Takaharu Mori, and Yuji Sugita, “Efficient lookup table using a linear function of inverse distance squared”, J. Comput. Chem. 34, 2412-2420 (2013)

### Parallelization in GENESIS

GENESIS employs a sophisticated, multi-layered approach to parallelization, combining different techniques to achieve remarkable performance and scale to systems with hundreds of millions of atoms on over a hundred thousand processor cores. The core philosophy is a hybrid parallelization scheme that leverages both MPI (Message Passing Interface) and OpenMP (Open Multi-Processing) for multithreading within a single node. This combination efficiently utilizes the hierarchical architecture of modern supercomputers, where many cores are grouped on a single node.

### Core Algorithms for MD Parallelization

The computational bottleneck in MD simulations is primarily the calculation of forces between particles. These forces can be divided into two categories: short-range and long-range interactions. GENESIS uses distinct parallelization strategies for each.

### 1. Short-Range Nonbonded Interactions: The Midpoint Cell Method

Nonbonded interactions, such as Lennard-Jones forces, are typically calculated within a certain cutoff distance. GENESIS addresses this by using a spatial decomposition approach. In this method, the simulation space is divided into subdomains, and each processor is assigned a specific subdomain. The key innovation is the midpoint cell method, which works by having a processor compute the interaction for a pair of particles if the midpoint cell of the two cells of each particles lies within its assigned domain. This is combined with the hybrid MPI/OpenMP scheme, where each MPI process handles a subdomain and uses multiple OpenMP threads to parallelize the calculations within that subdomain ( 図 2 in 超 並 列 分 子 動 力 学 計 算 ソ フ ト ウ ェ ア GENESIS.docx). This strategy is highly efficient and minimizes inter-processor communication. To optimize the performance of the short-range non-bonded interactions, GENESIS uses different non-bonded interaction algorithms according to hardware architecture.

Long-range electrostatic forces are more complex and require a different approach, often handled by the Particle-Mesh Ewald (PME) method. PME relies on a 3D Fast Fourier Transform (FFT), which can also be a computational bottleneck for large systems. GENESIS uses a volumetric decomposition scheme that divides the 3D FFT grid into smaller sub-grids, keeping the same domain decomposition between real- and reciprocal-space. The algorithm is optimized to minimize the data communication by avoidng global communication when we convert real-space charge into charge values on grids, making the calculation of long-range forces highly scalable (Fig. 3).

{{< figure src="/images/research/proj_2-1-2.jpg" alt="" caption="Fig. 3. (a) Same domain decomposition between real and reciprocal space in GENESIS. We do not need communication to make charge on grids. (b) different domain decoposition between real and reciprocal space in other MD, which requires additional communications." >}}
Based on the developments, GENESIS has a very good parallelization for large system on various supercomputers, including K, Trinity, Tsubame, Fugaku, LUMI, and so on (Fig. 4).

{{< figure src="/images/research/proj_2-1-3.jpg" alt="" caption="Fig. 4Performance on K, Trinity, LUMI, and Fugaku." >}}

### Specialized Parallelization for Coarse-Grained Simulations

While all-atom simulations provide high-resolution details, coarse-grained (CG) simulations are used to study even larger biological systems by representing amino acid as single "bead". GENESIS CGDYN addresses the unique parallelization challenges of these simulations.

In many CG simulations, the system is heterogeneous, meaning some regions are denser than others. In a standard spatial decomposition, the processors assigned to the dense regions will be overloaded with more work, while those in sparse regions will be idle. This leads to poor performance due to load imbalance. CGDYN solves this with a dynamic load balancing algorithm. It monitors the computational load on each processor and redistributes the subdomains to ensure that the work is evenly divided. This dynamic adjustment is essential for efficiently simulating complex, heterogeneous systems and prevents the entire simulation from being bottlenecked by a
few overloaded processors (Figure in the press release).

### References:

1. Jaewoon Jung, Takaharu Mori, and Yuji Sugita, “Midpoint cell method for hybrid (MPI+OpenMP) parallelization of molecular dynamics simulations”, J. Comput. Chem. 35, 1064-1072
1. Jaewoon Jung, Chigusa Kobayashi, Toshiyuki Imamura, and Yuji Sugita, “Parallel implementation of 3D FFT with volumetric decomposition schemes for efficient molecular dynamics simulations”, Comput. Phys. Comm. 200, 57-65 (2016)
3. Jaewoon Jung, Wataru Nishima, Marcus Daniels, Gavin Bascom, Chigusa Kobayashi, Adetokunbo Adedoyin, Michael Wall, Anna Lappala, Dominic Phillips, William Fischer, Chang‐Shung Tung, Tamar Schlick, Yuji Sugita, and Karissa Y Sanbonmatsu “Scaling molecular dynamics beyond 100,000 processor cores for large-scale biophysical simulations”, J. Comput. Chem. 40, 1919-1930 (2019)
1. Jaewoon Jung, Chigusa Kobayashi, Kento Kasahara, Cheng Tan, Akiyoshi Kuroda, Kazuo Minami, Shigeru Ishiduki, Tatsuo Nishiki, Hikaru Inoue, Yutaka Ishikawa, Michael Feig, Yuji Sugita, “New parallel computing algorithm of molecular dynamics for extremely huge scale
biological systems”, J. Comput. Chem. 42, 231-241 (2021)
1. Jaewoon Jung, Cheng Tan, and Yuji Sugita, “GENESIS CGDYN: large-scale coarse-grained MD simulation with dynamic load balancing for heterogeneous biomolecular systems”, Nat. Commun. 15, 3370 (2024)
