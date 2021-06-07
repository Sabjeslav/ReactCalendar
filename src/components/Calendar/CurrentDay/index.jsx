import React from 'react';
import style from './CurrentDay.module.sass';
import { format } from 'date-fns';

export default function CurrentDay () {
  const currentDate = new Date();
  const currentDay = format(currentDate, 'dd');
  const dayName = format(currentDate, 'EEEE');
  return (
    <div className={style.dayWrapper}>
      <div className={style.innerWrapper}>
        <div className={style.dayName}>{dayName}</div>
        <div className={style.dayNumber}>{currentDay}</div>
      </div>
    </div>
  );
}
