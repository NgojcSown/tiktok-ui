import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)


function Button({ href,
    to,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded,
    leftIcon,
    rightIcon,
    className,
    ...passProps }) {
    let Comp = 'Button'
    const props = {
        onClick,
        ...passProps
    }
    if (disable) {
        Object.keys(disable).forEach((key) => {
            if (key.startsWit('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }


    const classes = cx('wrapper', { primary, outline, small, large, text, disable, [className]: className, rounded })

    return (
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;