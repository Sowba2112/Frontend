import Egg from './Egg.jsx';
function Hen({name}) {
  return(
      <div>
          <h2> Hen </h2>
          <Egg name={name}/>
      </div>
  )
}
export default Hen