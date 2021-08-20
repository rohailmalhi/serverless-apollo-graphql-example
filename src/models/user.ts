
import { DataTypes, Optional, Model } from 'sequelize';
import { db } from './index'

const { sequelize } = db;

// Interface for user attributes
interface UserAttributes {
  id: Number
  email: String
  name: String
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

// Interface for user creation attribute
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'name'> {}

// User model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: Number;
  public email!: String;
  public name: String;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly deletedAt: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: DataTypes.STRING,
  name: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  tableName: 'users',
  sequelize,
});
