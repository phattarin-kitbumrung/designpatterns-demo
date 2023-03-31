export class Identity {
  private static instance: Identity
  
  private constructor(public readonly name: string) {}
  
  public static getInstance(): Identity {
    if (!Identity.instance) {
      Identity.instance = new Identity('minizymint')
    }
    return Identity.instance
  }
}
  
// const person = Identity.getInstance()
// console.log(person.name)
