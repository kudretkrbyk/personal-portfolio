require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const sequelize = require("./config/db.js");

const authRoutes = require("./routes/authRoutes.js");
const { projectsRoutes } = require("./routes/projectsRoutes.js");
const { contactRoutes } = require("./routes/contactRoutes.js");
const { blogRoutes } = require("./routes/blogRoutes.js");

const app = express();

// Statik klasör (görseller için)
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use(cors());
app.use(express.json());

// Rotalar
app.use("/api", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/blogs", blogRoutes);

// Veritabanı bağlantısı
(async () => {
  await sequelize.sync({ force: false }); // Verileri silmesin
  // await dummyData(); // opsiyonel
})();

// Server başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
