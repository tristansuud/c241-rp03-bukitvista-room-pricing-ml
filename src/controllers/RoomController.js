const Room = require("../db/models/room");
const Unit = require("../db/models/unit");

const GetDetailRoom = async (request, h) => {
  const room = await Room.findOne({
    where: {
      id: request.params.room_id,
    },
  });

  // find all units that have the same id_room as the room

  const units = await Unit.findAll({
    where: {
      id_room: request.params.room_id,
    },
  });

  room.dataValues.units = units;

  const response = h.response({
    status: "success",
    data: room,
  });
  response.code(201);
  return response;
};

module.exports = { GetDetailRoom };
