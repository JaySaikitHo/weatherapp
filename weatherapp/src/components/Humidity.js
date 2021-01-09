import Badge from 'react-bootstrap/Badge';
import "./humidity.css";
function Humidity (props) {
  const currentHumidity = props.currentHumidity; 
  
  return(
  <div className ="humidity">  <Badge variant ="secondary">Current Humidity{currentHumidity}</Badge></div>
  );
}

export default Humidity;