import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
@Column({
    allowNull: false,
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
})
id: number;

@Column({
    allowNull: false,
    type: DataType.STRING,
})
email: string;

@Column({
    allowNull: false,
    type: DataType.STRING,
})
firstname: string;

@Column({
    allowNull: false,
    type: DataType.STRING,
})
lastname: string;

@Column({
    allowNull: false,
    type: DataType.STRING,
})
password: string;

}