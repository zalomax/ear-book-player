import { Box as BoxStyled } from "./styles"

export interface BoxProps {
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  flexWrap?: string
  width?: string | number
  height?: string | number
  maxWidth?: string | number
  flex?: string | number
  mt?: string | number
  mb?: string | number
  ml?: string | number
  mr?: string | number
  m?: string | number
  rowGap?: string | number
  columnGap?: string | number
  children?: React.ReactNode
}

export const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}
