import Validator from './core.js';

if (typeof window !== 'undefined') {
  window['Validator'] = Validator;
}

export default Validator;