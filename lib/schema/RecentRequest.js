module.exports = function (sequelize, DataTypes) {
  const RecentRequest = sequelize.define('RecentRequest', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    command: {
      type: DataTypes.STRING,
    },
    resource: {
      type: DataTypes.STRING,
    },
    args: {
      type: DataTypes.STRING,
    },
    header: {
      type: DataTypes.TEXT,
    },
    response: {
      type: DataTypes.TEXT,
    },
  });

  return RecentRequest;
};
