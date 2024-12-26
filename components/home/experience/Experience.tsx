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
    title: "The Red IT",
    position: "Software Engineer",
    time: "October, 2024 - Present",
    location: "Dhaka, Bangladesh (Remote)",
    description: "",
    tech: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "GraphQL",
      "Serverless",
      "AWS",
      "AWS-X-Ray",
      "AWS-Lambda",
      "AWS-CloudWatch",
    ],
  },
  {
    title: "Velar",
    position: "Junior Software Engineer",
    time: "March, 2024 - October, 2024",
    location: "Montreal, Canada (Remote)",
    description: "",
    tech: [
      "JavaScript",
      "TypeScript",
      "Nodejs",
      "Expressjs",
      "Nestjs",
      "MongoDB",
      "Postgres",
      "REST API",
    ],
  },
  {
    title: "Extrem Solutions Ltd.",
    position: "Junior Software Engineer",
    time: "March, 2021 - October, 2023",
    location: "Chittagong, Bangladesh (Hybrid)",
    description: "",
    tech: [
      "JavaScript",
      "TypeScript",
      "Nodejs",
      "Expressjs",
      "Nestjs",
      "MongoDB",
      "Postgres",
      "REST API",
    ],
  },
];
