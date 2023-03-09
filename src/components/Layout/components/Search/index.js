import { useEffect, useRef, useState } from 'react';


import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';


import { SearchIcon } from '~/components/Icon';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/SearchAccountItem';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/hooks/apiServices/searchService';

const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState('')
    const [showResult, setShowResult] = useState()
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchText, 500)
    const inputRef = useRef()
    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }

        setLoading(true)

        const handleApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false)
        }

        handleApi()
    }, [debounce])

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