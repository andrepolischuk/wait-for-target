export default function waitForTarget (getTarget, timeout = Infinity) {
  return new Promise((resolve, reject) => {
    const limit = Date.now() + timeout

    function wait () {
      const target = getTarget()

      if (target) {
        resolve(target)
        return
      }

      if (Date.now() > limit) {
        reject(new Error('Waiting time is over'))
        return
      }

      setTimeout(() => {
        wait()
      }, 100)
    }

    wait()
  })
}
