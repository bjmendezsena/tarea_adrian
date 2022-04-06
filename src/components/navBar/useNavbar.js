/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


export const useNavbar = (dataFetched) => {
  const NAV_ITEMS = {
    POSTS: "posts",
    COMMENTS: "comments",
    USERS: "users",
    ALBUMS: "albums",
    PHOTOS: "photos",
    TODOS: "todos",
  };
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [navSelected, setNavSelected] = useState(NAV_ITEMS.POSTS);

  useEffect(() => {
    console.log("Didmount");
    fetchItems(navSelected);
  }, []);

  useEffect(() => {
    console.log("Loading");
  }, [isLoading]);

  const fetchItems = async (itemName = "") => {
    if (itemName === "") return;
    setIsLoading(true);

    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/${itemName}`
      ).then((resp) => resp.json());

      setItems(data);
      dataFetched({
        data: data,
        navSelected: itemName,
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const isNavBarActive = (navName) => {
    return navSelected === navName ? "navbar_item--active" : "";
  };

  const onClickNavItem = (navName) => {
    setNavSelected(navName);
    fetchItems(navName);
  };

  return {
    isNavBarActive,
    onClickNavItem,
    items,
    navSelected,
    isLoading,
    NAV_ITEMS
  };
};
