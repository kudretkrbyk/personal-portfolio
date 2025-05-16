import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./src/slices/projectSlice";

import contactSlice from "./src/slices/projectSlice";
import themeReducer from "./src/slices/projectSlice";
import authReducer from "./src/slices/projectSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    contact: contactSlice, // ✅ doğru isim (state.contact olarak kullanılıyor)
    theme: themeReducer,
    auth: authReducer, // ✅ doğru isim (state.auth olarak kullanılıyor)
  },
});
