import React from 'react';
import { connect } from 'react-redux';
import * as usersListActions from './users/users.actions';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  render() {
    const { users, usersPage, currentPage, togglePageNext, togglePagePrev } = this.props;
    return (
      <div>
        <Pagination
          goPrev={togglePagePrev}
          goNext={togglePageNext}
          currentPage={currentPage}
          itemPerPage={usersPage.length}
          totalItems={users.length}
        />
        <ul className="users">
          {usersPage.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users,
    usersPage: state.usersPage,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  togglePageNext: usersListActions.togglePageNext,
  togglePagePrev: usersListActions.togglePagePrev,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
