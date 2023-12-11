const membersData: MemberCardProps[] = [
  {
    name: "Dako Albeik",
    imgSrc: "./dako.jpg",
    role: "Full Stack DevOps",
    altText: "Dako Albeik picture",
    description: `Dako is a veteran in software development, bringing a holistic perspective to both frontend and backend projects. His experience ensures seamless interactions across all layers of the software stack, critical for project success.`,
  },
  {
    name: "Brandon Huckaby",
    imgSrc: "./brandon.png",
    role: "Backend Developer/Architect",
    altText: "Brandon Huckaby picture",
    description: `Brandon, with a rich background in business analysis and data engineering, approaches backend challenges with a business-driven mindset. His expertise in database design and operations ensures a robust, scalable, and optimized software foundation.`,
  },
  {
    name: "Cory Eheart",
    imgSrc: "./cory.png",
    role: "Frontend Developer",
    altText: "Cory Eheart picture",
    description: `Cory excels at creating intuitive, efficient, and visually appealing frontend architectures. His experience ensures that the user-interface is not just functional but also delivers an outstanding user experience.`,
  },
  {
    name: "Luka Woodson",
    imgSrc: "./luka.jpg",
    role: "Scrum Master & UI/UX Designer",
    altText: "Luka Woodson picture",
    description: `Luka, our Scrum Master, ensures our development process adheres strictly to Agile methodologies, guaranteeing timely deliveries and effective responses to changing requirements. He is also a UI/UX designer so he ensures the website is user friendly.`,
  },
];

type MemberCardProps = {
  name: string;
  imgSrc: string;
  altText: string;
  role: string;
  description: string;
};
const MemberCard = ({
  name,
  imgSrc,
  altText,
  description,
  role,
}: MemberCardProps) => (
  <div className="member-card bg-gradient-to-br from-cyan-600 to-cyan-900">
    <img src={imgSrc} alt={altText} />
    <div>
      <h4>{name}</h4>
      <span className={"text-gray-900 font-semibold"}>{role}</span>
    </div>
    <p className={"text-gray-300"}>{description}</p>
  </div>
);

export const MembersListComponent = () => (
  <div className={"flex gap-4 justify-center flex-wrap"}>
    {membersData.map((member, index) => (
      <MemberCard key={index} {...member} />
    ))}
  </div>
);
