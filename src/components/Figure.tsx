interface MemoProps {
  shape: string
  color: string
}

interface Shapes {
  [key: string]: JSX.Element
}

export default function Figure({ color, shape }: MemoProps) {
  const styles = {
    square: 'w-12 h-12',
    circle: 'w-12 h-12 rounded-full',
    triangle: 'border-x-lr border-b-b border-x-transparent',
    pentagon: 'w-12 h-12 clip-polygon'
  }

  const animations = {
    every: 'animate-fade-in'
  }

  const colors = {
    square: color,
    circle: color,
    triangle: color,
    pentagon: color
  }

  const shapes: Shapes = {
    square: (
      <div
        className={`${styles.square} ${animations.every}`}
        style={{ backgroundColor: colors.square }}
      />
    ),
    circle: (
      <div
        className={`${styles.circle} ${animations.every}`}
        style={{ backgroundColor: colors.circle }}
      />
    ),
    triangle: (
      <div
        className={`${styles.triangle} ${animations.every}`}
        style={{ borderBottomColor: colors.triangle }}
      />
    ),
    pentagon: (
      <div
        className={`${styles.pentagon} ${animations.every}`}
        style={{ backgroundColor: colors.pentagon }}
      />
    )
  }

  return shapes[shape]
}
