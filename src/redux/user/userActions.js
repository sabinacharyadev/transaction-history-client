// export const loginUserAction = () => {
//   return () => {};
// };

import { toast } from "react-toastify";
import { loginUser } from "../../axios/userAxios";
import { setUser } from "./userSlice";

export const loginUsersAction = (email, password) => async (dispatch) => {
  // build the payload
  // send api request to try login
  const response = await loginUser(email, password);
  if (response.status === "error") {
    return toast.error(response.message);
  }

  toast.success(response.message);

  // dispatch an action to update user state in redux
  dispatch(setUser(response.data));
};
