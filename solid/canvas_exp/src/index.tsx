/* @refresh reload */
import { render } from 'solid-js/web';

// import App from './App';
// import Gravity from './Gravity';
import BirdFloking from './BirdFlocking';

render(() => <BirdFloking />, document.getElementById('root') as HTMLElement);
