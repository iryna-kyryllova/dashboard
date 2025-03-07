import { classNames } from './classNames'

describe('classNames', () => {
  test('with only className', () => {
    expect(classNames('someClassName')).toBe('someClassName')
  })

  test('with className and additional classes', () => {
    const result = 'someClassName secondClassName thirdClassName'
    expect(classNames('someClassName', ['secondClassName', 'thirdClassName'])).toBe(result)
  })

  test('with className, additional classes and mods', () => {
    const result = 'someClassName secondClassName thirdClassName fourthClassName'
    expect(
      classNames('someClassName', ['secondClassName', 'thirdClassName'], {
        fourthClassName: true,
        fifthClassName: false
      })
    ).toBe(result)
  })
})
