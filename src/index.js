import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props)
{
  return(
    <div>
      <h1>Hello Monday</h1>
      <h1 style={{color:'red'}}> Today's date is {props.date.toLocaleTimeString()}</h1>
    </div>
  )

}
function tick()
{
  ReactDOM.render(
    <React.StrictMode>
      <Clock date ={new Date()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
setInterval(tick,1000);


