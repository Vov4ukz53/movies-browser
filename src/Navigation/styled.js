import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 16px;
`;

export const HeaderContainer = styled.div`
  max-width: 1237px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  align-items: center;
`;

export const TextSide = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 495px;
    justify-content: space-between;
    flex-shrink: 1;
  }
`;

export const LinkList = styled.ul`
  margin: 0 0 0 80px;
  padding: 0;
  list-style: none;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  margin: 0 8px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  font-size: 16px;
  width: 100px;
  text-align: center;
`;

export const SearchBar = styled.div`
  flex-shrink: 1;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 495px;
    margin-left: 0px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 16px;
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: 25px;
  border: none;
  padding: 12px 12px 12px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;
