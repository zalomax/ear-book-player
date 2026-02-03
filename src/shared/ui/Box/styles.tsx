import styled from '@emotion/styled'

export interface BoxStylesProps {
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
}

export const Box = styled.div<BoxStylesProps>((props) => ({
  display: props.display,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexDirection: props.flexDirection,
  flexWrap: props.flexWrap,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  maxWidth: typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth,
  flex: props.flex,
  marginTop: typeof props.mt === 'number' ? `${props.mt}px` : props.mt,
  marginBottom: typeof props.mb === 'number' ? `${props.mb}px` : props.mb,
  marginLeft: typeof props.ml === 'number' ? `${props.ml}px` : props.ml,
  marginRight: typeof props.mr === 'number' ? `${props.mr}px` : props.mr,
  margin: typeof props.m === 'number' ? `${props.m}px` : props.m,
  rowGap: typeof props.rowGap === 'number' ? `${props.rowGap}px` : props.rowGap,
  columnGap: typeof props.columnGap === 'number' ? `${props.columnGap}px` : props.columnGap,
}))