import React from 'react';
import { useDiseasStore } from '../context/DiseaseStoreContext';
import { useDisplay } from '../context/DisplayListContext';
import useOnidx from '../hook/useOnidx';
import ListItem from './ListItem';

function List() {
  const display = useDisplay();
  const data = useDiseasStore();
  const { isOnIndex, targetRef } = useOnidx();

  return (
    display?.isFocused && (
      <ul
        ref={targetRef}
        className="max-h-[500px] w-[70%] p-7 bg-blue-600/40 overflow-scroll  rounded-xl"
      >
        {data?.length === 0 ? (
          <li>검색어가 없습니다.</li>
        ) : (
          data?.map((el, idx) => (
            <ListItem key={el.sickCd} data={el.sickNm} isOn={idx === isOnIndex} />
          ))
        )}
      </ul>
    )
  );
}

export default List;
