interface Potato {
  sayHello(): void
}
  
class BakedPotato implements Potato {
  sayHello() {
    console.log('Hello, I am a baked potato!')
  }
}
  
class MashedPotato implements Potato {
  sayHello() {
    console.log('Greetings, I am a mashed potato!')
  }
}
  
export class PotatoFactory {
  public createPotato(type: string): Potato {
    switch (type) {
      case 'baked':
        return new BakedPotato()
      case 'mashed':
        return new MashedPotato()
      default:
        throw new Error(`Unsupported potato type: ${type}`)
    }
  }
}
  
// const factory = new PotatoFactory()
// const bakedPotato = factory.createPotato('baked')
// const mashedPotato = factory.createPotato('mashed')
  
// bakedPotato.sayHello() // Output: Hello, I am a baked potato!
// mashedPotato.sayHello() // Output: Greetings, I am a mashed potato!
