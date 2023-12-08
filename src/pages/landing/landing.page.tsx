import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import "./landing.page.css";
import { Icon } from "../../components/icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { MembersListComponent } from "./components/member-card.component.tsx";
import FooterComponent from "../../components/footer/footer.component.tsx";
import { DummyGraphComponent } from "./components/dummy-graph.component.tsx";
import { SkillsComponent } from "./components/skills.component.tsx";

function LandingPage() {
  const user = useAuthContext();

  if (user) {
    return <Navigate to="/employers" />;
  }

  // TODO: Replace with actual landing page once discussed with team
  return (
    <div className={"landing-page"}>
      <header>
        <h1>Company and Employment Lineage Data and Visualization</h1>
        <p>Easily create and link company entities</p>
      </header>
      <h2 className={"text-4xl text-center font-bold text-inherit pb-4"}>
        Features of <span className={"text-indigo-500"}>CELDV</span>
      </h2>
      <section className={"section-dynamic"}>
        <div className={"placeholder-img"} />
        <div className={"flex flex-col gap-2"}>
          <h3 className={"section-title"}>Beautiful Directed Graphs</h3>
          <p>
            Urbanitas consectetur orci deseruisse augue mediocritatem tation
            novum. Orci suscipiantur egestas meliore class eos lacus. Scripta
            tibique pertinacia maluisset vocibus conubia. Noluisse molestie
            mutat ne dissentiunt vim tale. Praesent fabulas dico verear senectus
            melius commune est velit ad.
          </p>
        </div>
      </section>

      <section className={"section-dynamic bg-gradient-to-b from-neutral-700"}>
        <div className={"flex flex-col gap-2"}>
          <h3 className={"section-title text-gray-100"}>
            Easily Create Relationships
          </h3>
          <p className={"text-gray-300"}>
            Facilis nostra sea vulputate in. Nascetur hinc quo minim splendide
            singulis dolorum. Liber enim falli aeque noster mnesarchum iudicabit
            dictum dicam.
          </p>
          <div className={"flex gap-2 mt-2"}>
            <div className={"relation-widget"}>
              <Icon name={MaterialIcon.Merge} />
              <span>Merge</span>
            </div>
            <div className={"relation-widget"}>
              <Icon name={MaterialIcon.Split} />
              <span>Split</span>
            </div>
            <div className={"relation-widget"}>
              <Icon name={MaterialIcon.Balance} />

              <span>Rebrand</span>
            </div>
          </div>
        </div>
        <div className={"placeholder-img"} />
      </section>
      <section className={"section-dynamic items-center px-4"}>
        <div className={"flex flex-col"}>
          <h3 className={"section-title"}>Give it a try!</h3>
          <p>
            Doctus labores maiestatis dicam civibus luptatum causae montes.
            Morbi sea maluisset impetus quem veniam.
          </p>
        </div>
        <div style={{ aspectRatio: "1", maxWidth: "30rem", width: "100%" }}>
          <DummyGraphComponent />
        </div>
      </section>
      <section>
        <h3 className={"section-title text-center text-gray-100 pb-8"}>
          Graphing Features
        </h3>
        <div className={"flex gap-4 justify-center flex-wrap max-w-2xl m-auto"}>
          <div className={"graphing-feature"}>
            <div>
              <Icon name={MaterialIcon.Split} />
            </div>
            <p>
              Alienum gubergren liber eum libris debet epicurei maluisset
              finibus convallis.
            </p>
          </div>
          <div className={"graphing-feature"}>
            <div>
              <Icon name={MaterialIcon.Split} />
            </div>
            <p>
              Alienum gubergren liber eum libris debet epicurei maluisset
              finibus convallis.
            </p>
          </div>
          <div className={"graphing-feature"}>
            <div>
              <Icon name={MaterialIcon.Split} />
            </div>
            <p>
              Alienum gubergren liber eum libris debet epicurei maluisset
              finibus convallis.
            </p>
          </div>
          <div className={"graphing-feature"}>
            <div>
              <Icon name={MaterialIcon.Split} />
            </div>
            <p>
              Alienum gubergren liber eum libris debet epicurei maluisset
              finibus convallis.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className={"section-title text-center"}>
          Built with Modern Technologies
        </h3>
        <SkillsComponent />
      </section>
      <section className={"bg-gradient-to-br from-cyan-600 to-cyan-800"}>
        <h3 className={"section-title text-center pb-4"}>Our Dev Team</h3>
        <MembersListComponent />
      </section>
      <FooterComponent />
    </div>
  );
}

export default LandingPage;
