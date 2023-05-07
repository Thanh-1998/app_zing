import React from 'react';
import { StyledHeader } from './Styles';
import { ButtonIcon } from '~/components/CustomForm';
import { IconArrow, IconDesktop, IconSearch, IconSetting, IconVip } from '~/components/Icons';

const Header = () => {
  // Kiểm tra hệ điều hành
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isWindows = navigator.platform === 'Win32' || navigator.platform === 'Win64';
  const isMacOS = navigator.platform === 'MacIntel';
  const isLinux = navigator.platform === 'Linux';

  // Kiểm tra kiểu thiết bị
  const deviceType = isMobile ? 'Mobile' : 'Desktop';

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

          <div className="header-search">
            <div className="wrap-search">
              <ButtonIcon>
                <IconSearch />
              </ButtonIcon>
              <input className="form-control" type="text" placeholder="Tìm kiếm tên bài hát, nghệ sĩ, lời bài hát..." />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-download btn">
            <IconDesktop />
            <span>Tải bản {isWindows ? 'Windows' : isMacOS ? 'Macbook' : isLinux ? 'Linux' : ''}</span>
          </div>

          <button className="btn-alpha icon-header">
            <IconVip />
          </button>

          <button className="btn-alpha icon-header">
            <IconSetting />
          </button>

          <div className="header-login btn">
            <span>Đăng nhập</span>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
