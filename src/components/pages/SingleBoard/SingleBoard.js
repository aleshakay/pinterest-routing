import React from 'react';
import { Link } from 'react-router-dom';
import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';
import Pin from '../../shared/Pin/Pin';
import './SingleBoard.scss';


class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((error) => console.error('error in the pins', error));
  }


  componentDidMount() {
    const { boardId } = this.props.match.params;
    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      })
      .catch((error) => console.error('error in the single board', error));
  }

  deletePin = (pinId) => {
    const { boardId } = this.props.match.params;
    pinData.deletePin(pinId)
      .then(() => this.getPinData(boardId))
      .catch((error) => console.error('error in delete pins', error));
  }


  render() {
    const { board } = this.state;
    const { boardId } = this.props.match.params;
    return (
      <div className="SingleBoard">
        <h1>{board.name}</h1>
        <p>{board.description}</p>
        <Link className="btn btn-outline-warning" to={`/board/${boardId}/pin/new`}>Add Pin</Link>
        <div className="pins d-flex flex-wrap">
          { this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin} />) }
        </div>
      </div>
    );
  }
}


export default SingleBoard;
