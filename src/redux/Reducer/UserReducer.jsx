const userData = {
    users: [
      {
        id: 1,
        CardNo: 1242534645,
        Name: "Riya",
        MobileNumber: "4325354354325",
        Gender: 'Female',
      },
      {
        id: 2,
        CardNo: 1242534645,
        Name: "Riya",
        MobileNumber: "4325354354325",
        Gender: 'Female',
      }
    ]  
  }

export const UserReducer = (state = userData, action) => {
    switch (action.type) {
        case "CREATE_USER":
          {
            console.log("addReducer", action)
            console.log("state", state)
            return {
              ...state,
              users: [action.payload, ...state.users],
            };    
          }
          case "DELETE_USER":
            {              
              return {
                ...state,
                users: state.users.filter(
                  (user) => user.id != action.payload
                ),
              };
      
            }
          default:
            return state;      
        }
  }