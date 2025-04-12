import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { getVocabulary, removeVocabulary } from '@/store/action';
import { VocabularyType } from '@/type';
import Form from '@/component/form';
import { Button, Input } from 'antd';
import Swal from 'sweetalert2';

const Vocabulary = () => {
  const [search, setSearch] = useState<string>('');
  const [filteredVocabularies, setFilteredVocabularies] = useState<
    VocabularyType[]
  >([]);
  const { t } = useTranslation();
  const [valueForm, setValueForm] = useState<VocabularyType>();

  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.counter
  );

  const vocabulariesArr = Object.values(data);
  vocabulariesArr.sort((a, b) => {
    if (a.vocabulary.toLowerCase() < b.vocabulary.toLowerCase()) {
      return -1;
    }
    if (a.vocabulary.toLowerCase() > b.vocabulary.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const handleUpdate = (vocabulary: VocabularyType) => {
    setValueForm(vocabulary);
  };

  const handleDel = (key: string) => {
    Swal.fire({
      title: t('YouSure'),
      text: t('AreYouSure'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes'),
      cancelButtonText: t('No'),
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeVocabulary(key));
      }
    });
  };

  const handleSearch = (e: any) => {
    setSearch(e);
    const newFiltered = vocabulariesArr.filter(
      (vocabulary) =>
        vocabulary.vocabulary.toLowerCase().includes(e.toLowerCase()) ||
        vocabulary.meaning.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredVocabularies(newFiltered);
  };

  return (
    <div className="w-full overflow-x-auto h-[calc(100vh-88px)]">
      <Form value={valueForm} />
      <div className="mb-1">
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={(e: any) => handleSearch(e.target.value)}
        />
      </div>
      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr className="border border-blue-300 bg-blue-300">
            <th>{t('Vocabulary')}</th>
            <th>{t('Classification')}</th>
            <th>{t('Read')}</th>
            <th>{t('Meaning')}</th>
            <th>{t('Action')}</th>
          </tr>
        </thead>
        <tbody>
          {(search ? filteredVocabularies : vocabulariesArr).map(
            (vocabulary: VocabularyType) => {
              return (
                <tr
                  key={vocabulary.vocabulary}
                  className="text-center hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 border border-gray-300"
                >
                  <td>{vocabulary.vocabulary}</td>
                  <td>{vocabulary.classification.toUpperCase()}</td>
                  <td>{vocabulary.read}</td>
                  <td>{vocabulary.meaning}</td>
                  <td>
                    <Button
                      color="cyan"
                      variant="solid"
                      onClick={() => handleUpdate(vocabulary)}
                    >
                      update
                    </Button>
                    <Button
                      color="danger"
                      variant="outlined"
                      onClick={() => handleDel(vocabulary.vocabulary)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Vocabulary;
