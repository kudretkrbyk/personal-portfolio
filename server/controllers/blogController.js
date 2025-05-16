const Blog = require("../models/blog");
const { sanityFunction } = require("../middleware/sanityFunction");

// TÜM BLOGLARI GETİR
const getAll = async (req, res) => {
  try {
    const response = await Blog.findAll({ order: [["publishedAt", "DESC"]] });
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// TEK BİR BLOGU SLUG İLE GETİR
const getBySlug = async (req, res) => {
  try {
    const slug = sanityFunction(req.params.slug);
    if (!slug) {
      return res.status(400).send({ success: false, message: "Geçersiz slug" });
    }

    const response = await Blog.findOne({ where: { slug } });
    if (!response) {
      return res
        .status(404)
        .send({ success: false, message: "Blog bulunamadı" });
    }

    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// ID İLE GETİR
const getById = async (req, res) => {
  try {
    const id = sanityFunction(req.params.id);
    if (!id) {
      return res.status(400).send({ success: false, message: "Geçersiz ID" });
    }

    const response = await Blog.findByPk(id);
    if (!response) {
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    res.send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// YENİ BLOG EKLE
const addData = async (req, res) => {
  try {
    const { title, slug, content } = req.body;
    const s_title = sanityFunction(title);
    const s_slug = sanityFunction(slug);
    const s_content = sanityFunction(content);
    const image = req.file ? "/uploads/" + req.file.filename : null;

    if (!s_title || !s_slug || !s_content) {
      return res.status(400).send({
        success: false,
        message: "Lütfen geçerli veriler ile tekrar deneyiniz!",
      });
    }

    const response = await Blog.create({
      title: s_title,
      slug: s_slug,
      content: s_content,
      image,
    });

    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// BLOG GÜNCELLE
const updateById = async (req, res) => {
  try {
    const id = sanityFunction(req.params.id);
    const { title, slug, content } = req.body;
    const s_title = sanityFunction(title);
    const s_slug = sanityFunction(slug);
    const s_content = sanityFunction(content);
    const image = req.file ? "/uploads/" + req.file.filename : undefined;

    if (!id || !s_title || !s_slug || !s_content) {
      return res.status(400).send({
        success: false,
        message: "Lütfen geçerli veriler ile tekrar deneyiniz!",
      });
    }

    const updateData = { title: s_title, slug: s_slug, content: s_content };
    if (image) updateData.image = image;

    const response = await Blog.update(updateData, {
      where: { id },
    });

    if (response[0] === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    res.send({ success: true, message: `id=${id} güncellendi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// SİL
const deleteById = async (req, res) => {
  try {
    const id = sanityFunction(req.params.id);
    if (!id) {
      return res.status(400).send({ success: false, message: "Geçersiz ID" });
    }

    const response = await Blog.destroy({ where: { id } });
    if (response === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Kayıt bulunamadı" });
    }

    res.send({ success: true, message: `id=${id} silindi` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  getBySlug,
  getById,
  addData,
  updateById,
  deleteById,
};
