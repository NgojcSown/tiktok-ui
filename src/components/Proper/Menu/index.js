/* eslint-disable no-undef */
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItems from './MenuItem';
import Header from './Header.js';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderMenu = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return < MenuItems key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })

    }
    return (
        <Tippy
            delay={[0, 800]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-proper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderMenu()}
                    </ProperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;