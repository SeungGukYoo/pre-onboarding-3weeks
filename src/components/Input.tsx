import { useRef } from 'react';
import { useDisplay } from '../context/DisplayListContext';
import useInput from '../hook/useInput';

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeValue = useInput()?.onChangeValue;
  const isWriting = useDisplay()?.isWriting;
  const ApiTrigger = () => {
    if (inputRef.current && onChangeValue) {
      onChangeValue(inputRef.current.value);
    }
  };
  const isFoucsInput = (e: React.FocusEvent<HTMLInputElement>) => {
    isWriting && isWriting(e.type);
  };

  return (
    <div className="mb-4">
      <input
        className="border border-blue-600 w-[480px] h-[40px] rounded-xl pl-4 outline-none"
        placeholder={isWriting ? '🔍 질환명을 입력해주세요.' : ''}
        onFocus={isFoucsInput}
        onBlur={isFoucsInput}
        ref={inputRef}
        type="text"
        onChange={ApiTrigger}
      />
      <button className="border ml-4 w-[90px] h-[40px] border-blue-600 text-gray-100 rounded-xl cursor-pointer ">
        SEARCH
      </button>
    </div>
  );
}

export default Input;
