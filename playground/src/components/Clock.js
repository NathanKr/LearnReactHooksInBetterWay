import React , { useEffect } from 'react';
import moment from 'moment'

const Clock = () => {
    const writeTime =  () => {
        const now = moment();
        document.title = now.format("HH:mm:ss");
      };
    
      useEffect(() => {
        const handle = setInterval(writeTime , 500)

        return () => clearInterval(handle);// --- this called at component unmount

      },[]);

    return (
        <div>
            clock
        </div>
    );
};

export default Clock;