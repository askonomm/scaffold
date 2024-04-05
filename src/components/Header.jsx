import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className={"bg-sky-400 mb-5 flex justify-between"}>
      <h1>Site Title</h1>
      <div>
        <Link to={"/"} className={"mr-5"}>Blog</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  )
}