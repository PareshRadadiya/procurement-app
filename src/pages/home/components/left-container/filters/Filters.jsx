import { Input } from "@mui/material";
import {
  ButtonContainer,
  FilterContainer,
  FilterLabel,
  FilterLabels,
  FilterSearch,
  LeftFilterContainer,
  RightFilterContainer,
  SingleFilterContainer,
  StyledButton,
  StyledFiters,
  SubFilter,
} from "./StyledFilter";
import DownArrow from "../../../../../assets/down-arrow.svg";
import shipIcon from "../../../../../assets/shipIcon.svg";
import searchIcon from "../../../../../assets/searchIcon.svg";
import Filters from "../../../../../assets/filters.svg";

const Filter = () => {
  return (
    <FilterContainer>
      <LeftFilterContainer>
        <FilterSearch>
          <img src={shipIcon} alt="ship icon" />
          <FilterLabels>My Responsibilities</FilterLabels>
          <img src={searchIcon} alt="search icon" />
        </FilterSearch>

        <FilterLabel>Copy id</FilterLabel>
        <Input placeholder="Enter copy id" />

        <StyledFiters>
          <SingleFilterContainer>
            <StyledButton>Sort</StyledButton>
            <img src={DownArrow} />
          </SingleFilterContainer>
          <SingleFilterContainer>
            <StyledButton>Goup By</StyledButton>
            <img src={DownArrow} />
          </SingleFilterContainer>
        </StyledFiters>
      </LeftFilterContainer>

      <RightFilterContainer>
        <SubFilter>
          <FilterSearch>
            <FilterLabels>PO</FilterLabels>
            <img src={DownArrow} alt="down-arrow" />
          </FilterSearch>
          <img src={Filters} alt="filter icon" />
        </SubFilter>

        <FilterLabel>Order no</FilterLabel>
        <Input placeholder="Enter order no" />

        <ButtonContainer>
          <StyledButton>Clear</StyledButton>
          <StyledButton>Search</StyledButton>
        </ButtonContainer>
      </RightFilterContainer>
    </FilterContainer>
  );
};

export default Filter;
