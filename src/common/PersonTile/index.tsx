import { Wrapper, Poster, Name, Info } from "./styled";
import { ReactNode } from "react";

interface PersonTileProps {
  poster: string;
  name: ReactNode;
  info?: string;
  large?: boolean;
}

export const PersonTile = ({poster, name, info, large}: PersonTileProps) => {
  return (
    <Wrapper>
      <Poster src={poster}/>
      <Name>{name}</Name>
      <Info big={large}>{info}</Info>
    </Wrapper>
  )
};