const md5 = require('md5');
const { users } = require('../database/models');
const { createToken } = require('../utils/JWT.token');

const createUserService = async (info) => {
  try {
    const { name, email, password, role } = info;
    const criptedPassword = md5(password);
    const data = await users.create(
      {
        name,
        email,
        password: criptedPassword,
        role,
      },
    );
    const token = createToken({ data });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const findAllUserService = async () => {
  try {
    const data = await users.findAll({ attributes: { exclude: ['password'] } });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const findByIdUserService = async (id) => {
  try {
    const data = await users.findByPk(id);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUserService = async (id, info) => {
  try {
    const exist = await findByIdUserService(id);
    if (!exist) {
      return { message: 'Not Found' };
    }
    const data = await users.updateByPk(id, info);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUserService = async (id) => {
  await users.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  createUserService,
  findAllUserService,
  findByIdUserService,
  updateUserService,
  deleteUserService,
};