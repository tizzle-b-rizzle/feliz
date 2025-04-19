import { useEffect, useState } from "react";
import { BurgerMenu, BurgerMenuBar, Container } from "./NavBar.elements";
import Image from "next/image";
import burger from "../../../public/assets/hamburger.svg";
import cross from "../../../public/assets/cross.svg";
export default function NavBar({ children }) {
  let devicewidth = window.innerWidth;
  const [showNav, setShowNav] = useState("false");

  return (
    <Container shownav={showNav}>
      {/* <Image
        alt="burger"
        src={burger}
        style={{
          display: showNav === "false" ? "flex" : "none",
          height: "100%",
          maxHeight: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
      ></Image>
      <BurgerMenu>
        <Image
          alt="cross"
          src={cross}
          style={{
            height: "100%",
            maxHeight: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
        ></Image>
      </BurgerMenu> */}
      {children}
    </Container>
  );
}
