export default class IdGenerator {
  static numericId (): number {
    const rand = Math.floor(Math.random() * 100)
    const timestamp = Date.now()
    return parseInt(`${timestamp}${rand}`)
  }
}
