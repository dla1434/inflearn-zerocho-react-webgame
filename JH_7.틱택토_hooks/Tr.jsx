import React, { memo, useMemo, useRef, useEffect } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');

  const ref = useRef([]);
  useEffect(() => {
    console.log(
      '[tr rendering check] : ',
      rowIndex == ref.current[0],
      dispatch == ref.current[1],
      rowData == ref.current[2]
    );
    ref.current = [rowIndex, dispatch, rowData];
  }, [rowIndex, dispatch, rowData]);

  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) =>
          useMemo(
            () => (
              <Td
                key={i}
                dispatch={dispatch}
                rowIndex={rowIndex}
                cellIndex={i}
                cellData={rowData[i]}
              >
                {''}
              </Td>
            ),
            [rowData[i]]
          )
        )}
    </tr>
  );
});

export default Tr;
