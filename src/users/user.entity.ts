import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.NUMBER,
        unique: true,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    mobile: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    home_phone: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    zip_code: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    home_address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    work_address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    is_admin: string;

    @Column({
        type: DataType.ENUM,
        values: ['ACTIVE', 'DEACTIVE', 'SUSPENDED', 'PENDING'],
        allowNull: false,
    })
    state: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    createdAt: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    updatedAt: string;
}
