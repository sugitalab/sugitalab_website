---
title: 'カルシウムイオンポンプの構造ダイナミクスと機能'
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

## カルシウムイオンポンプの構造ダイナミクスと機能

ATPase は ATP 加水分解の自由エネルギーを利用して多様な生命活動を駆動する酵素群です。P-type ATPase は生体膜に存在し、このエネルギーを用いて濃度勾配に逆らって物質を輸送します。カルシウムイオンポンプ（SERCA）はその代表例で、筋小胞体膜に局在し、約 104 倍の濃度差に逆らって Ca²⁺を輸送します。SERCA は細胞質ドメイン（A, N, P）と膜貫通ヘリックスから構成され、ATP/ADP 結合部位は N, P ドメインの間に、Ca²⁺結合部位は膜貫通ヘリックス中央に存在します。（図 1）最初の構造 1 が発表された 2000 年以降、多様な結晶構造が解明され、輸送過程における大規模な構造変化が重要であることが示されてきました。しかし、原子レベルでその様相を捉えることは困難であり、とくに Ca²⁺が排出される E1P 状態から E2P 状態へのステップでは、中間構造の存在<sup>2</sup>が示唆されながらも解明されていませんでした。

我々はこのステップに着目し、分子動力学（MD）シミュレーションと mean-force string 法 3 を用いて、E1P と E2P を結ぶ反応経路を解析しました 4。この手法は経路上に複数のレプリカを配置し、自由エネルギー面を最適化することで最も可能性の高い構造変化経路を探索するものです。スーパーコンピュータの計算能力により、大規模膜タンパク質の構造変化解析が可能となりました。(図 2)

解析の結果、ADP 解離に伴い A–N 間の塩橋が切断され、A ドメインの回転とP ドメインの傾斜によってループが引き上げられ、それが膜貫通ヘリックスの組換えへと伝わり、最終的に Ca²⁺結合部位の小胞体側ゲートが開放されることが示されました。(図 3)

P-type ATPase は輸送対象が異なっても基本構造を共有しているため、本研究で明らかにした SERCA の分子機構は他の ATPase にも適用可能です。これらの知見は生命現象の理解や創薬に寄与すると期待され、今後も計算科学による先端的研究が重要となります。

{{< figure src="/images/research/proj_4-2-1.jpg" alt="" caption="図 1: カルシムイオンポンプ(SERCA)" >}}

{{< figure src="/images/research/proj_4-2-2.jpg" alt="" caption="図 2: SERCA の反応経路計算の概念図" >}}

{{< figure src="/images/research/proj_4-2-3.jpg" alt="" caption="図３: SERCA の E1P 状態から E2P 状態への構造変化" >}}

## References:

<ol>
<li>Toyoshima, C.; Nakasako, M.; Nomura, H.; Ogawa, H. Crystal structure of the calcium pump of sarcoplasmic reticulum at 2.6 Å resolution. Nature 2000, 405 (6787), 647-655. DOI: 10.1038/35015017. </li>
<li>>Danko, S.; Daiho, T.; Yamasaki, K.; Liu, X.; Suzuki, H. Formation of the Stable Structural Analog of ADP-sensitive Phosphoenzyme of Ca2+-ATPase with Occluded Ca2+ by Beryllium Fluoride: STRUCTURAL CHANGES DURING PHOSPHORYLATION AND ISOMERIZATION*. Journal of Biological Chemistry 2009, 284 (34), 22722-22735. DOI:<a href="https://doi.org/10.1074/jbc.M109.029702" target="_blank" rel="noopener noreferrer">https://doi.org/10.1074/jbc.M109.029702</a>.</li>
<li>Maragliano, L.; Fischer, A.; Vanden-Eijnden, E.; Ciccotti, G. String method in collective variables: Minimum free energy paths and isocommittor surfaces. The Journal of Chemical Physics 2006, 125 (2). DOI: 10.1063/1.2212942 (acccessed 9/25/2025).</li>
<li>Kobayashi, C.; Matsunaga, Y.; Jung, J.; Sugita, Y. Structural and energetic analysis of metastable intermediate states in the E1P&#x2013;E2P transition of Ca2+-ATPase. Proceedings of the National Academy of Sciences 2021, 118 (40), e2105507118. DOI: doi:10.1073/pnas.2105507118.</li>
</ol>
