const React = require('react');
//구조 분해 문법을 사용하면
//React.Component ---> Component로 생략 가능
const { Component } = React;

// class WordRelay extends React.Component {
class WordRelay extends Component {
  //constructor는 생략 가능
  state = {
    word: '제로초',
    value: '',
    result: '',
  };

  //this 참고 때문에 화살표 함수로 생성..이게 싫다면 bind를 별도로 처리해줘야 한다.
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

//WordRelay를 외부에서 호출 사용할 수 있게 처리
module.exports = WordRelay;
