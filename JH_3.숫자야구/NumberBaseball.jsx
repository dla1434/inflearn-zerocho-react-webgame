import React, { Component } from 'react';
import Try from './Try';

//숫자 네 개를 랜덤하게 뽑는 함수
function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  //화살표 함수를 써야 한다.
  //안 쓴다면 bind를 별도로 해줘야 하고..그러러면 constructor도 선언해줘야 한다.
  onSubmitForm = () => {};

  onChangeInput = () => {};

  fruits = [
    { fruit: '사과', taste: '맛있다' },
    { fruit: '감', taste: '시다' },
    { fruit: '귤', taste: '달다' },
    { fruit: '밤', taste: '떫다' },
    { fruit: '배', taste: '맛있다' },
    { fruit: '무', taste: '맛있다' },
    { fruit: '사과', taste: '맛없다' },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return <Try key={v.fruit + i} v={v} i={i} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
