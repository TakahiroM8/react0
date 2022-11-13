import React from "react";

// const ColorfulMessage = () => {
//   const contetStyle = {
//     color: "pink",
//     fontSize: "18px"
//   };
//   return <p style={contetStyle}>元気です！</p>;
// };

// export default ColorfulMessage;

// const ColorfulMessage = (props) => {
//   // console.log(props);
//   const contetStyle = {
//     color: props.color,
//     fontSize: "18px"
//   };
//   // return <p style={contetStyle}>{props.message}</p>;
//   return <p style={contetStyle}>{props.children}</p>;
// };

// 他のファイルでも使用出来る様にexportできるようになります
// export const ColorfulMessage = (props) => {
const ColorfulMessage = (props) => {
  //  reactが再レンダリングしているのを確認
  // console.log("カラフル");
  const { color, children } = props;
  const contetStyle = {
    // color: color,
    // 省略もできる
    color,
    fontSize: "18px"
  };
  // return <p style={contetStyle}>{props.message}</p>;
  return <p style={contetStyle}>{children}</p>;
};
// 他のファイルでも使用出来る様にexportできるようになります
export default ColorfulMessage;
