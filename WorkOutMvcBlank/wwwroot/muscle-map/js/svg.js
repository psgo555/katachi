function loadMusclePart(src, slotSelector) {
  const slot = document.querySelector(slotSelector)
  if (!slot) return

  fetch(src)
    .then(res => res.text())
    .then(svgText => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(
        `<svg xmlns="http://www.w3.org/2000/svg">${svgText}</svg>`,
        'image/svg+xml'
      )

      const loadedGroup = doc.querySelector('g')
      if (!loadedGroup) return

      slot.appendChild(loadedGroup)
    })
    .catch(err => {
      console.error(`載入失敗: ${src}`, err)
    })
}
// 斜方
loadMusclePart('/muscle-map/svg/simple/frontTrapeziusLeft.svg', '#frontTrapezius-slot')
loadMusclePart('/muscle-map/svg/simple/frontTrapeziusRight.svg', '#frontTrapezius-slot')
// 三角肌
loadMusclePart('/muscle-map/svg/simple/frontDeltoidLeft.svg', '#frontDeltoidLeft-slot')
loadMusclePart('/muscle-map/svg/simple/frontDeltoidRight.svg', '#frontDeltoidRight-slot')
// 二頭
loadMusclePart('/muscle-map/svg/simple/bicepsLeft.svg', '#bicepsLeft-slot')
loadMusclePart('/muscle-map/svg/simple/bicepsRight.svg', '#bicepsRight-slot')
// 前臂
loadMusclePart('/muscle-map/svg/simple/frontForearmLeft.svg', '#frontForearm-slot')
loadMusclePart('/muscle-map/svg/simple/frontForearmRight.svg', '#frontForearm-slot')
// 胸大肌
loadMusclePart('/muscle-map/svg/simple/chestLeft.svg', '#chest-slot')
loadMusclePart('/muscle-map/svg/simple/chestRight.svg', '#chest-slot')
// 腹肌
loadMusclePart('/muscle-map/svg/simple/absLeftUp.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absLeftMid.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absLeftDown.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absRightUp.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absRightMid.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absRightDown.svg', '#abs-slot')
loadMusclePart('/muscle-map/svg/simple/absDown.svg', '#abs-slot')
// 側腹
loadMusclePart('/muscle-map/svg/simple/sideabsLeft.svg', '#sideabs-slot')
loadMusclePart('/muscle-map/svg/simple/sideabsRight.svg', '#sideabs-slot')
// 股四頭
loadMusclePart('/muscle-map/svg/simple/quadsLeft.svg', '#quads-slot')
loadMusclePart('/muscle-map/svg/simple/quadsRight.svg', '#quads-slot')
// 小腿前側
loadMusclePart('/muscle-map/svg/simple/shinLeftLeft.svg', '#shin-slot')
loadMusclePart('/muscle-map/svg/simple/shinLeftRight.svg', '#shin-slot')
loadMusclePart('/muscle-map/svg/simple/shinRightLeft.svg', '#shin-slot')
loadMusclePart('/muscle-map/svg/simple/shinRightRight.svg', '#shin-slot')
// 背部斜方肌
loadMusclePart('/muscle-map/svg/simple/backTrapeziusLeft.svg', '#backTrapezius-slot')
loadMusclePart('/muscle-map/svg/simple/backTrapeziusRight.svg', '#backTrapezius-slot')
// 後三角
loadMusclePart('/muscle-map/svg/simple/rearDeltLeft.svg', '#rearDelt-slot')
loadMusclePart('/muscle-map/svg/simple/rearDeltRight.svg', '#rearDelt-slot')
// 肱三頭
loadMusclePart('/muscle-map/svg/simple/tricepsLeft.svg', '#triceps-slot')
loadMusclePart('/muscle-map/svg/simple/tricepsRight.svg', '#triceps-slot')
// 背面前臂
loadMusclePart('/muscle-map/svg/simple/backForearmLeft.svg', '#backForearm-slot')
loadMusclePart('/muscle-map/svg/simple/backForearmRight.svg', '#backForearm-slot')
// 菱形肌
loadMusclePart('/muscle-map/svg/simple/rhomboidLeft.svg', '#rhomboid-slot')
loadMusclePart('/muscle-map/svg/simple/rhomboidRight.svg', '#rhomboid-slot')
// 背闊肌
loadMusclePart('/muscle-map/svg/simple/latsLeft.svg', '#lats-slot')
loadMusclePart('/muscle-map/svg/simple/latsRight.svg', '#lats-slot')
// 臀肌
loadMusclePart('/muscle-map/svg/simple/gluteLeft.svg', '#glute-slot')
loadMusclePart('/muscle-map/svg/simple/gluteRight.svg', '#glute-slot')
// 大腿後側
loadMusclePart('/muscle-map/svg/simple/hamstringLeft.svg', '#hamstring-slot')
loadMusclePart('/muscle-map/svg/simple/hamstringRight.svg', '#hamstring-slot')
// 小腿後側
loadMusclePart('/muscle-map/svg/simple/calvesLeft.svg', '#calves-slot')
loadMusclePart('/muscle-map/svg/simple/calvesRight.svg', '#calves-slot')

