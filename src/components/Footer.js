import React from 'react';

class Footter extends React.Component{
    render(){
        window.onload = function () {

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
        
            RandomQuestion();
        
        }
        
        function buttonClick()
        {
            if(CheckRadio())
            {
                RandomQuestion();
            }
        }
        
        function CheckRadio()
        {
            // 要素を取得
            var elements = document.getElementsByName( "answerRadio" ) ;
        
            // 選択状態の値を取得
            for ( var a="", i=elements.length; i--; ) {
                if ( elements[i].checked ) {
                    var a = elements[i].value ;
                    break ;
                }
            }
        
            if ( a === "" )
            {
                alert("選択肢を選択してください");
                return false;
            }
            else 
            {
                switch(questionNumber)
                {
                    case 0:
                        document.getElementById('question1').innerHTML = a;
                        questionNumber++;
                        break;
                    case 1:
                        document.getElementById('question2').innerHTML = a;
                        questionNumber++;
                        break;
                    case 2:
                        document.getElementById('question3').innerHTML = a;
                        questionNumber++;
                        break;
                    case 3:
                        document.getElementById('question4').innerHTML = a;
                        break;
                    default:
                        break;
                }
                return true;
            }
        }
        return(
        <div class="Footer">
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
            <p>回答欄<br></br>
                <input type="radio" name="answerRadio" value="ア"> ア </input>
                <input type="radio" name="answerRadio" value="イ"> イ </input>
                <input type="radio" name="answerRadio" value="ウ"> ウ </input>
                <input type="radio" name="answerRadio" value="エ"> エ </input>
            </p>
            <input type="button" value="次の問題" onclick="buttonClick()"/>
            <div id="time">
                <p>経過時間:<label id="timer"></label></p>
                <button>採点する</button>
            </div>
        </div>
        );
    }
}

export default Footter;