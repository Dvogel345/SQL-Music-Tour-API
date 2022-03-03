'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_times extends Model {
    static associate({Band, Event, Stage}) {
     // band
     SetTime.belongsTo(Band, {
      foreignKey: "band_id",
      as: "band"
    })

    // event
    SetTime.belongsTo(Event, {
      foreignKey: "event_id",
      as: "event"
    })

    // stage 
    SetTime.belongsTo(Stage, {
      foreignKey: "stage_id",
      as: "stage"
    })
    }
  }
  set_times.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_greet_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'set-times',
  });
  return set_times;
};