const { v4: uuidv4 } = require("uuid");
const Command = require("./command");
const Query = require("../queries/query");
const wrapper = require("../../../../helpers/utils/wrapper");
const logger = require("../../../../helpers/utils/logger");
const { NotFoundError, ConflictError, InternalServerError, BadRequestError } = require("../../../../helpers/errors");
const { compareHash, generateHash } = require("../../../../helpers/utils/hash_helper");
const { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } = require("../../../../helpers/auth/jwt_helper");
const ctx = "User-Command-Domain";

class User {
  constructor(db) {
    this.command = new Command(db);
    this.query = new Query(db);
  }

  async login(payload) {
    const { username, password } = payload;
    const user = await this.query.findOne({ username }, { id: 0, password: 1 });

    if (user.err) {
      logger.log(`${ctx}:generateCredential`, user.err, "User not found");
      return wrapper.error(new NotFoundError("Wrong username or password"));
    }

    const passwordMatch = await compareHash(password, user.data.password);
    if (!passwordMatch) {
      return wrapper.error(new BadRequestError("Wrong username or password"));
    }
    delete user.data.password;

    const token = await generateAccessToken(user.data);
    const refreshToken = await generateRefreshToken({ id: user.data.id });

    return wrapper.data({ token, refreshToken });
  }

  async registerWorker(payload) {
    const { username, password, email } = payload;
    const stdUsername = username.toLowerCase().trim();
    const hashPassword = await generateHash(password);

    const user = await this.query.findOne({ username });
    if (user.data) {
      return wrapper.error(new ConflictError("Username already exist"));
    }

    const data = {
      id: uuidv4(),
      username: stdUsername,
      password: hashPassword,
      email: email,
      role_id: 1,
    };

    const result = await this.command.insertOne(data);
    if (result.err) {
      logger.error(ctx, "register", "Register Failed", result.err);
      return wrapper.error(new InternalServerError("Register Failed"));
    }
    delete data.password;

    return wrapper.data({ id: data.id });
  }

  async registerRecruiter(payload) {
    const { username, password, email } = payload;
    const stdUsername = username.toLowerCase().trim();
    const hashPassword = await generateHash(password);

    const user = await this.query.findOne({ username });
    if (user.data) {
      return wrapper.error(new ConflictError("Username already exist"));
    }

    const data = {
      id: uuidv4(),
      username: stdUsername,
      password: hashPassword,
      email: email,
      role_id: 2,
    };

    const result = await this.command.insertOne(data);
    if (result.err) {
      logger.error(ctx, "register", "Register Failed", result.err);
      return wrapper.error(new InternalServerError("Register Failed"));
    }
    delete data.password;

    return wrapper.data({ id: data.id });
  }

  async logout(payload) {
    const { token } = payload;
    const checkedToken = await verifyAccessToken(token);
    if (checkedToken.err) {
      logger.log(ctx, checkedToken.err, checkedToken.err.message);
      return wrapper.error(checkedToken.err);
    }

    return wrapper.data("Logout Success");
  }

  async deleteUser(payload) {
    const { id, user_online_id } = payload;

    const user = await this.query.findOne({ id }, { id: 1 });
    if (user.err) {
      return wrapper.error(new NotFoundError("User not found"));
    }

    if (user.data.id === user_online_id) {
      return wrapper.error(new ConflictError("Not allowed to delete your own account"));
    }

    const result = await this.command.deleteOne({ id });
    if (result.err) {
      logger.error(ctx, "deleteUser", "can not delete user", result.err);
      return wrapper.error(new InternalServerError("Can not delete user"));
    }
    return wrapper.data("User successfully deleted");
  }

  async refreshToken(payload) {
    const { token } = payload;
    const checkedToken = await verifyRefreshToken(token);
    if (checkedToken.err) {
      logger.log(ctx, checkedToken.err, checkedToken.err.message);
      return wrapper.error(checkedToken.err);
    }

    const userData = await this.query.findOneById(checkedToken.data.id);
    if (userData.err) {
      logger.error(ctx, "findUser", "User not found", userData.err);
      return wrapper.error(new NotFoundError("User Not Found"));
    }

    const accessToken = await generateAccessToken(userData);
    return wrapper.data({
      token: accessToken,
    });
  }

  // async updateUser(payload){}
}

module.exports = User;
