---
title: '温度・圧力の正確な計算方法'
date: 2025-08-26T10:46:14+09:00
order: 2
draft: false
description: ''
keywords: []
---

## 温度・圧力の正確な計算方法


古典力学と分子動力学（MD）シミュレーションの両方において、温度や圧力といった熱力学的特性は、系の運動エネルギーから導き出されます。しかし、MDにおいては、大きな時間刻み幅を使用すると、これらの計算に大きな誤差が生じるという重要な課題があります。無限小の時間刻み幅を仮定する古典力学とは異なり、MDシミュレーションでは有限の離散的な時間刻み幅を使用します。これにより、粒子の速度から計算される運動エネルギーが、実際の運動エネルギーからずれてしまい、不正確な温度と圧力の推定につながることがあります。

この課題を解決するため、GENESISのような高度な分子動力学ソフトウェアは、より洗練されたアプローチを採用しています。古典的な温度の定義は、運動量と座標の時間微分の積から導き出されますが、大きな時間刻み幅を持つMDシミュレーションにこの式をそのまま適用すると、不正確な結果になります。GENESISは、テイラー展開を用いて分子動力学の更新ステップを理想的な古典的運動と比較することにより、座標の時間微分をより正確に表現します。これにより、個別に温度を過小評価または過大評価する2種類の運動エネルギーを組み合わせることで、より精度の高い温度の計算が可能になります。

同様に、GENESISは、ビリアルと運動エネルギーを組み合わせるビリアル定理に基づいて圧力を正確に評価します。温度評価と同様に、座標と運動量のテイラー展開をMD積分と比較するという厳密な方法を適用することで、より正確な圧力値を得ることができます。

この洗練された温度と圧力の計算方法により、GENESISは、2fsから5fsの時間刻み幅を持つシミュレーションで、同様の構造的および動的特性を維持し、計算効率の高い大きな時間刻み幅でも信頼性の高い結果を提供します。これは、時間刻み幅を増やすと精度が失われる従来の方法からの大幅な改善です。

{{< figure src="/images/research/proj_1-2.jpg" alt="Area per lipid distribution" caption="Fig. 1. Aread per lipid distribution with temperature evaluation using conventional (left) and GENESIS (right)." >}}

### References:

1. Jaewoon Jung, Chigusa Kobayashi, and Yuji Sugita, J. Chem. Phys. 148, 164109 (2018)
1. Jaewoon Jung, Chigusa Kobayashi, and Yuji Sugita, J. Chem. Theory. Comput. 15, 84-94 2019)
1. Jaewoon Jung and Yuji Sugita, J. Chem. Phys. 153, 234115 (2020)
1. Jaewoon Jung, Kento Kasahara, Chigusa Kobayashi, Hiraku Oshima, Takaharu Mori, and Yuji Sugita,  J. Chem. Theory. Comput. 17, 5312-5321 (2021)
