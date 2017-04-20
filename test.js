import test from 'ava'
import waitFor from './index'

test(async t => {
  let foo

  setTimeout(() => {
    foo = {
      ready: true
    }
  }, 250)

  t.falsy(foo)
  const target = await waitFor(() => foo)
  t.deepEqual(target, {ready: true})
})
