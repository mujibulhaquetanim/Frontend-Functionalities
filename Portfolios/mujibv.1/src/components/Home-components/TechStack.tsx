import Marquee from "../Home-components/Marquee/Marquee";
import { typedTechStacks } from "../../assets/techStackData";

const TechStacks = () => {
  return (
    // Mask-based edge fade works on any tile colour (including hover), unlike gradient overlays.
    <div
      aria-hidden
      className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_22%,black_78%,transparent)]"
    >
      <Marquee
        className="[--duration:45s] p-3 lg:p-2 xl:p-4"
        repeat={5}
        pauseOnHover
      >
        {typedTechStacks.map(({ icon: Icon, name }) => (
          <Icon
            className="size-14 sm:size-16 md:max-lg:size-10 lg:size-10 xl:size-16 text-white"
            key={name}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default TechStacks;
