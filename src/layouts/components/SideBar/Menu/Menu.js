import classNames from "classnames";
import styles from './Menu'
import PropTypes from 'prop-types'

function Menu({ children }) {
    return (
        <nav>
            {children}
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired
}

export default Menu;