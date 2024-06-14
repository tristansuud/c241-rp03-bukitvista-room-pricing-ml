const Property = require("../db/models/property");
const Room = require("../db/models/room");

const GetAllProperties = async (request, h) => {
  const properties = await Property.findAll();

  const response = h.response({
    status: "success",
    data: properties,
  });
  response.code(201);
  return response;
};

const GetPropertyById = async (request, h) => {
  
  const properties = await Property.findOne({
    where: {
      id: request.params.id,
    }
  });

  const room = await Room.findAll({
    where: {
      id_property: request.params.id,
    },
  });

  properties.dataValues.rooms = room;
  

  const response = h.response({
    status: "success",
    data: properties,
  });
  response.code(201);
  return response;
};

module.exports = { GetAllProperties, GetPropertyById };
