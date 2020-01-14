import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';


class PinForm extends React.Component {
  static propTypes = {
    savePin: PropTypes.func,
  }

  state = {
    pinTitle: '',
    pinImage: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ pinImage: e.target.value });
  }

  savePinEvent = (e) => {
    const { boardId } = this.props.match.params;
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImage,
      boardId,
      uid: authData.getUid(),
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((error) => console.error(error));
  }

  render() {
    const { pinTitle, pinImage } = this.state;
    return (
      <form className="PinForm">
        <div className="form-group">
          <label htmlFor="pin-title"> Pin Title</label>
          <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="Enter Pin Title"
            value={pinTitle}
            onChange={this.titleChange}
            />
        </div>
        <div className="form-group">
        <label htmlFor="Pin-image"> Pin Image</label>
        <input
          type="text"
          className="form-control"
          id="pin-image"
          placeholder="Enter Pin Image"
          value={pinImage}
          onChange={this.imageChange}
          />
        </div>
        <button className="btn btn-outline-danger" onClick={this.savePinEvent}>Save Pin</button>
      </form>
    );
  }
}

export default PinForm;
