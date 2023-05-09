import styled, { css } from "styled-components";

const FontSize = {
  h1: "24px",
  h2: "20px",
  h3: "18px",
  p: "16px",
  etext1: "14px",
  etext2: "12px",
};

export const Typography = styled.div`
  font-family: "Roboto";
  letter-spacing: 0.8px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  font-size: ${(props) => FontSize[props.variant]};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Box = styled.div`
  display: ${(props) => props.display};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap};
  border-radius: ${(props) => props.borderRadius};
  flex-direction: ${(props) => props.flexDirection};
  text-align: ${(props) => props.textAlign};
  place-items: ${(props) => props.placeItems};
  flex-grow: ${(props) => props.flexGrow};
  overflow: ${(props) => props.overflow};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
`;

export const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const NewsWrapper = styled.div`
  margin-top: 8px;
  padding: 24px;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const BookMarkIcon = styled.svg`
  flex-shrink: 0;
  margin-left: 4px;

  ${(props) =>
    props.isActive &&
    css`
      fill: red;
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  background: rebeccapurple;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
`;

export const NavbarItem = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
`;

export const NavbarTitle = styled(NavbarItem)`
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;
`;
