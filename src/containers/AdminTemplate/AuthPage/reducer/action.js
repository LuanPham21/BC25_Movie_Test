import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actLoginAuthRequest);
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   method: "POST",
    //   data: user,
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo",
    //   },
    // })
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        //Check maLoaiNguoiDung
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          //Bao Loi
          return Promise.reject({
            response: {
              data: {
                content: "Tài khoản không có quyền truy cập!",
              },
            },
          });
        }
        dispatch(actLoginAuthSuccess(result.data.content));

        //Lưu thông tin user xuống locaStorage
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        alert("Đăng nhập thành công");

        //Redirect to /admin
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        dispatch(actLoginAuthFailed(error));
      });
  };
};

export const actLoginAuthRequest = () => {
  return {
    type: ActionType.LOGIN_AUTH_REQUEST,
  };
};

export const actLoginAuthSuccess = (data) => {
  return {
    type: ActionType.LOGIN_AUTH_SUCCESS,
    payload: data,
  };
};

export const actLoginAuthFailed = (data) => {
  return {
    type: ActionType.LOGIN_AUTH_FAILED,
    payload: data,
  };
};
