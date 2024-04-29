import { CardInterface } from "../types.ts";
import AbilityScore from "./AbilityScore.tsx";

const Card = ({name, cClass, experience, acumenScore, brawnScore, conductScore}: CardInterface) => {
    return (
       <article className={'stack-lg ?{style.card}'}>
           <h1>{name}</h1>
           <h2>{cClass}</h2>
           <h3>{experience}</h3>
           <AbilityScore scoreName="Acumen" scoreValue={acumenScore}></AbilityScore>
           <AbilityScore scoreName="Brawn" scoreValue={brawnScore}></AbilityScore>
           <AbilityScore scoreName="Conduct" scoreValue={conductScore}></AbilityScore>
       </article>
    )
}

export default Card