interface MemoProps {
  shape: string
  color: string
}

interface Shapes {
  [key: string]: JSX.Element
}

export default function Memo({ shape, color }: MemoProps) {
  const shapes: Shapes = {
    square: <div className={`w-6 h-6 bg-${color}-500`} />,
    circle: <div className={`w-6 h-6 rounded-full bg-${color}-500`} />,
    triangle: (
      <div
        className={`border-l-[12px] border-r-[12px] border-b-[23px] border-l-transparent border-r-transparent bg-${color}-500`}
      />
    )
  }

  return shapes[shape]
}
