import { colors } from '../../utils/colors'

interface Props {
  color?: string
  size?: number
}

export const FaCheckmark = function({
                                     color = colors.midnightBlue,
                                     size = 36,
                                   }: Props) {
  return (
    <svg       role="img"
               xmlns="http://www.w3.org/2000/svg"
               height={size}
               width={size}
               viewBox="0 0 48 48"
               enableBackground="new 0 0 48 48">
      <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
    </svg>
  )
}

