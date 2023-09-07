 module.exports = () => {
   return sequelize.define('produit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
            
          },
          nom_produit: {
            type: DataTypes.STRING,
            allowNull: false,
           
          },
          description_produit: {
            type: DataTypes.STRING,
            allowNull: false,
           
          },
          prix_produit: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
          },
         
          
          image_produit: {
            type: DataTypes.STRING,
            allowNull: true,
           
          },
         
        },
        {                                                                
          timestamps: true,
          createdAt: 'created',
          updatedAt: false
        }                                                             
        );
 }
 