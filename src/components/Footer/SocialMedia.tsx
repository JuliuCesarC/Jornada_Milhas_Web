import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import instagramIcon from "../../../public/img/icons/instragam-icon.png";
import twiterIcon from "../../../public/img/icons/twiter-icon.png";
import WhatsappIcon from "../../../public/img/icons/Whatsapp-icon.png";
import styled from "@emotion/styled";

interface SocialMediaProps {
  whatsappLink: string;
  instragamLink: string;
  twitterLink: string;
}

const LinkStyled = styled.a`
padding: 4px;
`

export default function SocialMedia(props: SocialMediaProps) {
  const widthAndHeight = 35;
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      // gap: 1
    }}>
      <LinkStyled href={props.whatsappLink}>
        <Image src={WhatsappIcon} alt="ícone WhatsApp" width={widthAndHeight} height={widthAndHeight} />
      </LinkStyled>
      <LinkStyled href={props.instragamLink}>
        <Image
          src={instagramIcon}
          alt="ícone Instagram"
          width={widthAndHeight}
          height={widthAndHeight}
        />
      </LinkStyled>
      <LinkStyled href={props.twitterLink}>
        <Image src={twiterIcon} alt="ícone Twitter/X" width={widthAndHeight} height={widthAndHeight} />
      </LinkStyled>
    </Box>
  );
}
