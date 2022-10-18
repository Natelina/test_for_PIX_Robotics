import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { allSmart } from '../redux/actions/smartphonesAction'
import Categories from './Categories'

interface itemsProps {
  items: any[]
}
const Dropdown: React.FC<itemsProps> = ({ items }) => {
  const dispatch: Dispatch<any> = useDispatch()
  const { products } = useSelector((state: any) => state.smartfon)

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activItem, setActivItem] = useState('');
  const [activeIndex, setActivIndex] = useState(0);
  const [device, setDevice] = useState([]);
  const [show, setShow] = useState(false);
  const activLable = items[activeIndex];

  const sortRef = useRef(null)
  const itemRef = useRef('')

  const hendlerOutsideClick = (e: any) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', hendlerOutsideClick)
  }, [])
  useEffect(() => {
    dispatch(allSmart())
  }, [])
  const newSmart = (value: string, index: number) => {
    setActivItem(value)
    itemRef.current = value
    setActivIndex(index)
    setDevice([])
    setShow(true)
    products?.map((el: any) => el.category === itemRef.current
      ? setDevice((prev): any => [...prev, el])
      : '')
    setVisiblePopup(!visiblePopup)
  }

  const toggelVisibllePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  return (
    <>
    {!products
      ? <div className='spinner'></div>
      : <>
    <div className='sort'>
    <div ref={sortRef} className='sort'>

    <div onClick={toggelVisibllePopup} className="sort__label">
    <button className='clickButton'><b>CLICK HERE TO SELECT</b></button>

    </div>
    {visiblePopup && (
    <div className='sort__popup'>
    <ul>
      {items && items.map((el, i) =>
      <li key={`${el}_${i}`}>
          <div onClick={() => newSmart(el, i)}>
        {el}
          </div>
          </li>
      )}
    </ul>
    </div>
    )}
    </div>
    {show &&
    <div className='categories'>

    <Categories activItem={activItem} device={device}/>
    </div>
    }
    </div>
    </>
}
    </>
  )
};

export default Dropdown;
