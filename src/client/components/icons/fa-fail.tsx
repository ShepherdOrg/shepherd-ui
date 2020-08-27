import { colors } from '../../utils/colors'

interface Props {
  color?: string
  size?: number
}

export const FaFail = function({
                                      color = colors.orange,
                                      size = 36,
                                    }: Props) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         width={size}
         height={size}
         viewBox="0 0 48 48"><path fill={color} d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill={color} d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path></svg>

  )
}


