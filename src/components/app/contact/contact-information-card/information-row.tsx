import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const textVariants = cva('flex items-center gap-2', {
  variants: {
    link: {
      true: 'hover:underline',
      false: '',
    },
  },
  defaultVariants: {
    link: false,
  },
});

interface IProps {
  icon: IconDefinition;
  text: string;
  href?: React.ComponentProps<typeof Link>['href'];
  target?: React.ComponentProps<typeof Link>['target'];
}

export const InformationRow: React.FC<IProps> = ({
  icon,
  text,
  href,
  target,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      {href ? (
        <Link
          href={href}
          target={target}
          className={textVariants({ link: true })}
        >
          <FontAwesomeIcon icon={icon} />
          {text}
        </Link>
      ) : (
        <p className={textVariants()}>
          <FontAwesomeIcon icon={icon} /> {text}
        </p>
      )}
    </div>
  );
};
