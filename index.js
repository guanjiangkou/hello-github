// hello-github 入口：打印问候语和当前时间
const now = new Date();
const stamp = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  .toISOString()
  .replace('Z', '+08:00');

console.log('Hello, GitHub!');
console.log(`现在时间：${stamp}`);
