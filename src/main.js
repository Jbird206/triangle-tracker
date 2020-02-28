import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle';

$(document).ready(function() {
  $('#sides').submit(function(event) {
    event.preventDefault();
    let goal = $('#goal').val();
    let output = Triangle(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});