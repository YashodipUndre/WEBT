// import React, { useState } from 'react';
// import UserContext from './UserContext';
// import { useEffect } from 'react';
// import instance from './Cokkies';
// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState('yash');
//   useEffect(async()=>{
//     //   try {
//     //       const response = await instance.get('/UserProfile');
//     //       console.log(response.data);
//     //       setUser(response.data);
//     //     } catch (error) {
//     //       console.error(error);
//     //     }
//     //setUser({username:'yash'})
//     },[])
//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;