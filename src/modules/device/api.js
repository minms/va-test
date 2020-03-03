import {VaHttp} from "va-core"

/**
 * 获取设备列表
 * @param filter
 * @returns {ActiveX.IXMLDOMNode | Promise<any> | any | string | IDBRequest<any | undefined> | FormDataEntryValue | Function}
 */
export function getDeviceItems(filter) {
  return VaHttp.get('/device/items', filter);
}