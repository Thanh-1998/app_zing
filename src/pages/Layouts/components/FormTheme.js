import { Fragment } from "react";
import { bgTheme } from "~/assets/images";

function FormTheme() {

  const storeTheme = [
    { id_parent: 0, color: null, title: 'Dynamic', id_theme: 1, img_thumb: null },
    { id_parent: 0, color: null, title: 'Nghệ sĩ', id_theme: 2, img_thumb: null },
    { id_parent: 0, color: null, title: 'Màu sáng', id_theme: 3, img_thumb: null },
    { id_theme: 14, color: null, image: `${bgTheme.iu}`, alt: 'iu', id_parent: 2, img_thumb: `${bgTheme.iu_thumb}` },
    { id_theme: 15, color: null, image: `${bgTheme.jennie}`, alt: 'jennie', id_parent: 2, img_thumb: `${bgTheme.jennie_thumb}` },
    { id_theme: 10, color: null, image: `${bgTheme.jisoo}`, alt: 'jisoo', id_parent: 2, img_thumb: `${bgTheme.jisoo_thumb}` },
    { id_theme: 4, color: null, image: `${bgTheme.lisa}`, alt: 'lisa', id_parent: 2, img_thumb: `${bgTheme.lisa_thumb}` },
    { id_theme: 5, color: null, image: `${bgTheme.rose}`, alt: 'rose', id_parent: 2, img_thumb: `${bgTheme.rose_thumb}` },
    { id_theme: 6, color: null, image: `${bgTheme.london}`, alt: 'london', id_parent: 1, img_thumb: `${bgTheme.london_thumb}` },
    { id_theme: 7, color: null, image: `${bgTheme.eiffel}`, alt: 'eiffel', id_parent: 1, img_thumb: `${bgTheme.eiffel_thumb}` },
    { id_theme: 8, color: '#1e1e1e', image: null, alt: 'Sáng tối', name_theme: 'drak', id_parent: 1, img_thumb: null },
    { id_theme: 9, color: '#0f1a2e', image: null, alt: 'Xanh da trời', name_theme: 'blue', id_parent: 1, img_thumb: null },
    { id_theme: 11, color: '#e5e3df', image: null, alt: 'Xám', name_theme: 'gray', id_parent: 3, img_thumb: null },
    { id_theme: 12, color: '#ced9d9', image: null, alt: 'Xanh nhạt', name_theme: 'green-light', id_parent: 3, img_thumb: null },
    { id_theme: 13, color: '#f9dbdb', image: null, alt: 'Hồng cánh sen', name_theme: 'pink-light', id_parent: 3, img_thumb: null },
  ];

  const renderTheme = (themes, idParent) => {
    const itemParent = themes.filter(({ id_parent }) => id_parent === idParent)
    return (
      <div className="multiline-theme">
        {itemParent.map(({ id_theme, title, name_theme, color, alt, img_thumb, id_parent }) => (
          <Fragment key={id_theme}>
            {title && <h3 className="title-types">{title}</h3>}
            <div className="multiline-item">
              {img_thumb ? (
                <div className="theme-item">
                  <figure className="card-img image-thumb ">
                    <img src={img_thumb} className='img' />
                  </figure>
                  <h4 className="name-theme">{name_theme ?? alt}</h4>
                </div>
              ) : (
                color && (
                  <>
                    <div style={{ backgroundColor: color }} className="theme-color"></div>
                    <h4 className="name-theme">{name_theme ?? alt}</h4>
                  </>
                )
              )}
              {renderTheme(themes, id_theme)}
            </div>
          </Fragment>
        ))}
      </div>
    )
  }

  return (
    <div className="content-theme">
      {renderTheme(storeTheme, 0)}
    </div>
  );
}

export default FormTheme;
