const React = require('react');
// const { Component } = React;
const { useState, useRef } = React;

// class WordRelay extends Component {
const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  /*
  state = {
    word: '제로초',
    value: '',
    result: '',
  };

  input;
  onRefInput = (c) => {
    this.input = c;
  };
   */

  //class 메소드가 아니므로 따로 변수 선언을 해줘야한다..앞에 const 추가
  // onSubmitForm = (e) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    //useState로 state 변수 접근 시 이제 this.state를 사용하여 않아도 접근할 수 있다..this.state를 다 지우자
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      /*
      //useState는 이렇게 한번에 접근할 수는 없다.
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
       */
      // this.input.focus();
      //hooks에서는 ref에서 항상 current로 접근해야 한다.
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
      /*
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
       */
    }
  };

  //class 메소드가 아니므로 따로 변수 선언을 해줘야한다..앞에 const 추가
  // onChangeInput = (e) => {
  const onChangeInput = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  //class 컴포넌트에서만 render를 사용한다..함수형에서는 render 없이 사용
  //useState와 메소드 접근 시 이제 this를 사용하여 않아도 접근할 수 있다..this.state, this를 다 지우자
  // render() {
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input
          id="wordInput"
          className="wordInput"
          // ref={this.onRefInput}
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
  // }
};

module.exports = WordRelay;
