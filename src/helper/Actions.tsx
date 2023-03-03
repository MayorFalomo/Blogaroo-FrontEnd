//Here we define our LoginStart as LOGIN_START and we are exporting it so it's of course avaialble for us when we call it in a
export const LoginStart = (userCredentials?: {
  email: string;
  password: string;
}): { type: string } => ({
  type: "LOGIN_START",
});

//Here we define our action LoginSuccess type as "LOGIN_SUCCESS"
//I'm not sure what payload is yet
export const LoginSuccess = (user?: any) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const LoginOut = () => ({
  type: "LOG_OUT",
});

type UpdateStartAction = {
  type: "UPDATE_START";
  userCredentials?: any;
};

export const UpdateStart = (userCredentials?: any): UpdateStartAction => ({
  type: "UPDATE_START",
  userCredentials,
});
// export const UpdateStart = (userCredentials) => ({
//   type: "UPDATE_START",
// });

//Here we define our action LoginSuccess type as "LOGIN_SUCCESS"
//I'm not sure what payload is yet
export const UpdateSuccess = (user?: any) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
