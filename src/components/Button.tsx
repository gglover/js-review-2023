import cn from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps {
  icon?: JSX.Element,
  style?: React.CSSProperties,
  text?: string,
  circular?: boolean,
  className?: string
  onClick?: () => void
}

 const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  className,
  style,
  circular = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={cn(styles.button, { [styles.circular]: circular }, className)}
    >
      { icon ?? icon }
      { text ?? text }
    </button>
  );
}

export default Button;