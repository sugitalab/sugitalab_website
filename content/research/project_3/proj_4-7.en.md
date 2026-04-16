---
title: 'Atomic-Level Elucidation of the Rotary Driving Mechanism of a Biomolecular Motor'
date: 2025-10-07T12:04:37+09:00
order: 7
draft: false
description: ''
keywords: []
---

## Atomic-Level Elucidation of the Rotary Driving Mechanism of a Biomolecular Motor

—A Driving Force Comprising “Distortion” and “Push”—

### Background

F1-ATPase is a biomolecular motor that converts the chemical energy released by ATP hydrolysis into mechanical rotation. Ubiquitous in mitochondria and bacteria, it functions as part of the ATP synthase complex (FoF1-ATP synthase), participating in ATP synthesis and hydrolysis essential for life (Figure 1A).

{{< figure src="/images/research/proj_4-7-1-en.jpg" alt="" caption="Figure 1. Structures of ATP synthase and F1-ATPase, and a schematic of substep rotation" >}}

F1-ATPase comprises a central rotor (the γ subunit) surrounded by a stator made of three α and three β subunits, forming an α_3β_3 hexamer. Energy transduction occurs as ATP hydrolysis drives rotation of the γ subunit relative to the α_3β_3 stator (Figure 1B). In thermophilic F1-ATPase, this rotary motion proceeds in 120° steps, each further divided into two substeps of 80° and 40°, as shown by single-molecule measurements (Figure 1C). The pauses before each substep are termed the  “ATP-binding dwell” and the “ATP-hydrolysis dwell,” respectively. The initial 80° rotation is tightly coupled to ATP binding and is considered a key source of the driving energy for conversion.

Although single-molecule experiments and structural studies have yielded many insights into F1-ATPase, the detailed, atomistic mechanism—how rotation proceeds and which intermolecular interactions drive it—has remained unclear.

### Methods and Results

Focusing on the 80°substep associated with ATP binding and ADP release, we used MD simulations to clarify the underlying molecular mechanism. As starting and ending states, we adopted cryo-EM structures that capture rotation angles corresponding to the “ATP-binding dwell” and “ATP-hydrolysis dwell.” We then explored candidate transition pathways connecting these states using targeted MD (TMD). In this search, we postulated three pathways that permute the order of stator conformational changes associated with ATP binding and ADP release, and examined how the rotor responds in each case (Figure 2A). We found that in “Pathway 1,” where ATP-binding-induced changes precede ADP-release-induced changes, the γ subunit undergoes a counterclockwise rotation of 80°(Figure 2B). In Pathways 2 and 3, counterclockwise rotation occurred but did not reach 80.

{{< figure src="/images/research/proj_4-7-2-en.jpg" alt="" caption="Figure 2. Exploration of 80° substep pathways by targeted MD" >}}

Next, based on the pathway that achieved an 80° rotation, we applied the <b>string method</b> to determine the most natural transition route, i.e., the <b>minimum free-energy pathway (MFEP)</b>. The string method employs multiple replica structures (“images”) spanning the transition and runs MD for each in parallel to search for the most thermodynamically plausible path. We used <b>64 images</b>, incurring <b>64×</b> the computational load relative to a single MD run; this large-scale computation was enabled by GENESIS, which performs highly efficient MD on Fugaku.

The results show that the 80° rotation proceeds in <b>two stages: (1) stator distortion initiates rotation</b>, and <b>(2) the rotor is “pushed” by surrounding elements to complete the rotation</b> (Figure 3). This “<b>distortion–push mechanism</b>” subsumes previously proposed driving forces based on <b>electrostatic interactions</b> [10] and <b>steric hindrance</b>, integrating them into a unified picture of how the stator drives rotation.

{{< figure src="/images/research/proj_4-7-3-en.jpg" alt="" caption="Figure 3. Rotary driving mechanism of the 80°substep in F1-ATPase" >}}

This work reveals the overall, intrinsic rotary driving mechanism that was not accessible through single-structure analyses or externally forced rotation simulations, representing a significant advance in the mechanical understanding of biomolecular motors.

### Outlook

FoF1-ATP synthase, including F1-ATPase, is a molecular motor that governs cellular energy conversion by synthesizing and degrading ATP. Its architecture and function are highly conserved across species, suggesting common design principles. The rotary driving mechanism elucidated here for F1-ATPase may therefore embody <b>universal principles</b> shared by other ATP-driven molecular motors.

A deeper understanding of nanoscale energy-conversion mechanisms such as those of F1-ATPase is important for basic life science and may also inform the <b>design of artificial molecular motors</b> and <b>nanotechnologies</b> that control mechanical actions at the molecular level.
