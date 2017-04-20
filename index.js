export default function waitForTarget (getTarget) {
  return new Promise(resolve => {
    function wait () {
      const target = getTarget()

      if (target) {
        resolve(target)
        return
      }

      setTimeout(() => {
        wait()
      }, 100)
    }

    wait()
  })
}
