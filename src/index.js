//必須
import React from 'react';
import ReactDOM from 'react-dom';

//コンポーネント読み込み
import Master from './components/Master';

//(id="root"のところに)描画
ReactDOM.render(
  <Master />,
  document.getElementById('root')
);