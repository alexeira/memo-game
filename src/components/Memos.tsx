import { useEffect, useState } from 'react'

import Figure from './Figure'

const shapes = [
  <Figure key="red-square" color="#FF5A5F" shape="square" />,
  <Figure key="yellow-triangle" color="#DBD56E" shape="triangle" />,
  <Figure key="blue-circle" color="#3581b8" shape="circle" />,
  <Figure key="green-pentagon" color="#5AD3D1" shape="pentagon" />
]

const duplicatedShapes = shapes
  .flatMap((shape, index) => [
    <Figure key={`${shape.key}-1-${index}`} {...shape.props} />,
    <Figure key={`${shape.key}-2-${index}`} {...shape.props} />
  ])
  .sort(() => Math.random() - 0.5)

const styles = 'cursor-pointer rounded-lg p-5 mx-auto my-5 border border-gray-400'

export default function Memos() {
  const [selected, setSelected] = useState<JSX.Element[]>([])
  const [guessed, setGuessed] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].key === selected[1].key) {
        setSelected([])
      }
      if (selected[0].props.shape === selected[1].props.shape) {
        setGuessed([...guessed, ...selected])
      }
      setTimeout(() => setSelected([]), 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  useEffect(() => {
    if (guessed.length === duplicatedShapes.length) {
      alert('You won!')
      setSelected([])
      setGuessed([])
      duplicatedShapes.sort(() => Math.random() - 0.5)
    }
  }, [guessed])

  return (
    <ul className="grid grid-cols-auto-fill gap-2 w-full ">
      {duplicatedShapes.map(shape => (
        <li
          key={shape.key}
          className={styles}
          onClick={() => selected.length < 2 && setSelected([...selected, shape])}
        >
          {selected.includes(shape) || guessed.includes(shape) ? (
            shape
          ) : (
            <div className="w-12 h-12 grid place-items-center text-3xl">🔍</div>
          )}
        </li>
      ))}
    </ul>
  )
}
