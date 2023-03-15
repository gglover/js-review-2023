import cn from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps {
  icon?: JSX.Element,
  text?: string,
  circular?: boolean,
  style?: React.CSSProperties,
  classes?: string
  onClick?: () => void
}

export default function Button({ icon, text, circular, classes, style, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} style={style} className={cn(styles.button, { [styles.circular]: circular }, classes)}>
      { icon ?? icon }
    </button>
  );
}