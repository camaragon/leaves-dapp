import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
  height: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "100vh" : "12vh")};
  width: 100vw;
  z-index: 90;
  backdrop-filter: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? "blur(30px)" : "blur(10px)"};
  background-color: transparent;
  transition: 0.5s ease;

  @media (max-width: 1200px) {
    display: grid;
    grid: 1fr / 1fr;
  }
`;

export const NavLink = styled.a`
  && {
    color: #ffffff;
    background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
    text-shadow: 2px 2px 4px #000000;

    &:hover {
      background-color: rgb(142, 209, 78);
      color: #ffffff;
    }
  }
`;

export const MobileNavLink = styled.a`
  && {
    color: #ffffff;
    background-color: rgb(142, 209, 78);
    padding: 0.5rem 1rem 1rem 1rem;
    white-space: nowrap;
    font-size: 1.35em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
    text-shadow: 2px 2px 4px #000000;
    width: 15rem;
    text-align: center;
    margin: 1rem 0;

    &:hover {
      background-color: rgb(142, 209, 78);
      color: #ffffff;
    }
  }
`;

export const IconLink = styled.a`
  && {
    background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgb(142, 209, 78);
    }

    @media (max-width: 900px) {
      margin: 0.5rem 0 0 1rem;
      height: 0;
    }
  }
`;

export const MobileIconLink = styled.a`
  && {
    background-color: rgb(142, 209, 78);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
    width: 15rem;
    text-align: center;
    margin: 1rem 0;

    &:hover {
      background-color: rgb(142, 209, 78);
    }

    @media (max-width: 900px) {
      height: 0;
    }
  }
`;

export const MobileHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  padding: 0 1rem;
`;

export const MobileMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 88vh;
  z-index: 90;
  padding: 3rem 0 0 0;
`;
