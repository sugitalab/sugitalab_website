---
title: '膜貫通ヘリックスの二量体形成機構'
date: 2025-10-07T12:04:37+09:00
order: 4
draft: false
description: ''
keywords: []
---

## Mechanism of Transmembrane Helix Dimerization
### Research Background

The amyloid precursor protein (APP), which is closely associated with the onset of Alzheimer’s disease, is a single-pass membrane protein containing one transmembrane domain. Cleavage of APP by β-secretase generates a membrane-embedded fragment known as APP-C99, which is subsequently processed by γ-secretase to produce amyloid-β (Aβ) peptides. Accumulation of Aβ peptides is considered to play a central role in the pathology of Alzheimer’s disease.

Although C99 can exist as a monomer within the membrane, it has been observed that its transmembrane helices associate to form dimers (Figure 1A). This dimerization is not merely a structural feature but has been shown to influence both the efficiency and site selectivity of γ-secretase cleavage. In particular, different relative arrangements of the APP-C99 transmembrane helices can alter the cleavage positions of γ-secretase, thereby affecting the length and abundance of the resulting Aβ peptides and potentially modulating disease-related properties.

However, how the transmembrane helices of C99 are distributed among different association states in the membrane, what kind of free-energy landscape governs their dimerization, and how these states relate to Aβ production remain poorly understood.

<div style="text-align: center;"> {{< figure src="/images/research/proj_4-4-1.jpg" alt="" caption="Figure 1: Dimerization of APP-C99 and four key reaction coordinates" class="center" >}} </div>

### Methods and Key Findings

To elucidate the molecular mechanism of APP-C99 transmembrane helix dimerization, we performed molecular dynamics simulations combined with free-energy analyses. The association behavior of C99 transmembrane helices in a membrane environment was investigated by evaluating free-energy landscapes as functions of inter-helical distance and relative configurations.

For a comprehensive analysis of APP-C99 dimerization, we employed a newly developed Bias-Exchange Adaptively Biased Molecular Dynamics (BE-ABMD) method. This approach enables simultaneous inclusion of all essential collective variables (CVs) involved in dimerization, such as inter-helical distance, relative rotational angle, and helix crossing angle (Figure 1B). This represents a key advantage over previous studies that relied on a limited set of CVs.

Calculations were performed using an implicit membrane model, in which membrane thickness was systematically varied to assess its effect on the stability of C99 dimers. Our results revealed that the free-energy stability of APP-C99 transmembrane helix dimers strongly depends on membrane thickness, with specific dimer conformations being selectively stabilized under different membrane conditions. These findings indicate that membrane thickness is an important factor regulating the association states of APP-C99 (Figure 2A).

Furthermore, we found that stable dimer formation is governed not only by hydrophobic interactions between residues but also by tight packing of small side-chain residues and shape complementarity of the helix surfaces. These interactions act cooperatively to stabilize helix–helix association in the membrane, giving rise to multiple metastable dimer states (Figure 2B). Through a free-energy-based characterization of APP-C99 dimerization, this study provides a molecular foundation for understanding the mechanisms underlying Aβ production.

<div style="text-align: center;"> {{< figure src="/images/research/proj_4-4-2.jpg" alt="" caption="Figure 2: Free-energy landscapes of APP-C99 and three stable dimer conformations" class="center" >}} </div>

### Future Perspectives

In this study, the use of an implicit membrane model allowed us to characterize the fundamental free-energy features of APP-C99 transmembrane helix dimerization. In future work, we plan to extend our analyses to explicit membrane models, in which lipid molecules are treated explicitly, to investigate C99 association behavior in more realistic membrane environments.

Explicit membrane simulations will enable us to evaluate effects that cannot be captured by implicit models, including direct interactions with lipid molecules, local membrane deformations, and lipid reorientation. In particular, elucidating how lipid composition and the presence of cholesterol influence the stability and structural distribution of APP-C99 dimers will be an important future challenge.

Moreover, by using the stable dimer conformations identified in this study as a structural basis, we aim to explore the relationship between APP-C99 dimerization and its interaction with γ-secretase, ultimately providing a more realistic understanding of the molecular mechanisms governing Aβ production. Through these efforts, we expect to contribute to a deeper molecular-level understanding of Alzheimer’s disease.

### Reference
<ol>
  <li>Ito, S.; Sugita, Y. Free-energy landscapes of transmembrane homodimers by bias-exchange adaptively biased molecular dynamics. Biophys. Chem. 2024, 307, 107190. DOI: <a href="https://doi.org/10.1016/j.bpc.2024.107190" target="_blank">https://doi.org/10.1016/j.bpc.2024.107190.</a></li>
<ol>
