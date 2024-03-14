const availableTimesByDate = {
    '2024-03-14': ['10:00', '11:00', '12:00'],
    '2024-03-15': ['10:00', '11:00', '12:00'],
    '2024-03-16': ['10:00', '11:00', '12:00'],
    '2024-03-17': ['10:00', '11:00', '12:00'],
    '2024-03-18': ['10:00', '11:00', '12:00'],
    '2024-03-19': ['10:00', '11:00', '12:00'],
    '2024-03-20': ['10:00', '11:00', '12:00'],
    '2024-03-21': ['10:00', '11:00', '12:00'],
    '2024-03-22': ['10:00', '11:00', '12:00'],
    '2024-03-23': ['10:00', '11:00', '12:00'],
    '2024-03-24': ['10:00', '11:00', '12:00'],
    '2024-03-25': ['10:00', '11:00', '12:00'],
    '2024-03-26': ['10:00', '11:00', '12:00'],
    '2024-03-27': ['10:00', '11:00', '12:00'],
    '2024-03-28': ['10:00', '11:00', '12:00'],
    '2024-03-29': ['10:00', '11:00', '12:00'],
    '2024-03-30': ['10:00', '11:00', '12:00'],
    '2024-03-31': ['10:00', '11:00', '12:00'],
    '2024-04-01': ['10:00', '11:00', '12:00'],
    '2024-04-02': ['10:00', '11:00', '12:00'],
    '2024-04-03': ['10:00', '11:00', '12:00'],
    '2024-04-04': ['10:00', '11:00', '12:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 10)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}