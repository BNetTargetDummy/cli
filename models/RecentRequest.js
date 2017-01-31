module.exports = function(sequelize, DataTypes) {
  RecentRequest = sequelize.define("RecentRequest", {
     id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true
     },
     command: {
       type: DataTypes.STRING
     },
     arguments: {
       type: DataTypes.TEXT
     },
     header: {
       type: DataTypes.TEXT
     },
     response: {
       type: DataTypes.TEXT
     }
   });
  return RecentRequest;
};
