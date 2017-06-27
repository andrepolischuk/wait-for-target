export default function waitForTarget (getTarget, timeout = Infinity) {
  return new Promise((resolve, reject) => {
    const limit = Date.now() + timeout

    function wait () {
      const target = getTarget()

      if (Date.now() >= limit) {
        reject(new Error('Waiting time is over'))
        return
      }

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
