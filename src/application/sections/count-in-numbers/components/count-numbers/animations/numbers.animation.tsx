import { useSpring, animated } from '@react-spring/web'
import dynamic from 'next/dynamic'

type NumberAnimationProps = {
  n: number
}

function NumberAnimationComponent({
  n,
}: NumberAnimationProps): React.ReactElement {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, fraction: 10 },
  })
  return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
}

export const NumberAnimation = dynamic(
  async () => await Promise.resolve(NumberAnimationComponent),
  {
    ssr: false,
  },
)
