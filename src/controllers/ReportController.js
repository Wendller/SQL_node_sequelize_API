const User = require("../models/User");
const { Op } = require("sequelize");

module.exports = {
  async show(re, res) {
    //? Encontrar todos os users com email @rocketseat.com.bt
    //? Users que moram na rua "Guilherme Gambala"
    //? Buscar as techs que começam com React

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@rocketseat.com.br"
        }
      },
      include: [
        { association: "addresses", where: { street: "Rua Guilherme Gembala" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%"
            }
          }
        }
      ]
    });

    return res.json(users);
  }
}