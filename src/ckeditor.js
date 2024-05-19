/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import { Bold, Italic, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import { Image, ImageStyle, ImageToolbar, ImageUpload, ImageResize } from '@ckeditor/ckeditor5-image';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import { Table, TableToolbar, TableProperties, TableCellProperties} from '@ckeditor/ckeditor5-table';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Font from '@ckeditor/ckeditor5-font/src/font';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Bold,
  Italic,
	Underline,
	Subscript,
	Superscript,
  Heading,
  Image,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Base64UploadAdapter,
  List,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  RemoveFormat,
  Font,
  Indent,
  IndentBlock,
  Alignment
];

// // Editor configuration.
// ClassicEditor.defaultConfig = {
//   toolbar: {
//     items: [
//       'heading',
//       '|',
//       'bold',
//       'italic',
// 			'underline',
// 			'subscript',
// 			'superscript',
// 			'|',
//       'fontFamily',
//       'fontSize',
//       'fontColor',
//       '|',
//       'outdent',
//       'indent',
//       'alignment',
//       '|',
//       'bulletedList',
//       'numberedList',
//       '|',
//       'insertTable',
//       'imageUpload',
//       '|',
//       'removeFormat',
//       'undo',
//       'redo',
//     ]
//   },
//   heading: {
//     options: [
//       { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//       { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//       { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
//       { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
//     ]
//   },
//   image: {
//     toolbar: ['imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'],
//     styles: [
//       'full',
//       'alignLeft',
//       'alignCenter',
//       'alignRight'
//     ]
//   },
//   table: {
//     contentToolbar: [
//       'tableColumn',
//       'tableRow',
//       'mergeTableCells',
//       'tableProperties',
//       'tableCellProperties'
//     ]
//   },
//   fontFamily: {
//     options: [
//       'default',
//       '宋体, simsun, SimSun, serif',
//       '黑体, simhei, SimHei, sans-serif',
//       '楷体, KaiTi, STKaiti, serif',
//       // 添加其他字体选项...
//     ],
//     supportAllValues: true,
//     default: '宋体, simsun, SimSun, serif'
//   },
//   fontSize: {
//     options: [
//       'default',
//       {
//         title: '小五',
//         model: '9pt'
//       },
//       {
//         title: '五号',
//         model: '10.5pt'
//       },
//       {
//         title: '小四',
//         model: '12pt'
//       },
//       {
//         title: '四号',
//         model: '14pt'
//       },
//       {
//         title: '三号',
//         model: '16pt'
//       },
//       {
//         title: '二号',
//         model: '18pt'
//       },
//       // 添加其他字号选项...
//     ],
//     supportAllValues: true,
//     default: '10.5pt'
//   },
//   fontColor: {
//     colors: [
//       {
//         color: '#000000',
//         label: 'Black'
//       },
//       {
//         color: '#424242',
//         label: 'Dim grey'
//       },
//       {
//         color: '#757575',
//         label: 'Grey'
//       },
//       {
//         color: '#BDBDBD',
//         label: 'Light grey'
//       },
//       {
//         color: '#fff',
//         label: 'White',
//         hasBorder: true
//       },
//       {
//         color: '#D50000',
//         label: 'Red'
//       },
//       {
//         color: '#E91E63',
//         label: 'Pink'
//       },
//       {
//         color: '#9C27B0',
//         label: 'Purple'
//       },
//       {
//         color: '#3F51B5',
//         label: 'Indigo'
//       },
//       {
//         color: '#2196F3',
//         label: 'Blue'
//       },
//       {
//         color: '#03A9F4',
//         label: 'Light blue'
//       },
//       {
//         color: '#018D00',
//         label: 'Green'
//       },
//       {
//         color: '#AEEA00',
//         label: 'Light green'
//       },
//       {
//         color: '#FFEB3B',
//         label: 'Yellow'
//       },
//       {
//         color: '#FF5722',
//         label: 'Orange'
//       }
//     ]
//   },
//   // This value must be kept in sync with the language defined in webpack.config.js.
//   language: 'zh-CN'
// };
