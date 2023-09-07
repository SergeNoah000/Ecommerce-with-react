module.exports = (sequelize , DataTypes) => {
    return sequelize.define('admin' , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {                                                                
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })}