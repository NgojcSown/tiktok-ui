import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItems from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const renderMenu = () => {
        return items.map((item, index) => {
            return < MenuItems key={index} data={item} />
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
                        {renderMenu()}
                    </ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;