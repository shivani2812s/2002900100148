const express = require('express');
const router = express.Router();

var Alltrains = [
      {
        "train_id": "TR123",
        "train_name": "Express 123",
        "departure_station": "City A",
        "departure_time": "09:00 AM",
        "arrival_station": "City B",
        "arrival_time": "12:30 PM",
        "duration": "3 hours 30 minutes",
        "seats_available": 120,
        "ticket_price": "$50"
      },
      {
        "train_id": "TR456",
        "train_name": "Superfast 456",
        "departure_station": "City B",
        "departure_time": "02:15 PM",
        "arrival_station": "City C",
        "arrival_time": "05:45 PM",
        "duration": "3 hours 30 minutes",
        "seats_available": 80,
        "ticket_price": "$60"
      },
      {
        "train_id": "TR789",
        "train_name": "Local 789",
        "departure_station": "City C",
        "departure_time": "08:00 AM",
        "arrival_station": "City D",
        "arrival_time": "10:30 AM",
        "duration": "2 hours 30 minutes",
        "seats_available": 200,
        "ticket_price": "$30"
      }
    ]

    function findTrainByNumber(trainNumber) {
        return Alltrains.find(train => train.train_id === trainNumber);
    }
    
    
    
    
    router.get('/api/train',(req,res)=>{
        res.json(Alltrains);
    });
    
    router.get('/api/train/:trainno',(req,res)=>{
        const trainno = req.params.trainno;
        const trainNumber = trainno;
        const trainDetails = findTrainByNumber(trainNumber);
        
    if (trainDetails) {
        res.json(trainDetails);
    } else {
        res.json({"status" : "train not found"});
    }

});



module.exports = router;