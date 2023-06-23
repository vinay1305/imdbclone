import React from "react";
import NavBarItems from "./NavBarItems";

export default function NavBar() {
  return (
    <div className="flex  justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4"> 
      <NavBarItems title="Trending" param="fetchTrending" />
      <NavBarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
