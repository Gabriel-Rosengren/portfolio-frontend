import { Link } from "react-router-dom";
import "./styles.css"

export default function Layout(): React.ReactElement {
    return (
        <header className="flex">
            <div className="name">
                <h1>Gabriel Rosengren</h1>
            </div>
            <div className="flex links">
                <Link to="/" className="button">Home</Link>
                <Link to="about" className="button">About</Link>
                <Link to="projects" className="button">Projects</Link>
                <Link to="github" className="button">GitHub</Link>
            </div>
        </header>
    )
}