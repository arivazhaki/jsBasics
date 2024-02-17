const distances = [
	{
		start: 'Chennai',
		end: 'Viluppuram',
		distance: 166,
	},
	{
		start: 'Viluppuram',
		end: 'Trichy',
		distance: 165,
	},
	{
		start: 'Trichy',
		end: 'Madurai',
		distance: 138,
	},
	{
		start: 'Madurai',
		end: 'Tirunelveli',
		distance: 171,
	},
	{
		start: 'Tirunelveli',
		end: 'Kanyakumari',
		distance: 85,
	},
	{
		start: 'Trichy',
		end: 'Karur',
		distance: 83,
	},
];
const routes = [
	{
		start: 'Chennai',
		end: 'Trichy',
		stops: ['Chennai', 'Viluppuram', 'Trichy']
    },
    {
		start: 'Chennai',
		end: 'Karur',
		stops: ['Chennai', 'Viluppuram', 'Trichy', 'Karur']
     },   
     {
		start: 'Trichy',
		end: 'Tirunelveli',
		stops: ['Trichy', 'Madurai', 'Tirunelveli']
     }
];

const getTotalDistance=(distance)=>(distance.reduce((a,b)=>a+b,0));
	

const findDistances=(stops)=>(stops.map((stop,index,arr)=>
        (distances.find((element)=>
        element.start===stop && element.end===(arr[index+1] || 0))||0).distance || 0));

const getDistances=(route)=>{
	const distance=findDistances(route.stops);

    return{
    start:route.start,
    stop:route.end,
    distances:distance,
    totalDistances:getTotalDistance(distance),
	};
};

const main=()=>
    {
        console.log(routes.map(getDistances));
	}
main();