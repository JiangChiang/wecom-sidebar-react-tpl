/// <reference types="react-scripts" />
import {JsSDK} from "./lib/jsSdk";

declare global {
  interface Window {
    // 外部控制是否为 mock
    isMock?: boolean;
    // mock userId
    _mockUserId: string,
    // wx.invoke 里的 Mock 关系表，apiName -> result
    _invokeResMock?: Partial<JsSDK>;
    // 企业微信的 JsSdk 的 Mock 关系表，fnName -> result
    _wxResMock?: Partial<JsSDK>;
  }
}
