import debounce from "lodash.debounce";
import camera from "./icons/camera-icon.svg";
import search from "./icons/search-icon.svg";
import {
  HeaderArea,
  HeaderContainer,
  Title,
  NavList,
  Icon,
  ListItem,
  TextSide,
  SearchBar,
  SearchIcon,
  SearchInput,
  ListLink,
  Span,
} from "./styled";
import { useReplaceQueryParameter } from "../../hooks/useReplaceQueryParameter";
import { useLocation } from "react-router";
import { ChangeEvent } from "react";

export const Header = () => {
  const location = useLocation();
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputchange = debounce(({target}: ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      value: target.value.trim(),
      key: "search"
    });

    replaceQueryParameter({
      value: "1",
      key: "page"
    });

    target.value = "";
  }, 1000);

  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title to="/movies-browser/">
            <Icon src={camera} alt=""/>
            Movies Browser
          </Title>
          <nav>
            <NavList>
              <ListItem>
                <ListLink to="/movies-browser/movie">
                  <Span>M</Span>
                  <Span>o</Span>
                  <Span>v</Span>
                  <Span>i</Span>
                  <Span>e</Span>
                  <Span>s</Span>
                </ListLink>
              </ListItem>
              <ListItem>
                <ListLink to="/movies-browser/people">
                  <Span>P</Span>
                  <Span>e</Span>
                  <Span>o</Span>
                  <Span>p</Span>
                  <Span>l</Span>
                  <Span>e</Span>
                </ListLink>
              </ListItem>
            </NavList>
          </nav>
        </TextSide>
        <SearchBar>
          <SearchIcon src={search} alt=""/>
          <SearchInput
            disabled={
              location.pathname.indexOf("/movie/") === 0 ||
              location.pathname.indexOf("/people/") === 0
            }
            onChange={onInputchange}
            type="search"
            placeholder={
              `Search for ${location.pathname === "/people" ||
              location.pathname.indexOf("/people/") === 0
                ? "people..."
                : "movies..."
              }`
            }
          />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};