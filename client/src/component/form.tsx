import { saveVocabulary, updateVocabulary } from '@/store/action';
import { AppDispatch, RootState } from '@/store/store';
import { VocabularyType } from '@/type';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { Button, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <span className="text-red-500 text-wrap">
      {field.state.meta.isTouched && field.state.meta.errors.length
        ? field.state.meta.errors.join(',')
        : null}
    </span>
  );
}

type Form = {
  value?: VocabularyType;
};

const Form = ({ value }: Form) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.vocabulary);

  const form = useForm({
    defaultValues: {
      vocabulary: '',
      classification: 'n',
      read: '',
      meaning: '',
    },
    onSubmit: async ({ value }) => {
      const dataReal: any = JSON.parse(JSON.stringify(data));
      const jsonForm = {
        [`${value.vocabulary.toLowerCase()}`]: value,
      };
      if (dataReal[value.vocabulary]) {
        Swal.fire({
          title: t('WordUpdate'),
          text: t('WordExists'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: t('Yes'),
          cancelButtonText: t('No'),
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(updateVocabulary(jsonForm));
          }
        });
      } else {
        dispatch(saveVocabulary(jsonForm));
      }
    },
  });

  useEffect(() => {
    if (value) {
      form.setFieldValue('vocabulary', value.vocabulary);
      form.setFieldValue('classification', value.classification);
      form.setFieldValue('read', value.read);
      form.setFieldValue('meaning', value.meaning);
    }
  }, [value]);

  return (
    <div className="mb-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex gap-1 justify-center">
          <div className="flex flex-col gap-1 text-wrap">
            <form.Field
              name="vocabulary"
              validators={{
                onChange: ({ value }) =>
                  !value ? t('PleaseEnterVocabulary') : undefined,
                onChangeAsyncDebounceMs: 500,
              }}
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      placeholder={t('Vocabulary')}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e: any) =>
                        field.handleChange(e.target.value.toLowerCase())
                      }
                    />
                    <FieldInfo field={field} />
                  </>
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-wrap">
            <form.Field
              name="classification"
              validators={{
                onChange: ({ value }) =>
                  !value ? t('PleaseEnterClassification') : undefined,
                onChangeAsyncDebounceMs: 500,
              }}
              children={(field) => {
                return (
                  <>
                    <Select
                      value={field.state.value}
                      onChange={(e: any) => field.handleChange(e)}
                      options={[
                        { value: 'n', label: t('Noun') },
                        { value: 'v', label: t('Verb') },
                        { value: 'adj', label: t('Adjective') },
                        { value: 'adv', label: t('Adverb') },
                        { value: 'pro', label: t('Pronoun') },
                        { value: 'pre', label: t('Preposition') },
                        { value: 'con', label: t('Conjunction') },
                        { value: 'int', label: t('Interjection') },
                        { value: 'art', label: t('Article') },
                      ]}
                    />
                    <FieldInfo field={field} />
                  </>
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-wrap">
            <form.Field
              name="read"
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      placeholder={t('Read')}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e: any) =>
                        field.handleChange(e.target.value.toLowerCase())
                      }
                    />
                    <FieldInfo field={field} />
                  </>
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-wrap">
            <form.Field
              name="meaning"
              validators={{
                onChange: ({ value }) =>
                  !value ? t('PleaseEenterMeaning') : undefined,
                onChangeAsyncDebounceMs: 500,
              }}
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      placeholder={t('Meaning')}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e: any) =>
                        field.handleChange(e.target.value.toLowerCase())
                      }
                    />
                    <FieldInfo field={field} />
                  </>
                );
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-0.5">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <Button
                  color="primary"
                  variant="solid"
                  htmlType="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? '...' : 'Submit'}
                </Button>
                <Button
                  color="danger"
                  variant="outlined"
                  htmlType="reset"
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>
              </>
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
