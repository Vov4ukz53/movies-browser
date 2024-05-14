import { ReactNode } from "react";
import { Wrapper } from "./styled";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <Wrapper>
    {children}
  </Wrapper>
);