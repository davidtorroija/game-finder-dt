import User from "./loginIcons/User";
import Password from "./loginIcons/Password";
import Facebook from "./loginIcons/Facebook";
import Twitter from "./loginIcons/Twitter";
import Google from "./loginIcons/Google";
import Showpass from "./loginIcons/Showpass";
import Hidepass from "./loginIcons/Hidepass";
import Burger from "./mainIcons/Burger";
import Calendar from "./mainIcons/Calendar";
import Flag from "./mainIcons/Flag";
import Logout from "./mainIcons/Logout";
import Search from "./mainIcons/Search";
import Star from "./mainIcons/Star";
import Trophy from "./mainIcons/Trophy";
import Close from "./mainIcons/Close";
import Comment from "./mainIcons/Comment";
import Android from "./mainIcons/platforms/Android";
import Linux from "./mainIcons/platforms/Linux";
import Mac from "./mainIcons/platforms/Mac";
import NintendoSwitch from "./mainIcons/platforms/NintendoSwitch";
import Pc from "./mainIcons/platforms/Pc";
import Playstation from "./mainIcons/platforms/Playstation";
import Xbox from "./mainIcons/platforms/Xbox";
import GiftBox from "./mainIcons/GiftBox";
import PlusIcon from "./mainIcons/PlusIcon";
import Youtube from "./mainIcons/Youtube";

import HorizontalDisplay from "./mainIcons/HorizontalDisplay";
import VerticalDisplay from "./mainIcons/VerticalDisplay";

const Icon = ({
  name,
  clickEvent,
  display,
  width,
  height,
  error,
  location,
  getGameDetails,
  origin
}) => {
  switch (name) {
    case "user":
      return <User error={error} />;

    case "password":
      return <Password error={error} />;

    case "showPass":
      return (
        <div onClick={clickEvent}>
          <Showpass />
        </div>
      );
    case "hidePass":
      return (
        <div onClick={clickEvent}>
          <Hidepass />
        </div>
      );

    case "Facebook":
      return <Facebook />;

    case "Twitter":
      return <Twitter />;

    case "Google":
      return <Google />;

    case "close":
      return <Close clickEvent={clickEvent} />;

    case "comment":
      return <Comment height={15} width={16} origin={origin}/>;

    case "gift":
      return <GiftBox height={25} width={25} location={location}/>;

    case "burger":
      return (
        <div onClick={clickEvent}>
          <Burger location={location} />
        </div>
      );

    case "calendar":
      return <Calendar />;

    case "flag":
      return <Flag />;

    case "logout":
      return <Logout />;

    case "search":
      return <Search clickEvent={clickEvent} location={location} />;

    case "star":
      return <Star />;

    case "trophy":
      return <Trophy />;

    case "horizontal":
      return (
        <HorizontalDisplay
          clickEvent={!display ? clickEvent : null}
          display={display}
        />
      );

    case "vertical":
      return (
        <VerticalDisplay
          clickEvent={display ? clickEvent : null}
          display={display}
          getGameDetails={getGameDetails}
        />
      );
    case "PC":
      return <Pc height={height} width={width} />;

    case "PlayStation":
      return <Playstation height={height} width={width} />;

    case "Xbox":
      return <Xbox height={height} width={width} />;

    case "Apple Macintosh":
      return <Mac height={height} width={width} />;

    case "Linux":
      return <Linux height={height} width={width} />;

    case "Nintendo":
      return <NintendoSwitch height={height} width={width} />;

    case "Android":
      return <Android height={height} width={width} />;

    case "giftBox":
      return <GiftBox height={height} width={width} location={location} />;

    case "plus":
      return <PlusIcon height={height} width={width} origin={origin}/>;

    case "youtube":
      return <Youtube height={height} width={width} />;

    default:
      return "";
  }
};

export default Icon;
