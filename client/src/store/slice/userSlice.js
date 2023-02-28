import {createSlice} from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email: "",
        isAdmin: false,
        isLogged: false
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                email: action.payload.user.email,
                isAdmin: action.payload.user.isAdmin,
                isLogged: true

            }
        }
    }
})


export const {addUser} = userSlice.actions

export default userSlice.reducer