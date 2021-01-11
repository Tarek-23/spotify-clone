import React from "react";
import SidebarOption from "./SidebarOption";
import { useDataContext } from "./DataLayer";
import "../css/Sidebar.css";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";

function Sidebar() {
  const [{ playlists }] = useDataContext();

  const addPlaylists = () => {
    playlists?.items?.map((playlist) => (
      <SidebarOption title={playlist.name} />
    ));
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="/totify-login.jpg"
        alt="totify logo"
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

      <br />
      <h1 className="sidebar__title">Playlists</h1>
      {addPlaylists()}
      <hr />
    </div>
  );
}

export default Sidebar;
