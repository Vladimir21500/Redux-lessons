import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser(1, 'Vova'));
store.dispatch(addUser(2, 'Viva'));
store.dispatch(addUser(3, 'Vava'));

store.dispatch(deleteUser(2));

store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

console.log(store.getState());
