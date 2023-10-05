const urlDesktop = "https://picsum.photos/seed/1/1920/1080";
const urlMobile = "https://picsum.photos/seed/2/1080/1920";
import Image from "next/image";
export default function PictureComponent1() {
  return (
    <>
      <Image
        className="hidden landscape:block	"
        src={urlDesktop}
        alt="Picture of the author"
        width={1920}
        height={1080}
      />
      <Image
        className="block landscape:hidden"
        src={urlMobile}
        alt="Picture of the author"
        width={1080}
        height={1920}
      />
    </>
  );
}
