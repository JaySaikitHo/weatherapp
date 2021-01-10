import Badge from 'react-bootstrap/Badge';
import "./temperature.css";
function Temperature (props) {
  const currentTemperature = props.currentTemperature; 
  console.log("temp from components",currentTemperature)
  return(
  <div className ="temperature"> Current Temperature :  <Badge variant ="secondary">{currentTemperature}</Badge></div>
  );
}

export default Temperature;