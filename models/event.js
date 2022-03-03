'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({Stage, StageEvent, MeetGreet, SetTime}) {
      //stages
      Event.belongsToMany(Stage, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
      // meet and greets 
      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greets"
      })

      // set times 
      Event.hasMany(SetTime, {
        foreignKey: "event_id",
        as: "set_times"
      })
    }
  }
  Event.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    date: DataTypes.DATE,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false,
  });
  return Event;
};