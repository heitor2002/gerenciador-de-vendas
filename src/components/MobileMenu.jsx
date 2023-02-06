import { AiFillHome } from 'react-icons/ai';
import { BsCashCoin, BsPencilSquare, BsFillPersonLinesFill } from 'react-icons/bs';
import { GiLockedChest } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <>
        <div className="mobile-menu">
            <nav>
                <ul>
                    <Link to="/"><li><AiFillHome /></li></Link>
                    <Link to="/sales"><li><BsCashCoin /></li></Link>
                    <Link to="/requests"><li><BsPencilSquare /></li></Link>
                    <Link to="/clients"><li><BsFillPersonLinesFill /></li></Link>
                    <Link to="/stock"><li><GiLockedChest /></li></Link>
                    <Link to="/analytics"><li><GoGraph /></li></Link>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default MobileMenu;