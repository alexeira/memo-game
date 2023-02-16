import { useEffect, useState } from 'react'

import Figure from './Figure'

const loupe = <div className="w-12 h-12 grid place-items-center text-3xl animate-h-flip">🔍</div>

const shapes = [
  <Figure key="red-square" color="#FF5A5F" shape="square" />,
  <Figure key="yellow-triangle" color="#DBD56E" shape="triangle" />,
  <Figure key="blue-circle" color="#3581B8" shape="circle" />,
  <Figure key="green-pentagon" color="#5AD3D1" shape="pentagon" />
]

const duplicatedShapes = shapes
  .flatMap((shape, index) => [
    <Figure key={`${shape.key}-1-${index}`} {...shape.props} />,
    <Figure key={`${shape.key}-2-${index}`} {...shape.props} />
  ])
  .sort(() => Math.random() - 0.5)

export default function Memos() {
  const [selected, setSelected] = useState<JSX.Element[]>([])
  const [guessed, setGuessed] = useState<JSX.Element[]>([])

  const listedShapes = duplicatedShapes.map(shape => (
    <li
      key={shape.key}
      className="cursor-pointer rounded-lg p-5 mx-auto my-5 border border-gray-400"
      onClick={() =>
        selected.length < 2 && !selected.includes(shape)
          ? setSelected([...selected, shape])
          : alert('You can only select two shapes at a time')
      }
    >
      {selected.includes(shape) || guessed.includes(shape) ? shape : loupe}
    </li>
  ))

  useEffect(() => {
    const [first, second] = selected

    if (selected.length === 2 && first?.key !== second?.key) {
      if (first.props.shape === second.props.shape) {
        setGuessed(prev => [...prev, first, second])
      }

      const timer = setTimeout(() => setSelected([]), 1000)

      return () => clearTimeout(timer)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === duplicatedShapes.length) {
      alert('You won!')
      setSelected([])
      setGuessed([])
      duplicatedShapes.sort(() => Math.random() - 0.5)
    }
  }, [guessed])

  return <ul className="grid grid-cols-auto-fill gap-2 w-full">{listedShapes}</ul>
}
