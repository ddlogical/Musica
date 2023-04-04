import "./PickedOutBtn.scss";
import { Link } from "react-router-dom";
import Icon from "../../Icon";
import { memo } from "react";

function PickedOut() {


	return (
		<Link to='/picked-out' className='picked-out'>

			<Icon color="#fff" type="star-fill-big" />
		</Link>
	);
}


export default memo(PickedOut);