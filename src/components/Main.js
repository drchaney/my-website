import { useState } from 'react';
import { Menu, Display } from './'
export default function Main({ page, setPage } ) {
  const [moveOver, setMoveOver] = useState(false);

  const handleClick = () => {
    setMoveOver(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className={`menu-section ${moveOver ? 'col-3' : 'col-12 col-lg-6'}`} onClick={handleClick}>
          <aside>
            <Menu setPage={setPage} />
          </aside>
        </div>
        <div className="col-12 col-lg-6">
          <main>
            <Display page={page} moveOver={moveOver} setMoveOver={setMoveOver}/>
          </main>
        </div>
      </div>
    </div>
  )
}