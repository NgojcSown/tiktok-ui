import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/SearchAccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';

const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([])
    const [moreMenu, setMoreMenu] = useState([])

    const MENU_ITEMS = [
        {
            icon: <i class="fa-solid fa-language"></i>,
            title: 'English',
        },
        {
            icon: <i class="fa-regular fa-circle-question"></i>,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            icon: <i class="fa-regular fa-keyboard"></i>,
            title: 'Keyboard shortcuts',
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            setMoreMenu([1, 2, 3])
        }, 0)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo)')}>
                    <img src={images.logo.default} alt='tik tok' style={{ marginTop: '120px' }} />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h3 className={cx('search-title')}>
                                    Acounts
                                </h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </ProperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text >
                        + Upload
                    </Button>
                    <Button primary rightIcon={<i className="fas fa-sign-in-alt"></i>} >
                        Login
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </Menu>


                </div>
            </div>
        </header >);
}

export default Header;