import React, { memo, useMemo } from 'react';
import Tr from './Tr';

const Table = memo(({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => {
          return useMemo(
            () => (
              <Tr
                key={i}
                dispatch={dispatch}
                rowIndex={i}
                rowData={tableData[i]}
              />
            ),
            [tableData[i]]
          ); //["", "", ""] 이게 rowData이다.
        })}
    </table>
  );
});

export default Table;
