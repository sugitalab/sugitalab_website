---
title: '計算科学による分子動力学の高速化'
date: 2025-10-07T12:04:37+09:00
order: 1
draft: false
description: ''
keywords: []
---

## 計算科学による分子動力学の高速化

### GENESISにおけるルックアップテーブル手法

分子動力学（MD）シミュレーションにおいて、最も計算コストが高い部分は、静電相互作用やファンデルワールス相互作用などの非結合相互作用におけるエネルギーおよび力の計算である。これらは、すべての粒子対間の距離に依存する。

これらの計算を高速化する従来の方法の一つが、ルックアップテーブルの利用である。すなわち、各タイムステップごとにすべての粒子対について相互作用エネルギーや力を一から計算するのではなく、あらかじめ距離の範囲に対する値を計算してテーブルとして保存しておく。シミュレーション中は、その距離に対応する値を「参照（lookup）」するだけでよい。この方法は、平方根や指数関数といった複雑な数学演算を毎回実行するよりもはるかに高速である。

しかし、単純なルックアップテーブルには問題もある。高い精度を得るためには、多数のデータ点を持つテーブルが必要となり、特に短距離領域では力が急激に変化するため、より細かい分解能が求められる。その結果、大量のメモリを必要とし、アクセスも遅くなる可能性がある。

GENESISでは、距離の二乗（r2）に基づくテーブルではなく、距離の二乗の逆数（1/r2）に基づくテーブルを構築する。この新しいテーブルでは、エネルギーと力を1/r2の線形関数として評価できるため、中距離および長距離の粒子対に対しては少ないデータ点で十分となる（Fig. 1）。

このようにテーブルの効率を高め、エネルギーと力を1/r2の線形関数として定義することで、コンパクトかつ高精度なルックアップテーブルを実現できる。
特に、シミュレーションの正確性において重要な短距離相互作用に対して高い精度を維持できる。この手法により非結合相互作用の計算が高速化され、結果として分子動力学シミュレーション全体を精度を損なうことなく加速することが可能となる。

{{< figure src="/images/research/proj_2-1-1.jpg" alt="" caption="Fig. 4Performance on K, Trinity, LUMI, and Fugaku." >}}

### References

Jaewoon Jung, Takaharu Mori, and Yuji Sugita, “Efficient lookup table using a linear function of inverse distance squared”, J. Comput. Chem. 34, 2412-2420 (2013)

### GENESISにおける並列化

GENEddSISは、高度で多層的な並列化手法を採用しており、複数の技術を組み合わせることで卓越した性能を実現し、10万コアを超える計算資源上で数億原子規模の系までスケールすることができる。その中核となる思想は、MPI（Message Passing Interface）とOpenMP（Open Multi-Processing）を組み合わせたハイブリッド並列化であり、単一ノード内でのマルチスレッド処理を効率的に実現する。この手法により、多数のコアが単一ノードに集約された現代のスーパーコンピュータの階層構造を有効に活用できる。

### MD並列化のためのコアアルゴリズム

MDシミュレーションにおける計算ボトルネックは主に粒子間の力の計算である。これらの力は、大きく短距離相互作用と長距離相互作用の2種類に分けられる。GENESISでは、それぞれに対して異なる並列化戦略を採用している。

### 1. 短距離非結合相互作用：ミッドポイントセル法

Lennard-Jones力などの非結合相互作用は、通常、あるカットオフ距離内で計算される。GENESISではこれに対して空間分割法を用いる。シミュレーション空間を複数のサブドメインに分割し、それぞれを各プロセッサに割り当てる。
その中核となるのがミッドポイントセル法である。この手法では、2つの粒子が属するセルの中点セルが、あるプロセッサの担当領域内にある場合、そのプロセッサがその粒子対の相互作用を計算する。この方法は、MPI/OpenMPハイブリッド並列化と組み合わせて用いられ、各MPIプロセスがサブドメインを担当し、その内部の計算を複数のOpenMPスレッドで並列化する（図 2 in 超 並 列 分 子 動 力 学 計 算 ソ フ ト ウ ェ ア GENESIS.docx）。この戦略は非常に効率的であり、プロセッサ間通信を最小限に抑えることができる。また、短距離非結合相互作用の性能最適化のために、ハードウェアアーキテクチャに応じて異なるアルゴリズムが用いられる。

