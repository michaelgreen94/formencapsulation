import CarController from './app/components/CarController.js'

class App {
  constructor() {
    this.controllers = {
      carController: new CarController
    }
  }
}

window.app = new App()

export default App