// JSX記法
// reactのアップデートによりimportは必須ではなくなった
import React from "react";
import ReactDom from "react-dom";
// コンポーネント化したJSXをimportする（JSXはreactのファイル名）
import App from "./App";

// JSX記法ルール
// const App = () => {
//   // エラー無く表示される
//   // return null;
//   // ページに「こんにちは！」と表示
//   // return <h1>こんにちは！</h1>;
//   return (
//     // JSX記法では一つのタグ（<></>）で囲わなくてはいけない
//     // エラーを回避するために<React.Fragment>は便利
//     // <React.Fragment>
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか！？</p>
//     // </React.Fragment>
//     // <React.Fragment>は省略もできる
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか！？</p>
//     </>
//   );
// };

// ReactDom.render(<App />, document.getElementById("root"));

// コンポーネントの使い方を知る
// App.jsにコンポーネント化したのでコメントアウト
// const App = () => {
//   return (
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか！？</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
