import Memo from './components/Memo'
import Wrapper from './components/Wrapper'

export default function App() {
  return (
    <Wrapper>
      <Memo color="red" shape="square" />
      <Memo color="blue" shape="circle" />
      <Memo color="yellow" shape="triangle" />
    </Wrapper>
  )
}
