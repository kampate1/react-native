
import { Provider } from 'react-redux';
import store from './redux/store';
import Adding from './adding/index';

export default function App() {
  return (
    <Provider store={store}>
     <Adding/>
    </Provider>
  );
}