import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  // optional fields
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj: {
    field1: string
  }
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface TextNode {
  text: string
}
// type given by React, functional component
export const TextField: React.FC<Props> = ({
  obj,
  person,
  text,
  handleChange
}) => {
  const [count, setCount] = useState<TextNode>({text: 'hello'});
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={ divRef }>
      <input ref={ inputRef } onChange={ handleChange }/>
    </div>
  );
};
