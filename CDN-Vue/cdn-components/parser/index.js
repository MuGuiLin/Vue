import Parser from './core.js';

if (typeof window !== 'undefined') {
  window['Parser'] = Parser;
}

export default Parser;