// Functions that interact with the database WRT burger

module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    bun: DataTypes.STRING,
    cheese: DataTypes.STRING,
    burger_type: DataTypes.STRING,
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  
  return Burger;
}
