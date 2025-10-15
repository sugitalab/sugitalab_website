---
title: 'QM/MM分子動力学法'
date: 2025-10-07T12:04:37+09:00
order: 3
draft: false
description: ''
keywords: []
---

## QM/MM分子動力学法

QM/MM 法は、化学反応の中心となる活性部位を高精度・高コストな量子化学（QM）計算で扱い、その周囲を低精度・低コストの古典力場（MM）として扱うハイブリッド型の計算手法です（図１A）。この手法を用いることで、MM だけでは扱えない「原子間の共有結合の形成や切断を伴う化学反応」を解析できます。また、従来の QM 計算が対象とする低分子に限らず、酵素のような大規模生体分子に対しても、分光スペクトルの予測、反応経路探索、反応に沿った自由エネルギー地形の解析などを行うことが可能です。

私たちはこの QM/MM 法を分子動力学計算パッケージ GENESIS に実装し、外部の QM 計算プログラム（Gaussian, Q-Chem, DFTB+, TeraChem, QSimulate）と連携させることで
QM/MM 計算を実行しています（図１B）1, 2。これにより、MM に不足する部分を QM 計算で補いながら、十分な構造サンプリングを行える QM/MM-MD 法の開発を進めています。

さらにプログラム開発だけでなく、実際に QM/MM-M 法を用いて生体中のさまざまな化学反応を解析しています。たとえば、生命活動のエネルギー源となる酸素還元反応や、細胞
内シグナル制御に重要なタンパク質のリン酸化・脱リン酸化反応です。酵素はこれらの反応を触媒する分子であり、その仕組みを理解することは生命現象の理解や応用に直結します。

私たちは開発した QM/MM-MD 法をトリプトファン合成酵素（TSase）の研究にも応用しています。TSase は多剤耐性結核菌に対する新規薬剤開発の標的であると同時に、工業的な
L-トリプトファン生産においても重要な酵素です。その合成機構は酵素の構造変化と多段階の化学反応が密接に組み合わさった非常に複雑なものであり（図２）、全容はいまだ解明さ
れていません。私たちは古典的手法と QM/MM 法を組み合わせることで、この複雑な仕組みをステップごとに詳しく調べています。3, 4, 5

{{< figure src="/images/research/proj_1-3-1.jpg" alt="" caption="図１.（A）QM/MM 法の概念図。（B）MD と QM プログラムを組み合わせた QM/MM-MD 法の基本的な実行手順。">}}

{{< figure src="/images/research/proj_1-3-2.jpg" alt="" caption="図２. トリプトファン合成酵素における L-トリプトファンの合成機構。It is adapted from the reference [5], licensed under CC-BY-NC 4.0.">}}

### References:

1. K. Yagi, and Y. Sugita, “Anharmonic Vibrational Calculations Based on Group-Localized Coordinates: Applications to Internal Water Molecules in Bacteriorhodopsin” J. Chem. Theory Comput. 17 (2021) 5007-5020.
1. K. Yagi, S. Ito, and Y. Sugita, “Exploring the minimum-energy pathways and free-energy profiles of enzymatic reactions with QM/MM calculations” J. Phys. Chem. B 125 (2021) 4701-4713.
1. S. Ito, K. Yagi, and Y. Sugita, “Computational Analysis on the Allostery of Tryptophan Synthase: Relationship between α/β-Ligand Binding and Distal Domain Closure” J. Phys. Chem. B 126 (2022) 3300-3308.
1. S. Ito, K. Yagi, and Y. Sugita, “ Allosteric regulation of β-reaction stage I in tryptophan synthase upon the α-ligand binding” J. Chem. Phys. 158 (2023) 115101.
1. S. Ito, C. Kobayashi, K. Yagi, and Y. Sugita, “Toward understanding whole enzymatic reaction cycles using multi-scale molecular simulations”, Curr. Opin. Struct. Biol. 95 (2025) 103153.
