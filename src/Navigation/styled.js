import styled from "styled-components";

export const NavigationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageHeader = styled.header`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    word-break: normal;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    word-break: normal;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    word-break: normal;
  }
`;

export const ListItem = styled.li`
  margin: 5px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  font-size: 16px;
`;

export const SearchBar = styled.input`
  border-radius: 25px;
  border: none;
  padding: 10px;
  width: 300px;
`;

export const Icon = styled.img`
  padding: 5px;
  margin-right: 10px;
`;
