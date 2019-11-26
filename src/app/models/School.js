import Sequelize, { Model } from 'sequelize';

class School extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tel: Sequelize.STRING,
        address: Sequelize.STRING,
        director: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default School;
