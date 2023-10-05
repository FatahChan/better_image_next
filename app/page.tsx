import PictureComponent1 from "./component/PictureComponent1";
import PictureComponent2 from "./component/PictureComponent2";

export default function Home() {
  // centering div
  return (
    <div className="flex flex-col gap-4">
      <h1>Using hidden</h1>
      <PictureComponent1 />
      <h1>Using Picture Element</h1>
      <PictureComponent2 />
    </div>
  );
}
