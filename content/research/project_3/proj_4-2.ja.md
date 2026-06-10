---
title: 'カルシウムイオンポンプの構造ダイナミクスと機能'
date: 2025-10-07T12:04:37+09:00
order: 2
draft: false
description: ''
keywords: []
---

## カルシウムイオンポンプの構造ダイナミクスと機能

ATPase は ATP 加水分解の自由エネルギーを利用して多様な生命活動を駆動する酵素群です。P-type ATPase は生体膜に存在し、このエネルギーを用いて濃度勾配に逆らって物質を輸送します。カルシウムイオンポンプ（SERCA）はその代表例で、筋小胞体膜に局在し、約 10<sup>4</sup> 倍の濃度差に逆らって Ca<sup>2+</sup>を輸送します。SERCA は細胞質ドメイン（A, N, P）と膜貫通ヘリックスから構成され、ATP/ADP 結合部位は N, P ドメインの間に、Ca<sup>2+</sup>結合部位は膜貫通ヘリックス中央に存在します（図 1）。
最初の構造 [1] が発表された 2000 年以降、多様な結晶構造が解明され、輸送過程における大規模な構造変化が重要であることが示されてきました。
しかし、原子レベルでその様相を捉えることは困難であり、とくに Ca<sup>2+</sup>が排出される E1P 状態から E2P 状態へのステップでは、中間構造の存在が示唆 [2] されながらも解明されていませんでした。

我々はこのステップに着目し、分子動力学（MD）シミュレーションと mean-force string 法 [3] を用いて、E1P と E2P を結ぶ反応経路を解析しました [4]。
この手法は経路上に複数のレプリカを配置し、自由エネルギー面を最適化することで最も可能性の高い構造変化経路を探索するものです。スーパーコンピュータの計算能力により、大規模膜タンパク質の構造変化解析が可能となりました（図2）。

解析の結果、ADP 解離に伴い A–N 間の塩橋が切断され、A ドメインの回転とP ドメインの傾斜によってループが引き上げられ、それが膜貫通ヘリックスの組換えへと伝わり、最終的に Ca<sup>2+</sup>結合部位の小胞体側ゲートが開放されることが示されました（図3）。

P-type ATPase は輸送対象が異なっても基本構造を共有しているため、本研究で明らかにした SERCA の分子機構は他の ATPase にも適用可能です。これらの知見は生命現象の理解や創薬に寄与すると期待され、今後も計算科学による先端的研究が重要となります。

{{< figure src="/images/research/proj_4-2-1.jpg" alt="" caption="図 1: カルシムイオンポンプ(SERCA)" >}}

{{< figure src="/images/research/proj_4-2-2.jpg" alt="" caption="図 2: SERCA の反応経路計算の概念図" >}}

{{< figure src="/images/research/proj_4-2-3.jpg" alt="" caption="図３: SERCA の E1P 状態から E2P 状態への構造変化" >}}

### 参考文献

1. Toyoshima, C., Nakasako, M., Nomura, H., Ogawa, H. Nature 405, 647-655 (2000). https://doi.org/10.1038/35015017
1. Danko, S., Daiho, T., Yamasaki, K., Liu, X., Suzuki, H. J. Biol. Chem. 284, 22722-22735 (2009). https://doi.org/10.1074/jbc.M109.029702
1. Maragliano, L., Fischer, A., Vanden-Eijnden, E., Ciccotti, G. J. Chem. Phys. 125, 024106 (2006). https://doi.org/10.1063/1.2212942
1. Kobayashi, C., Matsunaga, Y., Jung, J., Sugita, Y. Proc. Natl. Acad. Sci. 118, e2105507118 (2021). https://doi.org/10.1073/pnas.2105507118
