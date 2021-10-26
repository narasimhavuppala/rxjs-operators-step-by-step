import { merge, of, pipe ,interval} from 'rxjs';
import { map,concat } from 'rxjs/operators';


//const series1$ = of('a', 'b');

//const series2$ = of('x', 'y');

const series1$ = interval(1000).pipe(map(val => val*10));

const series2$ = interval(1000).pipe(map(val => val*100));

merge(series2$,series1$).subscribe(console.log)

