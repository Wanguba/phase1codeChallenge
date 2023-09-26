function calculateSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
      return 'Ok';
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
      
      if (demeritPoints >= 12) {
        return 'License suspended';
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  console.log (calculateSpeed(70))