import test from 'ava'
import waitFor from './index'

test('default', async t => {
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

test('timeout', async t => {
  let foo
  t.falsy(foo)
  const error = await t.throws(waitFor(() => foo, 250))
  t.falsy(foo)
  t.is(error.message, 'Waiting time is over')
})
