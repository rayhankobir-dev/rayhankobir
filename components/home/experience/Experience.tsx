import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience &&
        experience.map((item) => <ExperienceItem key={item.title} {...item} />)}
    </section>
  );
};

// const experience: any[] = [];
const experience = [
  {
    title: "Fresher",
    position: "Dont have job experiences.",
    time: "",
    location: "",
    description: "",
    tech: [""],
  },
];
