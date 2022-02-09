import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ru'));

store.dispatch(setUser({ id: 1, name: 'Vova' }));
store.dispatch(setUser({ id: 3, name: 'max' }));

store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(addProduct({ id: 3, name: 'apple' }));
store.dispatch(removeProduct(2));
store.dispatch(removeUser());
store.dispatch(setLanguage('en'));
