---
title: 'Molecular Mechanisms Regulating Protein Condensation'
date: 2025-10-07T12:04:37+09:00
order: 1
draft: false
description: ''
keywords: []
---

## Functions, Structures, and Dynamics of Proteins and Nucleic Acids

“Liquid–liquid phase separation” (LLPS) is a common physical phenomenon where a liquid divides into two phases: a dilute phase and a dense phase. Recently, it has become clear that LLPS driven by biomolecules such as proteins and RNA inside cells plays crucial roles in many biological processes. It has also been suggested that one factor contributing to neurodegenerative diseases like Alzheimer’s disease, Parkinson’s disease, and amyotrophic lateral sclerosis (ALS) is the condensation of specific proteins. This protein condensation is known to occur mainly in the dense phase formed by LLPS.

Many cells have mechanisms to suppress or regulate protein aggregation and liquid–liquid phase separation. In 2020, a group of proteins called “Hero proteins” was identified as proteins that inhibit protein phase separation and aggregation. However, the detailed molecular mechanisms by which Hero proteins control condensation remained unclear. In this study, we used the molecular dynamics software GENESIS to examine how Hero11, one of the Hero proteins, suppresses the condensation of TDP-43, a protein linked to the neurodegenerative disease ALS.

To perform molecular dynamics simulations, the three-dimensional structure of a protein must be provided as an initial model. However, the flexible structure of Hero11 has not been experimentally determined. Therefore, we used structures predicted by AlphaFold as initial models and conducted all-atom molecular dynamics simulations. The results indicated that although Hero11 does not have a single stable tertiary structure, it is also not a completely random coil. Based on these findings, we built two different coarse-grained molecular models: one based on structures containing α-helical elements predicted by AlphaFold2, and another based on structures lacking α-helical elements. In these coarse-grained models, each amino acid residue is approximated by a single particle, significantly reducing the number of particles compared to all-atom models and allowing much faster analysis of the dynamics and functions of Hero11. For TDP-43, previous studies have provided structural data, and a coarse-grained model was created assuming partial α-helical structures. Using these coarse-grained models with 100 molecules each of Hero11 and TDP-43, we ran multiple simulations at different temperatures and analyzed the details of the condensation mechanisms in systems containing TDP-43 alone, Hero11 alone, and their mixtures.

Simulations of a system with 100 molecules of TDP-43 alone showed condensation near room temperature (295 K, about 22 °C) (Fig. 1, top). This aligns well with experimental findings. In contrast, a system with 100 molecules of Hero11 alone did not undergo condensation at the same temperature. Interestingly, a mutant of Hero11 where all positively charged amino acids (lysine and arginine) were replaced by glycine—the simplest uncharged amino acid (the KR-less mutant)—did undergo condensation at 295 K. These findings strongly indicate an important role of charged amino acids in Hero11. We then simulated mixed systems with 100 molecules each of TDP-43 and Hero11. The results showed that adding Hero11 suppresses TDP-43 condensation (Fig. 1, middle), while the KR-less mutant shows a much weaker suppression effect (Fig. 1, bottom).

To better understand how Hero11 suppresses and regulates TDP-43 condensation, we examined the distributions of TDP-43 and Hero11 in the dense and dilute phases formed by LLPS in the simulations. Compared to the TDP-43-only system, the mixed system of TDP-43 and Hero11 showed a lower particle density in the dense phase, leading to faster diffusion of TDP-43. These effects are likely caused by electrostatic repulsion from interactions among the positively charged amino acids in Hero11. In contrast, attractive interactions between Hero11 and TDP-43 were observed in the dilute phase, helping to stabilize TDP-43 in that phase (Fig. 2).

We further examined how the presence or absence of secondary structures (α-helices) in Hero11 influences its ability to inhibit condensation. When Hero11 was presumed to lack α-helical structures, it was observed to localize more frequently on the surface of TDP-43 condensates (Fig. 3). The presence of Hero11 on the surface of small TDP-43 condensates may create electrostatic repulsion between condensates, preventing their further growth into larger assemblies. Comparing these findings with experimental data showing Hero11's suppression of condensation suggests that Hero11 may lack α-helical structures, although additional experimental and computational analyses are needed to confirm this.

In this study, we demonstrated that electrostatic repulsion between Hero proteins is a key mechanism for preventing protein condensation. Besides Hero proteins, other proteins and RNA molecules are also known to inhibit or regulate protein condensation. Many of these molecules tend to carry positive or negative charges, suggesting that the electrostatic repulsion mechanism identified here may be a common molecular principle.

{{< figure src="/images/research/proj_5-4-1_en.png" alt="" caption="Figure 1: Results of coarse-grained molecular simulations of TDP-43 and Hero11" >}}
<p>Condensation of TDP-43 at 295 K (approximately 22 °C) (top), suppression of condensation in a mixed system of TDP-43 and Hero11 (middle), and condensation formation in a mixed system of TDP-43 and the KR-less mutant where all charged amino acids were replaced by glycine (bottom). TDP-43 is shown in green and blue, and Hero11 is shown in red.</p>

{{< figure src="/images/research/proj_5-4-2_en.png" alt="" caption="Figure 2: Schematic illustration of intermolecular interactions between Hero11 and TDP-43 and liquid–liquid phase separation" >}}
<p>Electrostatic repulsion between Hero11 molecules decreases particle density in the dense phase, while attractive interactions between Hero11 and TDP-43 stabilize their connections in the dilute phase.</p>

{{< figure src="/images/research/proj_5-4-3_en.png" alt="" caption="Figure 3: Differences in the distribution of Hero11 in TDP-43 condensates depending on the presence or absence of α-helical structure" >}}
<p>Schematic illustrations show the distributions of Hero11 and TDP-43 at 260 K (around 13 °C). The left image depicts Hero11 with an α-helical structure, while the right shows it without. Solid and dashed red lines represent the number of Hero11 molecules on the surface of condensates. The shape of the red lines indicates that Hero11 without an α-helical structure is more frequently observed on the surface of TDP-43 condensates.</p>

### References:

<p>Cheng Tan, Ai Niitsu, Yuji Sugita, Highly Charged Proteins and Their Repulsive Interactions Antagonize Biomolecular Condensation, JACS Au 3(3), 834-848 (2023) <a href="https://doi.org/10.1021/jacsau.2c00646" target="_blank">https://doi.org/10.1021/jacsau.2c00646</a></p>
