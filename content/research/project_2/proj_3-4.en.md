---
title: 'Development of a backmapping method using diffusion models'
date: 2025-10-07T12:04:37+09:00
order: 4
draft: false
description: ''
keywords: []
---

## Development of a backmapping method using diffusion models

Coarse-grained (CG) models are widely used in molecular dynamics (MD) simulations to explore large systems and long timescales that are inaccessible to all-atom (AA) simulations. However, the reduced resolution of CG models poses a major limitation: many structural analyses require atomistic detail. Reconstructing AA structures from CG representations, also known as backmapping, is therefore a key step in multiscale simulation workflows. Traditional backmapping methods rely on geometric rules or fragment libraries, which often fail when applied to large, heterogeneous systems.

To address this challenge, we developed CGBack<sup>*</sup>, a backmapping framework based on denoising diffusion probabilistic models (DDPMs) and equivariant graph neural networks (GNNs). Unlike rule-based approaches, CGBack treats backmapping as a generative problem: given a CG input, the model samples multiple physically plausible AA structures by iteratively denoising random initial coordinates. A refinement pipeline then corrects steric clashes, ring penetrations, and incorrect chirality centers, producing chemically valid AA structures.

CGBack has demonstrated scalability from single proteins to large biomolecular condensates and multichain assemblies, with runtimes that scale linearly with system size. This makes it suitable for high-performance computing environments where massive systems, such as protein complexes or dense phase-separated condensates, must be reconstructed efficiently. Together, these developments propose diffusion-based backmapping as a powerful and scalable approach for bridging the resolution gap in molecular simulations.

{{< figure src="/images/research/proj_3-4.jpg" alt="XXX" caption="* D. Ugarte La Torre, Y. Sugita. J. Chem. Mol. Inf., 2025. DOI: 10.1021/acs.jcim.5c01281" >}}