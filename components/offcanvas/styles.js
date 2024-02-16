'use client'

export const StyledMenuContent = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  bottom: 0;
  overflow-y: hidden;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0;
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    width: fit-content;
    overflow: hidden;
  }
`;

export const StyledMenuLink = styled.a`
font-weight: 900;
font-size: 5rem;
text-transform: uppercase;
  display: inline-block;
  transform: translateY(0);
  text-decoration: none;
  pointer-events: all;
  color: white;

  &:hover {
    color: white;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }
`;

