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

  const colors = {
    square: color,
    circle: color,
    triangle: color,
    pentagon: color
  }

  const shapes: Shapes = {
    square: <div className={styles.square} style={{ backgroundColor: colors.square }} />,
    circle: <div className={styles.circle} style={{ backgroundColor: colors.circle }} />,
    triangle: <div className={styles.triangle} style={{ borderBottomColor: colors.triangle }} />,
    pentagon: <div className={styles.pentagon} style={{ backgroundColor: colors.pentagon }} />
  }

  return shapes[shape]
}
