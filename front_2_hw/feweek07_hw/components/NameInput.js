"use client";

export default function NameInput({ value, onChange, onSubmit }) {
  return (
    <input
      className="name-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => e.key === "Enter" && onSubmit()}
      placeholder="이름을 입력하세요"
      maxLength={10}
    />
  );
}
