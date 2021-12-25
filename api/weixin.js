import request from "@/utils/request";

export default {
  getLoginParam() {
    return request({
      url: `/api/ucenter/wx/getLoginParam`,
      method: `get`,
    });
  },
  //生成微信支付的二维码
  createNative(orderId) {
    return request({
      url: `/api/order/weixin/createNative/${orderId}`,
      method: "get",
    });
  },
  //查询支付状态的接口
  queryPayStatus(orderId) {
    return request({
      url: `/api/order/weixin/queryPayStatus/${orderId}`,
      method: "get",
    });
  },
};
