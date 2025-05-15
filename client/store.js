import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import contactSlice from "./slices/contactSlice";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    contact: contactSlice, // ✅ doğru isim (state.contact olarak kullanılıyor)
    theme: themeReducer,
    auth: authReducer, // ✅ doğru isim (state.auth olarak kullanılıyor)
  },
});
