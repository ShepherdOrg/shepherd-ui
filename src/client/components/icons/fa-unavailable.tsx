import { colors } from '../../utils/colors'

interface Props {
  color?: string
  size?: number
}

export const FaUnavailable = function({
                                      color = colors.orange,
                                      size = 36,
                                    }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         width={size}
         height={size}
         viewBox="0 0 48 48">
      <path fill={color} d="M5.7 22H42.5V26H5.7z" transform="rotate(-45.001 24.036 24.037)"></path><path fill={color} d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path></svg>
  )
}


