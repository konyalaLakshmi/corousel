// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} data={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
