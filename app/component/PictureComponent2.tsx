const urlDesktop = "https://picsum.photos/seed/3/1920/1080";
const urlMobile = "https://picsum.photos/seed/4/1080/1920";
import { unstable_getImgProps as getImgProps } from "next/image";

export default function PictureComponent2() {
  const common = { alt: "Picture of the author" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImgProps({ src: urlDesktop, width: 1920, height: 1080, ...common });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImgProps({ src: urlMobile, width: 1080, height: 1920, ...common });

  return (
    <picture>
      <source media="(orientation: landscape)" srcSet={desktopSrcSet} />
      <source media="(orientation: portrait)" srcSet={mobileSrcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...common} />
    </picture>
  );
}
