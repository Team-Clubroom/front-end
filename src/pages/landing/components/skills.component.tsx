import "../landing.page.css";

const ICONS_DATA = [
  { name: "TypeScript", path: "/skills/typescript.svg" },
  { name: "React", path: "/skills/react.svg" },
  { name: "Tailwind", path: "/skills/tailwind.svg" },
  { name: "CSS", path: "/skills/css.svg" },
  { name: "HTML", path: "/skills/html.svg" },
  { name: "Python", path: "/skills/python.svg" },
  { name: "Flask", path: "/skills/flask.svg" },
  { name: "MySQL", path: "/skills/mysql.svg" },
  { name: "JWT", path: "/skills/jwt.svg" },
  { name: "GitHub", path: "/skills/github.svg" },
];
export const SkillsComponent = () => {
  return (
    <div
      className={
        "skill flex flex-wrap gap-3 max-w-4xl mx-auto justify-center py-10"
      }
    >
      {ICONS_DATA.map(({ name, path }) => (
        <div
          key={name}
          className={
            "flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow"
          }
        >
          <img className={"h-8 w-8"} src={path} alt={name} />
          <span className={"text-gray-300 font-semibold"}>{name}</span>
        </div>
      ))}
    </div>
  );
};
