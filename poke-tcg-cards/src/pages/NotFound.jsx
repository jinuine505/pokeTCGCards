import pikachu from "../assets/Surprised_Pikachu_HD.jpg"
import "../css/NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-card">
                <img src={pikachu} title="Surprised Pikachu" />
                <div className="not-found-msg">Page not found</div>
            </div>
        </div>
    );
}

export default NotFound;