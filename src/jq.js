
//import 'material-design-hierarchical-display/blob/master/scss/_animation.scss';
//import './css/jq.scss'
//import 'material-design-hierarchical-display/scss/hierarchical-display.scss';
// import 'material-design-hierarchical-display/scss/_component.scss';
import 'material-design-hierarchical-display/scss/_animation.scss';
//import './css/jq.less'
import './css/home.css'

/*
import $ from 'jquery';
window.jQuery = window.$ = $;
*/

import text_color from './jq_plugin';

//import hierarchical-display from 'jquery.zmd.hierarchical-display'
// import hierarchicalDisplay from 'material-design-hierarchical-display'

import hierarchicalDisplay from 'material-design-hierarchical-display/js/jquery.zmd.hierarchical-display'

$(function(){
/*
  $('.zmd-hierarchical-display').hierarchicalDisplay();
*/

  $('#btn_version').on('click', function() {
    $(this).prop('disabled', true);
    let vrsn = $("#jq_version");
    vrsn.text(vrsn.text() + $.fn.jquery);
  });
  $('[name="tcl"]').change(function(){
    $("#text_color").text_color($(this).val());
  });
// console.log('css:', $("#text01").text());
// console.log('css:', $("#text01").css("color"));
});
