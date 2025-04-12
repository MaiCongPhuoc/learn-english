import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const Header = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng); // Thay đổi ngôn ngữ
  };

  return (
    <nav className="flex justify-between items-center p-3">
      <ul className="flex gap-3 overflow-x-scroll">
        {/* <li
          className={`md:text-2xl text-nowrap font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === '/' ? 'bg-gray-300 text-amber-500' : ''
          }`}
        >
          <Link to={'/'} className="px-2 py-4 block">
            {t('Home')}
          </Link>
        </li> */}
        <li
          className={`md:text-2xl text-nowrap font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === '/' ? 'bg-gray-300 text-amber-500' : ''
          }`}
        >
          <Link to={'/'} className="px-2 py-4 block">
            {t('Grammar')}
          </Link>
        </li>
        <li
          className={`md:text-2xl text-nowrap font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === '/irregularVerbTable'
              ? 'bg-gray-300 text-amber-500'
              : ''
          }`}
        >
          <Link to={'/irregularVerbTable'} className="px-2 py-4 block">
            {t('IrregularVerbTable')}
          </Link>
        </li>
        <li
          className={`md:text-2xl text-nowrap font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === '/vocabulary'
              ? 'bg-gray-300 text-amber-500'
              : ''
          }`}
        >
          <Link to={'/vocabulary'} className="px-2 py-4 block">
            {t('Vocabulary')}
          </Link>
        </li>
        <li
          className={`md:text-2xl text-nowrap font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === '/passage' ? 'bg-gray-300 text-amber-500' : ''
          }`}
        >
          <Link to={'/passage'} className="px-2 py-4 block">
            {t('Passage')}
          </Link>
        </li>
      </ul>

      <Select
        onChange={(e) => changeLanguage(e)}
        defaultValue="vi"
        style={{ width: 120 }}
        options={[
          { value: 'vi', label: 'Tiếng Việt' },
          { value: 'en', label: 'English' },
        ]}
      />
    </nav>
  );
};

export default Header;
