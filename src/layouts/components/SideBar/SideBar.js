import classNames from 'classnames/bind'
import { FollowingIcon, FollowingIconActive, ForYouIcon, ForYouIconActive, LiveIcon, LiveIconActive } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.routes.home} icon={<ForYouIcon />} iconActive={<ForYouIconActive />} />
                <MenuItem title='Following' to={config.routes.following} icon={<FollowingIcon />} iconActive={<FollowingIconActive />} />
                <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveIconActive />} />
            </Menu>
        </aside>);
}

export default SideBar;