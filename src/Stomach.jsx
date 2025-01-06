// import { useContext } from "react";
// import { nameContext} from './App';
// function Stomach()
//  {
//     let name = useContext(nameContext);
//   return(
//       <h1> Stomach : {name} </h1>
//   )
// }
// export default Stomach;




import { useContext } from "react";
import { nameContext } from './App';
function Stomach() {
  const { contextValue, color } = useContext(nameContext);
  return (
    <h1>
      Stomach : <span style={{ color: contextValue === "water" ? color : "black" }}>{contextValue}</span>
    </h1>
  );
}
export default Stomach;