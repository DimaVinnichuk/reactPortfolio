import "./style.css";
import { NavLink } from "react-router-dom";

function Project (props) {
    return (
        <li className="project">
            <NavLink to={"/project/"+props.index}>
                <img src={props.img} alt={props.title} className="project__img" />
                <h3 className="project__title">{props.title}</h3>
            </NavLink>
        </li>
    )
}
export default Project;