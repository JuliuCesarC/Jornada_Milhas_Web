import { Box, Link } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import instagramIcon from "../../../public/img/icons/instragam-icon.png";
import twiterIcon from "../../../public/img/icons/twiter-icon.png";
import WhatsappIcon from "../../../public/img/icons/Whatsapp-icon.png";

interface SocialMediaProps {
  gitHubLink: string;
}

export default function SocialMedia(props: SocialMediaProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
      }}
    >
      <LinkWithImage
        href={props.gitHubLink}
        src={WhatsappIcon}
        alt="ícone WhatsApp"
      />
      <LinkWithImage
        href={props.gitHubLink}
        src={instagramIcon}
        alt="ícone Instagram"
      />
      <LinkWithImage
        href={props.gitHubLink}
        src={twiterIcon}
        alt="ícone Twitter/X"
      />
    </Box>
  );
}

interface linkImagesProps {
  href: string;
  src: StaticImageData;
  alt: string;
}
function LinkWithImage(props: linkImagesProps) {
  const widthAndHeight = 35;
  return (
    <Link
      href={props.href}
      sx={{ width: 40, height: 40, p: "2px" }}
      target="_blank"
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={widthAndHeight}
        height={widthAndHeight}
      />
    </Link>
  );
}
