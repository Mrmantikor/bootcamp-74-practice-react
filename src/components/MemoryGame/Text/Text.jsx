import clsx from 'clsx';
import s from './Text.module.css';

const Text = ({ text, size, type = 'p', className }) => {
  const Type = type;

  return (
    <Type className={clsx({ [s[size]]: size, [s[className]]: className })}>
      {text}
    </Type>
  );
};

export default Text;
