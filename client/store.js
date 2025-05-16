import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./src/services/projectApi";
import { contactApi } from "./src/services/contactApi";
import authReducer from "./src/services/auth/authSlice";
import themeReducer from "./src/slices/themeSlice"; // varsayalım ayrı dosyada

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(projectApi.middleware)
      .concat(contactApi.middleware),
});
