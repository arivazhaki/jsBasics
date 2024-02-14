const students=[
    {
rollno:1,
name :'A',
tamil: 99,
english: 92,
maths:91,
science: 95,
social:93,
},
{
rollno:2,
name:'BarProp',
tamil:92,
english:21,
maths:73,
science:71,
social:54,
},
{
rollno:3,
name:'C',
tamil:100,
english:52,
maths:34,
science:38,
social:71,
},
{
rollno:4,
name:'D',
tamil:66,
english:76,
maths:77,
science:83,
social:95
},
{
rollno:5,
name:'E',
tamil:39,
english:80,
maths:85,
science:47,
social:44
},

{
rollno:6,
name:'F',
tamil:70,
english:93,
maths:57,
science:50,
social:90,
},
{
rollno:7,
name:'G',
tamil:56,
english:34,
maths:39,
science:99,
social:90,
},
{
rollno:8,
name:'H',
tamil:71,
english:97,
maths:87,
science:80,
social:69
},
{
rollno:9,
name:'J',
tamil:25,
english:22,
maths:86,
science:27,
social:39
},
{
rollno:10,
name:'J',
tamil:52,
english:43,
maths:63,
science:89,
social:38,
},
{
rollno:11,
name:'K',
tamil:52,
english:58,
maths:100,
science:75,
social:68
},
{
rollno:12,
name:'L',
tamil:51,
english:71,
maths:33,
science:26,
social:64
},
{
rollno:13,
name:'M',
tamil:42,
english:25,
maths:55,
science:71,
social:94
}
];

const getTotal=(marks)=>
marks.tamil+marks.english+marks.maths+marks.maths+marks.science+marks.social;

const getResult=(elememt)=>    
            (Math.min(elememt.english,elememt.maths,elememt.tamil,elememt.science,elememt.social)<30)?
            'Fail': 'Pass';

const getRankDetails=(studentData)=>{
                let rank=0;
                const sortedarray=studentData.sort((a,b)=>(b.totalMarks-a.totalMarks));
                    const rankData=sortedarray.map((student)=>
                     ({...student,
                           rank :student.result==="Pass" ? rank += 1 :"-"}))
                      return rankData;
                };
              
const getTotalMarks=(students)=>{
    const totalMarks=getTotal(students);
    const studentresultDetails=getResult(students);
  
    return{
        ...students,
        totalMarks:totalMarks,
        result:studentresultDetails,
        }
};


const main=()=>
{
const marksheets=students.map(getTotalMarks);
console.table(marksheets);
const rankList=getRankDetails(marksheets);
console.table(rankList);
}
main();


