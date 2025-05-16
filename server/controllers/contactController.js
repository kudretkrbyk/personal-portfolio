const Contact = require("../models/contact");
const { sanityFunction } = require("../middleware/sanityFunction");
const sendEmail = require("../utils/sendEmail");

const getAll = async (req, res) => {
  try {
    const response = await Contact.findAll();
    console.log(response);
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const addData = async (req, res) => {
  try {
    let { name, email, message, subject } = req.body;
    const s_name = sanityFunction(name);
    const s_email = sanityFunction(email);
    const s_message = sanityFunction(message);
    const s_subject = sanityFunction(subject);

    if (!s_name || !s_email || !s_message || !s_subject) {
      res.send({
        success: false,
        message: "lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }
    await sendEmail({ name, email, subject, message });

    const response = await Contact.create({
      name: name,
      email: email,
      message: message,
      subject: subject,
    });

    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      res.send({ success: false, message: "lütfen geçerli bir id giriniz" });
    }

    const response = await Contact.findByPk(id);
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateById = async (req, res) => {
  try {
    let { name, email, message, subject } = req.body;
    const s_name = sanityFunction(name);
    const s_email = sanityFunction(email);
    const s_message = sanityFunction(message);
    const s_subject = sanityFunction(subject);

    if (!s_name || !s_email || !s_message || !s_subject) {
      res.send({
        success: false,
        message: "lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }
    const response = await Contact.update(
      {
        name: name,
        email: email,
        message: message,
        subject: subject,
      },
      {
        where: { id: id },
      }
    );
    if (response[0] === 0) {
      // Bu bir "iş kuralı" kontrolüdür (örneğin: böyle bir kayıt yok)
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    res.send({ success: true, message: ` id=${id}, değer güncellendi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      res.send({ success: false, message: "lütfen geçerli bir id giriniz" });
    }

    const response = await Contact.destroy({
      where: { id: id },
    });
    if (response === 0) {
      // Bu bir "iş kuralı" kontrolüdür (örneğin: böyle bir kayıt yok)
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }
    res.send({ success: true, message: ` id=${id}, değer silindi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  deleteById,
  getById,
  addData,
  updateById,
};
