// @ts-nocheck
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
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
export {Forward, PendingIcon, CancelIcon, SettingDots};
