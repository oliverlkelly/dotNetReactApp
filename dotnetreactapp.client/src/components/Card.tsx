import { Card as MuiCard } from "@mui/material";
import styled from "styled-components";
import { CardInterface } from "../types.ts";
import AbilityScore from "./AbilityScore.tsx";

const Card = ({
  name,
  cClass,
  experience,
  acumenScore,
  brawnScore,
  conductScore,
}: CardInterface) => {
  return (
    // sx allows you to style this specific instance of the MUI component
    <MuiCard sx={{ padding: "1rem" }}>
      <h1>{name}</h1>
      <h2>{cClass}</h2>
      <h3>{experience}</h3>
      <StyledSection>
        <AbilityScore scoreName="Acumen" scoreValue={acumenScore} />
        <AbilityScore scoreName="Brawn" scoreValue={brawnScore} />
        <AbilityScore scoreName="Conduct" scoreValue={conductScore} />
      </StyledSection>
    </MuiCard>
  );
};

export default Card;

// MUI offers two way to styling re-usable components with styled-components
// Basically you specify the base component you wish to use (section)
//   and then define the CSS for it
//   then, as you see above, you just use it as <StyledSection>
const StyledSection = styled.section({
  display: "flex",
  gap: "0.5rem",
  justifyContent: "space-evenly",
});
