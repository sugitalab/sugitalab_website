---
title: 'Structural Dynamics and Function of the Calcium Ion Pump'
date: 2025-10-07T12:04:37+09:00
order: 2
draft: false
description: ''
keywords: ''
pageName: ''
pageType: ''
categories: ['']
scriptfiles: ['']
---

## Structural Dynamics and Function of the Calcium Ion Pump

ATPases are a family of enzymes that drive diverse biological processes by utilizing the free energy from ATP hydrolysis. P-type ATPases reside in cellular membranes and use energy to transport substances against concentration gradients. Sarcoplasmic/endoplasmic reticulum Ca2+-ATPase (SERCA) is a representative P-type
ATPase, located in the sarcoplasmic reticulum membrane, and it transports Ca²⁺ into the lumen against a concentration difference of approximately 104-fold. SERCA has three cytoplasmic domains (A, N, and P) and ~10 transmembrane helices. The nucleotide (ATP/ADP) binding site is located at the interface of the N and P domains, while the Ca²⁺ binding site resides in the transmembrane helices. Since the first crystal structure reported in 2000 1, numerous structures have been determined under various conditions, highlighting the importance of large-scale conformational changes during ion transport. However, it has been difficult to capture these changes at atomic resolution. In particular, the transition from the E1P to the E2P state, during which Ca²⁺ is released, has long been reported to involve intermediates 2, but their structures remained unresolved.

In this study4, we investigated this transition by performing molecular dynamics (MD) simulations combined with the mean-force string method3 to explore the reaction pathway connecting the E1P and E2P states. This approach places multiple replicas along an initial path and optimizes the free-energy surface to identify the most probable transition route. Leveraging supercomputing resources, we were able to analyze the conformational dynamics of a relatively large membrane protein.

Our simulations revealed that ADP dissociation disrupts a salt bridge between the A and N domains, triggering conformational changes. Subsequent rotation of the A domain and tilting of the P domain pull up a cytoplasmic loop, which propagates as a rearrangement of the transmembrane helices, ultimately opening the luminal gate of the Ca²⁺ binding site.

Because P-type ATPases share a common architecture despite transporting different substrates, the molecular mechanism elucidated here for SERCA is likely applicable to other members of this family. These insights advance our understanding of fundamental biological processes while also demonstrating potential for drug discovery, underscoring the importance of continued progress in computational science.

{{< figure src="/images/research/proj_4-2-1.jpg" alt="" caption="Fig. 1: Ca²+-ATPase (SERCA)" >}}

{{< figure src="/images/research/proj_4-2-2.jpg" alt="" caption="Fig2: Schematic Diagram of the Reaction Pathway Calculation of SERCA" >}}

{{< figure src="/images/research/proj_4-2-3.jpg" alt="" caption="Fig3: Conformational changes of from E1P to E2P state." >}}

## References:

<ol>
<li>Toyoshima, C.; Nakasako, M.; Nomura, H.; Ogawa, H. Crystal structure of the calcium pump of sarcoplasmic reticulum at 2.6 Å resolution. Nature 2000, 405 (6787), 647-655. DOI: 10.1038/35015017. </li>
<li>>Danko, S.; Daiho, T.; Yamasaki, K.; Liu, X.; Suzuki, H. Formation of the Stable Structural Analog of ADP-sensitive Phosphoenzyme of Ca2+-ATPase with Occluded Ca2+ by Beryllium Fluoride: STRUCTURAL CHANGES DURING PHOSPHORYLATION AND ISOMERIZATION*. Journal of Biological Chemistry 2009, 284 (34), 22722-22735. DOI:<a href="https://doi.org/10.1074/jbc.M109.029702" target="_blank" rel="noopener noreferrer">https://doi.org/10.1074/jbc.M109.029702</a>.</li>
<li>Maragliano, L.; Fischer, A.; Vanden-Eijnden, E.; Ciccotti, G. String method in collective variables: Minimum free energy paths and isocommittor surfaces. The Journal of Chemical Physics 2006, 125 (2). DOI: 10.1063/1.2212942 (acccessed 9/25/2025).</li>
<li>Kobayashi, C.; Matsunaga, Y.; Jung, J.; Sugita, Y. Structural and energetic analysis of metastable intermediate states in the E1P&#x2013;E2P transition of Ca2+-ATPase. Proceedings of the National Academy of Sciences 2021, 118 (40), e2105507118. DOI: doi:10.1073/pnas.2105507118.</li>
</ol>