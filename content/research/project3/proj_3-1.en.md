---
title: 'Data Assimilation of Single-Molecule Measurements'
date: 2025-10-07T12:04:37+09:00
order: 1
draft: false
description: ''
keywords: []
---

## Data Assimilation of Single-Molecule MeasurementsDData Assimilation of Single-Molecule Measurements

Biomolecules such as proteins do not stay in a single fixed structure inside cells. Instead, they fluctuate dynamically and sometimes undergo large structural changes. Recent studies have shown that these structural dynamics are closely related to important biological functions such as enzymatic reactions, molecular transport, and signal transduction. For example, proteins called transporters change their shape to move and transport small molecules such as drugs. Therefore, it is important to develop methods that can observe the structural dynamics of biomolecules with high resolution in order to understand their functions.

Molecular dynamics (MD) simulation is a powerful method for studying molecular functions, as it provides atomic-level resolution. However, the parameters used in MD models are not always perfectly accurate, and this can affect the simulated dynamics. On the other hand, experimental techniques for observing biomolecules at the single-molecule level have recently advanced. One example is single-molecule FRET, which measures the distance fluctuations between two fluorescent dyes (donor and acceptor) attached to a molecule as time-series data. This method allows direct observation of structural dynamics, but it has a limitation: molecular structures must be inferred only from distance information.

For this reason, there has been growing interest worldwide in combining low-resolution experimental data with atomic-level simulations in a complementary way. However, there has been a major challenge: a large gap in timescales. Single-molecule FRET measurements typically observe dynamics on the millisecond timescale, while MD simulations usually cover microseconds. This difference has made it difficult to integrate the two approaches.

To address this problem, we introduced a statistical model called the Markov State Model (MSM), which is widely used to describe biomolecular structural dynamics. In MSM, biomolecules are assumed to transition probabilistically between representative structures, similar to rolling a dice. This simplification allows us to estimate transition probabilities from short MD simulations and then predict long-timescale dynamics without running very long simulations.

In this study, we proposed a data assimilation scheme based on semi-supervised learning to integrate MD simulation data and single-molecule FRET data (Fig. 1).
(A) First, an MSM is constructed from MD simulation data (supervised learning). The multivariate time-series data from simulations are clustered to define representative structures (states), and transition probabilities between states are estimated.
(B) Next, the MSM is treated as a Hidden Markov Model (HMM), and its transition probabilities are refined using single-molecule FRET data with an unsupervised learning algorithm.
With this approach, structural information is taken from simulations, while dynamic information is guided by experimental data.


We then applied this method to the folding dynamics of a small protein (less than 100 amino acid residues), the Formin-binding protein WW domain. As a result, we identified intermediate structures and folding pathways during the folding process (Fig. 2).
To validate the identified intermediate structures, we compared them with mutation experiments. In these experiments, specific amino acid residues are artificially mutated, and changes in folding speed are measured. From this, important residues in intermediate states can be identified. The results showed that the intermediate structures obtained by our method are consistent with the experimental data.

The method developed in this study is general and can be applied to various types of experimental data. By integrating multiple datasets, it is expected to become a platform for modeling biomolecular structural dynamics. Furthermore, this approach is expected to contribute to a deeper understanding of the molecular mechanisms underlying biomolecular functions.

{{< figure src="/images/research/proj_3-1-1.jpg" alt="" caption="Fig. 1: Data assimilation scheme" >}}

<p>A. Step 1: Supervised learning. Construction of an initial Markov State Model from MD simulation data. Multivariate time-series data are clustered to define representative structures (states), and transition probabilities are estimated.</p> <p>B. Step 2: Unsupervised learning. Parameter refinement using single-molecule FRET data. The initial MSM is treated as a Hidden Markov Model, and unsupervised learning is applied.</p>

{{< figure src="/images/research/proj_3-1-1.jpg" alt="" caption="Fig. 2: Folding pathways of a small protein obtained by data assimilation" >}}

<p>During folding, the protein becomes more compact from an extended unfolded state, while forming intermediate structures such as hairpin 1 (top left and top right). These intermediate (transition) states are consistent with mutation experiment results.</p>

### Original Article：

Yasuhiro Matsunaga, and Yuji Sugita, "Linking time-series of single-molecule experiments with molecular dynamics simulations by machine learning", eLife, 10.7554/eLife.32668




