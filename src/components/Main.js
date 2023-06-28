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
        <div className="d-flex justify-content-center col-12 col-lg-6">
          <main>
            <div className="main-window"><Display page={page} moveOver={moveOver} setMoveOver={setMoveOver}/></div>
          </main>
        </div>
      </div>
    </div>
  )
}