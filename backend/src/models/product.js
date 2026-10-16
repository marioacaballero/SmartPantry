import { DataTypes } from "sequelize";

export const product = (sequelize) => {
  sequelize.define(
    "product",
    {
      codigoDeBarras: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombreVisible: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      nutriScore: {
        type: DataTypes.FLOAT,
      },
      nova: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
    },
  );
};
