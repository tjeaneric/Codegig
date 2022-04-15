import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database';

const Gig = db.define('gig', {
  title: {
    type: DataTypes.STRING,
  },
  technologies: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
});

export default Gig;
