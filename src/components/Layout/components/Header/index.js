import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/SearchAccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';
import MenuItems from '~/components/Proper/Menu/MenuItem';

const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([])
    const [moreMenu, setMoreMenu] = useState([])
    const currentUser = true

    const MENU_ITEMS = [
        {
            icon: <i className="fa-solid fa-language"></i>,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'v',
                        title: 'Tiếng Việt',
                    },
                ],
            }
        },
        {
            icon: <i className="fa-regular fa-circle-question"></i>,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            icon: <i className="fa-regular fa-keyboard"></i>,
            title: 'Keyboard shortcuts',
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            setMoreMenu([1, 2, 3])
        }, 0)
    })
    //Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                //Handle
                break;
            default:
        }
    }
    const userMenu = [
        {
            icon: <i className="fa-solid fa-user"></i>,
            title: 'View profile',
            to: '/profile'
        },
        {
            icon: <i className="fa-brands fa-bitcoin"></i>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <i className="fa-solid fa-gear"></i>,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
            title: 'Log Out',
            to: '/home',
            separate: true
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo)')}>
                    <img src={images.logo.default} alt='tik tok' style={{ marginTop: '120px' }} />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ?
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                </button>
                            </Tippy>


                        </>
                        :
                        <>
                            <Button text >
                                + Upload
                            </Button>
                            <Button primary rightIcon={<i className="fas fa-sign-in-alt"></i>} >
                                Login
                            </Button>

                        </>}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ?
                            <img className={cx('user-avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1678316400&x-signature=2zEfHmiEONNNXlge3yee%2FEOhiPY%3D' alt='tik tok' />
                            :
                            <button className={cx('more-btn')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>}

                    </Menu>
                </div>
            </div>
        </header >);
}

export default Header;