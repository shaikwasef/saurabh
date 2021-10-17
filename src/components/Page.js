import "./Page.css";
export default function Page(props) {
  const { component } = props;
  return <div className="page-container">{component}</div>;
}
