import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

var liStyle = {
  backgroundColor: 'blue',
  color: 'white',
  fontFamily: 'Arial'
}

//JSX Exampple
ReactDOM.render(
  <div style={style}>
    <h1 id = 'heading-element'>Hello World!</h1>
    <p>we are glad you are here</p>
  </div>,
  document.getElementById('root')
)

/*
# Example 1
const title = React.createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)
*/

/*
# Example 2
const title = React.createElement(
  'ul',
  {id: 'title', className: 'header', style: style},
  React.createElement(
    'li',
    {id: 'li1'},
    '1 item'
  ),
  React.createElement(
    'li',
    {id: 'li2'},
    '2 item'
  )
)
*/

/*
# Example 3
var li1 = React.createElement('li', {id: 'li1', style: liStyle}, '1 item');
var li2 = React.createElement('li', {id: 'li2'}, '2 item');
var li3 = React.createElement('li', {id: 'li3', style: liStyle}, '3 item');
var li4 = React.createElement('li', {id: 'li4'}, '4 item');
var li5 = React.createElement('li', {id: 'li5', style: liStyle}, '5 item');

const title = React.createElement(
  'ul',
  {id: 'title', className: 'header', style: style},
  li1,
  li2,
  li3,
  li4,
  li5
)
*/

/*
# Example 1 Render
ReactDOM.render(
  title,
  document.getElementById('root')
)
*/
