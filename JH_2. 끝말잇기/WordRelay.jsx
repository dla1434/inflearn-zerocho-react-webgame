const React = require('react');
//구조 분해 문법을 사용하면
//React.Component ---> Component로 생략 가능
const { Component } = React;

// class WordRelay extends React.Component {
class WordRelay extends Component {
  //constructor는 생략 가능
  state = {
    text: 'Hello, webpack',
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

//WordRelay를 외부에서 호출 사용할 수 있게 처리
module.exports = WordRelay;
