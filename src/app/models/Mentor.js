import Sequelize, { Model } from 'sequelize';

class Mentor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tel: Sequelize.STRING,
        address: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Mentor;
