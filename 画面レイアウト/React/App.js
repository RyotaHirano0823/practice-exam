import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = {question:''}
  }
  RandomQuestion();
  
  render() {
    return (
      <div className="test">
        <h1>aaa</h1>
        <h2>aa</h2>
        <h3>練習1</h3>
            <p>問題 {this.state.question}</p>
            <p>ア <label id="a"></label></p>
            <p>イ <label id="i"></label></p>
            <p>ウ <label id="u"></label></p>
            <p>エ <label id="e"></label></p>
      </div>
    );
  }
}

function RandomQuestion()
{
    var questiontext = new Array();
    var choices1 = new Array();
    var choices2 = new Array();
    var choices3 = new Array();
    var choices4 = new Array();

    questiontext[0] = "K社は健康食品の製造販売を手掛けている中堅企業である。次のK社を取り巻く環境のうち，SWOT分析において\"O\"に分類されるものはどれか。";
    choices1[0] = "K社の工場は老朽化が進んでおり深刻な状態にある。";
    choices2[0] = "K社は、購入単価の高い富裕層の顧客を多く抱えている。";
    choices3[0] = "競合相手のL社が，新技術を使った新しい商品の発売を予定している。";
    choices4[0] = "健康ブームの影響で関連食品へのニーズは高まってきている。";
    questiontext[1] = "BSC(バランススコアカード)は，企業のビジョンと戦略を実現するために，戦略・ビジョンを4つの視点で分類し業績を評価・分析する方法である。バランススコアカードで使用される4つの視点とは次のうちどれか。";
    choices1[1] = "顧客価値・顧客コスト・利便性・コミュニケーション";
    choices2[1] = "財務・顧客・業務プロセス・学習と成長";
    choices3[1] = "人・機械・材料・方法";
    choices4[1] = "製品・価格・流通・プロモーション";
    questiontext[2] = "\"重要成功要因\"とも呼ばれ，経営戦略やITガバナンスなどを計画的に実施する際，その目標・目的を達成する上で決定的な影響を与える要因のことで，重点的に資源を投下して取り組むべき重要な目標を意味する言葉はどれか。";
    choices1[2] = "CIM";
    choices2[2] = "CMMI";
    choices3[2] = "CRM";
    choices4[2] = "CSF";
    questiontext[3] = "製造業における生産方式のうち，組立の製造工程で多品種を少量生産するのに適している手法はどれか。";
    choices1[3] = "カンバン方式";
    choices2[3] = "セル生産方式";
    choices3[3] = "ライン生産方式";
    choices4[3] = "BTO方式";

    var no = Math.floor(Math.random() * questiontext.length);
    {this.setState({name:questiontext[no]})}

    document.getElementById('a').innerHTML = choices1[no];
    document.getElementById('i').innerHTML = choices2[no];
    document.getElementById('u').innerHTML = choices3[no];
    document.getElementById('e').innerHTML = choices4[no];
}

export default App;
