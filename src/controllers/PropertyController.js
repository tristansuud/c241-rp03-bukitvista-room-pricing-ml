const Property = require("../db/models/property");

const GetAllProperties = async (request, h) => {
  const properties = await Property.findAll();
  console.log(properties);

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
    },
  });

  const response = h.response({
    status: "success",
    data: properties,
  });
  response.code(201);
  return response;
};

module.exports = { GetAllProperties, GetPropertyById };
