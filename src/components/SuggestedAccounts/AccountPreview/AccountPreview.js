import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss"

const cx = classNames.bind(styles)

function AccountPreview() {
    return (<div className={cx('wrapper')}>
        <div className={cx('header')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678834800&x-signature=2XYgsuKdb2hRRYAPujYvCQDxQbM%3D" alt="" />
            <Button primary>Follow</Button>
        </div>

        <div className={cx('info-preview')}>
            <h4 className={cx('username-preview ')}><span>theanh28entertainment</span>
                <i className={cx("fa-solid fa-circle-check")} style={{ color: 'rgb(32, 213, 236)', fontSize: '1.4rem', marginLeft: '9px' }} />
            </h4>
            <span className={cx('name-preview')}>The Anh 28 entertainment</span>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')} >Followers </span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')} >Likes</span>
            </p>
        </div>

    </div>);
}

export default AccountPreview;