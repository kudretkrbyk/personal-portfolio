const Project = require("../models/projects");
const { sanityFunction } = require("../middleware/sanityFunction");

const getAll = async (req, res) => {
  console.log("getAll çalıştı");
  try {
    const response = await Project.findAll();
    console.log(response);
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const addData = async (req, res) => {
  try {
    let { title, tag, description, image, liveview, github } = req.body;
    const s_title = sanityFunction(title);
    const s_tag = sanityFunction(tag);
    const s_description = sanityFunction(description);
    const s_image = sanityFunction(image);
    const s_liveview = sanityFunction(liveview);
    const s_github = sanityFunction(github);

    if (
      !s_title ||
      !s_tag ||
      !s_description ||
      !s_image ||
      !s_liveview ||
      !s_github
    ) {
      return res.status(400).send({
        success: false,
        message: "Lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }

    const response = await Project.create({
      title,
      tag,
      description,
      image,
      liveview,
      github,
    });

    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      return res
        .status(400)
        .send({ success: false, message: "Lütfen geçerli bir ID giriniz" });
    }

    const response = await Project.findByPk(id);
    if (!response) {
      return res
        .status(404)
        .send({ success: false, message: "Proje bulunamadı" });
    }

    return res.send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    let { title, tag, description, image, liveview, github } = req.body;

    const s_title = sanityFunction(title);
    const s_tag = sanityFunction(tag);
    const s_description = sanityFunction(description);
    const s_image = sanityFunction(image);
    const s_liveview = sanityFunction(liveview);
    const s_github = sanityFunction(github);

    if (
      !s_id ||
      !s_title ||
      !s_tag ||
      !s_description ||
      !s_image ||
      !s_liveview ||
      !s_github
    ) {
      return res.status(400).send({
        success: false,
        message: "Lütfen geçerli veriler ile tekrar deneyiniz!!",
      });
    }

    const response = await Project.update(
      { title, tag, description, image, liveview, github },
      { where: { id: s_id } }
    );

    if (response[0] === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    return res.send({ success: true, message: `id=${id}, değer güncellendi` });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    let id = req.params.id;
    const s_id = sanityFunction(id);
    if (!s_id) {
      return res
        .status(400)
        .send({ success: false, message: "Lütfen geçerli bir ID giriniz" });
    }

    const response = await Project.destroy({ where: { id: s_id } });
    if (response === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    return res.send({ success: true, message: `id=${id}, değer silindi` });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  addData,
  getById,
  updateById,
  deleteById,
};
