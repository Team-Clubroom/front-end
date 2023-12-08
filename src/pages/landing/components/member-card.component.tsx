const membersData = [
  {
    name: "Dako Albeik",
    imgSrc: "./dako.jpg",
    altText: "Dako Albeik picture",
    description:
      "Prodesset postea indoctum adhuc possim audire. Bibendum detracto non hac numquam eos reprehendunt iriure solet autem. Vitae maiorum voluptaria repudiare purus habeo euismod.",
  },
  {
    name: "Brandon Huckaby",
    imgSrc: "./dako.jpg",
    altText: "Brandon Huckaby picture",
    description:
      "Prodesset postea indoctum adhuc possim audire. Bibendum detracto non hac numquam eos reprehendunt iriure solet autem. Vitae maiorum voluptaria repudiare purus habeo euismod.",
  },
  {
    name: "Cory Eheart",
    imgSrc: "./dako.jpg",
    altText: "Cory Eheart picture",
    description:
      "Prodesset postea indoctum adhuc possim audire. Bibendum detracto non hac numquam eos reprehendunt iriure solet autem. Vitae maiorum voluptaria repudiare purus habeo euismod.",
  },
  {
    name: "Luka Woodson",
    imgSrc: "./dako.jpg",
    altText: "Luka Woodson picture",
    description:
      "Prodesset postea indoctum adhuc possim audire. Bibendum detracto non hac numquam eos reprehendunt iriure solet autem. Vitae maiorum voluptaria repudiare purus habeo euismod.",
  },
];

type MemberCardProps = {
  name: string;
  imgSrc: string;
  altText: string;
  description: string;
};
const MemberCard = ({
  name,
  imgSrc,
  altText,
  description,
}: MemberCardProps) => (
  <div className="member-card">
    <img src={imgSrc} alt={altText} />
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
);

export const MembersListComponent = () => (
  <div className={"flex gap-4 justify-center flex-wrap"}>
    {membersData.map((member, index) => (
      <MemberCard key={index} {...member} />
    ))}
  </div>
);
