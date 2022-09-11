import { createSlice } from '@reduxjs/toolkit'
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"

const initialState = {
    thumbnails:[thumbnail1,thumbnail2,thumbnail3,thumbnail4],
    images:[image1,image2,image3,image4],
    currentImage:{
        id:0,
        data:''
    },
    fullScreenPreview:false
}

export const previewSlice = createSlice({
    name: 'preview',
    initialState,
    reducers: {
        setCurrent(state,action){
            state.currentImage = action.payload
            
        },
        setFullScreen(state,action){
            state.fullScreenPreview= action.payload
        },
        prev(state){
            const id = state.currentImage.id===0?3:state.currentImage.id-1
            state.currentImage={
                id,
                data:state.images[id]
            }
        },
        next(state){
            const id = state.currentImage.id===3?0:state.currentImage.id+1

            state.currentImage={
                id,
                data:state.images[id]
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrent,setFullScreen ,prev,next} = previewSlice.actions

export default previewSlice.reducer