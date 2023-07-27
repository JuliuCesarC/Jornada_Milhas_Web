import styled from "@emotion/styled";

interface MenuIconProps {
  iconColor: string
}

const MenuBox = styled.div(props => ({
  width: "100%",
  height: "100%",
  svg: {
    width: "100%",
    height: "100%",
    fill: props.color
  }  
}));


export default function MenuIcon(props: MenuIconProps) {
  return (
    <MenuBox color={props.iconColor}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1080.000000pt"
        height="1080.000000pt"
        viewBox="0 0 1080.000000 1080.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path d="M550 8950 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
          <path d="M550 5400 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
          <path d="M550 1850 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
        </g>
      </svg>
    </MenuBox>
  );
}
