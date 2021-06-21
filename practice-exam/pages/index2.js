import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
var no = 2;
export default function Home() {
  const [mondaiNen, setMondainen] = useState(null)
  const [mondaibun, setMondaibun] = useState(null)
  const [hyozimei, setHyozimei1] = useState(null)
  const [hyozimei2, setHyozimei2] = useState(null)
  const [hyozimei3, setHyozimei3] = useState(null)
  const [hyozimei4, setHyozimei4] = useState(null)
  const [timer, settimer] = useState(null)
  useEffect(() => {
    fetch('/api/pgtest')
      .then(res => res.json())
      .then(data => {
        
        setMondaibun(data[2].mondaibun)
        setHyozimei1(data[5].hyozimei)
        setHyozimei2(data[6].hyozimei)
        setHyozimei3(data[7].hyozimei)
        setHyozimei4(data[8].hyozimei)
        console.log(data)
      });
      fetch('/api/pgtest_all')
      .then(res => res.json())
      .then(data => {
        
        setMondainen(data[no].name)
        console.log(data)
      });
      setInterval(() =>
      {
        cnt++;

      if(cnt == 60)
      {
          minits += 1;
      }
      if(cnt < 60)
      {
          if(minits == 0)
          {
            settimer(cnt + "秒");
          }
          else
          {
            settimer(minits + "分" + cnt + "秒");
          }
          
      }
      else
      {
        cnt = 0;
        settimer(minits + "分" + cnt + "秒");
      }
      }, 1000);
  }, [])
  const buttonAlert = () => {
    alert('Clicked!');
  }
  // setIntervalの基本
  var cnt = 0;
  var minits = 0;

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8"/>
        <title>HTML-TEST</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {mondaiNen}
        </h1>

        <p>
          <strong>問題</strong>： {mondaibun}
        </p>
        <p>{hyozimei}</p>
        <p>{hyozimei2}</p>
        <p>{hyozimei3}</p>
        <p>{hyozimei4}</p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.questiontable}>
            <table border="1" width="250">
                <tr>
                <th>問題No</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                </tr>
                <tr>
                <td>回答</td>
                <td id="question1"></td>
                <td id="question2"></td>
                <td id="question3"></td>
                <td id="question4"></td>
                </tr>
                <tr>
                <td>チェック</td>
                <td id="check1"></td>
                <td id="check2"></td>
                <td id="check3"></td>
                <td id="check4"></td>
              </tr>
            </table>
          </div>
        <div className={styles.answer}>
          <p>回答欄<br/>
            <input type="radio" name="answerRadio" value="ア"/> ア
            <input type="radio" name="answerRadio" value="イ"/> イ
            <input type="radio" name="answerRadio" value="ウ"/> ウ
            <input type="radio" name="answerRadio" value="エ"/> エ
          </p>
          <input type="button" value="次の問題" onClick={buttonAlert}/>
        </div>
        <div className={styles.time}>
          <p>経過時間:<label/>{timer}</p>
          <button>採点する</button>
        </div>
      </footer>
    </div>
  )
}
