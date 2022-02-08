import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Vova' }));
store.dispatch(addUser({ id: 2, name: 'Viva' }));
store.dispatch(addUser({ id: 3, name: 'uva' }));

store.dispatch(deleteUser(2));

store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

console.log(store.getState());
