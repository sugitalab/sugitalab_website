---
title: '膜タンパク質の構造ダイナミクスと機能'
date: 2025-10-07T12:04:37+09:00
order: 3
draft: false
description: ''
keywords: []
---

## 膜タンパク質の構造ダイナミクスと機能

生体膜に存在する膜タンパク質は、物質輸送や情報伝達など多彩な生命活動を担う分子機械です。これらの機能は、静的な立体構造だけでは説明できず、ダイナミックな構造変化と密接に結びついています。

私たちの研究室では、分子動力学（MD）シミュレーションをはじめとする計算科学の手法を使い、膜タンパク質がどのように構造変化を通じて機能を発現するのかを明らかにすることを目指しています。以下に、これまでに扱ってきた代表的な膜タンパク質の例を紹介します カルシウムポンプについてはこちらをご参照ください）。

### Sec トランスロコン <sup>1</sup>
分泌タンパク質の膜通過と膜タンパク質の挿入を仲介する普遍的なチャネルです 。 全原子MDにより、Thermus hermophilus SecYE の準開状態と Methanococcus jannaschii ecYEβ の閉状態を解析しました。その結果、SecA との相互作用が準開状態を安定化させ、さらにラテラルゲートに介在する脂質がシグナルペプチドの初期侵入を促すことが示されました。これらの成果は、タンパク質輸送の開始機構の理解に貢献します。

### multidrug and toxic compound extrusion(MATE)輸送体 <sup>2</sup>

病原菌やがん細胞は薬剤を細胞外へ排出することで多剤耐性を獲得します。MATE 輸送体はその代表的なファミリーの一つであり、Pyrococcus furiosus 由来 MATE の構造と働きを MD シミュレーションと量子化学計算(QM/MM)で解析しました。プロトンの受け渡しが局所的な水素結合ネットワークや水和状態を変化させ、「Straight 型」から 「Bent 型」への構造切り替えを駆動する可能性が見えてきました。この知見は、多剤耐性メカニズムの理解や創薬への応用に役立ちます。

### ヘム輸送体 ABC（トランスポーター）<sup>3</sup>

病原性細菌は宿主から鉄を奪うために 「ヘム輸送体」と呼ばれる分子機械を利用します。Burkholderia cenocepacia のヘム輸送体 BhuUV-T を対象とした 全原子 MD を用いた反応経路計算により、ATP の結合と分解に伴って膜の両側のゲートが開閉する様子や、中間体構造の存在を明らかにしました。さらに、ATP 分解に必要な 「シグネチャーモチーフ」と呼ばれる部位の微小な動きが輸送体全体の動作と連動していることが分かりました。これらの成果は、エネルギー変換と物質輸送の分子メカニズム解明に貢献し、新たな抗菌戦略にもつながると期待されます。

## References:

<ol>
  <li>Mori, T.; Ishitani, R.; Tsukazaki, T.; Nureki, O.; Sugita, Y. Molecular Mechanisms Underlying the Early Stage of Protein Translocation through the Sec Translocon. Biochemistry 2010, 49 (5), 945-950. DOI: <a href="https://doi.org/10.1021/bi901594w" target="_blank">https://doi.org/10.1021/bi901594w</a>.</li>
  <li>Nishima, W.; Mizukami, W.; Tanaka, Y.; Ishitani, R.; Nureki, O.; Sugita, Y. Mechanisms for Two-Step Proton Transfer Reactions in the Outward-Facing Form of MATE Transporter. Biophysical Journal 2016, 110 (6), 1346-1354. DOI: <a href="https://doi.org/10.1016/j.bpj.2016.01.027" target="_blank">https://doi.org/10.1016/j.bpj.2016.01.027.</a></li>
  <li>Tamura, K.; Sugimoto, H.; Shiro, Y.; Sugita, Y. Chemo-Mechanical Coupling in the Transport Cycle of a Heme ABC Transporter. The Journal of Physical Chemistry B 2019, 123 (34), 7270-7281. DOI: <a href="https://doi.org/10.1021/acs.jpcb.9b04356" target="_blank">https://doi.org/10.1021/acs.jpcb.9b04356</a>.</li>
<ol>
