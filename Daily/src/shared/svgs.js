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
const MeetingIcon = props => (
  <Svg width={22} height={19} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M4.967 14.916c0-1.962 2.749-3.67 6.006-3.67 3.239 0 6.006 1.692 6.006 3.653s-2.75 2.47-6.006 2.47c-3.24 0-6.006-.49-6.006-2.453ZM14.823 4.6a3.85 3.85 0 0 0-7.7 0 3.837 3.837 0 0 0 3.823 3.849h.027a3.85 3.85 0 0 0 3.85-3.849ZM17.362 7.391a2.901 2.901 0 0 0-.166-5.643M17.943 10.545c1.754 0 3.252 1.189 3.252 2.25 0 .626-.517 1.307-1.3 1.49M4.584 7.391a2.901 2.901 0 0 1 .165-5.643M4.002 10.545c-1.754 0-3.252 1.189-3.252 2.25 0 .626.517 1.307 1.302 1.49" />
    </G>
  </Svg>
);
const WorkIcon = props => (
  <Svg width={20} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M9.961 15.518V12.89M19.09 10.479l-.03.02c-2.421 1.493-5.62 2.394-9.103 2.394-3.484 0-6.673-.901-9.094-2.393l-.03-.021" />
      <Path d="M9.961 4.148c6.909 0 9.211 2.051 9.211 8.203 0 6.152-2.302 8.203-9.211 8.203-6.908 0-9.211-2.05-9.211-8.203 0-6.152 2.303-8.203 9.211-8.203Z" />
      <Path d="M13.224 4.37v-.63c0-1.264-.923-2.289-2.06-2.289H8.759c-1.137 0-2.06 1.025-2.06 2.29v.63" />
    </G>
  </Svg>
);
const PrivateIcon = props => (
  <Svg width={18} height={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M13.471 7.403V5.254a4.561 4.561 0 0 0-9.12-.02v2.17M8.91 12.156v2.221" />
      <Path d="M1.25 13.095c0 4.704 1.915 6.272 7.66 6.272s7.661-1.568 7.661-6.272c0-4.703-1.916-6.27-7.66-6.27-5.746 0-7.66 1.567-7.66 6.27Z" />
    </G>
  </Svg>
);
const PersonalIcon = props => (
  <Svg width={16} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M1 17.786c0-2.3 3.133-4.425 6.845-4.425 3.691 0 6.844 2.104 6.844 4.404s-3.133 2.896-6.844 2.896C4.153 20.661 1 20.087 1 17.786ZM12.224 5.788a4.387 4.387 0 1 0-8.774 0 4.371 4.371 0 0 0 4.357 4.386h.03a4.386 4.386 0 0 0 4.387-4.386Z" />
    </G>
  </Svg>
);
const EventIcon = props => (
  <Svg width={21} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M10.024 2.502c6.956 0 9.275 2.318 9.275 9.274 0 6.956-2.319 9.274-9.275 9.274-6.955 0-9.274-2.318-9.274-9.274 0-6.956 2.319-9.274 9.274-9.274ZM1.025 8.324h18.008M14.429 12.262h.009M10.029 12.262h.009M5.621 12.262h.009M14.429 16.114h.009M10.029 16.114h.009M5.621 16.114h.009M14.033 1.05v3.263M6.025 1.05v3.263" />
    </G>
  </Svg>
);
const CreateIcon = props => (
  <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M11.037 7.463v7.149M14.614 11.038H7.459M11.037 1.3c7.302 0 9.736 2.436 9.736 9.738s-2.434 9.736-9.736 9.736c-7.302 0-9.737-2.434-9.737-9.736C1.3 3.736 3.735 1.3 11.037 1.3Z" />
    </G>
  </Svg>
);
const ProfileSettingIcon = props => (
  <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      stroke="#10275A"
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path
        d="M10 .75c6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25C3.063 19.25.75 16.937.75 10 .75 3.063 3.063.75 10 .75Z"
        strokeWidth={1.5}
      />
      <Path strokeWidth={2} d="M13.994 10h.009M9.995 10h.009M5.995 10h.009" />
    </G>
  </Svg>
);
const BackButton = props => (
  <Svg width={12} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M8.917 12.833S3.083 9.379 3.083 6.999c0-1.586 1.945-3.53 5.834-5.833"
      stroke="#10275A"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const NextButton = props => (
  <Svg width={8} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M1.083 1.167s5.834 3.454 5.834 5.834c0 1.586-1.945 3.53-5.834 5.833"
      stroke="#10275A"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="0,0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export {
  BackButton,
  NextButton,
  Forward,
  PendingIcon,
  CancelIcon,
  SettingDots,
  SearchIcon,
  CalendarIcon,
  CloseIcon,
  ProfileSettingIcon,
  CreateIcon,
  PersonalIcon,
  WorkIcon,
  EventIcon,
  PrivateIcon,
  MeetingIcon,
};
