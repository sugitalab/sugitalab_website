---
title: 'Refinement of Cryo-EM Structures'
date: 2025-10-07T12:04:37+09:00
order: 7
draft: false
description: ''
keywords: []
---

## Refinement of Cryo-EM Structures

In recent years, three-dimensional structure determination of proteins by single-particle analysis using cryo-electron microscopy (cryo-EM) has become increasingly widespread. In this approach, a solution containing the target protein is rapidly frozen to cryogenic temperatures (below −180℃), and projection images of the protein are recorded using a transmission electron microscope. A three-dimensional structure is then reconstructed from these projection images.
Because this method does not require protein crystallization, it enables the determination of structures of large biomolecules and protein complexes—such as ribosomes—that have been difficult to solve by X-ray crystallography, achieving resolutions close to atomic resolution.

To model the molecular structures of protein complexes from three-dimensional density maps obtained by single-particle analysis, it is effective to dock or fit protein structures determined by X-ray crystallography or nuclear magnetic resonance (NMR) spectroscopy into the cryo-EM density maps.
In this context, molecular dynamics (MD)–based approaches are widely used. These methods theoretically evaluate interatomic interactions and deform the molecular structure while applying biasing forces to achieve agreement with the cryo-EM density, thereby searching for an optimal structure—a procedure known as flexible fitting (Fig. 1). By explicitly accounting for conformational changes of proteins, flexible fitting yields more realistic molecular structures than rigid-body docking methods, in which proteins are treated as rigid objects. However, when applied to large biomolecular complexes, flexible fitting becomes computationally demanding, as both the evaluation of interatomic interactions and the estimation of the agreement with cryo-EM density maps require substantial computational cost. Consequently, the development of highly efficient computational algorithms has been strongly demanded.

To achieve high-speed computations using computers, parallel computing employing multiple CPUs and GPUs is highly effective. By appropriately assigning computational tasks to these hardware resources and balancing their workloads, it is possible to fully exploit the performance of modern computing systems. Accordingly, we have developed two efficient parallel algorithms for the flexible fitting method: the kd-tree–based spatial decomposition method and the local shared-space decomposition method.

In the kd-tree-based spatial decomposition method, the protein molecule is evenly partitioned based on a kd-tree algorithm when evaluating the agreement between the electron microscopy density and the molecular structure. Each CPU computes the local agreement independently, thereby achieving balanced workload distribution across CPUs (Fig. 2(a)).

In the local shared-space decomposition method, the simulation space is first evenly partitioned, after which CPUs with high and low workloads are paired to cooperatively compute the local agreement, thereby achieving balanced load distribution (Fig. 2(b)). The evaluation of the agreement is performed on CPUs using a hybrid parallelization scheme that combines distributed-memory and shared-memory parallel computing, while the calculation of interatomic interactions is accelerated using GPUs. The proposed parallel algorithms were implemented in the molecular dynamics simulation program [GENESIS](https://mdgenesis.org/), and their computational performance was evaluated for various biomolecular systems. Both the kd-tree–based spatial decomposition method and the local shared-space decomposition method demonstrated high efficiency for large biomolecular systems. In addition, high-performance computation was achieved not only for all-atom models but also for systems using approximate models such as coarse-grained representations, as well as for smaller proteins (Fig. 3).

Many proteins present in cells form transient complexes with other proteins, nucleic acids, or lipid molecules when they exert their functions, such as enzymatic reactions. In recent years, there has been growing momentum toward determining the three-dimensional structures of such protein complexes using cryo-electron microscopy (cryo-EM). To elucidate detailed structures of these complexes, it is essential to employ integrative structural modeling, which combines cryo-EM data with multiple experimental datasets, including X-ray crystallography and NMR spectroscopy. In the future, further improvements in integrative structural modeling algorithms—by incorporating techniques from information science, such as Bayesian inference—are expected to contribute significantly to the continued advancement of structural biology.

{{< figure
src="/images/research/proj_1-7-1.jpg" alt=""
caption="Figure 1. Schematic overview of the flexible fitting method.<br>Protein structures determined by X-ray crystallography or nuclear magnetic resonance (NMR) spectroscopy are fitted into a cryo-electron microscopy density map.During this process, a biasing potential is added to the energy function (molecular force field) used in molecular dynamics simulations to drive the protein structure toward the density map, and atomic motions are propagated according to Newton’s equation of motion, F = ma."
>}}

{{< figure
src="/images/research/proj_1-7-2.jpg"
alt=""
caption="Figure 2. Schematic illustration of the developed parallel algorithms.<br>(a) Parallel computation using the kd-tree–based spatial decomposition method with eight CPUs. The molecular structure is evenly partitioned by recursively splitting at the molecular midpoint, and each subdivided region is assigned to a CPU (R0–R7) for computation.<br>(b) Parallel computation using the local shared-space decomposition method with eight CPUs. After evenly partitioning the space, CPUs responsible for regions containing many atoms are paired with those handling regions containing fewer atoms (black double arrows), and each pair cooperatively evaluates the agreement with the cryo-EM density. In the lower panel, the sharing of computational regions between R3 and R5 is schematically illustrated."
>}}

{{< figure src="/images/research/proj_1-7-2.jpg" alt="" 
caption="Figure 3. Benchmark results of the developed parallel algorithms on a cluster computing system.<br>(a) Coarse-grained models and (b) all-atom models were used to evaluate computational performance for small-scale (Ca<sup>2+</sup>-ATPase), medium-scale (AMPA receptor), and large-scale (ribosome) biomolecular systems. For both the kd-tree–based spatial decomposition method and the local shared-space decomposition method, computational efficiency increased with the number of CPUs. In addition, the local shared-space decomposition method exhibited further performance improvement through the use of GPUs." >}}

### References:

* Takaharu Mori, Marta Kulik, Osamu Miyashita, Jaewoon Jung, Florence Tama, Yuji Sugita, Acceleration of cryo-EM flexible fitting for large biomolecular systems by efficient space partitioning", Structure, 27, 161-174 (2019) <a href="https://www.cell.com/structure/fulltext/S0969-2126(18)30330-7?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0969212618303307%3Fshowall%3Dtrue" target="_blank">10.1016/j.str.2018.09.004</a>