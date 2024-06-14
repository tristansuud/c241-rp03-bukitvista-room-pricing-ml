const { DataTypes, Model } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const Property = require("./property");

const RoomAttributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  unit_type_name: DataTypes.STRING,
  number_of_bookings: DataTypes.INTEGER,
  bedroom: DataTypes.DECIMAL,
  bathroom: DataTypes.DECIMAL,
  beds: DataTypes.DECIMAL,
  capacity: DataTypes.DECIMAL,
  ac: DataTypes.BOOLEAN,
  balcony: DataTypes.BOOLEAN,
  beachfront: DataTypes.BOOLEAN,
  breakfast: DataTypes.BOOLEAN,
  building_staff: DataTypes.BOOLEAN,
  cable_tv: DataTypes.BOOLEAN,
  essentials: DataTypes.BOOLEAN,
  garden: DataTypes.BOOLEAN,
  gym: DataTypes.BOOLEAN,
  hair_dryer: DataTypes.BOOLEAN,
  hanger: DataTypes.BOOLEAN,
  heating: DataTypes.BOOLEAN,
  hot_water: DataTypes.BOOLEAN,
  kitchen: DataTypes.BOOLEAN,
  linens: DataTypes.BOOLEAN,
  lock: DataTypes.BOOLEAN,
  luggage_drop_off: DataTypes.BOOLEAN,
  parking: DataTypes.BOOLEAN,
  pool: DataTypes.BOOLEAN,
  private_entrance: DataTypes.BOOLEAN,
  shampoo: DataTypes.BOOLEAN,
  tv: DataTypes.BOOLEAN,
  washer: DataTypes.BOOLEAN,
  wifi: DataTypes.BOOLEAN,
  workspace: DataTypes.BOOLEAN,
  lat: DataTypes.DECIMAL,
  lng: DataTypes.DECIMAL,
  distance_to_coastline: DataTypes.DECIMAL,
  area_distance_to_airport: DataTypes.DECIMAL,
  property_bedrooms: DataTypes.DECIMAL,
  average_baseline_price: DataTypes.DECIMAL,
  area_name: DataTypes.DECIMAL,
  total_fas: DataTypes.DECIMAL,
  ratio_bedroom_bathroom: DataTypes.INTEGER,
  ratio_bedroom_cap: DataTypes.INTEGER,
  avg_price_distance_to_coast: DataTypes.DECIMAL,
  avg_price_distance_to_airport: DataTypes.DECIMAL,
  avg_price_bedroom: DataTypes.DECIMAL,
  avg_price_beds: DataTypes.DECIMAL,
  avg_price_bathroom: DataTypes.DECIMAL,
  avg_price_total_fas: DataTypes.DECIMAL,
  rating: DataTypes.DECIMAL,
  review_sentiment_score: DataTypes.DECIMAL,
  communication: DataTypes.DECIMAL,
  cleanliness: DataTypes.DECIMAL,
  accuracy: DataTypes.DECIMAL,
  price_fluctuation: DataTypes.DECIMAL,
  total_review_score: DataTypes.DECIMAL,
  id_property: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Property',
    }
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Room = class Room extends Model { };

Room.init(RoomAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
  allowNull: true,
});

module.exports = Room;

// month: DataTypes.STRING,
//   contain_national_holiday: DataTypes.BOOLEAN,
//   stay_duration: DataTypes.INTEGER,
//   booking_day_of_week: DataTypes.INTEGER,
//   booking_lead_time: DataTypes.INTEGER,