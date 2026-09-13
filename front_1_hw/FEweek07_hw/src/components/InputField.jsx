import * as S from "../styles/InputField.Styled";
import { useState } from "react";

const InputField = ({ type = "text", placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <S.Container>
      <S.Input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <S.Label $active={isFloating}>{placeholder}</S.Label>

      <S.Fieldset $isFocused={isFocused}>
        <S.Legend $active={isFloating}>{placeholder}</S.Legend>
      </S.Fieldset>
    </S.Container>
  );
};

export default InputField;
