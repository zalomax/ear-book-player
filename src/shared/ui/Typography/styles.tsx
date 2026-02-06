import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/react'

export type TypographyVariant = 'headline1' | 'headline2' | 'title' | 'text' | 'smallText'
export type TypographyFontWeight = 'regular' | 'medium' | 'bold'

export interface TypographyStylesProps {
  variant?: TypographyVariant
  fontWeight?: TypographyFontWeight
  color?: string
}

const getFontSize = (variant?: TypographyVariant): string => {
  switch (variant) {
    case 'headline1':
      return '48px'
    case 'headline2':
      return '36px'
    case 'title':
      return '24px'
    case 'text':
      return '16px'
    case 'smallText':
      return '14px'
    default:
      return '16px'
  }
}

const getFontWeight = (fontWeight?: TypographyFontWeight): number => {
  switch (fontWeight) {
    case 'regular':
      return 400
    case 'medium':
      return 500
    case 'bold':
      return 700
    default:
      return 400
  }
}

export const Typography = styled.div<TypographyStylesProps>((props) => ({
  fontSize: getFontSize(props.variant),
  fontWeight: getFontWeight(props.fontWeight),
  color: props.color || 'white',
} as CSSObject))
