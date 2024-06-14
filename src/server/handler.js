const Room = require("../db/models/room");
const Property = require("../db/models/property");
const HttpML = require("../helper/ModelApi");

async function basePricePredictHandler(request, h) {
  // find room id
  const roomId = request.params.room_id;
  // const room = await Room.findOne({
  //   where: {
  //     id: request.params.roomid,
  //   },
  // });
  // send the data to the model
  // const prediction = await HttpML.post("/api/v1/predict-base-price", {
  //   unit_type_name: "Downstairs Room 2A",
  //   property_design: 0.0,
  //   property_type: 4.0,
  //   number_of_bookings: 54,
  //   bedroom: 1.0,
  //   bathroom: 1.0,
  //   beds: 1.0,
  //   capacity: 2.0,
  //   ac: 1.0,
  //   balcony: 1.0,
  //   beachfront: 0.0,
  //   breakfast: 1.0,
  //   building_staff: 1.0,
  //   cable_tv: 1.0,
  //   essentials: 1.0,
  //   garden: 1.0,
  //   gym: 1.0,
  //   hair_dryer: 1.0,
  //   hanger: 1.0,
  //   heating: 1.0,
  //   hot_water: 1.0,
  //   kitchen: 1.0,
  //   linens: 1.0,
  //   lock: 1.0,
  //   luggage_drop_off: 1.0,
  //   parking: 1.0,
  //   pool: 1.0,
  //   private_entrance: 1.0,
  //   shampoo: 1.0,
  //   tv: 1.0,
  //   washer: 1.0,
  //   wifi: 1.0,
  //   workspace: 1.0,
  //   lat: -7.802683,
  //   lng: 110.360967,
  //   distance_to_coastline: 14402.1,
  //   area_distance_to_airport: 57.25190839694657,
  //   property_bedrooms: 6.0,
  //   area_name: "Ngupasan",
  //   total_fas: 16.0,
  //   ratio_bedroom_bathroom: 1.0,
  //   ratio_bedroom_cap: 2.0,
  //   avg_price_distance_to_coast: 26.09225581364548,
  //   avg_price_distance_to_airport: 6563.681246191355,
  //   avg_price_bedroom: 375783.2774537036,
  //   avg_price_beds: 375783.2774537036,
  //   avg_price_bathroom: 375783.2774537036,
  //   avg_price_total_fas: 23486.454840856473,
  // });

  const response = h.response({
    status: "success",
    data: prediction.data,
  });
  response.code(201);
  return response;
}

async function roomPricePredictHandler(request, h) {
  // find room id
  const roomId = request.params.room_id;
  const room = await Room.findOne({
    where: {
      id: request.params.room_id,
    },
  });

  const property = await Property.findOne({
    where: {
      id: room.id_property,
    },
  });

  // prediction base model
  // send the data to the model
  const basePricePrediction = await HttpML.post("/api/v1/predict-base-price", {
    unit_type_name: room.unit_type_name,
    property_design: property.property_design,
    property_type: property.property_type,
    number_of_bookings: room.number_of_bookings,
    bedroom: room.bedroom,
    bathroom: room.bathroom,
    beds: room.beds,
    capacity: room.capacity,
    ac: room.ac,
    balcony: room.balcony,
    beachfront: room.beachfront,
    breakfast: room.breakfast,
    building_staff: room.building_staff,
    cable_tv: room.cable_tv,
    essentials: room.essentials,
    garden: room.garden,
    gym: room.gym,
    hair_dryer: room.hair_dryer,
    hanger: room.hanger,
    heating: room.heating,
    hot_water: room.hot_water,
    kitchen: room.kitchen,
    linens: room.linens,
    lock: room.lock,
    luggage_drop_off: room.luggage_drop_off,
    parking: room.parking,
    pool: room.pool,
    private_entrance: room.private_entrance,
    shampoo: room.shampoo,
    tv: room.tv,
    washer: room.washer,
    wifi: room.wifi,
    workspace: room.workspace,
    lat: room.lat,
    lng: room.lng,
    distance_to_coastline: room.distance_to_coastline,
    area_distance_to_airport: room.area_distance_to_airport,
    property_bedrooms: room.property_bedrooms,
    area_name: room.area_name,
    total_fas: room.total_fas,
    ratio_bedroom_bathroom: room.ratio_bedroom_bathroom,
    ratio_bedroom_cap: room.ratio_bedroom_cap,
    avg_price_distance_to_coast: room.avg_price_distance_to_coast,
    avg_price_distance_to_airport: room.avg_price_distance_to_airport,
    avg_price_bedroom: room.avg_price_bedroom,
    avg_price_beds: room.avg_price_beds,
    avg_price_bathroom: room.avg_price_bathroom,
    avg_price_total_fas: room.avg_price_total_fas,
  });

  console.log("base price: "+basePricePrediction.data.data);
  

  // send the data to the model
  const prediction = await HttpML.post("/api/v1/predict-room-price", {
    average_baseline_price: basePricePrediction.data.data,
    rating: room.rating,
    review_sentiment_score: room.review_sentiment_score,
    communication: room.communication,
    cleanliness: room.cleanliness,
    accuracy: room.accuracy,
    month: request.payload.month,
    contain_national_holiday: request.payload.contain_national_holiday,
    stay_duration: request.payload.stay_duration,
    booking_day_of_week: request.payload.booking_day_of_week,
    booking_lead_time: request.payload.booking_lead_time,
    price_fluctuation: room.price_fluctuation,
    total_review_score: room.total_review_score,
  });

  const response = h.response({
    status: "success",
    data: prediction.data,
  });

  response.code(201);
  return response;
}

module.exports = { basePricePredictHandler, roomPricePredictHandler };
