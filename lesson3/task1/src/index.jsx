import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Viva' }));
store.dispatch(addUser({ id: 3, name: 'uva' }));

store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { id: 3, name: 'TOMAS' }));
