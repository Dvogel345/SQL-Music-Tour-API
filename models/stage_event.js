// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')

// MODEL
class Stage_event extends Model{}

Stage_event.init({
    Stage_event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    Event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    Stage_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_event',
    timestamps: false
}) 
// EXPORT
module.exports = Stage_event