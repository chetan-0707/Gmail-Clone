// import { createSlice } from "@reduxjs/toolkit";


// const appSlice = createSlice({
//     name:"appSlice",
//     initialState:{
//         open:false,
//         emails:[],
//         selectedEmail:null,
//         searchText:"",
//         user:null,
//     },
//     reducers:{
//         //actions
//         setOpen:(state,action)=>{
//             state.open = action.payload;
//         },

//         setEmails:(state,action)=>{
//             state.emails = action.payload;
//         },

//         setSelectedEmail:(state,action)=>{
//             state.selectedEmail = action.payload;
//         },

//         setSearchText:(state,action)=>{
//             state.searchText = action.payload;
//         },

//         setUser:(state,action)=>{
//             state.user = action.payload;
//         },


//     }
// });
// export const {setOpen , setEmails,setSelectedEmail,setSearchText,setUser} = appSlice.actions;
// export default appSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: false,
        selectedMail: null,
        searchText: "",
        emails: null, // This might need to be initialized as an array or object depending on your application logic
        authUser: null
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setSelectedMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setEmails: (state, action) => {
             state.emails = action.payload;
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        }
    }
});

export const {
    setOpen,
    setSelectedMail,
    setSearchText,
    setEmails,
    setAuthUser
} = appSlice.actions;

export default appSlice.reducer;