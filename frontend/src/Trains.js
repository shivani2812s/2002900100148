import React from 'react'

const Trains = () => {
    useEffect(() => {
        const [train, setTrain] = useState([]);
        const fetchtrains = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/train');
            const data = await response.json();
            setTrain(data);
          } catch (error) {
            console.error('Error fetching train data:'+ error);
          }
        };
        fetchtrains();
        },  []);
  return (
    <>
     <table>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Seats Available</th>
              <th>Ticket price</th>
            </tr>
          </thead>
          <tbody>
          {train.map((data, i) => (
              <tr key={i}>
                <td>{data.train_name}</td>
                <td>{data.seats_available}</td>
                <td>{data.ticket_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default Trains