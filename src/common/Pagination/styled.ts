import styled, { css, keyframes } from "styled-components";
import { ReactComponent as arrow } from "./images/arrow.svg";
import { ReactComponent as arrowNext } from "./images/arrowNext.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px 0px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 32px 0px 0px 0px;
  } 
`;

const move = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Button = styled.button<{ next?: boolean}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  background: ${({ theme }) => theme.colors.lightBlueButton};
  margin-right: 12px;
  transition: background .3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 8px 12px;
    margin-right: 8px;
  }

  ${({ next }) => next && css`
    margin: 0px 0px 0px 12px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      margin: 0px 0px 0px 8px;
    }
  `}

  &:active{
    background: ${({ theme }) => theme.colors.activeButton};
  }

  &:disabled{
    background: ${({ theme }) => theme.colors.grayButton};
    color: ${({ theme }) => theme.colors.darkText};
    pointer-events: none;
  }
`;

export const ButtonText = styled.span`
  line-height: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const ArrowIcon = styled(arrow)<{ mobile?: boolean | string }>`
  color: ${({ theme }) => theme.colors.darkBlueButton};
  margin-right: 8px;

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.grayText};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    ${Button}:hover & {
      animation: ${move} 1s linear infinite;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0px;
    width: 5px;
    height: 8px;
  }

  ${({ mobile }) => mobile && css`
    display: none;
      
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      display: block;
      margin-right: 4px;
    }
  `}
`;

export const ArrowIconNext = styled(arrowNext)<{ mobile?: boolean | string }>`
  color: ${({ theme }) => theme.colors.darkBlueButton};
  margin-left: 8px;

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.grayText};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    ${Button}:hover & {
      animation: ${move} 1s linear infinite reverse;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0px;
    width: 5px;
    height: 8px;
  }

  ${({ mobile }) => mobile && css`
    display: none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      display: block;
      margin-right: 4px;
    }
  `}
`;

export const PageInfo = styled.p`
  margin: 0px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }
`;

export const Span = styled.span<{ last?: boolean }>`
  font-weight: 600;
  margin: 0px 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0px 3px;
  }

  ${({ last }) => last && css`
    margin-right: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      margin-right: 0px;
    }
  `}
`;