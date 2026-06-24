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

We have implemented the QM/MM method in the molecular dynamics simulation package [GENESIS](https://mdgenesis.org/) and perform QM/MM calculations by interfacing GENESIS with external QM programs, including Gaussian, Q-Chem, DFTB+, TeraChem, and QSimulate (Fig. 1B)<sup>[1](#ref1),[2](#ref2)</sup>.
By complementing the limitations of MM with QM calculations, we are developing a QM/MM molecular dynamics (QM/MM-MD) method that enables sufficient structural sampling while maintaining accurate electronic structure descriptions.

In addition to methodological and software development, we apply the QM/MM-MD method to investigate a variety of chemical reactions in biological systems.
Examples include the oxygen reduction reaction, which serves as a major energy source for biological activity, as well as protein phosphorylation and dephosphorylation reactions that play crucial roles in intracellular signaling.
Enzymes catalyze these reactions, and understanding their molecular mechanisms is directly linked to elucidating fundamental biological processes and to their practical applications.

We also apply the developed QM/MM-MD method to studies of tryptophan synthase (TSase).
TSase is not only a promising target for the development of novel drugs against multidrug-resistant Mycobacterium tuberculosis, but also an important enzyme for the industrial production of L-tryptophan.
Its catalytic mechanism is highly complex, involving a tight coupling between large-scale conformational changes of the enzyme and multistep chemical reactions (Fig. 2), and the complete picture has not yet been fully elucidated.
By combining classical simulation approaches with the QM/MM method, we investigate this intricate mechanism in detail, step by step.<sup>[3](#ref3),[4](#ref4),[5](#ref5)</sup>

{{< figure src="/images/research/proj_1-8-1.jpg" alt="" caption="Figure 1. (A) Schematic illustration of the QM/MM method. (B) Basic workflow of the QM/MM-MD method combining molecular dynamics (MD) and QM programs.">}}

{{< figure src="/images/research/proj_1-8-2.jpg" alt="" caption="Figure 2. Proposed reaction mechanism of L-tryptophan synthesis in tryptophan synthase. <br>It is adapted from the reference [5], licensed under CC-BY-NC 4.0.">}}

### References:

<ol>
  <li id="ref1">Yagi, K.; Sugita, Y. Anharmonic Vibrational Calculations Based on Group-Localized Coordinates: Applications to Internal Water Molecules in Bacteriorhodopsin. <i>J. Chem. Theory Comput.</i> 2021, 17 (8), 5007–5020. DOI:<a href="https://doi.org/10.1021/acs.jctc.1c00060" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jctc.1c00060</a></li>
  <li id="ref2">Yagi, K.; Ito, S.; Sugita, Y. Exploring the minimum-energy pathways and free-energy profiles of enzymatic reactions with QM/MM calculations. <i>J. Phys. Chem. B</i> 2021, 125 (18), 4701–4713. DOI:<a href="https://doi.org/10.1021/acs.jpcb.1c01862" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jpcb.1c01862</a></li>
  <li id="ref3">Ito, S.; Yagi, K.; Sugita, Y. Computational Analysis on the Allostery of Tryptophan Synthase: Relationship between α/β-Ligand Binding and Distal Domain Closure. <i>J. Phys. Chem. B</i> 2022, 126 (18), 3300–3308. DOI:<a href="https://doi.org/10.1021/acs.jpcb.2c01556" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jpcb.2c01556</a></li>
  <li id="ref4">Ito, S.; Yagi, K.; Sugita, Y. Allosteric regulation of β-reaction stage I in tryptophan synthase upon the α-ligand binding. <i>J. Chem. Phys.</i> 2023, 158 (11), 115101. DOI:<a href="https://doi.org/10.1063/5.0134117" target="_blank" rel="noopener noreferrer">https://doi.org/10.1063/5.0134117</a></li>
  <li id="ref5">Ito, S.; Kobayashi, C.; Yagi, K.; Sugita, Y. Toward understanding whole enzymatic reaction cycles using multi-scale molecular simulations. <i>Curr. Opin. Struct. Biol.</i> 2025, 95, 103153. DOI:<a href="https://doi.org/10.1016/j.sbi.2025.103153" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.sbi.2025.103153</a></li>
</ol>

