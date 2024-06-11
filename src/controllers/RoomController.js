const Room = require("../db/models/room");

const GetDetailRoom = async (request, h) => {
  const room = await Room.findOne({
    where: {
      id: request.params.room_id,
    },
  });

  const response = h.response({
    status: "success",
    data: room,
  });
  response.code(201);
  return response;
};

module.exports = { GetDetailRoom };
