import React from "react";
import styled from "styled-components";
import { NavLink as RoutLink } from "react-router-dom";

// const SLink = styled(RoutLink)`
//   text-decoration: none;
//   color: rgba(255, 255, 255, 0.5);
//   padding: 0.5rem 0.5rem;

//   &:hover {
//     text-decoration: none;
//     color: rgba(255, 255, 255, 0.75);
//   }
// `;
export enum linksEnum {
  HISTORY = "By Historical Period",
  PHILOSOPHER = "By Philosopher",
  MOVEMENT = "By Movement",
}

interface NavLinkProps {
  page: string;
}

const NavLink = ({ page }: NavLinkProps) => {
  return (
    <RoutLink
      style={{
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.7)",
        padding: "0.5rem",
        fontSize: "1.5vh",
      }}
      activeStyle={{
        color: "black",
      }}
      to={`/${page}`}
    >
      {page === "historical"
        ? linksEnum.HISTORY
        : page === "philosophers"
        ? linksEnum.PHILOSOPHER
        : linksEnum.MOVEMENT}
    </RoutLink>
  );
};

export default NavLink;
