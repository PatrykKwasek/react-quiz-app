import React from 'react';

function Example({tab}) {
    return (
        <select>
                {console.log('Inside example component')}
                {console.log('START', tab)}
                {/*<option key={`Create first option-${0}`} value={0}>{'Any category'}</option>*/}
                {tab.map((item, index) =>
                    <option key={`Create option-${index}`} value={item.id}>{item.name}</option>
                )}
                {console.log('FINISH FORM')}
        </select>
    )
}

export default Example;