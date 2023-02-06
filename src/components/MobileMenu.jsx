import { AiFillHome } from 'react-icons/ai';
import { BsCashCoin, BsPencilSquare, BsFillPersonLinesFill } from 'react-icons/bs';
import { GiLockedChest } from "react-icons/gi";
import { GoGraph } from "react-icons/go";

const MobileMenu = () => {
    return (
        <>
        <div className="mobile-menu">
            <nav>
                <ul>
                    <li><AiFillHome /></li>
                    <li><BsCashCoin /></li>
                    <li><BsPencilSquare /></li>
                    <li><BsFillPersonLinesFill /></li>
                    <li><GiLockedChest /></li>
                    <li><GoGraph /></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default MobileMenu;