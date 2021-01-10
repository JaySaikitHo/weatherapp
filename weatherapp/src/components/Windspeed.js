import Badge from 'react-bootstrap/Badge';
import "./windspeed.css";
function Windspeed (props) {
  const currentWindspeed = props.currentWindspeed; 
  
  return(
  <div className ="windspeed"> Current Windspeed : <Badge variant ="secondary">{currentWindspeed}</Badge></div>
  );
}

export default Windspeed;