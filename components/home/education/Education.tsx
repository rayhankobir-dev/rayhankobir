import { SectionHeader } from "@/components/utils/SectionHeader";
import { EducationItem } from "./EducationItem";

export const Education = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Education" dir="l" />
      {education &&
        education.map((item) => <EducationItem key={item.title} {...item} />)}
    </section>
  );
};

// const experience: any[] = [];
const education = [
  {
    title: "Bachelor of Computer Science",
    position: "Green University of Bangladesh.",
    time: "Jan 2020 - Jan 2024",
    location: "Result: 3.28",
    description: "",
    tech: ["Ongoing"],
  },
  {
    title: "Diploma in Computer Science",
    position: "Naogaon Polytechnic Institute.",
    time: "Sep, 2015 - Sep, 2019",
    location: "Result: 3.24",
    description: "",
    tech: ["Completed"],
  },
  {
    title: "Secondary School Certificate",
    position: "Al-Helal Islami Academy School & College.",
    time: "Jan, 2010 - Feb, 2015",
    location: "Result: 4.94",
    description: "",
    tech: ["Completed"],
  },
];
