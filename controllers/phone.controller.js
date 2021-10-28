const { Phone } = require('./../models');
const _ = require('lodash');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      rew: true,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'],
      },
      limit: 5,
    });

    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const [foundPhone] = await Phone.findAll({
      raw: true,
      where: { id: phoneId },
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'],
      },
    });
    if (foundPhone) {
      res.status(200).send(foundPhone);
    } else {
      res.status(404).send('Phone not found');
    }
  } catch (e) {
    next(e);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    const preparedPhone = _.omit(createdPhone.get(), [
      'id',
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send(preparedPhone);
  } catch (e) {
    next(e);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    const [updatedPhoneCount, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      returning: true,
    });

    if (updatedPhoneCount > 0) {
      const preparedPhone = _.omit(updatedPhone.get(), [
        'id',
        'createdAt',
        'updatedAt',
      ]);
      return res.status(204).send();
    }
    res.status(404).send('Phone Not Found');
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedPhonesCount = await Phone.destroy({ where: { id: phoneId } });

    if (deletedPhonesCount > 0) {
      return res.status(204).send();
    }
    res.status(404).send('Phone not found');
  } catch (e) {
    next(e);
  }
};
