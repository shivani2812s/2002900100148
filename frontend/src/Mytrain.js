import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Mytrain() {
  const { train_no } = useParams();
  const [train, setTrain] = useState({});

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/train/${train_no}`);
        const data = await response.json();
        setTrain(data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchTrainData();
  }, [train_no]);

  return (
    <div>
      <h2>Train Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Train Number:</td>
            <td>{train.train_id}</td>
          </tr>
          <tr>
            <td>Train Name:</td>
            <td>{train.train_name}</td>
          </tr>
          <tr>
            <td>Seats Available:</td>
            <td>{train.seats_available}</td>
          </tr>
          <tr>
            <td>Ticket Price:</td>
            <td>{train.ticket_price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Mytrain;