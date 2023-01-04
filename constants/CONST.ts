export const DEFAULT_IMAGE = {
  default:
    'https://s3.eu-west-2.amazonaws.com/media.empymid.com/2021-04-26/Tp6ytJhQy/default-image.png',
  cat: 'https://s3.eu-west-2.amazonaws.com/media.empymid.com/2021-04-26/Tp6ytJhQy/default-cat.jpg',
} as const

export const DEFAULT_TEXT = {
  lorem:
    'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
} as const

export const PROPERTY_NAME_LIST = {
  lang: 'Language',
  title: 'Title',
  bodyBgColor: 'Body background color',
  tempBgColor: 'Template background color',
  bgColor: 'Background color',
  bgImage: 'Background image',
  fontSize: 'Font size',
  fontWeight: 'Font weight',
  fontFamily: 'Font family',
  text: 'Text',
  textDecoration: 'Text decoration',
  textTransform: 'Text transform',
  textAlign: 'Text alignment',
  href: 'Tracking link',
  alt: 'Alternate',
  src: 'Link image',
  color: 'Text color',
  width: 'Width',
  height: 'Height',
  dir: 'Direction',
  axis: 'Axis',
  lineHeight: 'Text line height',
  borderRadius: 'Border radius',
  tag: 'Font style',
  count: 'Count',
  border: 'Border',
  responsive: 'Responsive',
  responsiveClass: 'Responsive class',
  align: 'Align',
  valign: 'V-Align',
  blockType: 'Block type',
  class: 'Class',
} as const

export const INPUT_LIST = {
  fontWeight: [
    'initial',
    'inherit',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ],
  textDecoration: [
    { value: 'none', text: 'none' },
    { value: 'underline !important', text: 'underline' },
  ],
  fontFamily: [
    { text: 'Arial', value: 'Arial' },
    { text: 'sans-serif', value: 'sans-serif' },
    { text: 'Verdana', value: 'Verdana' },
    { text: 'Helvetica', value: 'Helvetica' },
    {
      text: 'Roboto',
      value:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
    },
    {
      text: 'Montserrat',
      value:
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap',
    },
    {
      text: 'Oswald',
      value:
        'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap',
    },
    {
      text: 'Lato',
      value:
        'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
    },
    {
      text: 'Poppins',
      value:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap',
    },
    {
      text: 'Caveat',
      value:
        'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap',
    },
    {
      text: 'Source Sans Pro',
      value:
        'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap',
    },
    {
      text: 'Open Sans',
      value:
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
    },
    {
      text: 'Istok Web',
      value:
        'https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    },
  ],
  textTransform: ['inherit', 'uppercase', 'lowercase', 'capitalize'],
  textAlign: ['center', 'left', 'right', 'justify'],
  align: ['center', 'left', 'right'],
  valign: ['middle', 'top', 'bottom'],
  dir: [
    { value: 'ltr', text: 'left to right' },
    { value: 'rtl', text: 'right to left' },
  ],
  axis: [
    { value: 'x', text: 'horizontal' },
    { value: 'y', text: 'vertical' },
  ],
  tag: [
    { value: 'p', text: 'paragraph' },
    { value: 'i', text: 'italic' },
    { value: 'h1', text: 'H1' },
    { value: 'h2', text: 'H2' },
    { value: 'h3', text: 'H3' },
    { value: 'h4', text: 'H4' },
    { value: 'h5', text: 'H5' },
  ],
  blockType: ['button', 'image', 'text', 'headline', 'space'],
  bodyBgColor: ['none', '#ffffff', '#f1f1f1', '#f3f3f3', '#eff1f7', '#f6f3fa'],
  responsiveClass: [
    { value: 'full-width', text: 'Full width' },
    { value: 'width-auto', text: 'Auto width' },
    { value: 'width-90', text: 'Width 90%' },
    { value: 'width-80', text: 'Width 80%' },
    { value: 'width-50', text: 'Width 50%' },
    { value: 'width-25', text: 'Width 25%' },
    { value: 'width-0', text: 'Width 0%' },
    { value: 'center', text: 'center' },
    { value: 'hide', text: 'hide' },
    { value: 'show', text: 'show' },
  ],
  responsive: [true, false],
} as const
