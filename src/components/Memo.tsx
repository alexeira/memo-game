interface MemoProps {
  shape: string
  color: string
}

interface Shapes {
  [key: string]: JSX.Element
}

export default function Memo({ color, shape }: MemoProps) {
  const styles = {
    square: `w-6 h-6`,
    circle: `w-6 h-6 rounded-full`,
    triangle: `border-l-[12px] border-r-[12px] border-b-[23px] border-l-transparent border-r-transparent`
  }

  const colors = {
    square: color,
    circle: color,
    triangle: color
  }

  const shapes: Shapes = {
    square: <div className={styles.square} style={{ backgroundColor: colors.square }} />,
    circle: <div className={styles.circle} style={{ backgroundColor: colors.circle }} />,
    triangle: <div className={styles.triangle} style={{ borderBottomColor: colors.triangle }} />
  }

  return shapes[shape]
}
