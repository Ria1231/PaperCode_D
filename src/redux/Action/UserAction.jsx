export const AddUser = (userdata) => (
    console.log("addUserAction", userdata),
    {
        type: "CREATE_USER",
        payload: userdata,
    }
);

export const DeleteUser = (userdata) => (
    console.log("DeleteUserAction", userdata),
    {
        type: "DELETE_USER",
        payload: userdata,    
    },
    console.log('deleted')
);

export const UpdateUser = (userdata) => (
    console.log("updateUserAction", userdata),
    {
        type: "UPDATE_USER",
        payload: userdata,    
    },
    console.log('updated')
);

export const GetUser = (userdata) => (
    console.log("getUserAction", userdata),
    {
        type: "GET_USER",
        payload: userdata,
    
    }
);