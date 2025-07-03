import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { removeVocabulary } from '@/store/action';
import { VocabularyType } from '@/type';
import Form from '@/component/form';
import { Button, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import React from 'react';

const Vocabulary = () => {
  const [search, setSearch] = useState<string>('');
  const [filteredVocabularies, setFilteredVocabularies] = useState<
    VocabularyType[]
  >([]);
  const { t } = useTranslation();
  const [valueForm, setValueForm] = useState<VocabularyType>();

  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.vocabulary
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

  // Chọn mảng từ vựng để hiển thị (đã lọc hoặc toàn bộ)
  const vocabulariesToRender = search ? filteredVocabularies : vocabulariesArr;

  // Nhóm từ vựng theo topic
  const groupedVocabularies: Record<string, VocabularyType[]> = {};
  vocabulariesToRender.forEach((vocab) => {
    if (!groupedVocabularies[vocab.topic]) {
      groupedVocabularies[vocab.topic] = [];
    }
    groupedVocabularies[vocab.topic].push(vocab);
  });

  // Chuyển đối tượng đã nhóm thành một mảng các entry để dễ dàng map
  const topicEntries = Object.entries(groupedVocabularies);

  return (
    <div className="w-full overflow-x-auto h-[calc(100vh-88px)]">
      <Form value={valueForm} />
      {loading ? (
        <div className="flex justify-center w-full mt-5">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
      ) : (
        <>
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
              {topicEntries.map(([topic, vocabsInTopic]) => (
                // Sử dụng Fragment để bao bọc các hàng của mỗi topic
                <React.Fragment key={topic}>
                  {/* Hàng hiển thị Topic */}
                  <tr className="bg-gray-200 font-bold text-left">
                    <td colSpan={5} className="text-center text-emerald-600 px-2 py-1 border border-gray-300">
                      {t('Topic')}: {topic}
                    </td>
                  </tr>
                  {/* Lặp qua các từ vựng trong topic này */}
                  {vocabsInTopic.map((vocabulary: VocabularyType) => (
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
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Vocabulary;
