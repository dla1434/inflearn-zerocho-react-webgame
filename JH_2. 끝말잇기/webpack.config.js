const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', //실서비스는 production
  devtool: 'eval', //eval는 빠르게 하겠다는 의미, 실서비스: hidden-source-map
  //여기가 가장 중요
  //client.jsx, WordRelay.jsx를 app.js로 만들어보자
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    //client.jsx에서 WordRelay.jsx 임폴트해서 쓰고 있는데 이런경우는 자동으로 인식되므로 생략 가능
    app: ['./client.jsx'],
  }, //입력
  module: {
    rules: [
      {
        //js, jsx 파일에 rule을 적용하겠다.
        test: /\.jsx?/,
        //babel-loader를 사용하여 webpack 실행 시 최신문법을 옛날 문법으로 변경해주겠다.
        loader: 'babel-loader',
        //npm을 설치한 모듈을 넣어주면 된다.
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'), //C:\ONJ\React_Github\inflearn-zerocho-react-webgame\JH_lecture\dist
    filename: 'app.js',
  }, //출력
};
