const sc = f => f < 2 
? ''
: [...Array(f)].map(v => 'Aa~').join('Aa~ ') + 'Pa!' + (f > 6 ? '' : ' Aa!');