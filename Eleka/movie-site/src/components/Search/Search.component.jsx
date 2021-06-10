import React from "react";

import { SearchContainer, Input } from "./Search.style";

const SearchComponent = () => {
  return (
    <SearchContainer>
      <Input placeholder="Search..." type="search" />
    </SearchContainer>
  );
};

export default SearchComponent;
