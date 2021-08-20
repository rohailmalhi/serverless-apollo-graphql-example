import { DataTypes, Model, Optional } from "sequelize";
import { db } from './index';

const { sequelize } = db;

//Interface for trip attributes
interface TripAttributes {
    id: Number
    launchId: Number
    userId: Number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}

//Interface for trip creation attributes
interface TripCreationAttributes extends Optional<TripAttributes, 'id'> {}

/**
 * Trip model
 */
class Trip extends Model<TripAttributes, TripCreationAttributes> implements TripAttributes {
    public id!: Number;
    public launchId!: Number;
    public userId!: Number;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    launchId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
}, {
    tableName: 'trips',
    sequelize
});