import React from "react";
import styled from "styled-components";
import { NavLink as RoutLink } from "react-router-dom";

const StyledNavLink = styled(RoutLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 0.5rem;

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }
`;
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
    <StyledNavLink
      activeStyle={{
        color: "white",
      }}
      to={`/${page}`}
    >
      {page === "historical"
        ? linksEnum.HISTORY
        : page === "philosophers"
        ? linksEnum.PHILOSOPHER
        : linksEnum.MOVEMENT}
    </StyledNavLink>
  );
};

export default NavLink;
