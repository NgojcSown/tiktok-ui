import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import PropTypes from 'prop-types'
import AccountItems from "./AccountItems";

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('Wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('btn-see')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;