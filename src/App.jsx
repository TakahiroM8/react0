// Propsを知る
// import React from "react";
// import ColorfulMessage from "./components/ColorfulMessage";

// // const App = () => {
// //   return (
// //     <>
// //       <h1>こんにちは！</h1>
// //       <p>お元気ですか！？</p>
// //     </>
// //   );
// // };
// // // 他のファイルでも使用出来る様にexportできるようになります
// // export default App;

// // Reactでのイベントやstyleの扱い方を知る
// const App = () => {
//   // アラートを表示
//   const onClickButton = () => alert();
//   // CSSのオブジェクト化
//   // const contetStyle = {
//   //   color: "blue",
//   //   // 従来のCSSの書き方のfont-sizeではダメ
//   //   fontSize: "18px"
//   // };
//   return (
//     <>
//       {/* 外側の{}はJSを書きますよ！内側の{}JSのオブジェクトを書きますよ！ */}
//       <h1 style={{ color: "red" }}>こんにちは！</h1>
//       {/* CSSオブジェクトを使用 */}
//       {/* <p style={contetStyle}>お元気ですか！？</p> */}
//       {/* <ColorfulMessage color="red" message="元気です!" />
//       <ColorfulMessage color="blue" message="お元気ですか!?" /> */}
//       <ColorfulMessage color="red">元気です!</ColorfulMessage>
//       <ColorfulMessage color="blue">お元気ですか!?</ColorfulMessage>
//       <button onClick={onClickButton}>ボタン</button>
//     </>
//   );
// };
// // 他のファイルでも使用出来る様にexportできるようになります
// export default App;

// // Stateを知る(useState)
// import React, { useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";

// // const App = () => {
// //   return (
// //     <>
// //       <h1>こんにちは！</h1>
// //       <p>お元気ですか！？</p>
// //     </>
// //   );
// // };
// // // 他のファイルでも使用出来る様にexportできるようになります
// // export default App;

// // Reactでのイベントやstyleの扱い方を知る
// const App = () => {
//   // アラートを表示
//   const onClickCountUp = () => {
//     setNum(num + 1);
//   };
//   const [num, setNum] = useState(0);
//   // CSSのオブジェクト化
//   // const contetStyle = {
//   //   color: "blue",
//   //   // 従来のCSSの書き方のfont-sizeではダメ
//   //   fontSize: "18px"
//   // };
//   return (
//     <>
//       {/* 外側の{}はJSを書きますよ！内側の{}JSのオブジェクトを書きますよ！ */}
//       <h1 style={{ color: "red" }}>こんにちは！</h1>
//       {/* CSSオブジェクトを使用 */}
//       {/* <p style={contetStyle}>お元気ですか！？</p> */}
//       {/* <ColorfulMessage color="red" message="元気です!" />
//       <ColorfulMessage color="blue" message="お元気ですか!?" /> */}
//       <ColorfulMessage color="red">元気です!</ColorfulMessage>
//       <ColorfulMessage color="blue">お元気ですか!?</ColorfulMessage>
//       <button onClick={onClickCountUp}>カウントアップ！</button>
//       <p>{num}</p>
//     </>
//   );
// };
// // 他のファイルでも使用出来る様にexportできるようになります
// export default App;

// 再レンダリングと副作用を知る(useEffect)
// eslintを効かなくするお呪い
// /* eslint react-hooks/exhaustive-deps: off */
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// exportの仕方がもう一つある
// import { ColorfulMessage } from "./components/ColorfulMessage";

// const App = () => {
//   return (
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか！？</p>
//     </>
//   );
// };
// // 他のファイルでも使用出来る様にexportできるようになります
// export default App;

// Reactでのイベントやstyleの扱い方を知る
const App = () => {
  //  reactが再レンダリングしているのを確認
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // アラートを表示
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 3の倍数の時に顔文字を表示(再レンダリングが多すぎるエラーが起きる)
  // if (num % 3 ===0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  // 0の時でも顔文字が表示されている
  // if (num % 3 ===0) {
  //   faceShowFlag || setFaceShowFlag(true);
  // } else {
  //   faceShowFlag && setFaceShowFlag(false);
  // }

  // 0の時に顔文字を非表示にしているが「ON/OFF」ボタンが効かない状態
  // if (num > 0){
  //   if (num % 3 ===0) {
  //     faceShowFlag || setFaceShowFlag(true);
  //   } else {
  //     faceShowFlag && setFaceShowFlag(false);
  //   }
  // }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // console.log("useEffect!!!");
    // からの配列を置く事で1回だけレンダリングする様にできる
    // eslintをココだけ効かなくするお呪い
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // CSSのオブジェクト化
  // const contetStyle = {
  //   color: "blue",
  //   // 従来のCSSの書き方のfont-sizeではダメ
  //   fontSize: "18px"
  // };
  return (
    <>
      {/* 外側の{}はJSを書きますよ！内側の{}JSのオブジェクトを書きますよ！ */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* CSSオブジェクトを使用 */}
      {/* <p style={contetStyle}>お元気ですか！？</p> */}
      {/* <ColorfulMessage color="red" message="元気です!" />
      <ColorfulMessage color="blue" message="お元気ですか!?" /> */}
      <ColorfulMessage color="red">元気です!</ColorfulMessage>
      <ColorfulMessage color="blue">お元気ですか!?</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´∀｀)</p>}
    </>
  );
};
// 他のファイルでも使用出来る様にexportできるようになります
export default App;
