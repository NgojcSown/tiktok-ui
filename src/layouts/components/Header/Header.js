import classNames from 'classnames/bind';
import images from '~/assets/images';
import config from '~/config';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Menu from '~/components/Proper/Menu';

import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)
function Header() {
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
                <Link to={config.routes.home} className={cx('logo)')}>
                    <img src={images.logo.default} alt='tik tok' style={{ height: '40px' }} />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ?
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <>
                                    <Button text className={cx('btn-upload')}  >
                                        + Upload
                                    </Button>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('notification')}>12</span>
                                    </button>
                                </>
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
                            <Image className={cx('user-avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6703fc12314dcfd7a60c63f9dc732a7~c5_720x720.jpeg?x-expires=1678471200&x-signature=VdL75k0VMVmz7sLHKHUuhMIfJis%3D' alt='tik tok' />
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