import { ApiClient } from "./hono";

function sayMyName() {
  ApiClient.airtime.$get();
  // const res = ApiClient.auth.reset_password_send_otp.$post({ form: { body: "", title: "" } })
  // const resD = ApiClient.auth[":id"].$delete({
  //   param: { id: "3" },
  //   form: { body: "", title: "" },
  // })
}
