import Marquee from "../Home-components/Marquee/Marquee";
import techStacks from "./Marquee/techStackData";

const TechStacks = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:20s]" repeat={5}>
        {techStacks.map(({ icon: Icon, name }) => (
          <Icon className="size-20 md:max-lg:size-8" color="white" key={name} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]"></div>
    </div>
  );
};

export default TechStacks;
