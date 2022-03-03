'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({Band, Event}) {
       // band
       MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands"
      })
      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })
    }
  }
  MeetGreet.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_greet_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false,
  });
  return MeetGreet;
};