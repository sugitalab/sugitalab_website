---
title: 'Development of ML/MM Methods'
date: 2025-10-07T12:04:37+09:00
order: 3
draft: false
description: 'We are developing new ML/MM methods for advanced molecular simulations.'
keywords: ["ML/MM", "Machine Learning", "Molecular Mechanics", "QM/MM"]
---

## Development of ML/MM Methods

Accurately simulating chemical reactions within complex environments, such as in solution or inside an enzyme's active site, remains a significant challenge in computational chemistry. While quantum mechanics (QM) methods provide high accuracy for the reacting region, their computational cost is prohibitive for large systems. Conversely, classical molecular mechanics (MM) is efficient but cannot describe the electronic changes that occur during a reaction. The hybrid QM/MM method offers a compromise by treating a small, critical region with QM and the larger environment with MM. However, accurately and efficiently describing the interaction between the QM and MM regions is a major bottleneck.

To address this, we are developing novel methods that integrate machine learning (ML) with the QM/MM framework. This "ML/MM" approach aims to create highly accurate and computationally efficient potential energy functions that can faithfully reproduce the complex interactions between the QM and MM parts, including polarization and long-range electrostatic effects.

Our research has focused on two key innovations. First, we developed an equivariant multiscale model for the QM/MM potential. This model systematically incorporates high-order electrostatic terms from a Taylor expansion of the electrostatic operator, allowing it to capture complex many-body polarization effects. By combining this with a long-range Coulomb model, our method achieves high prediction accuracy and demonstrates excellent transferability across various solvent environments, a critical feature for studying reactions in different media.[1]

{{< figure src="/images/research/proj_3-3-1.jpg" alt="Figure: A schematic representation of the ML/MM model" caption="Figure: A schematic representation of the ML/MM model, which learns the complex interactions at the QM/MM boundary." >}}

Second, we introduced a continual learning strategy to improve the efficiency of training these ML/MM models. When studying a series of related chemical or enzymatic reactions, traditional methods would require training a new model from scratch for each system, which is computationally expensive. Our continual learning approach allows the model to "remember" and build upon knowledge from previously learned systems. This not only dramatically reduces the training cost and time but also enhances the stability and accuracy of simulations for new systems.[2] We have successfully applied this strategy to model S_N_2 reactions in different solvents and complex enzymatic reactions, demonstrating its power and versatility.

Through these developments, we are paving the way for more predictive and accessible simulations of chemical and biological processes. These advanced ML/MM methods are expected to accelerate the discovery of new catalysts, aid in drug design, and deepen our fundamental understanding of reaction mechanisms.

### References
[1] Y.-K. Lei, K. Yagi, and Y. Sugita, *J. Chem. Phys.* **160**, 214109 (2024). (https://doi.org/10.1063/5.0205123)

[2] Y.-K. Lei, K. Yagi, and Y. Sugita, *J. Chem. Theory Comput.* (2024). (https://doi.org/10.1021/acs.jctc.4c01393)
