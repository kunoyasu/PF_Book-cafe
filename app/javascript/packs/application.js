// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'
import * as ActiveStorage from '@rails/activestorage'
import 'channels'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@yaireo/tagify'
import 'appear'
import 'bootstrap'
import 'chart.js'
import 'chartjs-chart-matrix'
import 'chartjs-plugin-datalabels'
import 'circles.js'
import 'clipboard'
import 'datatables'
import 'datatables.net-buttons'
import 'daterangepicker'
import 'daterangepicker/daterangepicker.css'
import 'dropzone'
import 'flag-icon-css/css/flag-icon.min.css'
import 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import 'ion-rangeslider'
import 'jquery-mask-plugin'
import 'jquery-migrate'
import 'jquery-validation'
import 'jszip'
import 'leaflet'
import 'list.js'
import 'pdfmake'
import 'pwstrength-bootstrap/dist/pwstrength-bootstrap.min'
import 'quill'
import 'select2'
import 'select2/dist/css/select2.min.css'
import 'sortablejs'

import 'daterangepicker'
import 'daterangepicker/daterangepicker.css'

import 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

import 'select2'
import 'select2/dist/css/select2.min.css'

import '../vendor/babel-polyfill/polyfill.min'
import '../vendor/chart.js.extensions/chartjs-extensions'

import '../vendor/hs-add-field/dist/hs-add-field.min'
import '../vendor/hs-count-characters/dist/js/hs-count-characters'
import '../vendor/hs-counter/dist/hs-counter.min'
import '../vendor/hs-file-attach/dist/hs-file-attach.min'
import '../vendor/hs-form-search/dist/hs-form-search.min'
import '../vendor/hs-fullscreen/dist/hs-fullscreen.min.css'
import '../vendor/hs-fullscreen/dist/hs-fullscreen.min'
import '../vendor/hs-go-to/dist/hs-go-to.min'
import '../vendor/hs-loading-state/dist/hs-loading-state.min'
import '../vendor/hs-loading-state/dist/hs-loading-state.min.css'
import '../vendor/hs-mega-menu/dist/hs-mega-menu.min.css'
import '../vendor/hs-mega-menu/dist/hs-mega-menu.min'

import '../src/theme-custom'
import '../src/theme.min'
import '../src/hs.chartjs-matrix'

/* app/javascript/packs/application.js */

// import the application.scss we created for the CSS
import '../css/application.scss'

// copy all static images under ../img and ../svg to the output folder,
// and you can reference them with <%= image_pack_tag 'media/img/abc.png' %> or <%= image_pack_tag 'media/svg/def.svg' %>
const images = require.context('../img', true)
const imagePath = (name) => images(name, true)

const svgs = require.context('../svg', true)
const svgPath = (name) => svgs(name, true)

// ...
