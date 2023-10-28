import { errorStyles } from "./error.page.styles.tsx";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

function ErrorPage() {
  // TODO: get error number from state
  const errorNumber: number = 404;

  return (
    <>
      <Helmet>
        <title>Page Not Found - CELDV</title>
      </Helmet>
      <div className={errorStyles.pageContainer}>
        <div className={errorStyles.contentContainer}>
          <div className={errorStyles.errorContainer}>
            <div className={errorStyles.errorHeader}>
              <h1 className={errorStyles.errorNumber}>{errorNumber}</h1>
              <h1 className={errorStyles.errorTitle}>oops! Page not found</h1>
              <p className={errorStyles.errorText}>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <NavLink to={"/"}>
                <button className={errorStyles.homeButton}>HOME</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
