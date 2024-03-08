import { Typography } from "@mui/material";
import {
  CardContentContainer,
  CustomCard,
  CustomChip,
  CustomChipText,
  CustomContent,
  DataTextWrapper,
  IconTextWrapper,
  IconWrapper,
  IdTitle,
  LeftContainer,
  TitleContent,
} from "./StyledOrder";
import DescIcon from "../../../../../assets/desc.svg";
import PinIcon from "../../../../../assets/pin.svg";
import InfoIcon from "../../../../../assets/info.svg";
import MeasureIcon from "../../../../../assets/measure.svg";

const Order = ({ data, index }) => {
  return (
    <CustomCard variant="outlined" index={index}>
      <CardContentContainer>
        <LeftContainer>
          <IdTitle>{data.id}</IdTitle>
          <TitleContent>{data.title}</TitleContent>
          <IconTextWrapper>
            <span>
              <img src={DescIcon} alt="icon not fount" />
            </span>
            <Typography variant="body2">{data.description}</Typography>
          </IconTextWrapper>
        </LeftContainer>
        <DataTextWrapper>
          <IconWrapper>
            <img src={PinIcon} alt="Pin" />
            <img src={InfoIcon} alt="Info" />
            <img src={MeasureIcon} alt="Measure" />
            <CustomChip label={data.icons[0]} size="small" />
          </IconWrapper>
          <CustomContent>
            <CustomChipText>{data.category}</CustomChipText>
            <CustomChipText>{data.date}</CustomChipText>
          </CustomContent>
        </DataTextWrapper>
      </CardContentContainer>
    </CustomCard>
  );
};

export default Order;
