import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles)
function AccountItem() {
    return (<div className={cx('wrapper-account')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1678050000&x-signature=QdBrCbH%2BAFRsxqDUAxuOvoqStVk%3D  " alt="Hoaa" />
        <div className={cx('info')}>
            <h4 className={cx('name')}><span>Nguyen Ngoc Hoa</span>
                <i className={cx("fa-solid fa-circle-check")} style={{ color: 'rgb(32, 213, 236)', fontSize: '1.4rem', marginLeft: '9px' }} />
            </h4>
            <span className={cx('username')}>hoa_Ngo</span>
        </div>
    </div>);
}

export default AccountItem;