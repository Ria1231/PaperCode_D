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