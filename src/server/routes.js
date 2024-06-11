const {postPredictHandler, predictHistories} = require('../server/handler');
const {GetAllProperties} = require('../controllers/PropertyController');
const {GetPropertyById} = require('../controllers/PropertyController');
     
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
    path: '/predict/histories',
    method: 'GET',
    handler: predictHistories
    
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
  
]
 
module.exports = routes;