/* eslint-disable no-undef */
import { useState } from 'react';
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItems from './MenuItem';
import Header from './Header.js';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const defaultFn = () => { }
function Menu({ children, hideOnClick = false, items = [], onChange = defaultFn }) {

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

    const handleResetFirstPage = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <ProperWrapper className={cx('menu-proper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-scrollbar')}>{renderMenu()}</div>
            </ProperWrapper>
        </div>
    )

    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[0, 800]}
            interactive
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func
}

export default Menu;