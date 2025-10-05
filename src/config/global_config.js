require("dotenv").config();
const confidence = require("confidence");

const config = {
  host: process.env.APP_HOST,
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  frontendUrl: process.env.FE_URL,
  cors: {
    origins: process.env.CORS_ORIGINS,
  },
  postgresqlUrl: process.env.POSTGRESQL_URL || "postgresql://postgres:postgres@localhost:5432/sample",
  jwt: {
    accessSign: process.env.ACCESS_SIGN_OPTIONS,
    refreshSign: process.env.REFRESH_SIGN_OPTIONS,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
  basicAuth: {
    username: process.env.USERNAME_BASIC,
    password: process.env.PASSWORD_BASIC,
  },
  googleAuth: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    secretKey: process.env.GOOGLE_SECRET_KEY,
  },
  r2BucketAuth: {
    accApiToken: process.env.R2_ACCOUNT_API_TOKEN,
    accS3Client: process.env.ACCESS_S3_CLIENT,
    secS3Client: process.env.SECRET_S3_CLIENT,
    enpS3Client: process.env.ENDPOINT_S3_CLIENT,
    userApiToken: process.env.R2_USER_API_TOKEN,
    accS3User: process.env.ACCESS_S3_USER,
    secS3User: process.env.SECRET_S3_USER,
  },
};

const store = new confidence.Store(config);

exports.get = (key) => store.get(key);
