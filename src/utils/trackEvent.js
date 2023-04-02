// operationType	操作类型	String	是
//     40 首页
//     41 登录页
//     42 创作页
//     43 支付弹窗
//     44 支付页面
//     45 我的页面
// operationStatus	操作状态	String	是
//     1 页面展示
//     2 点击按钮
//     3 点击切换套餐
//     4 支付成功
//     5 手动取消
//     6 点击返回按钮
//     7 作品结果展示
//     8 点击保存
//     9 点击上传图片
//     10 存在照片时，点击生成

// productId	  功能产品id	String	否	产品id
// subscribeId	  订阅产品id	String	否	支付产品id
// announcementId	公告ID	String	否	是公告过来的时候一定要传
// ui		        用户ID String	否
// styleIds		样式ID 多个以逗号隔开 String	否
import axios from "axios";

const operationTypeMapping = {
  home: 40,
  login: 41,
  create: 42,
  paymentPopup: 43,
  paymentPage: 44,
  myPage: 45,
};

const operationStatusMapping = {
  pageShow: 1,
  buttonClick: 2,
  switchPackage: 3,
  paymentSuccess: 4,
  manualCancel: 5,
  backButtonClick: 6,
  resultShow: 7,
  saveClick: 8,
  uploadImageClick: 9,
  generateClick: 10,
};

function trackEvent(operationTypeStr, operationStatusStr, options = {}) {
  const operationType = operationTypeMapping[operationTypeStr];
  const operationStatus = operationStatusMapping[operationStatusStr];

  // 验证 operationType 和 operationStatus 是否有效
  if (!operationType || !operationStatus) {
    console.error('Invalid operation type or status');
    return;
  }

  // 提取选项
  const {
    productId = null,
    subscribeId = null,
    announcementId = null,
    ui = null,
    styleIds = null,
    gender = null,
  } = options;

  // 构建埋点数据
  const eventData = {
    operationType,
    operationStatus,
    productId,
    subscribeId,
    announcementId,
    ui,
    styleIds,
    gender,
  };

  // 将 eventData 转换为 FormData
  const formData = new FormData();
  for (const key in eventData) {
    if (eventData.hasOwnProperty(key) && eventData[key] !== null && eventData[key] !== undefined && eventData[key] !== '') {
      formData.append(key, eventData[key]);
    }
  }

  // 发送埋点数据，替换为实际的发送方法
  sendEventDataToServer(formData);
}

async function sendEventDataToServer(formData) {
  // 实现发送埋点数据到服务器的方法
  const response = await axios.post("/api/DataBury/interface", formData);
  console.log("sendEventDataToServer", response);
}

export default trackEvent;


