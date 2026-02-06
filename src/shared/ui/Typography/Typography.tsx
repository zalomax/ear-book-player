import { Typography as TypographyStyled } from './styles';

export type TypographyVariant = 'headline1' | 'headline2' | 'title' | 'text' | 'smallText';
export type TypographyFontWeight = 'regular' | 'medium' | 'bold';

export interface TypographyProps {
  variant?: TypographyVariant;
  fontWeight?: TypographyFontWeight;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export const Typography = ({
  variant = 'text',
  fontWeight = 'regular',
  color = 'white',
  as = 'div',
  children,
}: TypographyProps) => {
  return (
    <TypographyStyled variant={variant} fontWeight={fontWeight} color={color} as={as}>
      {children}
    </TypographyStyled>
  );
};
