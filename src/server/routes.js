const {basePricePredictHandler,roomPricePredictHandler} = require('../server/handler');
const {GetAllProperties, GetPropertyById} = require('../controllers/PropertyController');
     
const routes = [
  {
    path: '/predict-base-price/{room_id}',
    method: 'GET',
    handler: basePricePredictHandler,
  },
  {
    path: '/predict-room-price/{room_id}',
    method: 'POST',
    handler: roomPricePredictHandler,
  },
  {
    path: '/properties/{id}',
    method: 'GET',
    handler: GetPropertyById
  },
  {
    path: '/properties',
    method: 'GET',
    handler: GetAllProperties
  }
]
 
module.exports = routes;