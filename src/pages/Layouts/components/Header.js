import React, { useCallback, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { StyledHeader } from '../DefaultLayout/Styles';
import { ButtonIcon } from '~/components/CustomForm';
import { IconArrow, IconDesktop, IconSetting, IconVip } from '~/components/Icons';
import FormPopper from '~/components/CustomData/FormPopup';
import FormSearch from './FormSearch';

const menuSettings = [
  {
    id_menu: 1,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM8.70826 5.88759C7.9771 5.40235 7 5.92659 7 6.80412V13.1951C7 14.0727 7.9771 14.5969 8.70826 14.1117L13.5232 10.9161C14.1789 10.481 14.1789 9.51823 13.5232 9.0831L8.70826 5.88759ZM8 6.80412C8 6.72434 8.08883 6.67669 8.1553 6.7208L12.9702 9.9163C13.0298 9.95586 13.0298 10.0434 12.9702 10.0829L8.1553 13.2784C8.08883 13.3226 8 13.2749 8 13.1951V6.80412Z"
        ></path>
      </svg>
    ),
    menu_name: 'Trình phát nhạc',
  },
  {
    id_menu: 2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 9.0001V3.68056L14.3894 3.78233C13.4241 3.94321 12.434 3.86553 11.5056 3.55606L9.68377 2.94878L8.64856 2.60371C8.43573 2.53276 8.21878 2.48031 8 2.4462V6.5001C8 6.77624 7.77614 7.0001 7.5 7.0001C7.22386 7.0001 7 6.77624 7 6.5001V2.41688C6.51535 2.46358 6.0387 2.59878 5.59479 2.82073L5 3.11813V9.0001H15ZM8 12.0001C6.69378 12.0001 5.58254 11.1653 5.17071 10.0001L14.8293 10.0001C14.4175 11.1653 13.3062 12.0001 12 12.0001H11H9H8ZM9 13.0001V16.0001C9 16.5524 9.44772 17.0001 10 17.0001C10.5523 17.0001 11 16.5524 11 16.0001V13.0001H9ZM8 13.0001L8 16.0001C8 17.1047 8.89543 18.0001 10 18.0001C11.1046 18.0001 12 17.1047 12 16.0001V13.0001C14.2091 13.0001 16 11.2092 16 9.0001V3.09033C16 2.78136 15.7226 2.54634 15.4178 2.59713L14.225 2.79593C13.4205 2.93001 12.5955 2.86527 11.8218 2.60738L10 2.0001L8.96479 1.65503C7.70676 1.23568 6.33367 1.33326 5.14758 1.92631L4 2.5001V9.0001C4 11.2092 5.79086 13.0001 8 13.0001Z"
          fillOpacity="0.8"
        ></path>
      </svg>
    ),
    menu_name: 'Giao diện',
  },
];

const Header = () => {
  // Kiểm tra hệ điều hành
  //const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isWindows = navigator.platform === 'Win32' || navigator.platform === 'Win64';
  const isMacOS = navigator.platform === 'MacIntel';
  const isLinux = navigator.platform === 'Linux';

  // Kiểm tra kiểu thiết bị
  // const deviceType = isMobile ? 'Mobile' : 'Desktop';

  const [showSetting, setShowSetting] = useState(false);

  const handleShowSetting = useCallback(() => {
    setShowSetting((prevShowSetting) => !prevShowSetting);
  }, []);

  const handleHideSetting = useCallback(() => {
    setShowSetting(false);
  }, []);

  return (
    <StyledHeader>
      <div className="header">
        <div className="header-left">
          <ButtonIcon>
            <IconArrow direction={180} />
          </ButtonIcon>

          <ButtonIcon>
            <IconArrow />
          </ButtonIcon>

          <FormSearch />
        </div>
        <div className="header-right">
          <button className="header-download btn">
            <IconDesktop />
            <span>Tải bản {isWindows ? 'Windows' : isMacOS ? 'Macbook' : isLinux ? 'Linux' : ''}</span>
          </button>

          <button className="btn-alpha icon-header">
            <IconVip />
          </button>

          <div className="header-settings">
            <HeadlessTippy
              interactive
              visible={showSetting}
              onClickOutside={handleHideSetting}
              render={(attrs) => (
                <div className="wrap-settings" tabIndex="-1" {...attrs}>
                  <FormPopper>
                    <ul className="settings-list">
                      {menuSettings.map((menu) => (
                        <li className="settings-item popper-item" key={menu.id_menu}>
                          {menu.icon}
                          <span className="settings-name popper-name">{menu.menu_name}</span>
                        </li>
                      ))}
                    </ul>
                  </FormPopper>
                </div>
              )}
            >
              <button className="btn-alpha icon-header" onClick={handleShowSetting}>
                <IconSetting />
              </button>
            </HeadlessTippy>
          </div>

          <button className="header-login btn">
            <span>Đăng nhập</span>
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
