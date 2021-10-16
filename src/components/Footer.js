import { Link } from "react-router-dom"
const Footer =({copyright}) =>{
    return (<footer>
        <p>{copyright}</p>
        <Link to="/about">About</Link>
        </footer>)
}

export default Footer;