import { axiosInstance as axios } from "@/axios-api/axios";
import { AuthActionTypes } from "../redux/actionTypes";
import storageHelper from "@/utils/storage-helper";
import { loginUserByMailUrl } from "@/axios-api/Endpoint";

export const loginUserByMail = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_BY_MAIL_START,
    });
    const url = loginUserByMailUrl();

    const request = {
      email,
      password,
      type: 1,
    };
    axios
      .post(url, request)
      .then((res) => {
        const { data } = res;
        if (data.token && data.token !== "undefined") {
          loginUserByMailSuccess(dispatch, data);
        } else {
          loginUserByMailFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        loginUserByMailFail(dispatch, error?.response?.data?.message);
      });
  };
};
const loginUserByMailFail = (dispatch: any, errorMessage: any) => {
  dispatch({
    type: AuthActionTypes.LOGIN_USER_BY_MAIL_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    //TODO: Need to create a global modal for errors and handle it by global store to oopen it from anywhrer
    // dispatch(
    //   setCustomAlert({
    //     title: "Something Went Wrong",
    //     message: errorMessage,
    //     buttons: [
    //       {
    //         text: "Cancel",
    //         onPress: () => {},
    //         style: "cancel",
    //       },
    //     ],
    //     options: {},
    //     visibllity: true,
    //   }) as any,
    // );
  }
};
const loginUserByMailSuccess = (dispatch: any, data: any) => {
  storageHelper.saveItem(
    storageHelper.StorageKeys.USER_ID,
    data?.user?.user_id?._id?.toString(),
  );
  storageHelper.saveItem(
    storageHelper.StorageKeys.Access_Token,
    data?.token?.toString(),
  );

  dispatch({
    type: AuthActionTypes.LOGIN_USER_BY_MAIL_SUCCESS,
    payload: data,
  });
};
