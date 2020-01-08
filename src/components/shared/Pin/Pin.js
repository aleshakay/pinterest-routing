import React from 'react';
import PropTypes from 'prop-types';
import pinShape from '../../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    pinBoard: PropTypes.func,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-text">{pin.title}</h5>
          <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
