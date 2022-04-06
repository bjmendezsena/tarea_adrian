import "./NavBar.css";
import { useNavbar } from "./useNavbar";

const NavBar = ({ dataFetched }) => {
  const { isNavBarActive, onClickNavItem, NAV_ITEMS } = useNavbar(dataFetched);

  return (
    <div className="navbar">
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.POSTS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.POSTS)}
      >
        Posts
      </div>
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.COMMENTS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.COMMENTS)}
      >
        Comments
      </div>
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.ALBUMS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.ALBUMS)}
      >
        Albums
      </div>
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.PHOTOS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.PHOTOS)}
      >
        Photos
      </div>
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.TODOS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.TODOS)}
      >
        Todos
      </div>
      <div
        className={`navbar_item ${isNavBarActive(NAV_ITEMS.USERS)}`}
        onClick={() => onClickNavItem(NAV_ITEMS.USERS)}
      >
        Users
      </div>
    </div>
  );
};

export default NavBar;
