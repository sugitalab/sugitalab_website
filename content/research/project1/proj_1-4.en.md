---
title: 'Coarse Grained Simulations in GENESIS'
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

## Coarse Grained Simulations in GENESIS

### Background

In molecular simulations, the models we use depend on the specific problem we want to solve. High-
resolution models that account for every single atom can provide incredibly detailed and accurate results.
However, this precision comes at a high price: it demands enormous computational resources, making these
simulations very "expensive" and slow. For many fundamental biological processes, such as the formation
of membraneless organelles, the assembly of viral capsids, or the folding of entire chromosomes, traditional
all-atom simulations are simply too slow. The timescales they can reach are often just a tiny fraction of
what happens in a real biological system. To overcome this challenge, researchers often turn to coarse-
grained (CG) models. The core idea is to lower the model's resolution: instead of simulating every atom,
we group them into larger, simplified particles. By sacrificing some of the fine-grained detail, we gain a
massive boost in computational speed, allowing us to simulate larger systems for much longer times.
Developing a good CG model is all about finding the "sweet spot" between accuracy and efficiency. Here,
we develop and integrate advanced CG models into the GENESIS software package, providing powerful
tools to study these fascinating, large-scale biological phenomena.

### Methods and Results

Residue-level CG is a common strategy in biomolecular simulation, typically representing each amino acid
with a single bead and each nucleotide with one to three beads. The parameterization of these models is
tailored to their intended application and generally follows two philosophies: a "bottom-up" approach,
where parameters are derived by matching results from higher-resolution simulations, and a "top-down"
approach, where parameters are fitted to reproduce large-scale experimental observables. Due to their
limited degrees of freedom, simple CG models often cannot spontaneously fold proteins into their native
structures; in such cases, structure-based potentials are employed to guide the biomolecule towards its
native state. Conversely, for molecules that lack a stable tertiary structure, such as intrinsically disordered
proteins (IDPs) or RNA, physics-based empirical potentials provide a flexible landscape capable of
describing the fuzzy yet complex network of their interactions.

We have implemented a suite of well-established CG models within the ATDYN and CGDYN engines of
GENESIS, providing coverage for a wide range of biomolecules including proteins, RNA, DNA, and lipids.
We also provide a user-friendly tool, GENESIS-cg-tool, to facilitate the preparation of all necessary files
for production MD runs. A primary focus of our development is the computational efficiency of these CG
models. Notably, we have developed a new MD engine, CGDYN, which is specifically designed toovercome the load imbalance problem arising from non-uniform particle distributions in heterogeneous
systems. These developments have enabled simulations on a massive scale on supercomputers such as
Fugaku, allowing us to investigate the dynamics of systems containing an order of 10⁴ proteins or thousands
of nucleosome-sized chromatin fragments.
Using our developed CG models and tools, our research focuses on the formation and regulation of
biomolecular condensates, systems that span spatial scales from hundreds of nanometers to micrometers
and on timescales from milliseconds to seconds. While it is widely understood that the formation of these
condensates is driven by multivalent contacts arising from numerous weak, attractive forces, the role of
repulsive interactions in these systems has been less explored. Using the recently discovered Hero family
of highly charged disordered proteins and their client molecules as a model system, our CG simulations
have revealed how repulsive electrostatic interactions modulate the structure and dynamics of condensates.
This mechanism plays a crucial role in preventing pathological liquid-to-solid phase transitions.

### Perspective

While CG models are inherently simplified by their low degrees of freedom, this also presents vast
opportunities for future innovation. One promising avenue is the deeper integration of experimental data to
refine model parameters, enabling CG simulations to describe target systems with even greater fidelity.
Furthermore, strengthening the link between scales through multi-scale modeling holds immense potential.
Efficient backmapping protocols, which reintroduce atomic detail to CG-sampled configurations for
subsequent all-atom simulations, allow for both the validation of CG results and the enrichment of these
findings with fine-grained insights. Finally, the synergy between CG modeling and advanced machine
learning (ML) methods is poised to revolutionize the field. ML approaches can create data-driven mapping
schemes and potential energy functions that are not constrained by human intuition or fixed functional
forms, opening a wealth of possibilities for creating next-generation CG models with unprecedented
predictive power.

### References:

<ul>
  <li>Cheng Tan, Jaewoon Jung, Chigusa Kobayashi, Diego Ugarte La Torre, Shoji Takada, and Yuji Sugita. Implementation of residue-level coarse-grained models in GENESIS for large-scale molecular dynamics simulations. PLoS Computational Biology 18, 4 (2022): e1009578.<br><a href="https://doi.org/10.1371/journal.pcbi.1009578" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pcbi.1009578</a></li>
  <li>Jaewoon Jung, Cheng Tan, and Yuji Sugita. GENESIS CGDYN: large-scale coarse-grained MD simulation with dynamic load balancing for heterogeneous biomolecular systems. Nature Communications 15, 3370 (2024).<br> 
  <a href="https://doi.org/10.1038/s41467-024-47654-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41467-024-47654-1</a></li>
  <li>Diego Ugarte, Shoji Takada, Yuji Sugita. Extension of the iSoLF implicit-solvent coarse-grained model for multicomponent lipid bilayers. J. Chem. Phys. 159, 075101, (2023).<br><a href="https://doi.org/10.1063/5.0160417" target="_blank" rel="noopener noreferrer">https://doi.org/10.1063/5.0160417</a></li>
</ul>

{{< figure src="/images/research/proj_1-4.jpg" alt="" caption="Figure 1. Available residue-level CG models in GENESIS.">}}
