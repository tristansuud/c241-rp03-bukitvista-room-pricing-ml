const {postPredictHandler} = require('../server/handler');
const {GetAllProperties, GetPropertyById} = require('../controllers/PropertyController');
const {GetDetailRoom} = require('../controllers/RoomController');
     
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 1000 * 1000,
        allow: 'multipart/form-data',
        multipart: true
      }
    }
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
  },
  {
    path: '/properties/{property_id}/rooms/{room_id}',
    method: 'GET',
    handler: GetDetailRoom
  } 
]
 
module.exports = routes;