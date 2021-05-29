const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'number-baseball-dev',
  mode: 'development', //실서비스는 production
  devtool: 'inline-source-map', //eval는 빠르게 하겠다는 의미, 실서비스: hidden-source-map
  //여기가 가장 중요
  //client.jsx, WordRelay.jsx를 app.js로 만들어보자
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    //client.jsx에서 NumberBaseball.jsx 임폴트해서 쓰고 있는데 이런경우는 자동으로 인식되므로 생략 가능
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
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'), //C:\ONJ\React_Github\inflearn-zerocho-react-webgame\JH_lecture\dist
    filename: '[name].js',
    publicPath: '/dist',
  }, //출력
  devServer: {
    publicPath: '/dist',
    hot: true,
  },
};
