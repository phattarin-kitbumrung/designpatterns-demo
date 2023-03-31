// The Command interface
interface Command {
  execute(): void
}
  
// The Receiver classes
export class Guitar {
  public playChord(): void {
    console.log('🎸 Strumming a chord')
  }
}
  
export class Drums {
  public playBeat(): void {
    console.log('🥁 Banging a beat')
  }
}
  
// The Concrete Command classes
export class PlayGuitarChord implements Command {
  constructor(private guitar: Guitar) {}

  public execute(): void {
    this.guitar.playChord()
  }
}
  
export class PlayDrumsBeat implements Command {
  constructor(private drums: Drums) {}
  
  public execute(): void {
    this.drums.playBeat()
  }
}
  
// The Invoker class
export class Conductor {
  private commands: Command[] = []
  
  public addCommand(command: Command): void {
    this.commands.push(command)
  }
  
  public perform(): void {
    for (const command of this.commands) {
      command.execute()
    }
  }
}
  
// const guitar = new Guitar()
// const drums = new Drums()
// const playGuitarChord = new PlayGuitarChord(guitar)
// const playDrumsBeat = new PlayDrumsBeat(drums)
  
// const conductor = new Conductor()
// conductor.addCommand(playGuitarChord)
// conductor.addCommand(playDrumsBeat)
  
// conductor.perform()
// Output:
// 🎸 Strumming a chord
// 🥁 Banging a beat
