import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style.scss';

export default class LoginPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorInput: true,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    if (this.state.value === '') {
      this.setState({
        errorInput: false,
      });
    }
  };

  submitAdd = () => {
    if (this.state.value === '') {
      this.setState({
        errorInput: true,
      });
    } else {
      this.setState({ errorInput: false });
      this.props.history.push('./');
    }
  };

  render() {
    return (
      <div>
        <div className="login-page">
          <div>
            <div className="login-page__title">Login</div>
            <div className="login-page__form">
              <TextField
                id="outlined-simple-start-adornment"
                className="gf"
                value={this.state.value}
                onChange={this.handleChange}
                variant="outlined"
                label="With outlined TextField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Id</InputAdornment>
                  ),
                }}
              />
              {this.state.error}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                disabled={this.state.errorInput}
                onClick={this.submitAdd}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.object,
};
