import { AbilityScoreInterface } from "../types.ts";
const AbilityScore = ({scoreName, scoreValue} : AbilityScoreInterface) => {
    return (
        <div>
            <h1>{scoreName}</h1>
            <h2>{scoreValue}</h2>
        </div>
    )
}

export default AbilityScore