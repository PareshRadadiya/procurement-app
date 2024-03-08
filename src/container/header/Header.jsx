import {
  HeaderContainer,
  HeaderTitle,
  IconContainer,
  RightHeaderContainer,
  UserDetails,
  UserName,
} from "./StyledHeader";
import SearchIcon from "../../assets/navbar/search.svg";
import NotificationIcon from "../../assets/navbar/notification.svg";
import AppsIcon from "../../assets/navbar/apps.svg";
import UserIcon from "../../assets/navbar/userLogo.png";
import DownIcon from "../../assets/navbar/down-green.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Procurement</HeaderTitle>
      <RightHeaderContainer>
        <IconContainer>
          <img src={SearchIcon} alt="Search Icon" />
          <img src={NotificationIcon} alt="Notification Icon" />
          <img src={AppsIcon} alt="Apps Icon" />
        </IconContainer>
        <UserDetails>
          <img src={UserIcon} alt="user icon" />
          <UserName>Daniel Rogers</UserName>
          <img src={DownIcon} alt="down icon" />
        </UserDetails>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
