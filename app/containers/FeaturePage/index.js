import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { List } from 'immutable';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from 'components/Header';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectUsers, makeSelectError } from './selectors';
import { fetchUsersRequest } from './actions';

import saga from './saga';
import reducer from './reducer';

import './style.scss';

export class FeaturePage extends React.Component {
  static propTypes = {
    users: PropTypes.instanceOf(List),
    error: PropTypes.string,
    fetchUsersRequest: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchUsersRequest();
  }

  render() {
    const { users, error } = this.props;
    return (
      <div className="feature">
        <Header />
        {error && <p>{error}</p>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.username}</TableCell>
                <TableCell numeric>{row.email}</TableCell>
                <TableCell numeric>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsersRequest,
    },
    dispatch,
  );

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeaturePage);
