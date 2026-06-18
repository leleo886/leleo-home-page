// cookieUtils.js —— cookie 操作工具函数
// 提供 cookie 的写入、读取、删除能力，自动处理对象的 JSON 序列化 / 反序列化

// 写入 cookie
// @param {string} name   —— cookie 名称
// @param {*}      value  —— cookie 值（支持对象，会被 JSON 序列化）
// @param {number} days   —— 过期天数；0 或不传则为会话 cookie
export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  // 序列化对象为 JSON 字符串，并用 encodeURIComponent 转义后再写入
  document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + expires + "; path=/";
}
  
// 读取 cookie，自动将 JSON 字符串反序列化为对象
// @returns {* | null} 找到则返回解析后的值，否则返回 null
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      // 解析 JSON 字符串为对象（或基础类型）
      return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
    }
  }
  return null;
}
  
// 删除指定 cookie（通过设置 Max-Age 为负数使其立即失效）
export function eraseCookie(name) {   
  document.cookie = name + '=; Max-Age=-99999999;';  
}
