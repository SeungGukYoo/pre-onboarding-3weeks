import { memo } from 'react';

function ListItem({ data, isOn }: { data: string; isOn: boolean }) {
  return (
    <li
      className={`text-center my-2 text-lg hover:bg-blue-800 hover:text-white cursor-pointer py-2 rounded-lg ${
        isOn && 'bg-blue-800'
      }`}
    >
      <h1>{data}</h1>
    </li>
  );
}

export default memo(ListItem);
