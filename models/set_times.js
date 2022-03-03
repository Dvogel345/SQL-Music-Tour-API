'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({Band, Event, Stage}) {
     // band
     SetTime.belongsTo(Band, {
      foreignKey: "band_id",
      as: "bands"
    })

    // event
    SetTime.belongsTo(Event, {
      foreignKey: "event_id",
      as: "events"
    })

    // stage 
    SetTime.belongsTo(Stage, {
      foreignKey: "stage_id",
      as: "stages"
    })
    }
  }
  SetTime.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_greet_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false,
  });
  return SetTime;
};