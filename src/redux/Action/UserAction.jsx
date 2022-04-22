export const AddUser = (userdata) => (
    console.log("addUserAction", userdata),
    {
        type: "CREATE_USER",
        payload: userdata,
    }
);