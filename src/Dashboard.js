import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import Gauge from './Gauge';
import { database } from './firebase';

const Dashboard = () => {
  const [data, setData] = useState({
    CO: 0,
    NO2: 0,
    CH4: 0,
    NH3: 0,
    Temperature: 0,
    Dust: 0
  });

  useEffect(() => {
    const dbRef = ref(database, 'Gas value /sensor_data');
    onValue(dbRef, (snapshot) => {
      const newData = snapshot.val();
      console.log('Fetched data from Firebase:', newData);
      if (newData) {
        setData(newData);
        console.log('Updated state:', newData);
      } else {
        console.error('No data available');
      }
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' ,color: '#39FF14'}}>
      <h1>Air quality Messure</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Gauge label="CO" value={data.CO} minValue={0} maxValue={10} unit="PPM" />
          <Gauge label="NO2" value={data.NO2} minValue={0} maxValue={10} unit="PPM" />
          <Gauge label="CH4" value={data.CH4} minValue={0} maxValue={10} unit="PPM" />
          <Gauge label="NH3" value={data.NH3} minValue={0} maxValue={100} unit="PPM" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Gauge label="Temperature" value={data.Temperature} minValue={0} maxValue={50} unit="°C" />
          <Gauge label="Dust Level" value={data.Dust} minValue={0} maxValue={10} unit="µg/m³" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
