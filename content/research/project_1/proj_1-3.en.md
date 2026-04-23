---
title: 'QM/MM Molecular Dynamics Method'
date: 2025-10-07T12:04:37+09:00
order: 3
draft: false
description: ''
keywords: []
---

## QM/MM Molecular Dynamics Method

The QM/MM method is a hybrid computational approach in which the active site responsible for chemical reactions is treated by quantum chemistry (QM) calculations, while the surrounding environment is described by molecular mechanics (MM) force fields (Fig. 1A). This method makes it feasible to analyze chemical reactions involving the formation and cleavage of covalent bonds between atoms, which cannot be adequately described by MM methods alone. In contrast to conventional QM calculations that are typically limited to small molecules, the QM/MM approach can be applied to large biomolecular systems such as enzymes. Using this method, it is possible to predict spectroscopic properties, explore reaction pathways, and analyze free energy landscapes along reaction coordinates with a reasonable computational cost.

We have implemented the QM/MM method in the molecular dynamics simulation package [GENESIS](https://mdgenesis.org/) and perform QM/MM calculations by interfacing GENESIS with external QM programs, including Gaussian, Q-Chem, DFTB+, TeraChem, and QSimulate (Fig. 1B).<sup>[1](#ref1),[2](#ref2)</sup>.
By complementing the limitations of MM with QM calculations, we are developing a QM/MM molecular dynamics (QM/MM-MD) method that enables sufficient structural sampling while maintaining accurate electronic structure descriptions.

In addition to methodological and software development, we apply the QM/MM-MD method to investigate a variety of chemical reactions in biological systems.
Examples include the oxygen reduction reaction, which serves as a major energy source for biological activity, as well as protein phosphorylation and dephosphorylation reactions that play crucial roles in intracellular signaling.
Enzymes catalyze these reactions, and understanding their molecular mechanisms is directly linked to elucidating fundamental biological processes and to their practical applications.

We also apply the developed QM/MM-MD method to studies of tryptophan synthase (TSase).
TSase is not only a promising target for the development of novel drugs against multidrug-resistant Mycobacterium tuberculosis, but also an important enzyme for the industrial production of L-tryptophan.
Its catalytic mechanism is highly complex, involving a tight coupling between large-scale conformational changes of the enzyme and multistep chemical reactions (Fig. 2), and the complete picture has not yet been fully elucidated.
By combining classical simulation approaches with the QM/MM method, we investigate this intricate mechanism in detail, step by step.<sup>[3](#ref3),[4](#ref4),[5](#ref5)</sup>

{{< figure src="/images/research/proj_1-3-1.jpg" alt="" caption="Figure 1. (A) Schematic illustration of the QM/MM method. (B) Basic workflow of the QM/MM-MD method combining molecular dynamics (MD) and QM programs.">}}

{{< figure src="/images/research/proj_1-3-2.jpg" alt="" caption="Figure ２. Proposed reaction mechanism of L-tryptophan synthesis in tryptophan synthase. <br>It is adapted from the reference [5], licensed under CC-BY-NC 4.0.">}}

### References:
<a id="ref1"></a>
1. K. Yagi, and Y. Sugita, “Anharmonic Vibrational Calculations Based on Group-Localized Coordinates: Applications to Internal Water Molecules in Bacteriorhodopsin” J. Chem. Theory Comput. 17 (2021) 5007-5020.
<a id="ref2"></a>
1. K. Yagi, S. Ito, and Y. Sugita, “Exploring the minimum-energy pathways and free-energy profiles of enzymatic reactions with QM/MM calculations” J. Phys. Chem. B 125 (2021) 4701-4713.
<a id="ref3"></a>
1. S. Ito, K. Yagi, and Y. Sugita, “Computational Analysis on the Allostery of Tryptophan Synthase: Relationship between α/β-Ligand Binding and Distal Domain Closure” J. Phys. Chem. B 126 (2022) 3300-3308.
<a id="ref4"></a>
1. S. Ito, K. Yagi, and Y. Sugita, “ Allosteric regulation of β-reaction stage I in tryptophan synthase upon the α-ligand binding” J. Chem. Phys. 158 (2023) 115101.
<a id="ref5"></a>
1. S. Ito, C. Kobayashi, K. Yagi, and Y. Sugita, “Toward understanding whole enzymatic reaction cycles using multi-scale molecular simulations”, Curr. Opin. Struct. Biol. 95 (2025) 103153.
