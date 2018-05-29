/* eslint-env browser */
import $ from 'jquery';

import Loader from './commons/loader/loader';

import './main.sass';

$(document).ready(() => {
  // [Loader]
  Loader.init();
});
