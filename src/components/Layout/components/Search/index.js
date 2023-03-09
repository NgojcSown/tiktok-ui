import { useEffect, useState, useRef } from 'react';


import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';


import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/SearchAccountItem';
import { SearchIcon } from '~/components/Icon';


const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState('')
    const [showResult, setShowResult] = useState()
    const [loading, setLoading] = useState(false)


    const inputRef = useRef()
    useEffect(() => {
        if (!searchText.trim()) {
            return;
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchText)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
            })
    }, [searchText])

    const handleClear = () => {
        setSearchText('');
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideOutSide = () => {
        setShowResult(false)
    }
    return (<div>
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <h3 className={cx('search-title')}>
                            Acounts
                        </h3>
                        {searchResult.map((data) => {
                            return <AccountItem key={data.id} data={data} />
                        })}
                    </ProperWrapper>
                </div>
            )}
            onClickOutside={handleHideOutSide}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    placeholder='Search accounts and videos' alt='search'
                    spellCheck={false}
                    onChange={e => setSearchText(e.target.value)}
                    onFocus={() => { setShowResult(true) }}
                />
                {!!searchText && !loading && <button className={cx('clear')} onClick={handleClear}>
                    <i className={cx('fa-regular fa-circle-xmark')}></i>
                </button>}
                <div className={cx('loading')}>
                    {loading && <i className={cx('fa-solid fa-spinner')}></i>}
                </div>
                <button className={cx('search-btn')}  >
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    </div>);
}

export default Search;