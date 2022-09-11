import { configureStore } from '@reduxjs/toolkit'
import previewSlice from "./feature/preview_handle"
import purchaseSlice from "./feature/purchase_sys"
export const store = configureStore({
  reducer: {
    preview:previewSlice,
    purchase:purchaseSlice

  },
})