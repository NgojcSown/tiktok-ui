import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from './Image.module.scss'
import PropTypes from 'prop-types'


const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage)
    }
    return (
        <img className={classNames(styles.wrapper, className)} src={_fallBack || src} alt={alt} ref={ref} {...props} onError={handleError} />
    );
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    class: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;