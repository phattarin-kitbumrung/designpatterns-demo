interface RaccoonObserver {
  update(raccoonPartyStatus: string): void
}
  
export class RaccoonParty {
  private observers: RaccoonObserver[] = []
  private _partyStatus: string = 'Not started'

  public addObserver(observer: RaccoonObserver): void {
    this.observers.push(observer)
  }

  public removeObserver(observer: RaccoonObserver): void {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  public set partyStatus(status: string) {
    this._partyStatus = status
    this.notifyObservers()
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this._partyStatus)
    }
  }
}
  
export class Raccoon implements RaccoonObserver {
  constructor(public name: string) {}

  public update(raccoonPartyStatus: string): void {
    console.log(`${this.name} knows the party status: ${raccoonPartyStatus}`)
  }
}
  
// const raccoonParty = new RaccoonParty()
// const ricky = new Raccoon('Ricky')
// const rachel = new Raccoon('Rachel')
  
// raccoonParty.addObserver(ricky)
// raccoonParty.addObserver(rachel)
  
// raccoonParty.partyStatus = 'Started'
   