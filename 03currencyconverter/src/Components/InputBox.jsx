// React is a single page application


import React from 'react'

function InputBox(
   { label,
    amount,
    onAmountChange,
    amountDisabled = 'false',
    currencyOptions = [],
    selectedCurrency ='usd',
    onCurrencyChange,
    currencyDisabled = 'false',
    className = '',}
) {
  return (
    <div id='main' className='bg-amber-400 flex'>
        <div id='left side'>
        <div>{label}</div>
        <input 
        type="text"  
        placeholder='Amount'
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        />
        </div>

        <div id='right side'>
            <div>Currency Type</div>
            <select
            onChange = {(e)=> onCurrencyChange && onCurrencyChange(e.target.value)  }
            value={selectedCurrency}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} // review each should have unique key in list
                    value={currency}>{currency}</option>
                ))}
            </select>
        </div>
        

    </div>
  )
}

export default InputBox
    
