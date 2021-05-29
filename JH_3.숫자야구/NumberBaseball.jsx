import React, { Component } from 'react';
import Try from './Try';

//숫자 네 개를 랜덤하게 뽑는 함수
/*
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  console.log('getNumbers', array);
  return array;
}
 */

class NumberBaseball extends Component {
  getNumbers = () => {
    const candidate = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array.push(chosen);
    }
    console.log('getNumbers', array);
    return array;
  };

  state = {
    result: '',
    value: '',
    answer: this.getNumbers(), //ex: [1,3,5,7]
    tries: [], //블변성을 지키지 위해서 push를 사용하면 안 됨
  };

  //화살표 함수를 써야 한다.
  //안 쓴다면 bind를 별도로 해줘야 하고..그러러면 constructor도 선언해줘야 한다.
  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join('')) {
      this.setState({
        result: '홈런',
        // tries.push() //블변성을 지키지 위해서 push를 사용하면 안 됨
        //배열 안에 객체 넣기
        tries: [...tries, { try: value, result: '홈런' }],
      });
      alert('게임을 다시 시작합니다.');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      //답인 틀린 경우 처리
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다.');
        this.setStatte({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
          this.setState({
            tries: [
              ...tries,
              {
                try: value,
                result: `${strike} 스트라이크, ${ball} 볼입니다.`,
              },
            ],
            value: '',
          });
        }
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { result, value, tries } = this.state;

    return (
      <>
        {/*<h1>{this.state.result}</h1>*/}
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            // value={this.state.value}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        {/*<div>시도 : {this.state.tries.length}</div>*/}
        <div>시도 : {tries.length}</div>
        <ul>
          {/*{this.state.tries.map((v, i) => {*/}
          {tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
