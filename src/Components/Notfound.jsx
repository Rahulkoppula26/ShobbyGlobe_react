import { useRouteError } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
function Notfound() {
  const error = useRouteError();
  const { data, status, statusText } = error;
  return (
    <>
      {/* error message if the url is incorrect */}
      <div>
        <h2>Current URL does not match our DataBase [Incorrect Path]</h2>
        <h2>PLease Check the URL and enter the valid URL</h2>
        <h3>{data} </h3>
        <h3>
          Page Error : <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
          <span>{status}</span>{" "}
        </h3>
        <h3>
          Error Message : {statusText} <FontAwesomeIcon icon={faBan} />
        </h3>
      </div>
    </>
  );
}
export default Notfound;
