'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate({Event, StageEvent, SetTime}) {
     // events 
     StageEvent.belongsToMany(Event, {
      foreignKey: "stage_id",
      as: "events",
      through: StageEvent
    })
    // set times 
    StageEvent.hasMany(SetTime, {
      foreignKey: "stage_id",
      as: "set_times"
    })
    }
  }
  StageEvent.init({
    stage_event_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false
  });
  return StageEvent;
};