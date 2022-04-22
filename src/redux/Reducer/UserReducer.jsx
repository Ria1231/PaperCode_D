const userData = {
    users: [
      {
        id: 1,
        CardNo: 'asdad',
        Name: "Riya",
        MobileNumber: "432535435asd",
        Gender: 'male',
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
          case "UPDATE_USER": {
            console.log(action.payload);
            return {
              ...state,
              users: state.users.map((user) =>
              user.id == action.payload.id ? action.payload : user
              ),
            };
          }
          case "GET_USER":
            {
              console.log("getconatct", action.payload);
              let data = state.users.filter(
                (user) => user.id == action.payload
              );
      
              data = data.values();
              
              for (let val of data) {
                data = val;
              }
              console.log("getReducer", data);
              return {
                ...state,
                user: data,
              };
      
            }
          default:
            return state;      
        }
  }