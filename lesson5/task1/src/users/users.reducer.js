import { TOGGLE_PAGE_NEXT, TOGGLE_PAGE_PREV } from './users.actions';

const getUsersPage = (pageNumber, amount) => {
  const startIndex = pageNumber * 3;
  return users.slice().splice(startIndex, amount);
};

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron',
  },
];

const initialState = {
  users,
  usersPage: getUsersPage(0, 3),
  currentPage: 0,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PAGE_NEXT: {
      return {
        ...state,
        usersPage: getUsersPage(state.currentPage + 1, 3),
        currentPage: state.currentPage + 1,
      };
    }
    case TOGGLE_PAGE_PREV: {
      return {
        ...state,
        usersPage: getUsersPage(state.currentPage - 1, 3),
        currentPage: state.currentPage - 1,
      };
    }
    default:
      return state;
  }
};
