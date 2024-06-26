import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Gauge = ({ label, value, minValue, maxValue, unit }) => (
  <div style={{ margin: '20px', textAlign: 'center', padding: '10px', color: 'white', width: '250px' }}>
    <div style={{ fontSize: '1.2em', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>{label}</div>
    <ReactSpeedometer
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      segments={1000}
      needleColor="#A2A2A2"
      needleTransition="easeElastic"
      needleTransitionDuration={2000}
      startColor="green"
      endColor="red"
      textColor="transparent"
      ringWidth={20}
      width={200}
      height={150 }
    />
    <div style={{ fontSize: '1em', marginTop: '-20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: '1em', marginRight: '5px' }}>Value:</span>
      <span style={{ fontSize: '1em' }}>{value}</span>
      <span style={{ fontSize: '1em', marginLeft: '5px' }}>{unit}</span>
    </div>
  </div>
);

export default Gauge;
