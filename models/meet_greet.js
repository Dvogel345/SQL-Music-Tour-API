// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')

// MODEL
class Meet_greet extends Model{}

Meet_greet.init({
    Band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    Event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    Meet_greet_id: { 
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
    modelName: 'Meet_greet',
    tableName: 'meet_greet',
    timestamps: false
}) 
// EXPORT
module.exports = Meet_greet