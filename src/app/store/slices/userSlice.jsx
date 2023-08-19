import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",

    initialState: [],    //to store data

    reducers: {
        addNews(state, action) {
            state.push(action.payload)   //jo bhi action hua hoga usko push krdena
            console.log("state",state);
        },
        removeNews(state, action) {
            state.splice(action.payload, 1) //(datafromUser , no. of data to del)
        },
        deleteNews(state, action) {

            //return state = []  //not the correct way becoz its assigning the new value to state
            return []
        }
    },
    // we can create extra reducers using the bwlow method
    //extraReducers means ek aisa reducer jo multiple slices me chiye 
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.deleteUsers , (state,actions) => {
    //         return []
    //     })
    // }
})

console.log("use slice name", userSlice.actions);

//export {userSlice}      //export slice

export const { addNews, removeNews, deleteNews } = userSlice.actions;
// destructure the reducers and export by userSlice.actions
//export action creaters also