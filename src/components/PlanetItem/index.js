// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {imageUrl, name, description} = data
  return (
    <div className="c">
      <img src={imageUrl} className="img" alt={`planet ${name}`} />
      <h1 className="h1">{name}</h1>
      <p className="p">{description}</p>
    </div>
  )
}

export default PlanetItem
