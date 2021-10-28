const { cpu } = require('../models');

module.exports.getCPUs = async (req, res, next) => {
  try {
    const foundCPUs = await cpu.findAll({
      raw: true,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'],
      },
      limit: 5,
    });

    res.status(200).send(foundCPUs);
  } catch (e) {
    next(e);
  }
};
