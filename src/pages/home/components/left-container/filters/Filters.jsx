import { Autocomplete, Input, MenuItem, Paper, Select } from "@mui/material";
import {
  ButtonContainer,
  CustomFilterTextField,
  FilterContainer,
  FilterLabel,
  LeftFilterContainer,
  MainContainer,
  RightFilterContainer,
  StyledButton,
  StyledFiltersFormControl,
  StyledFiters,
  StyledFormControl,
  SubFilter,
} from "./StyledFilter";
import shipIcon from "../../../../../assets/shipIcon.svg";
import searchIcon from "../../../../../assets/searchIcon.svg";
import Filters from "../../../../../assets/filters.svg";
import { useState } from "react";
import { CustomItemCountChip, ItemCount } from "../order/StyledOrder";
import OrderData from "../../../../../constants/order/OrderData";

const menuProps = {
  PaperProps: {
    style: {
      boxShadow: "none",
      background: "#E1DBD2",
      marginTop: "3px",
    },
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};

const Filter = () => {
  const [age, setAge] = useState("PO");
  const [sort, setSort] = useState("Sort");
  const [groupBy, setGroupBy] = useState("Group By");

  const handleChange = (setState, event) => {
    setState(event.target.value);
  };

  return (
    <MainContainer>
      <FilterContainer>
        <LeftFilterContainer>
          <Autocomplete
            disablePortal
            options={[
              "Responsibility 1",
              "Responsibility 2",
              "Responsibility 3",
              "Responsibility 4",
            ]}
            renderInput={(params) => (
              <CustomFilterTextField
                {...params}
                variant="outlined"
                placeholder="My Responsibilities"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <img src={shipIcon} alt="ship icon" />
                      {params.InputProps.startAdornment}
                    </>
                  ),
                  endAdornment: (
                    <>
                      {params.InputProps.endAdornment}
                      <img src={searchIcon} alt="search icon" />
                    </>
                  ),
                }}
              />
            )}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#E1DBD2", marginTop: "5px" }}>{children}</Paper>
            )}
          />

          <FilterLabel>Copy id</FilterLabel>
          <Input placeholder="Enter copy id" />

          <StyledFiters>
            <StyledFiltersFormControl>
              <Select
                value={sort}
                onChange={(e) => handleChange(setSort, e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={menuProps}
              >
                <MenuItem value={"Sort"}>Sort</MenuItem>
                <MenuItem value={"Asc"}>Asc</MenuItem>
                <MenuItem value={"Desc"}>Desc</MenuItem>
              </Select>
            </StyledFiltersFormControl>

            <StyledFiltersFormControl>
              <Select
                value={groupBy}
                onChange={(e) => handleChange(setGroupBy, e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={menuProps}
              >
                <MenuItem value={"Group By"}>Group By</MenuItem>
                <MenuItem value={"1st"}>1st</MenuItem>
                <MenuItem value={"2nd"}>2nd</MenuItem>
              </Select>
            </StyledFiltersFormControl>
          </StyledFiters>
        </LeftFilterContainer>

        <RightFilterContainer>
          <SubFilter>
            <StyledFormControl>
              <Select
                value={age}
                onChange={(e) => handleChange(setAge, e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={menuProps}
              >
                <MenuItem value={"PO"}>PO</MenuItem>
                <MenuItem value={"OH"}>OH</MenuItem>
                <MenuItem value={"POH"}>POH</MenuItem>
              </Select>
            </StyledFormControl>
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

      <ItemCount>
        ORDERS <CustomItemCountChip label={OrderData.length} size="small" />
      </ItemCount>
    </MainContainer>
  );
};

export default Filter;
