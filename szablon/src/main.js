/* eslint-env browser */
import $ from 'jquery';
import 'babel-polyfill';

import Favicon from './assets/favicon/favicon.ico';
import FaviconXML from './assets/favicon/browserconfig.xml';
import FaviconManifest from './assets/favicon/manifest.json';
let requireContext = require.context("./assets/favicon", true, /^\.\/.*\.png$/);
requireContext.keys().map(requireContext);

import Loader from './commons/loader/loader';

import './main.sass';

$(document).ready(() => {
  // [Loader]
  Loader.init();
});
