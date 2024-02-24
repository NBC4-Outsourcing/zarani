import { ComunityForm, ComunityInput } from 'components/styles/ComunityStyle';
import useInput from 'hooks/useInput';
import { insertWriting } from './supabaseTest';

const ComunityInputForm = () => {
  // 커뮤니티 글 input value,onchange
  const [content, , onChangeContentHandler, reset] = useInput({
    writeContent: ''
  });

  const { writeContent } = content;

  // 커뮤니티 글 등록 함수
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newWrite = {
      nickname: '보라돌이',
      userId: 'qube7089',
      avatar:
        'data:image/jpeg;base64,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',
      content: writeContent
    };
    insertWriting(newWrite);
    reset();
  };

  return (
    <div>
      <ComunityForm onSubmit={onSubmitHandler}>
        <label>보라돌이</label>
        <ComunityInput
          maxLength={'80'}
          placeholder="최대 80자까지만 입력할 수 있습니다."
          name="writeContent"
          value={writeContent}
          onChange={onChangeContentHandler}
        />
        <button type="submit">등록</button>
      </ComunityForm>
    </div>
  );
};

export default ComunityInputForm;
