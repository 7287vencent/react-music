// 大于1 万的数字变 万
// 例 36575 => 3.65 万
export function toFix(num) {
  return num > 10000 ? `${(num / 10000).toFixed(2)}万` : num
}