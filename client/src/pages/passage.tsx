import { Button, Popover, Input } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { useState } from 'react';

const { TextArea } = Input;

const Passage = () => {
  const [valuePassage, setValuePassage] = useState<string[]>([]);
  const { data, error, loading } = useSelector(
    (state: RootState) => state.counter
  );

  const wordArr = ['I', 'read', 'book'];

  const form = useForm({
    defaultValues: {
      passage: '',
    },
    onSubmit: async ({ value }) => {
      const valueArr = value.passage.split(' ');
      setValuePassage(valueArr);
    },
  });

  return (
    <div className="shadow-xl inset-shadow-gray-950 rounded-xl p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex justify-center items-center gap-1">
          <form.Field
            name="passage"
            children={(field) => {
              return (
                <>
                  <TextArea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e: any) => field.handleChange(e.target.value)}
                    rows={3}
                  />
                </>
              );
            }}
          />
          <form.Subscribe>
            <Button htmlType="submit" type="primary">
              submit
            </Button>
          </form.Subscribe>
        </div>
      </form>
      <div>
        {valuePassage && (
          <p className="flex flex-wrap gap-1">
            {valuePassage.map((word, index) => {
              const wordtoLowerCase = word
                .toLowerCase()
                .replace(/[\t\n\r!@#$%^&*()<>?:";',.//*-+=]/g, '');
              const vocab = data[wordtoLowerCase];
              let vocabVerb = undefined;
              if (!vocab) {
                if (wordtoLowerCase.endsWith('ing')) {
                  vocabVerb = data[wordtoLowerCase.replace(/ing$/, '')];
                } else if (wordtoLowerCase.endsWith('ed')) {
                  vocabVerb = data[wordtoLowerCase.replace(/ed$/, '')];
                }
              }
              if (vocab || vocabVerb) {
                const v = vocab || vocabVerb;
                const wor = `${v.vocabulary} || ${v.classification} || ${v.read} || ${v.meaning}`;
                return (
                  <Popover key={`${word}-${index}`} content={wor}>
                    <button type="button" className="font-bold">
                      {word}
                    </button>
                  </Popover>
                );
              }

              return <span key={`${word}-${index}`}>{word}</span>;
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default Passage;
