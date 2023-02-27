import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo)')}>
                    <img src={images.logo.default} alt='tik tok' />

                </div>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' alt='search' spellCheck={false} />
                    <button className={cx('clear')}>
                        <i className={cx('fa-regular fa-circle-xmark')}></i>
                    </button>
                    <div className={cx('loading')}>
                        <i className={cx('fa-solid fa-spinner')}></i>
                    </div>
                    <button className={cx('search-btn')} >
                        <i className={cx("fa-solid fa-magnifying-glass")}></i>
                    </button>
                </div>
                <div className={cx('actions')}>

                </div>
            </div>
        </header>);
}

export default Header;