import express from 'express'
import { Identity } from './src/singleton'
import { Raccoon, RaccoonParty } from './src/observer'
import { PotatoFactory } from './src/factory'
import { Guitar, Drums, PlayGuitarChord, PlayDrumsBeat, Conductor } from './src/command'

const app = express()
const port = 3000

app.listen(port, () => {       
    console.log( `server started at http://localhost:${port}`)
})

// singleton pattern
const person = Identity.getInstance()
console.log(person.name)

// observer pattern
const raccoonParty = new RaccoonParty()
const ricky = new Raccoon('Ricky')
const rachel = new Raccoon('Rachel')
raccoonParty.addObserver(ricky)
raccoonParty.addObserver(rachel)
raccoonParty.partyStatus = 'Started'

// factory pattern
const factory = new PotatoFactory()
const bakedPotato = factory.createPotato('baked')
const mashedPotato = factory.createPotato('mashed')
bakedPotato.sayHello() 
mashedPotato.sayHello() 

// command pattern
const guitar = new Guitar()
const drums = new Drums()
const playGuitarChord = new PlayGuitarChord(guitar)
const playDrumsBeat = new PlayDrumsBeat(drums)
const conductor = new Conductor()
conductor.addCommand(playGuitarChord)
conductor.addCommand(playDrumsBeat)
conductor.perform()
