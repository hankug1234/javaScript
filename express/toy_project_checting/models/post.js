const Sequelize = require('sequelize');

 module.exports = class Post extends Sequelize.Model{
   static init(sequelize){
     return super.init({
       content:{
         type: Sequelize.STRING(100),
         allowNull:false,
       },
       img:{
         type:Sequelize.STRING(200),
         allowNull: true,
       },
       sequelize,
       timestamps:true,
       underscored:false,
       modelName:'Post',
       talbeName:'posts',
       paranoid:false,
       charset:'utf8mb4',
       collate: 'utf8mb4_general_ci'
     },
   );
   }

   static associate(db){}
 };
