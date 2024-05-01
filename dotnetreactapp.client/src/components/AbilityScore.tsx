import { FitnessCenter, Lightbulb, LocalPolice } from "@mui/icons-material";
import { Card } from "@mui/material";
import { ReactElement } from "react";
import { AbilityScoreInterface } from "../types.ts";

// Example implementation of Icon usage, you could also use a switch case in a function component
const Icons: Record<string, ReactElement> = {
  Acumen: <Lightbulb />,
  Brawn: <FitnessCenter />,
  Conduct: <LocalPolice />,
};

const AbilityScore = ({ scoreName, scoreValue }: AbilityScoreInterface) => {
  return (
    // elevation adds border & box-shadow
    // sx allows you to style this specific instance of the MUI component
    <Card elevation={1} sx={{ padding: "1rem", width: "33%" }}>
      {Icons[scoreName]}
      <h1>{scoreName}</h1>
      <h2>{scoreValue}</h2>
    </Card>
  );
};

export default AbilityScore;
