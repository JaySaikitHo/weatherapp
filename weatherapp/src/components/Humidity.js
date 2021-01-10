import Badge from 'react-bootstrap/Badge';
import "./humidity.css";
function Humidity (props) {
  const currentHumidity = props.currentHumidity; 
  
  return(
  <div className ="humidity"> Current Humidity : <Badge variant ="secondary">{currentHumidity}</Badge></div>
  );
}

export default Humidity;