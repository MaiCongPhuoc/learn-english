import { useTranslation } from 'react-i18next';

const Grammar = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('PresentContinuous')}</h2>
        <br />
        <div>
          <p>&#8211; {t('AffirmativeSentencen')}(+): S + am/is/are + V-ing</p>
          <p>&#8211; {t('NegativeSentence')}(-): S + am/is/are + not + V-ing</p>
          <p>&#8211; {t('query')}(?): Am/is/are + S + V-ing?</p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('PresentSimple')}</h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + V (s/es) .</p>
          <p>&#8211; {t('NegativeSentence')} (-): S + do/does + not + V.</p>
          <p>&#8211; {t('query')}(?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Do/Does (not) + S + V + O?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + do/does
            (not) + S + V + O?
          </p>
          <p>&#8211; Động từ to be</p>
          <p>&#8211; {t('Confirm')} (+): S + am/is/are + N/Adj + O.</p>
          <p>
            &#8211; {t('NegativeSentence')} (-): S + am/is/are + not + N/Adj +
            O.
          </p>
          <p>&#8211; {t('query')} (?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Am/Is/Are + S + N/Adj + O?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word+ am/is/are + S
            + N/Adj + O?
          </p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('PastSimpleTense')}</h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + V-ed/ V2 (+O)</p>
          <p>&#8211; {t('NegativeSentence')} (-): S + did not + V-inf (+O)</p>
          <p>&#8211; {t('query')}(?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Was/Were + S + N/Adj?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + S + (not) +
            V-inf + (O)?
          </p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('PastContinuousTense')}</h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + was/were+ V-ing</p>
          <p>&#8211; {t('NegativeSentence')} (-): S + wasn't/weren't +V-ing</p>
          <p>&#8211; {t('query')}(?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Was/Were + S + V-ing ?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + Was/Were + S
            + V-ing ?
          </p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('PresentPerfectTense')}</h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + have/has + V-ed/V-3</p>
          <p>
            &#8211; {t('NegativeSentence')} (-): S + haven't/hasn't + V-ed/V-3
          </p>
          <p>&#8211; {t('query')}(?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Have/Has + S + V-ed/V-3 ?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + S + V-ed/PP
            ?
          </p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">
          {t('PresPresentPerfectContinuousTenseentPerfectTense')}
        </h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + have/has + been + V-ing</p>
          <p>
            &#8211; {t('NegativeSentence')} (-): S + have/has + not + been +
            V-ing
          </p>
          <p>&#8211; {t('query')}(?):</p>
          <p>&#8226; Câu hỏi Yes/No question: Have/Has + S + been + V-ing?</p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + have/has + S
            + been + V-ing?
          </p>
        </div>
      </div>
      <div className="shadow-xl inset-shadow-gray-950 rounded-xl">
        <h2 className="text-2xl font-bold">{t('NearFutureTense')}</h2>
        <br />
        <div>
          <p>&#8211; {t('Confirm')} (+): S + be going to + V (nguyên thể)</p>
          <p>
            &#8211; {t('NegativeSentence')} (-): S + be + not + going to + V
            (nguyên thể)
          </p>
          <p>&#8211; {t('query')}(?):</p>
          <p>
            &#8226; Câu hỏi Yes/No question: Be + S+ going to + V (nguyên thể)?
          </p>
          <p>
            &#8226; Câu hỏi WH- / H- question: WH- word / H- word + be + S +
            going to + V (nguyên thể)?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
