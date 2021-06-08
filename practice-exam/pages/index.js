import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mondaibun, setTime] = useState(null)
  useEffect(() => {
    fetch('/api/pgtest')
      .then(res => res.json())
      .then(data => {
        setTime(data.mondaibun)
        console.log(data)
      })

  }, [])
  // setIntervalの基本
  var timer1 = null;
  var cnt = 0;
  var minits = 0;

  function event() {

      cnt++;

      if(cnt == 60)
      {
          minits += 1;
      }
      if(cnt < 60)
      {
          if(minits == 0)
          {
              document.getElementById('timer').innerHTML = cnt + "秒";
          }
          else
          {
              document.getElementById('timer').innerHTML = minits + "分" + cnt + "秒";
          }
          
      }
      else
      {
          cnt = 0;
          document.getElementById('timer').innerHTML = minits + "分" + cnt + "秒";
      }
  }

  // タイマー開始
  timer1 = setInterval(event, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8"/>
        <title>HTML-TEST</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TEST
        </h1>

        <p>
          <strong>問題</strong>： {mondaibun}
        </p>
      </main>

      <footer className={styles.footer}>
        <div id="answer">
          <p>回答欄<br/>
            <input type="radio" name="answerRadio" value="ア"/> ア
            <input type="radio" name="answerRadio" value="イ"/> イ
            <input type="radio" name="answerRadio" value="ウ"/> ウ
            <input type="radio" name="answerRadio" value="エ"/> エ
          </p>
          <input type="button" value="次の問題" onclick="buttonClick()"/>
        </div>
        <div id="time">
          <p>経過時間:<label id="timer"/></p>
          <button>採点する</button>
        </div>
      </footer>
    </div>
  )
}
