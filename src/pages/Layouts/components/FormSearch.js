import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import FormPopper from '~/components/CustomData/FormPopup';
import { IconSearch, IconTrend } from '~/components/Icons';
import { ButtonIcon } from '~/components/CustomForm';

function FormSearch() {
  const [focusSerach, setFocusSearch] = useState(false);

  const handleFocusSearch = () => {
    setFocusSearch(true);
  };
  const handleHideResult = () => {
    setFocusSearch(false);
  };
  return (
    <div className="header-search">
      <HeadlessTippy
        interactive
        visible={focusSerach}
        render={(attrs) => (
          <div className="wrap-result" tabIndex="-1" {...attrs}>
            <FormPopper>
              <ul className="result-suggest">
                <h4 className="result-heading">Đề xuất cho bạn</h4>
                <li className="suggest-item popper-item">
                  <IconTrend fill="#fff" />
                  <span className="suggest-name popper-name">đưa em về nhà</span>
                </li>
                <li className="suggest-item popper-item">
                  <IconTrend fill="#fff" />
                  <span className="suggest-name popper-name">vũ trụ có anh</span>
                </li>
                <li className="suggest-item popper-item">
                  <IconTrend fill="#fff" />
                  <span className="suggest-name popper-name">người ôm pháo hoa</span>
                </li>
                <li className="suggest-item popper-item">
                  <IconTrend fill="#fff" />
                  <span className="suggest-name popper-name">không thể say</span>
                </li>
              </ul>
            </FormPopper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={`${focusSerach ? 'focus-search' : ''} wrap-search`}>
          <ButtonIcon>
            <IconSearch />
          </ButtonIcon>
          <input
            onFocus={handleFocusSearch}
            className="form-control"
            type="text"
            placeholder="Tìm kiếm tên bài hát, nghệ sĩ, lời bài hát..."
          />
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default FormSearch;
