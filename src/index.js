import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  /*這是jsx
  const App = () => {
    //小括號包起來的就是用JSX建立的React element
    return (
      <div>
        Hello World!
      </div>
    );
  };*/
  
  const App = () => {
    return (
      React.createElement('div', null, 'Hello World!')
    );
  };
  
  // ========================================
  
  ReactDOM.render(
    <Game/>,
    document.getElementById('root')
  );

  /*這是jsx
  ReactDOM.render(<App/>, document.getElementById('app'));*/
  
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));