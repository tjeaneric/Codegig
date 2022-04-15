import dotenv from "dotenv";

dotenv.config();

const config = {
  development: {
    port: process.env.PORT,
    DB: process.env.DEVDB,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  test: {
    port: process.env.TEST_PORT,
    DB: process.env.TESTDB,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  production: {
    port: process.env.PRODPORT,
    DB: process.env.DEVDB,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
const currentConfig = config[process.env.NODE_ENV];

export default currentConfig;
