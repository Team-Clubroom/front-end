import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import "./landing.page.css";
import { Icon } from "../../components/icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { MembersListComponent } from "./components/member-card.component.tsx";
import FooterComponent from "../../components/footer/footer.component.tsx";
import { DummyGraphComponent } from "./components/dummy-graph.component.tsx";
import { SkillsComponent } from "./components/skills.component.tsx";
import { Helmet } from "react-helmet";

function LandingPage() {
  const user = useAuthContext();

  if (user) {
    return <Navigate to="/employers" />;
  }
  return (
    <>
      <Helmet>
        <title>Welcome to CELDV</title>
      </Helmet>
      <div className={"landing-page"}>
        <header>
          <h1>Company and Employment Lineage Data and Visualization</h1>
          <p>Easily create and link company entities</p>
        </header>
        <h2 className={"features-title"}>
          Features of <span className={"text-cyan-500"}>CELDV</span>
        </h2>
        <section className={"section-dynamic"}>
          <div className={"placeholder-img"} />
          <div className={"flex flex-col gap-2"}>
            <h3 className={"section-title"}>Beautiful Directed Graphs</h3>
            <p>
              Visualization is integral to CELDV, and our eloquent graphing
              solution provides a simple, efficient display of lineage. Our
              focus is on readability, clarity, efficiency, and design. Each
              graph is dynamically positioned to take up the most room while
              maintaining proper spacing between nodes and edges.
            </p>
          </div>
        </section>

        <section
          className={"section-dynamic bg-gradient-to-b from-neutral-700"}
        >
          <div className={"flex flex-col gap-2"}>
            <h3 className={"section-title text-gray-100"}>
              Easily Create Relationships
            </h3>
            <p className={"text-gray-300"}>
              Lineage requires relationships, and our solution features easy to
              use and understand forms for creating, editing, and deleting
              entities and relationships.
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
          <img className={"placeholder-img"} src={"./relationships.png"} />
        </section>
        <section className={"section-dynamic items-center px-4"}>
          <div className={"flex flex-col"}>
            <h3 className={"section-title"}>Give it a try!</h3>
            <p>
              Play around with the graph below. Try dragging the whole graph,
              dragging an individual node, and changing graph types.
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
          <div
            className={"flex gap-4 justify-center flex-wrap max-w-2xl m-auto"}
          >
            <div className={"graphing-feature"}>
              <div>
                <Icon name={MaterialIcon.Account_Tree} />
              </div>
              <p>
                Our graph features dynamic positioning, meaning the graph is
                centered and each node is positioned to best fit the data
                provided within the window.
              </p>
            </div>
            <div className={"graphing-feature"}>
              <div>
                <Icon name={MaterialIcon.Gesture_Select} />
              </div>
              <p>
                The user may move each node as they see fit within the window,
                while the graph will automatically adjust edges to maintain
                readability.
              </p>
            </div>
            <div className={"graphing-feature"}>
              <div>
                <Icon name={MaterialIcon.Menu} />
              </div>
              <p>
                Quick actions such as zoom, fit to window, and lock graph allow
                for easier, quicker adjustments for your convenience.
              </p>
            </div>
            <div className={"graphing-feature"}>
              <div>
                <Icon name={MaterialIcon.Info} />
              </div>
              <p>
                Each node presents the necessary data of each employer, while
                connecting edges display the relationship between two nodes.
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
        <section className={"bg-gradient-to-b from-neutral-700"}>
          <h3 className={"section-title text-center pb-4"}>Our Dev Team</h3>
          <MembersListComponent />
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default LandingPage;
