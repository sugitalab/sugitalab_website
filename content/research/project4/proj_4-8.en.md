---
title: 'Prediction of Initial Enzyme–Inhibitor Encounter Complexes'
date: 2025-10-07T12:04:37+09:00
order: 8
draft: false
description: ''
keywords: []
---

## Prediction of Initial Enzyme–Inhibitor Encounter Complexes

Many cellular functions are controlled through molecular recognition, where enzymes (proteins) bind to substrate molecules. For instance, signal transduction from outside the cell to inside is accomplished when proteins in signaling pathways bind ions or small molecules and become active. A thorough understanding of how proteins recognize substrate molecules is therefore crucial for explaining cellular functions and for the rational design of effective drugs.

With advances in structural biology, high-resolution X-ray crystal structures, nuclear magnetic resonance (NMR) structures, and cryo-electron microscopy (cryo-EM) structures of proteins bound to substrate molecules have become more accessible. These structures have uncovered close links between substrate recognition and detailed binding modes. However, conventional structural methods only offer static snapshots and generally cannot directly observe the binding process itself. Consequently, how substrate molecules approach proteins, which pathways they follow, and what intermediate states they adopt during binding remain poorly understood. In modern drug design, not only binding affinity but also kinetic factors—such as residence time at the binding site—are increasingly important, making an atomic-level understanding of binding processes a urgent challenge.

Molecular dynamics (MD) simulations are a powerful tool for exploring biomolecular motions at atomic detail and have been widely used to study proteins, nucleic acids, and lipids. However, protein–substrate binding typically occurs on timescales of milliseconds or longer, while conventional MD simulations are usually limited to microseconds. This significant gap makes it difficult to directly examine binding processes using standard MD methods.

By using MD-dedicated supercomputers, simulations spanning tens of microseconds can be conducted, enabling several binding events to be sampled for relatively fast-binding substrates. Meanwhile, alternative strategies have been developed, including methods that estimate long-timescale dynamics from numerous short trajectories, as well as approaches that apply biasing potentials to speed up binding and unbinding events.

In this work, we examined how ATP-competitive inhibitors bind to Src kinase, a protein tyrosine kinase. Using the “K” supercomputer along with replica-exchange molecular dynamics (REMD), an effective conformational sampling technique, we aimed to directly observe inhibitor binding and unbinding events multiple times. In one form of REMD, called REST (Replica Exchange with Solute Tempering), multiple replicas with different effective temperatures assigned to selected solute molecules are simulated. This approach allows broad exploration of conformational space at high temperatures and efficient sampling of stable structures at low temperatures. In the gREST method used in GENESIS, the solute definition includes both the inhibitor molecule and residues in the protein binding site, enabling selective temperature scaling of these regions.

We further combined gREST with Replica Exchange Umbrella Sampling (REUS), using the protein–inhibitor distance as a reaction coordinate, to establish a two-dimensional replica-exchange MD approach (gREST/REUS). Applying this method to the Src kinase–inhibitor system, we achieved efficient sampling of both binding and unbinding processes. By effectively incorporating structural fluctuations of the binding site, the system was able to overcome activation barriers associated with binding and dissociation. As a result, we successfully sampled approximately 100 binding and unbinding events within a total simulation time of 43 microseconds. To our knowledge, this is the first study to simultaneously sample binding and unbinding processes multiple times in a statistically robust manner. The simulations accurately reproduced the crystal binding structure, including the positions of water molecules, and revealed metastable binding states and multiple binding pathways that are not observable in crystal structures (Fig. 1).

Analysis of the simulation data showed that, besides the crystal binding pose (pose A), the inhibitor can bind in three other orientations (poses B, C, and D). Free-energy landscapes from the simulations indicate that these binding poses are separated by high energy barriers, but the relevant encounter complexes are energetically connected and can interconvert (Fig. 2, top). This suggests that the pathways to each binding pose are mostly independent and only meet at early encounter stages. In other words, different binding pathways are chosen based on the structure and interactions of the encounter complex formed at the start of binding (Fig. 2, bottom). Structural analysis of these encounter complexes also revealed that the glycine-rich loop—an important regulatory element of kinase function—plays a key role in capturing the inhibitor and influencing the pathway selection.

These findings show that inhibitor binding can be influenced by targeting metastable binding poses and interactions within encounter complexes that are not visible to experimental structural methods. Additionally, our results emphasize the potential of pathway-based drug design as a complement to traditional methods that rely only on bound-state structures. By further combining this approach with techniques like Brownian dynamics, it should be possible to accurately predict kinetic parameters, including association and dissociation rate constants. Enhancing the selectivity of ATP-competitive inhibitors is vital for reducing side effects, and we believe our approach will open new opportunities for precise, theory-guided drug development in close collaboration with experiments. The gREST/REUS method created in this study has been implemented in GENESIS and is available for both academic and industry use.

{{< figure src="/images/research/proj_4-8-1.jpg" alt="" caption="Figure 1: 2D Replica-Exchange MD and Src Kinase–Inhibitor Binding" >}}

<p>a) Diagram of the two-dimensional replica-exchange MD (gREST/REUS) method, where replicas alternately swap the solute temperature (gREST) and the inhibitor–Src kinase distance (REUS).</p>
<p>
b) Top row: crystal structure (yellow sticks), predicted most stable binding pose, and its hydration structure. The predicted water distribution (light blue) closely matches crystallographic water positions (red spheres). Bottom row: precursor of pose A and metastable binding poses (B–D).</p>

{{< figure src="/images/research/proj_4-8-2.jpg" alt="" caption="Figure 2: Multiple Binding Pathways of Src Kinase and an Inhibitor" >}}

<p>a) Right: Binding free-energy landscapes as functions of the inhibitor–Src kinase distance and two dihedral angles (β, γ) describing inhibitor orientation. Symbols indicate representative structures from clustering analysis (bottom). Binding poses A–D are separated by high energy barriers (red regions), while the corresponding encounter complexes are energetically connected and easily interconvertible. </p>
<p>b) Binding pathways to each pose and representative structure. Upper right: interactions between the glycine-rich loop and the inhibitor in the encounter complex. </p>

### References:

<ul>
  <li>Re, Oshima, Kasahara, Kamiya, Sugita, Encounter Complexes and Hidden Poses of Kinase-Inhibitor Binding on the Free-Energy Landscape, Proceedings of the National Academy of Sciences of the United States of America 116, 18404-18409 (2019)<br>
  <a href="https://doi.org/10.1073/pnas.1904707116" target="_blank" rel="noopener noreferrer">https://doi.org/10.1073/pnas.1904707116</a></li>
</ul>
