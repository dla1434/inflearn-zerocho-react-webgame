import React, { Component } from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

//컴퓨터가 어떤 손 내고 있는지 판단
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

//클래스의 경우
//constructor -> render -> ref -> componentDidMount
//setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
//부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
class RSP extends Component {
  state = {
    result: '',
    imgCoord: rspCoords.바위,
    score: 0,
  };

  //render가 처음 실행되고나서 실행..그러나 그 이후 리렌더링에서는 실행하지 않는다.
  //componentDidMount와 componentWillUnmount는 쌍으로 생각하면 된다.
  //여기에 비동기 요청을 많이 해요
  componentDidMount() {
    // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 해요
    this.interval = setInterval(this.changeHand, 100);
  }

  //리렌더링 후
  componentDidUpdate() {}

  //컴포넌트게 제거되기 직전에 수행
  //componentDidMount에서 수행한 작업을 초기화 하기 위한 목적
  //비동기 요청 정리
  componentWillUnmount() {
    // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    //1초 동안 결과를 확인하게 멈추고..다시 가위바위보를 실행
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn('가위')}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