長距離の静電相互作用はより複雑であり、通常はParticle-Mesh Ewald（PME）法によって扱われる。PMEは3次元高速フーリエ変換（3D FFT）に依存しており、大規模系ではこれも計算ボトルネックとなる可能性がある。
GENESISでは、3D FFTグリッドを小さなサブグリッドに分割する体積分割法を採用し、実空間と逆空間で同一のドメイン分割を維持する。このアルゴリズムは、実空間の電荷をグリッド上の電荷値へ変換する際にグローバル通信を回避することで、データ通信量を最小化するよう最適化されている。その結果、長距離相互作用の計算は高いスケーラビリティを実現している（Fig. 3）。

{{< figure src="/images/research/proj_2-1-2.jpg" alt="" caption="Fig. 3. (a) Same domain decomposition between real and reciprocal space in GENESIS. We do not need communication to make charge on grids. (b) different domain decoposition between real and reciprocal space in other MD, which requires additional communications." >}}

これらの開発により、GENESISはK、Trinity、Tsubame、Fugaku、LUMIなどの様々なスーパーコンピュータ上で大規模系に対して非常に高い並列性能を実現している（Fig. 4）。

{{< figure src="/images/research/proj_2-1-3.jpg" alt="" caption="Fig. 4Performance on K, Trinity, LUMI, and Fugaku." >}}

### 粗視化シミュレーションに特化した並列化

全原子シミュレーションは高い分解能を提供する一方で、より大規模な生体分子系を扱うためには、アミノ酸を単一の「ビーズ」として表現する粗視化（CG）シミュレーションが用いられる。GENESIS CGDYNは、このようなシミュレーション特有の並列化課題に対応している。

多くのCGシミュレーションでは、系は不均一であり、領域によって粒子密度が異なる。この場合、通常の空間分割では高密度領域を担当するプロセッサに負荷が集中し、低密度領域のプロセッサは遊休状態となる。その結果、負荷不均衡によって性能が低下する。

CGDYNでは、これを動的負荷分散アルゴリズムによって解決する。各プロセッサの計算負荷を監視し、サブドメインの割り当てを再調整することで、負荷が均等になるようにする。この動的調整は、不均一で複雑な系を効率的にシミュレーションする上で不可欠であり、一部のプロセッサの過負荷によって全体がボトルネックとなることを防ぐ（Figure in the press release）。

### References:

1. Jaewoon Jung, Takaharu Mori, and Yuji Sugita, “Midpoint cell method for hybrid (MPI+OpenMP) parallelization of molecular dynamics simulations”, J. Comput. Chem. 35, 1064-1072
1. Jaewoon Jung, Chigusa Kobayashi, Toshiyuki Imamura, and Yuji Sugita, “Parallel implementation of 3D FFT with volumetric decomposition schemes for efficient molecular dynamics simulations”, Comput. Phys. Comm. 200, 57-65 (2016)
3. Jaewoon Jung, Wataru Nishima, Marcus Daniels, Gavin Bascom, Chigusa Kobayashi, Adetokunbo Adedoyin, Michael Wall, Anna Lappala, Dominic Phillips, William Fischer, Chang‐Shung Tung, Tamar Schlick, Yuji Sugita, and Karissa Y Sanbonmatsu “Scaling molecular dynamics beyond 100,000 processor cores for large-scale biophysical simulations”, J. Comput. Chem. 40, 1919-1930 (2019)
1. Jaewoon Jung, Chigusa Kobayashi, Kento Kasahara, Cheng Tan, Akiyoshi Kuroda, Kazuo Minami, Shigeru Ishiduki, Tatsuo Nishiki, Hikaru Inoue, Yutaka Ishikawa, Michael Feig, Yuji Sugita, “New parallel computing algorithm of molecular dynamics for extremely huge scale
biological systems”, J. Comput. Chem. 42, 231-241 (2021)
1. Jaewoon Jung, Cheng Tan, and Yuji Sugita, “GENESIS CGDYN: large-scale coarse-grained MD simulation with dynamic load balancing for heterogeneous biomolecular systems”, Nat. Commun. 15, 3370 (2024)
