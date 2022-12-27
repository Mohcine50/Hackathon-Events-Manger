import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const API_URL = "http://localhost:3000";

export const getProfile = createAsyncThunk("profile/getProfile", 
    
    async (profileId:string,thunkAPI) =>{
        try{
            const res = await fetch(`${API_URL}/api/profile/${profileId}`,{ credentials: "include" })
            const data = await res.json()
            return data
        }catch(error){
            console.log(error)
        }


})

export type TProfile = {
    image:string,
    bio:string,
    fullName:string
}

interface IProfile {
    profile: TProfile,
    loading: boolean
}

const initialState:IProfile ={
    profile:{} as TProfile,
    loading: false
}

const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getProfile.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getProfile.fulfilled, (state,action)=>{
            const data = action.payload
            console.log(data)
            if (!data.message){
                state.profile = data
            }
        })
    },
})


export default profileSlice.reducer