const membersData: MemberCardProps[] = [
  {
    name: "Dako Albeik",
    imgSrc: "./dako.jpg",
    role: "Full Stack DevOps",
    altText: "Dako Albeik picture",
    description: `Dako is a veteran in software development, having honed his skills across a variety of
challenging projects. He brings a holistic perspective to the table, understanding the intricacies
of both frontend and backend development. As a result, Dako helps to ensure seamlessness in
interactions across all layers of the software stack, a critical component for the project’s success.
His experience ensures that we navigate the complexities of development with a clear and
practiced perspective.`,
  },
  {
    name: "Brandon Huckaby",
    imgSrc: "./brandon.png",
    role: "Backend Developer/Architect",
    altText: "Brandon Huckaby picture",
    description: `With a rich background in business analysis and data engineering, Brandon possesses a unique
blend of skills that allow him to approach backend challenges with a business-driven mindset.
His expertise in database design and operations ensures that the foundational layer of our
software is robust, scalable, and optimized for performance. Brandon’s approach ensures that
the backend not only functions effectively but aligns seamlessly with business objectives.`,
  },
  {
    name: "Cory Eheart",
    imgSrc: "./cory.png",
    role: "Frontend Developer",
    altText: "Cory Eheart picture",
    description: `Cory’s forte is creating intuitive, efficient, and visually appealing frontend architectures. His
experience ensures that the user-facing side of our software is not just functional and
responsive, but also delivers an outstanding user experience. By blending aesthetics with
functionality, Cory ensures our solutions are user-friendly, responsive, and align with
contemporary design principles.`,
  },
  {
    name: "Luka Woodson",
    imgSrc: "./dako.jpg",
    role: "Scrum Master & UI/UX Designer",
    altText: "Luka Woodson picture",
    description: `Luka wears multiple hats, each vital to the project’s success. As our Scrum Master, he ensures
that our development process adheres strictly to Agile methodologies, which guarantees timely
deliveries and effective responses to changing requirements. Luka’s expertise in Git and
GitHub’s suite of applications ensures that version control and collaboration proceed without a
hitch. His UI/UX design skills further complement Cory’s frontend expertise, ensuring our
software is not just user-friendly and intuitive but also engaging and pleasing to the eye.`,
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
  <div className="member-card">
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
