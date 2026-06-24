---
title: 'Improvement of Molecular Force Fields'
date: 2025-10-07T12:04:37+09:00
order: 6
draft: false
description: ''
keywords: []
---

## Improvement of Molecular Force Fields

### The Challenge: The "Sticky Protein" Problem

Molecular Dynamics (MD) simulations are powerful tools for understanding biological machinery. However, even the most widely used force fields face a critical limitation: accuracy in non-bonded interactions.

Currently, standard force fields rely on generic combination rules that often oversimplify how molecules interact. This leads to two major issues:

- Overprediction of Protein-Protein Interactions: Virtual proteins tend to stick together more than they do in nature.

- Collapse of Disordered Regions: Intrinsically Disordered Proteins and Regions (IDPs/IDRs), which should remain flexible and expanded, are frequently simulated as overly collapsed, globular structures.

This limitation is particularly problematic when simulating cellular crowding. To truly understand how biology works inside a dense cell, we need models that respect the delicate balance of forces between proteins and their solvent.

### Our Approach: Precision Tuning with NBFIX

To bridge the gap between simulation and experimental reality, our team is implementing the NBFIX (Non-Bonded FIX) correction strategy pioneered by Best et al. (2014).<sup>1</sup>

Instead of relying on global, generic rules, NBFIX allows us to "surgically" adjust specific pairwise interaction parameters. Our methodology focuses on recalibrating protein-water interactions. By selectively increasing the affinity between protein atoms and water molecules, we prevent proteins from adhering to one another excessively.<sup>2,3</sup>  In addition to adjusting protein–water interactions, we have also improved force field parameters for essential ligands like adenosine triphosphate (ATP).<sup>4</sup>

### Why This Matters

Our approach offers a robust solution without compromising the integrity of the simulation:

- Restored Balance: We correct the artificial "stickiness" of proteins, allowing IDPs to adopt realistic, expanded conformations that match Small-Angle X-ray Scattering (SAXS) data.

- Targeted Correction: Unlike major force field overhauls, our method modifies only specific interaction terms.

- Preserved Thermodynamics: Crucially, this method leaves the overall thermodynamics of the force field unchanged. We improve the solvation behavior while preserving the force field's proven accuracy for folded structures and other properties.

### The Impact

By refining these fundamental interactions, we are paving the way for the next generation of MD simulations. Our work ensures that simulations of crowded cellular environments are not just visually complex, but physically and biologically accurate.

### References:

<ol>
<li>Best, R. B.; Zheng, W.; Mittal, J. Balanced Protein–Water Interactions Improve Properties of Disordered Proteins and Non-Specific Protein Association. J. Chem. Theory Comput. 2014, 10 (11), 5113-5124. DOI:<a href="https://doi.org/10.1021/ct500569b" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ct500569b</a></li>
<li>Nawrocki, G.; Wang, P.-H.; Yu, I.; Sugita, Y.; Feig, M. Slow-Down in Diffusion in Crowded Protein Solutions Correlates with Transient Cluster Formation. J. Phys. Chem. B 2017, 121 (49), 11072-11084. DOI:<a href="https://doi.org/10.1021/acs.jpcb.7b08785" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/acs.jpcb.7b08785</a></li>
<li>Matsubara, D.; Kasahara, K.; Dokainish, H. M.; Oshima, H.; Sugita, Y. Modified Protein-Water Interactions in CHARMM36m for Thermodynamics and Kinetics of Proteins in Dilute and Crowded Solutions. Molecules 2022, 27 (17), 5726. DOI:<a href="https://doi.org/10.3390/molecules27175726" target="_blank" rel="noopener noreferrer">https://doi.org/10.3390/molecules27175726</a></li>
<li>Komuro, Y.; Re, S.; Kobayashi, C.; Muneyuki, E.; Sugita, Y. CHARMM Force-Fields with Modified Polyphosphate Parameters Allow Stable Simulation of the ATP-Bound Structure of Ca2+-ATPase. J. Chem. Theory Comput. 2014, 10 (9), 4133-4142. DOI:<a href="https://doi.org/10.1021/ct5004143" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ct5004143</a></li>
</ol>
