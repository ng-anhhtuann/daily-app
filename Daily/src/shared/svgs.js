// @ts-nocheck
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {FADE_TEXT} from '../utils/colors';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Forward = props => (
  <Svg width={12} height={12} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h12v12H0V0Z" />
      <G
        stroke={props?.color || '#12175E'}
        strokeDasharray="0,0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.75}>
        <Path d="M9.875 5.864h-7.5M6.85 2.85s3.025 1.631 3.025 3.012c0 .921-1.009 1.926-3.025 3.013" />
      </G>
    </G>
  </Svg>
);
const CancelIcon = props => (
  <Svg width={28} height={28} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.75}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m14.793 9.195-5.59 5.591M14.8 14.793l-5.6-5.6M12 22.792c8.093 0 10.792-2.698 10.792-10.791 0-8.094-2.699-10.792-10.792-10.792S1.208 3.907 1.208 12.001c0 8.093 2.699 10.791 10.792 10.791Z" />
    </G>
  </Svg>
);
const PendingIcon = props => (
  <Svg width={28} height={28} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.75}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 22.792c8.093 0 10.792-2.698 10.792-10.791 0-8.094-2.699-10.792-10.792-10.792S1.208 3.907 1.208 12.001c0 8.093 2.699 10.791 10.792 10.791Z" />
      <Path d="M15.955 14.354 12 11.994V6.906" />
    </G>
  </Svg>
);
const SettingDots = props => (
  <Svg width={2} height={10} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="#2C406E" fillRule="nonzero">
      <Path d="M.381 1.943A.875.875 0 1 1 1 2.199a.875.875 0 0 1-.619-.256ZM.381 5.619A.875.875 0 1 1 1.62 4.38.875.875 0 0 1 .38 5.62ZM.381 9.293a.875.875 0 1 0-.256-.62c0 .233.092.455.256.62Z" />
    </G>
  </Svg>
);
const SearchIcon = props => (
  <Svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#B0B5DD"
      strokeWidth={1.25}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M15.53 8.396a7.134 7.134 0 1 1-14.268 0 7.134 7.134 0 0 1 14.268 0ZM16.758 15.582a1.175 1.175 0 1 1-2.351.001 1.175 1.175 0 0 1 2.35-.001Z" />
    </G>
  </Svg>
);
const CalendarIcon = props => (
  <Svg width={12} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke={FADE_TEXT}
      strokeWidth={0.875}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M6.014 2.043c4.058 0 5.41 1.352 5.41 5.41 0 4.057-1.352 5.41-5.41 5.41-4.057 0-5.41-1.353-5.41-5.41 0-4.058 1.353-5.41 5.41-5.41ZM.765 5.438h10.504M8.583 7.735h.006M6.017 7.735h.005M3.446 7.735h.005M8.583 9.981h.006M6.017 9.981h.005M3.446 9.981h.005M8.353 1.195v1.903M3.681 1.195v1.903" />
    </G>
  </Svg>
);
const CloseIcon = props => (
  <Svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m9.893.332.21.005c2.143.095 3.563 1.655 3.563 3.942v5.447c0 2.353-1.513 3.94-3.773 3.94h-5.78c-2.26 0-3.78-1.587-3.78-3.94V4.279c0-2.36 1.52-3.947 3.78-3.947h5.78Zm-4.08 4.647a.586.586 0 0 0-.827 0 .587.587 0 0 0 0 .826l1.187 1.187-1.187 1.18a.587.587 0 0 0 .414 1c.153 0 .3-.06.413-.174L7 7.82 8.186 9c.114.12.26.173.407.173.153 0 .3-.06.413-.174a.579.579 0 0 0 0-.819L7.82 6.992l1.186-1.187a.587.587 0 0 0 0-.826.586.586 0 0 0-.826 0L7 6.165Z"
      fill="#B0B5DD"
      fillRule="evenodd"
    />
  </Svg>
);
export {
  Forward,
  PendingIcon,
  CancelIcon,
  SettingDots,
  SearchIcon,
  CalendarIcon,
  CloseIcon,
};
