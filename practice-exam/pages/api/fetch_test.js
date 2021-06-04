const { useState } = require("react");
const { useEffect } = require("react/cjs/react.production.min");

fetch('http://localhost:3000/api/pgtest_all')
  .then(response => response.json())
  .then(data => console.log(data));

//   useEffect(() => {
//       fetch('http://localhost:3000/api/pgtest_all')
//       .then(res => res.json())
//       .then(data => {
//           // 処理を記載する
//           console.log(data)
//       })
//   }, [])