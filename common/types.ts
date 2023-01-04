import { PROPERTY_NAME_LIST } from '~~/constants/CONST'

type Direction = 'ltr' | 'rtl'
type Action = 'update' | 'create' | 'delete' | 'init'
type Align = 'left' | 'right' | 'center'
type Valign = 'top' | 'bottom' | 'middle'
type Axis = 'horizontal' | 'vertical'

export type BlockType = 'root' | 'table' | 'image' | 'button' | 'text'

export type InputType = 'text' | 'number' | 'color' | null

export interface Position {
  top?: any
  right?: any
  bottom?: any
  left?: any
  width?: any
  height?: any
}

export interface Root {
  lang?: string
  title: string
  fontFamily?: any
  bgColor?: any
  color?: any
}

export interface Table {
  align?: Align
  valign?: Valign
  bgColor?: any
  bgImage?: any
  height?: any
  width?: any
  dir?: Direction
  class?: any
}

export interface Button {
  align?: Align
  borderRadius?: any
  bgColor?: any
  color?: any
  fontSize?: any
  fontWeight?: any
  href?: any
  height?: any
  text?: any
  textTransform?: any
  width?: any
  class?: any
}

export interface Image {
  alt?: any
  href?: any
  src?: any
  class?: any
  width?: number
}

export type FusionData = Root | Table | Button | Image

export type InputKey = keyof typeof PROPERTY_NAME_LIST

export interface Stack {
  id?: string
  action: Action
  data: FusionData
}

export interface Cell {
  id?: string
  bid?: string
}

export interface History {
  undo: Array<Stack | any>
  redo: Array<Stack | any>
}

export interface Block {
  id: string
  type: BlockType
  axis: Axis
  blocks: Block[]
  history: History
}

export interface Memory {
  undo: Array<Cell | any>
  redo: Array<Cell | any>
}

export interface Layout {
  id: string
  data: Block | any
  memory: Memory
}
