import React from 'react';
import { connect } from 'react-redux';
import * as usersListActions from './users.actions';
import User from './User';
import Pagination from './Pagination';
import { usersPageSelector, currentPageSelector, usersSelector } from './users.selectors';

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
    users: usersSelector(state),
    usersPage: usersPageSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  togglePageNext: usersListActions.togglePageNext,
  togglePagePrev: usersListActions.togglePagePrev,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
