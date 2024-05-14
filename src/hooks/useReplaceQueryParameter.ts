import { useLocation, useNavigate } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  return ({key, value}: { key: string; value: string }) => {
    if (value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  }
};