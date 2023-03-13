import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import PropTypes from 'prop-types'
import Image from "../Image";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountPreview from "./AccountPreview";


const cx = classNames.bind(styles)

function AccountItems() {

    const renderPreview = (props) => {
        return <div tabIndex='-1' {...props}>
            <ProperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </ProperWrapper>
        </div>
    }
    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                offset={[-25, 0]}
                delay={[800, 0]}
                render={renderPreview}
            >
                <div className={cx('account-suggested')}>
                    <Image className={cx('avatar-suggested')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678834800&x-signature=2XYgsuKdb2hRRYAPujYvCQDxQbM%3D' alt='avatar' />
                    <div className={cx('info-suggested')}>
                        <h4 className={cx('username-suggested ')}><span>theanh28entertainment</span>
                            <i className={cx("fa-solid fa-circle-check")} style={{ color: 'rgb(32, 213, 236)', fontSize: '1.4rem', marginLeft: '9px' }} />
                        </h4>
                        <span className={cx('name-suggested')}>The Anh 28 entertainment</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {

}

export default AccountItems;