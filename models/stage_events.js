'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_events extends Model {
    static associate({Event, StageEvent, SetTime}) {
     // events 
     Stage.belongsToMany(Event, {
      foreignKey: "stage_id",
      as: "events",
      through: StageEvent
    })
    // set times 
    Stage.hasMany(SetTime, {
      foreignKey: "stage_id",
      as: "set_times"
    })
    }
  }
  stage_events.init({
    stage_event_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'stage-events',
  });
  return stage_events;
};