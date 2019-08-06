import { register } from "./serviceWorker";


const classes = [
  {
    id: 'lkjlkijlkj',
    classCode: 'ff55ts',
    className: 'Mrs. Bridges 7th Period Class',
    requests: ['BJones'],
    registered: ['KilUm', 'JMe'],
    completed: [''],
    createdOn: '07/07/19',
    archiveOn: '11/07/19'
  },
  {
    id: 'bubsubdub',
    classCode: 'fjjnts',
    className: 'Mrs. Bridges 6th Period Class',
    requests: ['BJones'],
    registered: ['JMe'],
    completed: ['KilUm'],
    createdOn: '07/09/19',
    archiveOn: '11/09/19'
  }, 
  {
    id: 'efrf',
    classCode: 'cccnnw',
    className: '',
    requests: [''],
    registered: ['WaynesWorld'],
    completed: [''],
    createdOn: '10/10/19',
    archiveOn: ''
  }, 
  {
    id: 'hhhwww',
    classCode: 'wwtyuf',
    className: '',
    requests: [''],
    registered: ['WaynesWorld'],
    completed: [''],
    createdOn: '10/10/19',
    archiveOn: ''
  }
];


const users = [
  {
    username: 'JessieB',
    accountId: '555ttt',
    firstName: 'Jessica',
    lastName: 'Bridges',
    accountType: 'teacher',
    age: '30',
    grade: '',
    email: 'JessieB@MCSTeacher.com',
    classIds: ['lkjlkijlkj','bubsubdub']
  },
  {
    username: 'BJones',
    accountId: 'ffsdff',
    firstName: 'Billy',
    lastName: 'Jones',
    accountType: 'student',
    age: '16',
    grade: 'Sophomore',
    email: 'BJones@MCSstudent.com',
    classIds: ['']
  },
  {
    username: 'JMe',
    accountId: 'ffsdff',
    firstName: 'Jamie',
    lastName: 'Biggs',
    accountType: 'student',
    age: '17',
    grade: 'Junior',
    email: 'JMe@MCSstudent.com',
    classIds: ['bubsubdub', 'lkjlkijlkj']
  },
  {
    username: 'KilUm',
    accountId: 'ffsdff',
    firstName: 'Killean',
    lastName: 'Malone',
    accountType: 'student',
    age: '15',
    grade: 'Sophomore',
    email: 'KilUm@MCSstudent.com',
    classIds: ['lkjlkijlkj','bubsubdub']
  },
  {
    username: 'WaynesWorld',
    accountId: 'yojoijy',
    firstName: 'Louis',
    lastName: 'Wayne',
    accountType: 'other',
    age: '28',
    grade: '',
    email: 'www@icloud.com',
    classIds: ['efrf','hhhwww']
  }
];



export {users, classes};
