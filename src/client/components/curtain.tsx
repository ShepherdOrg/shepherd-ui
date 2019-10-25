import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { colors } from 'utils/colors'

interface Props {
  left?: string
  delay?: string
  visible?: boolean
  zIndex?: number
}

export const Curtain = ({ left, delay, visible, zIndex = 100 }: Props) => (
  <>
    <TransitionGroup component={null}>
      {visible && (
        <CSSTransition key="curtain" timeout={800} classNames="transition">
          <div style={{ zIndex: zIndex, transitionDelay: delay }} />
        </CSSTransition>
      )}
    </TransitionGroup>

    <style jsx>{`
      div {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: ${colors.midnightBlue};
      }

      .transition-enter {
        top: 100%;
        transition: top 0.5s;
      }
      .transition-enter.transition-enter-active {
        top: 0;
      }
      .transition-exit {
        bottom: 0;
        transition: bottom 0.8s;
      }
      .transition-exit.transition-exit-active {
        bottom: 100%;
      }

      @media (min-width: 700px) {
        .transition-enter {
          top: 0;
          left: ${left || '100%'};
          transition-property: left;
        }
        .transition-enter.transition-enter-active {
          left: 0;
        }
        .transition-exit {
          bottom: 0;
          right: 0;
          transition-property: right;
        }
        .transition-exit.transition-exit-active {
          right: 100%;
          bottom: 0;
        }
      }
    `}</style>
  </>
)
