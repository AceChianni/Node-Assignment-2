const preferredGenre = {
    type: 'checkbox',
    name: 'preferredGenre',
    message: 'Select your favorite anime genres:',
    choices: [
      { name: 'Action', value: 'action' },
      { name: 'Comedy', value: 'comedy' },
      { name: 'Drama', value: 'drama' },
      { name: 'Fantasy', value: 'fantasy' },
      { name: 'Horror', value: 'horror' },
      { name: 'Romance', value: 'romance' },
      { name: 'Sci-Fi', value: 'sci_fi' }
    ]
  };
  
  export { preferredGenre };
  