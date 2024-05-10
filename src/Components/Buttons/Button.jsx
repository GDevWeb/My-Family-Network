import { Link } from "react-router-dom";

export default function Button({ buttonClass, linkToArticle, buttonAction }) {
  return (
    <button className={buttonClass}>
      <Link to={linkToArticle ? `/${linkToArticle}` : `#`}>
        {" "}
        {buttonAction}
      </Link>
    </button>
  );
}
