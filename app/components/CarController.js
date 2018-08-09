import CarService from './CarService.js'

let carService = new CarService()

function drawCars() {
  let cars = carService.getCars()
  let template = ''
}



class CarController {
  constructor() {
    drawCars()
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    carService.addCar(formData)
    formData.reset()
    drawCars()
  }
}

export default CarController